import { createRouter, createWebHistory } from 'vue-router'

import BasicPage from '../views/BasicPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ImageListPage from '../views/ImageListPage.vue'
import ImageDetailPage from '../views/ImageDetailPage.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: BasicPage
  },
  {
    name: 'ImageList',
    path: '/images',
    component: ImageListPage
  },
  {
    name : "ImageDetail",
    path : '/images:id',
    component : ImageDetailPage
},
  {
    name: 'About',
    path: '/about',
    component: AboutPage
  },
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router