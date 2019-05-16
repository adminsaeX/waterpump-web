import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
const initialState = () => {
  return {
    token: null,
    language: 'en',
    auth: {
      username: ''
    }
  }
}

export default new Vuex.Store({
  state: initialState,
  getters: {
    isAuthenticated: ({ token }) => token !== null
  },
  mutations,
  actions,
  plugins: [createPersistedState()]
})
