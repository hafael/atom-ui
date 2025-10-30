<template>
  <div class="overflow-hidden bg-white rounded-lg shadow-lg">
    <img class="object-cover w-full h-48" :src="image" :alt="title" />
    <div class="p-6">
      <h2 class="mb-2 text-xl font-bold">{{ title }}</h2>
      <p class="text-base text-gray-700">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
};
</script>