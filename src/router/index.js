import Vue from 'vue';
import Router from 'vue-router';

import mineRoutes from './mine';

Vue.use(Router);

const routes = [{ path: '/', redirect: '/mine' }].concat(mineRoutes);

export default new Router({
  routes
});
