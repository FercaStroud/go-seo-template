import { createStore } from "vuex";

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const modules = {
};

const store = createStore({
  modules,
  actions,
  getters,
  mutations,
  state,
});

export default store;
