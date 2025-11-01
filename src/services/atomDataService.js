import axios from 'axios';
import { store } from '../store';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_ATOM_API_URL || 'http://localhost:63001/api', // Use the Vite proxy
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Mocked login
  login(credentials) {
    //generate a basic auth token
    const token = btoa(credentials.username + ':' + credentials.password);

    return apiClient
      .get('/user', {
        headers: {
          Authorization: 'Basic ' + token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        store.isAuthenticated = true;
        store.basicAuthToken = token;
        store.user = res.data;
        localStorage.setItem(
          'auth',
          JSON.stringify({
            isAuthenticated: true,
            basicAuthToken: token,
            user: res.data,
          })
        );
        return Promise.resolve({ data: { basicAuthToken: token } });
      })
      .catch((err) => {
        return Promise.reject('Invalid credentials');
      });
  },

  logout() {
    store.isAuthenticated = false;
    store.basicAuthToken = null;
    store.user = {};
    localStorage.removeItem('auth');
  },

  initAuth() {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      store.isAuthenticated = parsedAuthData.isAuthenticated;
      store.basicAuthToken = parsedAuthData.basicAuthToken;
      store.user = parsedAuthData.user;
    }
  },

  setApiKey(apiKey) {
    apiClient.defaults.headers.common['REST-API-Key'] = apiKey;
  },

  getAlbums() {
    // Fetches top-level information objects, which we consider "albums"
    return apiClient.get('/informationobjects', {
      headers: {
        'Authorization': 'Basic ' + store.basicAuthToken,
        'Content-Type': 'application/json',
      },
    });
  },

  getInformationObjectTree(slug) {
    // Fetches the children of a specific information object (album)
    return apiClient.get(`/informationobjects/tree/${slug}`, {
      headers: {
        Authorization: 'Basic ' + store.basicAuthToken,
        'Content-Type': 'application/json',
      },
    });
  },

  getMediaDetails(mediaId) {
    // Fetches the full details of a specific information object (media)
    return apiClient.get(`/informationobjects/${mediaId}`, {
      headers: {
        Authorization: 'Basic ' + store.basicAuthToken,
        'Content-Type': 'application/json',
      },
    });
  },

  getInformationObjectBySlug(slug) {
    return apiClient.get(`/informationobjects/${slug}`, {
      headers: {
        Authorization: 'Basic ' + store.basicAuthToken,
        'Content-Type': 'application/json',
      },
    });
  },

  getUserData() {
    return apiClient.get('/user', {
      headers: {
        Authorization: 'Basic ' + store.basicAuthToken,
        'Content-Type': 'application/json',
      },
    });
  },

  updateMediaDescription(slug, formData) {
    
    //clear undefined fields from formData using object filter
    const payload = Object.fromEntries(
      Object.entries(formData).filter(([_, v]) => v !== undefined)
    );

    return apiClient.put(`/informationobjects/${slug}`, payload, {
      headers: {
        Authorization: 'Basic ' + store.basicAuthToken,
        'Content-Type': 'application/json',
      },
    });
  },
};
