import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'professional-user-home',
    component: () => import('@pru/views/userView.vue')
  }
]

export default routes
