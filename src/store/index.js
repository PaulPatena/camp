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
    getRespondentIds: state => {
      // Assuming the survey_responses are sorted based on respondent_id
      return state.detailedSurvey.themes[0].questions[0].survey_responses.map(resp => resp.respondent_id)
    },
    getResponsesFromId: state => id => {
      const responses = []
      state.detailedSurvey.themes.forEach(theme => {
        theme.questions.forEach(question => {
          responses.push({
            description: question.description,
            response_content: question.survey_responses.filter(resp => resp.respondent_id === id)[0].response_content
          })
        })
      });
      return responses
    }
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
            console.log(resp.survey_result_detail)
            commit('setDetailedSurvey', resp.survey_result_detail)
          })
          .catch(err => console.log(err)) // Intentionally left error handling out in this solution
      }

    }
  },
  modules: {
  }
})
