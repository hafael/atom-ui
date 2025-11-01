<template>
  <label
    class="w-full text-base font-medium text-gray-700 dark:text-gray-300 mb-1 block"
    :for="for"><slot>{{ value }}</slot></label>
</template>

<script>
export default {
  name: 'Label',
  props: {
    value: {
      type: String,
      default: '',
    },
    for: {
      type: String,
      default: '',
    },
  },
};
</script>