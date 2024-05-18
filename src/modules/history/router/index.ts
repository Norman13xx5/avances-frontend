import type { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw = {
  path: '/',
  name: 'history',
  redirect: { name: 'history-home' },

  component: () => import('@h/layout/historyLayout.vue'),
  children: [
    {
      path: '/history',
      name: 'history-home',
      component: () => import('@h/views/HistoryView.vue')
    },
    {
      path: '/crear-historia',
      name: 'history-create',
      component: () => import('@h/views/CreateView.vue')
    }
  ]
}

export default router
