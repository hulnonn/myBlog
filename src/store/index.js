import Vue from 'vue'
import Vuex from 'vuex'

// api
import { getArticleDigest } from '@/api/article.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDarkMode: true,
    articleDigest: []
  },
  getters: {},
  mutations: {
    CHANGE_COLOR_THEME(state) {
      state.isDarkMode = !state.isDarkMode
    },
    GAIN_ARTICLE_DIGEST(state, data) {
      state.articleDigest = data || []
    }
  },
  actions: {
    async gainArticleDigest({ commit }) {
      try {
        const result = await getArticleDigest()
        commit('GAIN_ARTICLE_DIGEST', result.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  modules: {}
})
