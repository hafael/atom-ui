<template>
  <div>
    <Header :level="currentItem.level">Descrevendo {{ currentItem.title || currentItem.identifier }}</Header>
    <div class="p-6">
      <Breadcrumb :items="breadcrumb" />

      <div v-if="isItem && currentItem.digital_object" class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <DigitalObjectViewer
          :title="currentItem.title"
          :identifier="currentItem.identifier"
          :reference-code="currentItem.reference_code"
          :level-of-description="currentItem.level_of_description"
          :digital-object="currentItem.digital_object"
          :publication-status="currentItem.publication_status"
          :slug="currentItem.slug"
          :parent="currentItem.parent"
          :parent-title="currentItem.parent_title"
          class="w-full" />

        <div>
            <DescriptionForm 
                :form-data="formData" />

            <div class="mt-6 flex gap-2">
                <!-- Botão Cancelar -->
                <SecondaryButton @click="$router.push(parentPath)">Cancelar</SecondaryButton>
                <!-- Botão Salvar -->
                <Button @click="handleSaveDescription">Salvar</Button>
            </div>
        </div>

        

      </div>
      <div v-else-if="isItem">
        <p>Este item não possui um objeto digital associado.</p>
      </div>
      <div v-else>
        <p>Nenhum item encontrado.</p>
      </div>

      
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AlbumCard from '@/components/AlbumCard.vue';
import Button from '@/components/Button.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import DescriptionForm from '@/components/DescriptionForm.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import DigitalObjectViewer from '@/components/DigitalObjectViewer.vue';
import atomDataService from '@/services/atomDataService';

export default {
  name: 'Browse',
  components: {
    Header,
    AlbumCard,
    Button,
    SecondaryButton,
    DescriptionForm,
    Breadcrumb,
    DigitalObjectViewer,
  },
  data() {
    return {
      currentItem: {},
      children: [],
      breadcrumb: [],
      formData: {
        title: '',
        identifier: '',
        format: '',
        dateType: 1,
        dateValue: '',
        dateValueStart: '',
        dateValueEnd: '',
        source: '',
        description: '',
        rights: '',
        notes: [ { content: '' } ],
        status: false
      },
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
    },
    submitFormData() {
      return {
        title: this.formData.title,
        identifier: this.formData.identifier,
        format: this.formData.format,
        dates: [{
          type: this.formData.dateType,
          date: this.formData.dateType === 1 ? this.formData.dateValue : null,
          start_date: this.formData.dateType === 2 ? this.formData.dateValueStart : null,
          end_date: this.formData.dateType === 2 ? this.formData.dateValueEnd : null,
        }],
        source: this.formData.source,
        description: this.formData.description,
        rights: this.formData.rights,
        notes: [{ content: this.formData.notes[0].content }],
        published: this.formData.status ? true : false
      }
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
    async handleSaveDescription() {
      // Lógica para salvar a descrição atualizada
      console.log('Descrição salva:', this.submitFormData);
      // Aqui você pode fazer uma chamada à API para salvar os dados

      try {
        const response = await atomDataService.updateMediaDescription(this.currentItem.slug, this.submitFormData);
            console.log('Descrição atualizada com sucesso:', response.data);
        } catch (error) {
            console.error('Failed to fetch albums:', error);
        }
    },
  },
  watch: {
    '$route.params.pathMatch': {
      handler: 'processRoute',
      deep: true,
    },
    currentItem: {
      handler(newData) {
        this.formData = { ...this.formData, ...{
            title: newData.title || '',
            identifier: newData.identifier || '',
            format: newData.extent_and_medium || '',
            source: newData.existence_and_location_of_originals || '',
            description: newData.scope_and_content || '',
            rights: newData.conditions_governing_access || '',
            notes: (newData.notes && newData.notes.length) ? [{content: newData.notes[0]}] :[{content: ''}],
            status: newData.publication_status === 'Published' ? true : false,
            dateType: (newData.dates && newData.dates.length > 0 && newData.dates[0].type === 'Creation') ? 1 : 2,
            dateValue: (newData.dates && newData.dates.length > 0) ? (newData.dates[0].date || '') : '',
            dateValueStart: (newData.dates && newData.dates.length > 0) ? (newData.dates[0].start_date || '') : '',
            dateValueEnd: (newData.dates && newData.dates.length > 0) ? (newData.dates[0].end_date || '') : '',
        } };
      },
      immediate: true,
      deep: true
    }
  },
};
</script>
