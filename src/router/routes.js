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
      { path: 'oee', component: () => import('pages/oee/Oee.vue') },
      { path: 'obc', component: () => import('pages/obc/Obc.vue') }
    ]
  },
  {
    path: '/', redirect: '/login'
  }
]

// QUando implementar sistema de login, utilizar a metodologia abaixo para controle de rotas.

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login') {
//     let token = localStorage.getItem('token')
//     if (token) {
//       next()
//     }
//     else {
//       this.$router.push({ name: 'login' })
//       next()
//     }
//   }
//   next()
// })

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
