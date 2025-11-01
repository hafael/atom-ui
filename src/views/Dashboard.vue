<template>
  <div>
    <Header>Dashboard</Header>
    <div class="p-6">
      <h2 class="text-2xl font-bold">Seus Álbuns</h2>
      <div v-if="albums.length > 0" class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AlbumCard
          v-for="album in albums"
          :key="album.slug"
          :title="album.title"
          :level-of-description="album.level_of_description"
          :identifier="album.identifier"
          :thumbnail-urls="album.level_of_description === 'Item' && album.thumbnail_url ? [album.thumbnail_url] : []"
          @click="viewAlbum(album)"
        />
      </div>
      <div v-else>
        <p>Nenhum álbum encontrado.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AlbumCard from '@/components/AlbumCard.vue';
import atomDataService from '@/services/atomDataService';

export default {
  name: 'Dashboard',
  components: {
    Header,
    AlbumCard,
  },
  data() {
    return {
      albums: [],
    };
  },
  async created() {
    try {
      const response = await atomDataService.getAlbums();
      this.albums = response.data.results;
    } catch (error) {
      console.error('Failed to fetch albums:', error);
    }
  },
  methods: {
    viewAlbum(album) {
      this.$router.push({
        name: 'Browse',
        params: { pathMatch: [album.slug] }
      });
    },
  },
};
</script>