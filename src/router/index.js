import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import GalleryPage from '../views/GalleryPage.vue'
import ImageDetailPage from '../views/ImageDetailPage.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: GalleryPage
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