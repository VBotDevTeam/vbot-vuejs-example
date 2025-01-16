import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './pages/MainPage.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: MainPage
    },
  ]
})

export default router
