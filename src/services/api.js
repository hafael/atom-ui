import axios from 'axios';
import { store } from '../store';

const apiClient = axios.create({
  baseURL: 'http://localhost:63001/api', // From 03-integracao-api-atom.md
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Mocked login
  login(credentials) {
    if (credentials.username === 'demo@example.com' && credentials.password === 'demo') {
      store.isAuthenticated = true;
      return Promise.resolve({ data: { apiKey: 'mock-api-key' } });
    }
    return Promise.reject('Invalid credentials');
  },

  setApiKey(apiKey) {
    apiClient.defaults.headers.common['X-API-KEY'] = apiKey;
  },

  getInformationObjects() {
    return apiClient.get('/informationobjects');
  },
};