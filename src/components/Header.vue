<template>
  <header class="p-4 text-white bg-gray-800">
    <h1 class="text-xl">
      <slot />
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>