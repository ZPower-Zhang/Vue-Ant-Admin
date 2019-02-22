import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import getters from './getters';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {

  },
  mutations: {},
  actions: {},
  modules: {
    app
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
