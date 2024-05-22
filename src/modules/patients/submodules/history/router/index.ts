import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/history',
    name: 'patients-history-home',
    component: () => import('@pah/views/HistoryView.vue')
  },
  {
    path: '/crear-historia',
    name: 'patients-history-create',
    component: () => import('@pah/views/CreateView.vue')
  }
]

export default routes
