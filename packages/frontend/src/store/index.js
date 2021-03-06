import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import auth from './modules/auth'
import notification from './modules/notification'
import toolbar from './modules/toolbar'
import workforce from './modules/workforce'
import worker from './modules/worker'
import work from './modules/work'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: { ...vuexfireMutations },
  actions: {},
  modules: { auth, notification, toolbar, workforce, worker, work },
})
