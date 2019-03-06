import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import getters from './getters';
import tagsView from './modules/tagsView';
import createLogger from 'vuex/dist/logger';
import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {

  },
  mutations: {},
  actions,
  modules: {
    app,
    tagsView
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
