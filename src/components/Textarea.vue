<template>
  <textarea :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm transition-colors ease-in-out duration-200"></textarea>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
};
</script>