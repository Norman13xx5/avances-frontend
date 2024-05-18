import type { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw = {
  path: '/',
  name: 'user',
  redirect: { name: 'user-home' },

  component: () => import('@u/layout/userLayout.vue'),
  children: [
    {
      path: '/user',
      name: 'user-home',
      component: () => import('@u/views/userView.vue')
    }
  ]
}

export default router
