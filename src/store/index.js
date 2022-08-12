import Vue from 'vue';
import Vuex from 'vuex';

const modulesFiles = require.context('./modules', false, /\.js$/);
const modules = {};
modulesFiles.keys().forEach(modulePath => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.js$/, '$1');
  modules[moduleName] = modulesFiles(modulePath).default;
});

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules,
  strict: debug
});

export default store;
