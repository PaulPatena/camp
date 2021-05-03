import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const BASE_URL = `https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production`

const fetchJson = async (url) => {
  const resp = await fetch(`${BASE_URL}${url}`)
  return await resp.json()
}

export default new Vuex.Store({
  state: {
    darkMode: false,
    surveys: undefined,
    detailedViewIdx: undefined
  },
  getters: {
    getDarkMode: state => state.darkMode,
    getSurveys: state => state.surveys,
  },
  mutations: {
    invertDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    setSurveys(state, payload) {
      state.surveys = payload
    },
    setDetailedViewIdx(state, payload) {
      state.detailedViewIdx = payload
    }

  },
  actions: {
    fetchSurveys({commit}) {
      fetchJson('/surveys')
        .then(resp => commit('setSurveys', resp.survey_results))
        .catch(err => console.log(err)) // Intentionally left error handling out in this solution
    }
  },
  modules: {
  }
})
