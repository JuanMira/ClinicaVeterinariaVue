import Vue from "vue";
import Vuex from "vuex";
import { createProvider } from "../vue-apollo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: "",
    user: {},
    editedItem: {},
    defautlItem: {},
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
        state.isAuthenticated = true;
      }
    },
    async login(state, { access, refresh }) {
      localStorage.setItem("token", access);
      localStorage.setItem("refresh", refresh);
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {};
      localStorage.setItem("token", "");
      localStorage.setItem("refresh", "");
    },
    setEditItem(state, item) {
      state.editedItem = Object.assign({}, item);
    },
    setDefaultItem(state) {
      state.editedItem = Object.assign({}, state.defautlItem);
    },
  },
  actions: {},
  modules: {},
});
