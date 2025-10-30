<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <Header>Login</Header>
      <form @submit.prevent="handleLogin">
        <div class="space-y-4">
          <Input v-model="username" placeholder="Username" />
          <Input v-model="password" type="password" placeholder="Password" />
        </div>
        <div class="mt-6">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import api from '@/services/api';

export default {
  name: 'Login',
  components: {
    Header,
    Input,
    Button,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await api.login({
          username: this.username,
          password: this.password,
        });
        const { apiKey } = response.data;
        api.setApiKey(apiKey);
        // Redirect to dashboard or other protected route
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
        // Show error message to the user
      }
    },
  },
};
</script>