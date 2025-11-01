<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <MediaThumbnail
      v-for="item in mediaItems"
      :key="item.slug"
      :media="item"
      :is-described="item.isDescribed"
      @click="$emit('item-click', item)"
    />
  </div>
</template>

<script>
import MediaThumbnail from './MediaThumbnail.vue'

export default {
  components: {
    MediaThumbnail
  },
  props: {
    mediaItems: {
      type: Array,
      required: true
    }
  }
}
</script>
