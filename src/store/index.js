import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDarkMode: true
  },
  getters: {
  },
  mutations: {
    CHANGE_COLOR_THEME(state) {
      state.isDarkMode = !state.isDarkMode
    }
  },
  actions: {
  },
  modules: {
  }
})
