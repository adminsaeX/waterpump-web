import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import HighchartsVue from 'highcharts-vue'
import './registerServiceWorker'

import './styles/quasar.styl'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/ionicons'
import 'quasar-extras/mdi'
import Quasar from 'quasar'
Vue.use(HighchartsVue)

Vue.use(Quasar, {
  config: {}
 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
