import state from './state';
import { RootStateTypes } from './types';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootStateTypes, any> = {
  author: (state: RootStateTypes) => state.author,
  // userInfo: (state) => state.app.userInfo, // 登陆用户信息
};

export default getters;
