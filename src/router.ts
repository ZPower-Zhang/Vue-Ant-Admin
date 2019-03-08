import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/index.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home/index',
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/home/index.vue'),
          meta: { title: 'index', icon: 'lock', noCache: false, admin: false },
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/home/dashboard.vue'),
          meta: { title: 'dashboard', icon: 'lock', noCache: false, admin: false },
        },
      ],
    },
  ],
});
