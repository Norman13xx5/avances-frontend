import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from '@a/router'
import userRoutes from '@u/router'

const routes = [
  // AUTH
  {
    ...authRoutes
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@a/views/DashboardView.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('@a/views/TemplateView.vue')
  },
  {
    ...userRoutes
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
