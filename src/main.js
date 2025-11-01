import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import atomDataService from './services/atomDataService';

atomDataService.initAuth();

createApp(App).use(router).mount('#app');