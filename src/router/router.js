import HomeVue from "@/views/Home.vue"
import AboutVue from "@/views/About.vue"
import ServiceVue from "@/views/Service.vue"
import AmICandidateVue from "@/views/AmICandidate.vue"

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeVue  },
  { path: '/about', component: AboutVue },
  { path: '/services', component: ServiceVue },
  { path: '/am-i-candidate', component: AmICandidateVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;