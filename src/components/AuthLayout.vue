<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
