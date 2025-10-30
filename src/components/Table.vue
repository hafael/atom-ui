<template>
  <table class="min-w-full bg-white">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.value"
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"
        >
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td
          v-for="header in headers"
          :key="header.value"
          class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
        >
          <slot :name="header.value" :item="item">
            {{ item[header.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>