<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="$emit('close')"
  >
    <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
      <div class="flex items-center justify-between pb-3 border-b">
        <h3 class="text-2xl font-semibold">
          <slot name="header">Modal Title</slot>
        </h3>
        <button class="text-black" @click="$emit('close')">&times;</button>
      </div>
      <div class="py-4">
        <slot />
      </div>
      <div class="flex justify-end pt-3 border-t">
        <slot name="footer">
          <button
            class="px-4 py-2 text-white bg-blue-500 rounded"
            @click="$emit('close')"
          >
            Close
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>