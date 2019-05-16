
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/Dashboard', component: () => import('pages/Index.vue') },
      { path: '/Electricity', component: () => import('pages/Electricity.vue') },
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
