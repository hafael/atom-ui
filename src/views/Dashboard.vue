<template>
  <div>
    <Header>Dashboard</Header>
    <div class="p-6">
      <h2 class="text-2xl font-bold">Welcome to your Dashboard!</h2>
      <p class="mt-4">
        This is where you will see your albums and memories.
      </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
  },
};
</script>