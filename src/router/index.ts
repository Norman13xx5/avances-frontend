import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from '@a/router'

const routes = [
  // AUTH
  {
    ...authRoutes
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
