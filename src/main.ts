import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.scss'
import Home from '@/pages/Home.vue'
import Model from '@/pages/Model.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import VueGtag from 'vue-gtag'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/view/:modelId/:tab?',
    name: 'model',
    component: Model
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .use(VueGtag, {
    config: {
      id: 'G-T91W04JTYS'
    }
  })
  .mount('#app')
