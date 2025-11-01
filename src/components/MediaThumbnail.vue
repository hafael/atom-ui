<template>
  <div class="relative cursor-pointer" @click="$emit('click')">
    <img class="object-cover w-full h-48 rounded-lg" :src="media.thumbnailUrl || 'https://via.placeholder.com/300x200'" :alt="media.title || media.identifier" />
    <div class="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm">
      {{ media.title || media.identifier }}
    </div>
    <div v-if="isDescribed" class="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
      required: true
    },
    isDescribed: {
      type: Boolean,
      default: false
    }
  }
}
</script>
