import axios from 'axios';

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