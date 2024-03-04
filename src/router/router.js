import HomeVue from "@/views/Home.vue"
import AboutVue from "@/views/About.vue"
import DrDeepuVue from "@/views/DrDeepu.vue"
import ServiceVue from "@/views/Service.vue"
import ServiceSinglePage from "@/views/ServiceSinglePage.vue"
import SuccessStoriesVue from "@/views/SuccessStories.vue"
import AmICandidateVue from "@/views/AmICandidate.vue"
import ContactPageVue from "@/views/ContactPage.vue"
import Appointment from "@/views/Appointment.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeVue  },
  { path: '/about', component: AboutVue },
  { path: '/dr-deepu-sudhakaran', component: DrDeepuVue },
  { path: '/services', component: ServiceVue },
  { path: '/services/1', component: ServiceSinglePage },
  { path: '/success-stories', component: SuccessStoriesVue },
  { path: '/am-i-candidate', component: AmICandidateVue },
  { path: '/contact-us', component: ContactPageVue },
  { path: '/appointment', component: Appointment },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
