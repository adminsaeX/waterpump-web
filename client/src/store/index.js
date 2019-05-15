import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      state: initialState(),
      getters: {
        isAuthenticated: ({ token }) => token !== null
      },
      mutations,
      actions
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
  return Store
}

const initialState = () => {
  return {
    token: null,
    language: 'en',
    auth: {
      username: ''
    }
  }
}
