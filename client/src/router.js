import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import Electricity from './views/Electricity.vue'
import ManageUsers from './views/ManageUsers.vue'
import WaterFlow from './views/WaterFlow.vue'
import Setting from './views/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '/Home', name: 'Home', component: Home },
        { path: '/Electricity', name: 'Electricity', component: Electricity },
        { path: '/ManageUsers', name: 'ManageUsers', component: ManageUsers },
        { path: '/WaterFlow', name: 'WaterFlow', component: WaterFlow },
        { path: '/Setting', name: 'Setting', component: Setting }
      ]
    }
  ]
})
