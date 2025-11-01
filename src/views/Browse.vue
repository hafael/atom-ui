<template>
  <div>
    <Header :level="currentItem.level">{{ currentItem.title || currentItem.identifier }}</Header>
    <div class="p-6">
      <Breadcrumb :items="breadcrumb" />
      <div v-if="children.length > 0" class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AlbumCard
          v-for="child in children"
          :key="child.slug"
          :title="child.title || child.identifier"
          :level-of-description="child.level"
          :children-count="child.children ? child.children.length : 0"
          :identifier="child.identifier"
          :thumbnail-urls="getThumbnailUrls(child)"
          @click="viewChild(child)"
        />
      </div>
      <div v-else-if="isItem && currentItem.digital_object" class="mt-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DigitalObjectViewer
            :title="currentItem.title"
            :identifier="currentItem.identifier"
            :level-of-description="currentItem.level_of_description"
            :digital-object="currentItem.digital_object"
            :publication-status="currentItem.publication_status"
            :reference-code="currentItem.reference_code"
            :slug="currentItem.slug"
            />
        
          <DescriptionList
            :parent-title="currentItem.parent_title"
            :reference-code="currentItem.reference_code"
            :publication-status="currentItem.publication_status"
            :level-of-description="currentItem.level_of_description"
            :extent-and-medium="currentItem.extent_and_medium"
            :dates="currentItem.dates"
            :repository="currentItem.repository"
            :scope-and-content="currentItem.scope_and_content"
            :conditions-governing-access="currentItem.conditions_governing_access"
            :existence-and-location-of-originals="currentItem.existence_and_location_of_originals"
            :notes="currentItem.notes"
          />

        </div>

        <div class="mt-6 flex gap-4 flex-col md:flex-row">
          <Button type="button" @click="describeObject(currentItem.slug)" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 4.5V6m0 0L10.5 7.5M15 6l-3-3" />
            </svg>
            Descrever
          </Button>
          <SecondaryButton :href="currentItem.digital_object.url" :download="currentItem.digital_object.filename">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Baixar
          </SecondaryButton>
        </div>

      </div>
      <div v-else-if="isItem">
        <p>Este item não possui um objeto digital associado.</p>
      </div>
      <div v-else>
        <p>Nenhum item encontrado.</p>
      </div>

      <div class="mt-6">
        <a v-if="parentPath" @click="$router.push(parentPath)" class="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
          &larr; Voltar ao nível anterior
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AlbumCard from '@/components/AlbumCard.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import DescriptionList from '@/components/DescriptionList.vue';
import DigitalObjectViewer from '@/components/DigitalObjectViewer.vue';
import atomDataService from '@/services/atomDataService';
import Button from '@/components/Button.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';

export default {
  name: 'Browse',
  components: {
    Header,
    AlbumCard,
    Breadcrumb,
    Button,
    SecondaryButton,
    DigitalObjectViewer,
    DescriptionList,
  },
  data() {
    return {
      currentItem: {},
      children: [],
      breadcrumb: [],
    };
  },
  computed: {
    isItem() {
      return this.currentItem.level_of_description === 'Item';
    },
    parentPath() {
      const pathMatch = this.$route.params.pathMatch;
      if (pathMatch && pathMatch.length > 1) {
        const parentPathMatch = pathMatch.slice(0, -1);
        return '/browse/' + parentPathMatch.join('/');
      }
      return null;
    }
  },
  async created() {
    await this.processRoute();
  },
  methods: {
    async processRoute() {
      const pathMatch = this.$route.params.pathMatch;
      const currentSlug = pathMatch[pathMatch.length - 1];

      try {
        const [itemResponse, treeResponse] = await Promise.all([
          atomDataService.getInformationObjectBySlug(currentSlug),
          atomDataService.getInformationObjectTree(currentSlug)
        ]);
        this.currentItem = itemResponse.data;
        this.children = treeResponse.data.children || [];
      } catch (error) {
        console.error(`Failed to fetch data for ${currentSlug}:`, error);
        this.currentItem = {};
        this.children = [];
      }

      // Build breadcrumb
      this.breadcrumb = [];
      let currentPath = '/browse';
      for (const slug of pathMatch) {
        currentPath += `/${slug}`;
        try {
          const item = await atomDataService.getInformationObjectBySlug(slug);
          this.breadcrumb.push({
            text: item.data.title || item.data.identifier,
            to: currentPath,
          });
        } catch (error) {
          console.error(`Failed to fetch breadcrumb item for ${slug}:`, error);
          // Fallback if item data cannot be fetched
          this.breadcrumb.push({
            text: slug,
            to: currentPath,
          });
        }
      }
    },
    viewChild(child) {
      const currentPathMatch = this.$route.params.pathMatch;
      const newPathMatch = [...currentPathMatch, child.slug];
      this.$router.push({ 
        name: 'Browse', 
        params: { pathMatch: newPathMatch }
      });
    },
    getThumbnailUrls(item) {
      const urls = [];
      if (item.digital_object && item.digital_object.thumbnail_url) {
        urls.push(item.digital_object.thumbnail_url);
      }
      if (item.children) {
        for (const child of item.children) {
          if (urls.length >= 3) break;
          if (child.digital_object && child.digital_object.thumbnail_url) {
            urls.push(child.digital_object.thumbnail_url);
          }
        }
      }
      return urls;
    },
    describeObject(slug) {
      this.$router.push({ name: 'Describe', params: { pathMatch: [slug] } });
    },
  },
  watch: {
    '$route.params.pathMatch': {
      handler: 'processRoute',
      deep: true,
    },
  },
};
</script>
