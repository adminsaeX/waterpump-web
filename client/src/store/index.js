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
      { value: 'DC_kWattH', label: 'พลังงานไฟฟ้า' }
    ],
    reportWaterFlowType: [
      { value: 'Flow_Rate', label: 'การไหลของน้ำ' },
      { value: 'Moisture', label: 'ความชื้น' },
      { value: 'Temperature', label: 'อุณหภูมิ' }
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
    ],
    optionYear: [
      { value: 2562, label: '2562' },
      { value: 2561, label: '2561' },
      { value: 2560, label: '2560' },
      { value: 2559, label: '2559' },
      { value: 2558, label: '2558' },
      { value: 2557, label: '2557' },
      { value: 2556, label: '2556' },
      { value: 2555, label: '2555' },
      { value: 2554, label: '2554' },
      { value: 2553, label: '2553' },
      { value: 2552, label: '2552' }
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
