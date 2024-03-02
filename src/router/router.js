import HomeVue from "@/views/Home.vue"
import AboutVue from "@/views/About.vue"
import ServiceVue from "@/views/Service.vue"
import SuccessStoriesVue from "@/views/SuccessStories.vue"
import AmICandidateVue from "@/views/AmICandidate.vue"

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeVue  },
  { path: '/about', component: AboutVue },
  { path: '/services', component: ServiceVue },
  { path: '/success-stories', component: SuccessStoriesVue },
  { path: '/am-i-candidate', component: AmICandidateVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
// 