import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      fetchSurveys: jest.fn(),
      fetchDetailedSurvey: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('dispatches "fetchSurveys" Home is mounted', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    expect(actions.fetchSurveys).toHaveBeenCalled()
  })

})
