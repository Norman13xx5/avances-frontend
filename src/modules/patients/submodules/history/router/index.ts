import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/history',
    name: 'patients-history-home',
    component: () => import('@pah/views/HistoryView.vue')
  }
]

export default routes
