import HomeVue from "@/views/Home.vue"
import AboutVue from "@/views/About.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeVue  },
  { path: '/about', component: AboutVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;