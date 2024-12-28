import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue'; // Path to your Register component
import AppHome from '@/components/AppHome.vue'; // Home page component
import Login from '@/components/Login.vue'; // Login page component
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'; // Privacy Policy page component
import Serviceshome from '@/components/Serviceshome.vue'; // Services page component
import About from '@/components/About.vue'; // About page component
import Contact from '@/components/Contact.vue'; // Contact page component
import Dashboard from '@/components/Dashboard.vue'; // Dashboard page component

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome, // Home page
  },
  {
    path: '/register',
    name: 'register',
    component: Register, // Registration page
  },
  {
    path: '/login',
    name: 'login',
    component: Login, // Login page
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: PrivacyPolicy, // Privacy Policy page
  },
  {
    path: '/services',
    name: 'services',
    component: Serviceshome, // Services page
  },
  {
    path: '/about',
    name: 'about',
    component: About, // About page
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact, // Contact page
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard, // Dashboard page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Defined routes
});

export default router;
