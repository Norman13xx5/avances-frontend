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
    },
    {
      path: 'change-password',
      name: 'auth-change-password',
      component: () => import('@a/views/ChangePasswordView.vue')
    }
  ]
}

export default router
