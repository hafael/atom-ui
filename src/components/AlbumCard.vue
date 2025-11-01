<template>
  <div class="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer" @click="$emit('click')">
    <div v-if="levelOfDescription === 'Item' && thumbnailUrls && thumbnailUrls.length > 0">
      <img :src="thumbnailUrls[0]" :alt="title" class="object-cover w-full h-32 rounded-t-lg">
    </div>
    
    <div v-else-if="thumbnailUrls && thumbnailUrls.length > 0" class="grid grid-cols-3 gap-1">
      <div v-for="(url, index) in thumbnailUrls.slice(0, 3)" :key="index" class="aspect-w-1 aspect-h-1">
        <img :src="url" :alt="title" class="object-cover w-full h-full rounded-md">
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
      <p v-if="identifier" class="text-sm text-gray-500">{{ identifier }}</p>
      <div class="flex items-center text-sm text-gray-600">
        <span v-html="levelIcon" class="mr-1 w-4 h-4"></span>
        <span>{{ levelOfDescription }}</span>
      </div>
      <p v-if="childrenCount > 0" class="text-xs text-gray-500 mt-2">{{ childrenCount }} sub-itens</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
      default: ''
    },
    levelOfDescription: {
      type: String,
      default: ''
    },
    childrenCount: {
      type: Number,
      default: 0
    },
    thumbnailUrls: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    levelIcon() {
      switch (this.levelOfDescription) {
        case 'Fonds':
        case 'Record group':
        case 'Collection':
          return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.75a2.25 2.25 0 0 0-2.25-2.25h-15Z" /></svg>';
        case 'Subfonds':
          return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.75v4.5m0-4.5h16.5m-16.5 0a2.25 2.25 0 0 0-2.25 2.25v2.25m2.25-4.5v4.5m16.5-4.5a2.25 2.25 0 0 1 2.25 2.25v2.25m-2.25-4.5h-16.5m0 0H3.75M9 12h6m-6 0a2.25 2.25 0 0 0-2.25 2.25v2.25m2.25-4.5v4.5m6-4.5a2.25 2.25 0 0 1 2.25 2.25v2.25m-2.25-4.5h-6m0 0h-6" /></svg>';
        case 'Series':
        case 'Subseries':
          return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm0 5.25h.007v.008H3.75V12Zm0 5.25h.007v.008H3.75V17.25Z" /></svg>';
        case 'File':
          return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25m-9-9L3.75 9M15 9h3.75a1.125 1.125 0 0 1 1.125 1.125v3.75m-9-9h3.375c.621 0 1.125.504 1.125 1.125v3.375c0 .621-.504 1.125-1.125 1.125H15" /></svg>';
        case 'Item':
          return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm12.75-11.25h.008v.008h-.008V8.25Z" /></svg>';
        case 'Part':
          return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" /></svg>';
        default:
          return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" /></svg>'; // Default icon (ellipsis) 
      }
    }
  }
}
</script>
