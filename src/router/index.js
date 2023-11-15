import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutUs from '../views/AboutUs.vue';
import AuthUser from '../views/AuthUser.vue';
import ProfilUser from '../views/ProfilUser.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/authuser',
    name: 'authuser',
    component: AuthUser
  },
  {
    path: '/profileuser',
    name: 'profileuser',
    component: ProfilUser
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
