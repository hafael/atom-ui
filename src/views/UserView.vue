<template>
  <div>
    <Header>Perfil do Usuário</Header>
    <div class="p-6">
      <div class="mb-4">
        <router-link to="/dashboard" class="text-sm font-medium text-blue-600 hover:underline">
          &larr; Voltar ao Dashboard
        </router-link>
      </div>
      <h2 class="text-2xl font-bold mb-4">Meus Dados</h2>
      <div v-if="user" class="space-y-2">
        <p><strong>Nome de Usuário:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Administrador:</strong> {{ user.is_admin ? 'Sim' : 'Não' }}</p>
        <!-- Add other user data as available in store.user -->
      </div>
      <div v-else>
        <p>Carregando dados do usuário...</p>
      </div>
      <div class="mt-6">
        <Button @click="logout" variant="danger">Sair</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import { store } from '@/store'; // Keep store import for logout
import atomDataService from '@/services/atomDataService';

export default {
  name: 'UserView',
  components: {
    Header,
    Button,
  },
  data() {
    return {
      user: null, // Initialize user as null
    };
  },
  async created() {
    try {
      const response = await atomDataService.getUserData();
      this.user = response.data.user;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      // Optionally, display an error message to the user
      this.user = { username: 'Erro', email: 'Erro ao carregar' }; // Fallback for error display
    }
  },
  methods: {
    logout() {
      atomDataService.logout();
      this.$router.push('/');
    },
  },
};
</script>
