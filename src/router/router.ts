import Layout from '@/views/layout/index.vue';

export const routers = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: 'index', icon: 'lock', noCache: false, show: false },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home/index',
    meta: { title: 'index', icon: 'lock', noCache: false, show: false },
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: Layout,
    meta: { title: 'index', icon: 'lock', noCache: false, show: true },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'index', icon: 'lock', noCache: false, show: true },
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/home/dashboard.vue'),
        meta: { title: 'dashboard', icon: 'lock', noCache: false, show: true },
      },
    ],
  },
];
