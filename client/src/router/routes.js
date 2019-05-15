
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/Dashboard', component: () => import('pages/Index.vue') },
      { path: '/Voltage', component: () => import('pages/Voltage.vue') },
      { path: '/Electricity', component: () => import('pages/Electricity.vue') },
      { path: '/ElectricPower', component: () => import('pages/ElectricPower.vue') },
      { path: '/ElectricalEnergy', component: () => import('pages/ElectricalEnergy.vue') },
      { path: '/WaterFlow', component: () => import('pages/WaterFlow.vue') },
      { path: '/ManageUsers', component: () => import('pages/ManageUsers.vue') },
      { path: '/Setting', component: () => import('pages/Setting.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
