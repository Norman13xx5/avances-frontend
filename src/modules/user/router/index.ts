import type { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw = {
  path: '/',
  name: 'profile',
  redirect: { name: 'profile' },

  component: () => import('@u/layout/UserLayout.vue'),
  children: [
    {
      path: 'profile',
      name: 'profile',
      component: () => import('@u/views/ProfileView.vue')
    }
  ]
}

export default router
