import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './assets/scss/index.scss';

Vue.use(Antd);

Vue.config.productionTip = false;

import '@babel/polyfill';

import './permission';

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: (h) => h(App),
}).$mount('#app');
