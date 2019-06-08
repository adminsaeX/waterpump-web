import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
// main view
import Home from './views/Home.vue'
import Electricity from './views/Electricity.vue'
import ManageUsers from './views/ManageUsers.vue'
import WaterFlow from './views/WaterFlow.vue'
import PumpingSystem from './views/PumpingSystem.vue'
import Notification from './views/Notification.vue'
import AccountSetting from './views/AccountSetting.vue'
import SystemNotification from './views/SystemNotification.vue'
import Overview from './views/Overview.vue'
import PIDiagrame from './views/PIDiagrame.vue'
import Login from './views/Login.vue'
import Feedback from './views/Feedback.vue'
import Register from './views/Register.vue'
import ProjectManage from './views/ProjectManage.vue'
import TempAndHumidity from './views/TempAndHumidity.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '/', name: 'mian', component: Home },
        { path: '/Home', name: 'Home', component: Home },
        { path: '/PIDiagrame/:serialNo', name: 'PIDiagrameCode', component: PIDiagrame },
        { path: '/PIDiagrame', name: 'PIDiagrame', component: PIDiagrame },
        { path: '/Login', name: 'Login', component: Login },
        { path: '/Register', name: 'Register', component: Register },
        { path: '/Feedback', name: 'Feedback', component: Feedback },
        { path: '/AccountSetting', name: 'AccountSetting', component: AccountSetting },
        { path: '/Electricity', name: 'Electricity', component: Electricity },
        { path: '/ManageUsers', name: 'ManageUsers', component: ManageUsers },
        { path: '/WaterFlow', name: 'WaterFlow', component: WaterFlow },
        { path: '/PumpingSystem', name: 'PumpingSystem', component: PumpingSystem },
        { path: '/Notification', name: 'Notification', component: Notification },
        { path: '/SystemNotification', name: 'SystemNotification', component: SystemNotification },
        { path: '/Overview', name: 'Overview', component: Overview },
        { path: '/ProjectManage', name: 'ProjectManage', component: ProjectManage },
        { path: '/TempAndHumidity', name: 'TempAndHumidity', component: TempAndHumidity },
      ]
    }
  ]
})
