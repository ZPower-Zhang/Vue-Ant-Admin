
import Router from './router';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'; // progress bar style
NProgress.configure({ showSpinner: false }); // NProgress Configuration
import store from '@/store/index';

Router.beforeEach((to, from, next) => {
  console.log(store.getters.userInfo)
  NProgress.start();
  if(store.getters.userInfo === '{}') {
    alert('@@@@@')
    next({ path: '/login', replace: true })
  } else {
    next()
  }
})

Router.afterEach((to, from) => {
  NProgress.done() // finish progress bar
})