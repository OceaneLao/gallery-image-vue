<script setup>
import { ref } from 'vue'
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'

let NavItemsArray = ref([
  {
    name: 'HOME',
    link: '/',
    target: '_self'
  },
  {
    name: 'GALLERY',
    link: '/gallery',
    target: '_self'
  },
  {
    name: 'ABOUT',
    link: '/about',
    target: '_self'
  }
])
</script>

<template>
  <main-layout>
    <template #header>
      <main-nav 
      :navItems="NavItemsArray"/>
    </template>
    <router-view> </router-view>
  </main-layout>
</template>

<style></style>
