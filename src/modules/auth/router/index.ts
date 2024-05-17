import type { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw = {
  path: '/',
  name: 'auth',
  redirect: { name: 'auth-login' },

  component: () => import('@a/layout/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'auth-login',
      component: () => import('@a/views/AuthView.vue')
    }
  ]
}

export default router
