import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'patients-user-home',
    component: () => import('@pau/views/userView.vue')
  }
]

export default routes
