import Vue from "vue";
import Vuex from "vuex";
// import Cookies from "js-cookie";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    roleRouter: {},
  },
  getters: {
    userInfo: (state) => state.userInfo,
  },
  mutations: {
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    getUserInfo({ commit }, params) {
      axios({
        method: "POST",
        url: "https://mock.mengxuegu.com/mock/628d9b2ccc411017d3bb5bcb/mock/oauth/token_copy",
        params: params,
      }).then((response) => {
        const { ip, name, creation_date, city, avatar, role } =
          response.data.data.user;
        const { token, message, success } = response.data;
        const userInfo = {
          ...{ ip, name, creation_date, city, avatar, role },
          ...{ token, message, success },
        };
        if (success) {
          commit("SET_USERINFO", userInfo);
          return Promise.resolve();
        } else {
          return Promise.reject(() => {});
        }
      });
    },
  },
  modules: {},
});
