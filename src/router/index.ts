import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Gallery from '@/views/Gallery.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/gallery', component: Gallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
