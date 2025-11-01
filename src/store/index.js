import { reactive } from 'vue';

export const store = reactive({
  isAuthenticated: false,
  basicAuthToken: null,
  user: {},
});