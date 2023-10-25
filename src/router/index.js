import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LunettesView from '../views/LunettesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {  path: '/',      name: 'home',      component: HomeView},
    {  path: '/lunettes',      name: 'LunettesView',      component: LunettesView},

  
  ]
})

export default router
