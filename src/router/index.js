import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue'; // Path to your Register component
import AppHome from '@/components/AppHome.vue'; // Assuming you have a Home page
import Login from '@/components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/Login',
    name: 'login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
