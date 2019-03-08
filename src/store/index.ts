import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import createLogger from 'vuex/dist/logger';

import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';


import app from './modules/app';
import tagsView from './modules/tagsView';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store: Store<any> = new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  modules: {
    a: app,
    b: tagsView,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
