<template>
  <button
    class="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
};
</script>