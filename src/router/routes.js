const routes = [
  {
    path: '/login',
    component: () => import('pages/login.vue')
  },
  {
    path: '/app',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'jicjit', component: () => import('pages/jicjit/Jicjit.vue') },
      { path: 'oee', component: () => import('pages/oee/Oee.vue') }
    ]
  },
  {
    path: '/', redirect: '/login'
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
