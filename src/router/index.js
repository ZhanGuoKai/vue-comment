import Vue from 'vue';
import Router from 'vue-router';
import { getToken } from '@/utils/auth';

import mineRoutes from './mine';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/mine' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
].concat(mineRoutes);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  const token = getToken();
  if (token) {
    if (to.name == 'login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (to.name == 'login') next();
    else next('/login');
  }
});

export default router;
