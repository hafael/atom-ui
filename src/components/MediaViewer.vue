<template>
  <div>
    <div v-if="media.type === 'image'">
      <img :src="media.url" :alt="media.title" class="w-full rounded-lg" />
    </div>
    <div v-else-if="media.type === 'video'">
      <video :src="media.url" controls class="w-full rounded-lg"></video>
    </div>
    <div v-else class="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
      <p class="text-gray-500">Formato de mídia não suportado.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
      required: true
    }
  }
}
</script>
