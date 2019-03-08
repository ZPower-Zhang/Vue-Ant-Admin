const app = {
  state: {
    userInfo: {},
  },
  mutations: {
    GET_USERINFO: (state: any, payload: any) => {
      state.userInfo = payload;
    },
  },
  actions: {
    getUserInfo({ commit }: any, userInfo: any) {
      commit('GET_USERINFO', userInfo);
    },
  },
  strict: true,
};

export default app;
