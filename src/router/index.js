import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contactanos from '@/views/Contactanos.vue';
import Nosotros from '@/views/Nosotros.vue';
import Servicios from '@/views/Servicios.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Contactanos',
    name: 'Contactanos',
    component: Contactanos,
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: Nosotros,
  },
  {
    path: '/Servicios',
    name: 'Servicios',
    component: Servicios,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;