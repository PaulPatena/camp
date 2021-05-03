import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: true,
    selectedCategory: "/Inventory",
  },
  getters: {
    getSelectedCategory: state => state.selectedCategory,
    getDarkMode: state => state.darkMode,
  },
  mutations: {
    invertDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    setSelectedCategory(state, payload) {
      state.selectedCategory = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
