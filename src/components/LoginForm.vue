<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-4">
      <Input
        label="Usuário"
        v-model="username"
        placeholder="seu.usuario"
        :error="error"
      />
      <Input
        label="Senha"
        v-model="password"
        type="password"
        placeholder="********"
        :error="error"
      />
    </div>
    <div v-if="error" class="mt-4 text-sm text-red-600">
      {{ error }}
    </div>
    <div class="mt-6">
      <Button type="submit" variant="primary" class="w-full">Entrar</Button>
    </div>
  </form>
</template>

<script>
import Input from './Input.vue'
import Button from './Button.vue'

export default {
  components: {
    Input,
    Button
  },
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    handleSubmit() {
      this.error = ''
      if (!this.username || !this.password) {
        this.error = 'Usuário e senha são obrigatórios.'
        return
      }
      this.$emit('login', { username: this.username, password: this.password })
    }
  }
}
</script>
