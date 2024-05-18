import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from '@a/router'
import userRoutes from '@u/router'
import historyRoutes from '@h/router'

const routes = [
  // AUTH
  {
    ...authRoutes
  },
  // USER
  {
    ...userRoutes
  },
  // HISTORY
  {
    ...historyRoutes
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
