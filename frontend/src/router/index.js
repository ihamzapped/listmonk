import Vue from 'vue';
import VueRouter from 'vue-router';
import { authGuard, loginRedirect } from './guards';
import listmonkRoutes from './listmonk';

Vue.use(VueRouter);

// The meta.group param is used in App.vue to expand menu group by name.
const routes = [
  {
    path: '/404',
    name: '404_page',
    meta: { title: '404' },
    component: () => import(/* webpackChunkName: "main" */ '../views/404.vue'),
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "main" */ '../views/landing/Index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: { title: 'Home' },
        component: () => import(/* webpackChunkName: "main" */ '../views/landing/Home.vue'),
      },
      {
        path: 'login',
        name: 'login',
        meta: { title: 'Login' },
        beforeEnter: loginRedirect,
        component: () => import(/* webpackChunkName: "main" */ '../views/landing/Login.vue'),
      },
      {
        path: 'services',
        name: 'services',
        meta: { title: 'Services' },
        beforeEnter: authGuard,
        component: () => import(/* webpackChunkName: "main" */ '../views/landing/Services.vue'),
      },
      {
        path: 'about-us',
        name: 'about',
        meta: { title: 'About' },
        component: () => import(/* webpackChunkName: "main" */ '../views/landing/About.vue'),
      },
    ],
  },
  listmonkRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
