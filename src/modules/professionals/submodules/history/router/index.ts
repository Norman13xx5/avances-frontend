import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/history',
    name: 'professional-history-home',
    component: () => import('@prh/views/HistoryView.vue')
  },
  {
    path: '/crear-historia',
    name: 'professional-history-create',
    component: () => import('@prh/views/CreateView.vue')
  }
]

export default routes
