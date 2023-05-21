import Vue from 'vue';
import VueRouter from 'vue-router';
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
    name: 'home',
    meta: { title: '' },
    component: () => import(/* webpackChunkName: "main" */ '../views/landing/Index.vue'),
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
