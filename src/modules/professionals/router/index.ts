import type { RouteRecordRaw } from 'vue-router'

import historyRoutes from '@prh/router'
import userRoutes from '@pru/router'

const routes: RouteRecordRaw = {
  path: '/',
  name: 'professional',
  redirect: { name: 'history-home' },

  component: () => import('@pr/layout/professionalLayout.vue'),
  children: [
    {
      path: '/profesionales',
      name: 'professional-home',
      component: () => import('@pr/views/HomeProfessionalView.vue')
    },
    ...historyRoutes,
    ...userRoutes
  ]
}

export default routes
