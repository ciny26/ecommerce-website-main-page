import { createRouter, createWebHashHistory } from 'vue-router'
import CollectionsView from '@/views/CollectionsView'
const routes = [
  {
    path: '/',
    name: 'collection',
    component: CollectionsView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
