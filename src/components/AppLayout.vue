<template>
  <div class="min-h-screen bg-gray-100">
    <Header>
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold">Atom UI</h1>
        <div>
          <span class="mr-4">Olá, Usuário</span>
          <Button variant="secondary" @click="$emit('logout')">Sair</Button>
        </div>
      </div>
    </Header>
    <main class="p-8">
      <slot></slot>
    </main>
    <footer class="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2025 Atom UI</p>
    </footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Button from './Button.vue'

export default {
  name: 'AppLayout',
  components: {
    Header,
    Button
  }
}
</script>
