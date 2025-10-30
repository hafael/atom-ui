import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:63001/api', // From 03-integracao-api-atom.md
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Example function
  getInformationObjects() {
    return apiClient.get('/informationobjects');
  },
};