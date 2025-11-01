<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="flex items-center flex-wrap">
      <li class="flex items-center">
        <router-link to="/" class="text-gray-700 hover:text-gray-900">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        </router-link>
      </li>
      
      <li v-if="!isExpanded && items.length > 2" class="flex items-center">
        <svg class="w-6 h-6 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <a @click="isExpanded = true" class="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">...</a>
      </li>

      <li v-for="(item, index) in visibleItems" :key="index" class="flex items-center">
        <svg class="w-6 h-6 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <router-link :to="item.to" class="text-sm font-medium text-gray-700 hover:text-gray-900">{{ truncate(item.text) }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    visibleItems() {
      if (this.isExpanded) {
        return this.items;
      }
      return this.items.slice(-2);
    }
  },
  methods: {
    truncate(text) {
      if (text.length > 10) {
        return text.substring(0, 10) + '...';
      }
      return text;
    }
  },
  watch: {
    items() {
      this.isExpanded = false;
    }
  }
};
</script>
