import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// interface user {
//   isLogin: boolean,
//   user: string,
//   password: string
// }

const LOGIN = 'LOGIN';
const EXIT = 'EXIT';

export default new Vuex.Store({
  state: {
    user: localStorage.user ? JSON.parse(localStorage.user) : {
      isLogin: false,
      name: '',
      password: ''
    }
  },

  mutations: {
    [LOGIN](state: any, params: any) {
      state.user = params;
    },
    [EXIT](state: any) {
      state.user = {
        isLogin: false,
        name: '',
        password: ''
      };
    }
  },

  actions: {
    // init()
    login({commit}, params: any) {
      commit(LOGIN, params);
      localStorage.user = JSON.stringify(params);
    },

    exit({commit}, params: any) {
      setTimeout(() => {
        commit(EXIT)
        localStorage.user = {};
      })
    }
  },

  modules: {
    
  }
})
