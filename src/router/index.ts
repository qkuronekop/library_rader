import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomeScreen.vue'),
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../components/MapScreen.vue'),
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../components/FavoriteScreen.vue'),
  },
  {
    path: '/my_page',
    name: 'MyPage',
    component: () => import('../components/MyPageScreen.vue'),
  }
];  

const router = createRouter({
  // Viteの環境変数でimport.meta.env.BASE_URL = vite.config.tsのbase
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;