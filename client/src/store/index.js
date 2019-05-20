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
    },
    reportType: [
      { value: 'DC_Amp', label: 'แรงดันไฟฟ้า' },
      { value: 'DC_Volt', label: 'กระแสไฟฟ้า' },
      { value: 'DC_Watt', label: 'กำลังไฟฟ้า' },
      { value: 'DC_kWattH', label: 'พลังงานไฟฟ้า' },
      { value: 'Flow_Rate', label: 'การไหลของน้ำ' }
    ],
    solarPump: [
      { value: 'SolarPumping@Solarpump01', label: 'SolarPumping@Solarpump01' },
      { value: 'SolarPumping@Solarpump02', label: 'SolarPumping@Solarpump02' },
      { value: 'SolarPumping@Solarpump03', label: 'SolarPumping@Solarpump03' },
      { value: 'SolarPumping@Solarpump04', label: 'SolarPumping@Solarpump04' },
      { value: 'SolarPumping@Solarpump05', label: 'SolarPumping@Solarpump05' },
      { value: 'SolarPumping@Solarpump06', label: 'SolarPumping@Solarpump06' },
      { value: 'SolarPumping@Solarpump07', label: 'SolarPumping@Solarpump07' },
      { value: 'SolarPumping@Solarpump08', label: 'SolarPumping@Solarpump08' },
      { value: 'SolarPumping@Solarpump09', label: 'SolarPumping@Solarpump09' },
      { value: 'SolarPumping@Solarpump10', label: 'SolarPumping@Solarpump10' }
    ]
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
