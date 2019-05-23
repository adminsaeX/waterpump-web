import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import { colors } from 'quasar'

import './styles/quasar.styl'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/ionicons'
import 'quasar-extras/mdi'
import Quasar from 'quasar'

// modified color
const { setBrand } = colors
setBrand('primary', '#87C5D0')
setBrand('secondary', '#007A6D')
setBrand('tertiary', '#92959A')
setBrand('positive', '#183A5F')
setBrand('negative', '#C3191C')
setBrand('info', '#61779C')
setBrand('warning', '#F8DA18')
setBrand('faded', '#92959A')
setBrand('dark', '#6A3621')

// destructuring to keep only what is needed
Vue.use(Quasar, {
  config: {}
 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
