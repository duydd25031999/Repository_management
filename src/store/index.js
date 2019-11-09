import Vue from 'vue'
import Vuex from 'vuex'
import stargazer from './stargazer'
import repository from './repository'
import user from './user'
import loading from './loading'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stargazer,
    repository,
    user,
    loading
  }
})
