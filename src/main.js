// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App'
import router from './router';
// import vuex from './vuex'
import Layout from './components/layout';
Vue.config.productionTip = false;
import AxiosPlugin from '../src/servers/axios';
Vue.use(AxiosPlugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // vuex,
  components: { Layout },
  template: '<Layout/>'
})
