import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Browse from '../views/Browse.vue';
import Describe from '../views/Describe.vue';
import UserView from '../views/UserView.vue'; // Import UserView
import { store } from '../store';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/browse/:pathMatch(.*)*',
    name: 'Browse',
    component: Browse,
  },
  {
    path: '/describe/:pathMatch(.*)*',
    name: 'Describe',
    component: Describe,
  },
  {
    path: '/profile', // New route for UserView
    name: 'Profile',
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.isAuthenticated;

  if (to.name === 'Login' && isAuthenticated) {
    // If user is authenticated and tries to go to Login, redirect to Dashboard
    next({ name: 'Dashboard' });
  } else if (to.name !== 'Login' && !isAuthenticated) {
    // If user is not authenticated and tries to go to a protected route, redirect to Login
    next({ name: 'Login' });
  } else {
    // Otherwise, allow navigation
    next();
  }
});

export default router;