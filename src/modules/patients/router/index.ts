import type { RouteRecordRaw } from 'vue-router'

import historyRoutes from '@pah/router'
import userRoutes from '@pau/router'

const routes: RouteRecordRaw = {
  path: '/',
  name: 'patients',
  redirect: { name: 'history-home' },

  component: () => import('@pa/layout/patientLayout.vue'),
  children: [
    {
      path: '/pacientes',
      name: 'patients-home',
      component: () => import('@pa/views/HomePatienView.vue')
    },
    ...historyRoutes,
    ...userRoutes
  ]
}

export default routes
