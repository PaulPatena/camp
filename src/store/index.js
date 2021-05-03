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
    detailedViewIdx: undefined,
    detailedSurvey: undefined,  // loading, object
  },
  getters: {
    getDarkMode: state => state.darkMode,
    getSurveys: state => state.surveys,
    getDetailedViewIdx: state => state.detailedViewIdx,
    getDetailedSurvey: state => state.detailedSurvey,
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
    },
    setDetailedSurvey(state, payload) {
      state.detailedSurvey = payload
    }


  },
  actions: {
    fetchSurveys({commit}) {
      fetchJson('/surveys')
        .then(resp => commit('setSurveys', resp.survey_results))
        .catch(err => console.log(err)) // Intentionally left error handling out in this solution
    },
    fetchDetailedSurvey({commit, state}) {
      if (state.surveys && state.detailedViewIdx !== undefined) {
        const url = state.surveys[state.detailedViewIdx].url
        commit('setDetailedSurvey', 'loading')
        fetchJson(url)
          .then(resp => {
            console.log(resp)
            commit('setDetailedSurvey', resp.survey_result_detail)
          })
          .catch(err => console.log(err)) // Intentionally left error handling out in this solution
      }

    }
  },
  modules: {
  }
})
