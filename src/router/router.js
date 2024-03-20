import HomeVue from "@/views/Home.vue"
import AboutVue from "@/views/About.vue"
import DrDeepuVue from "@/views/DrDeepu.vue"
import ServiceVue from "@/views/Service.vue"
import ServiceSinglePage1 from "@/views/ServiceSinglePage1.vue"
import ServiceSinglePage2 from "@/views/ServiceSinglePage2.vue"
import ServiceSinglePage3 from "@/views/ServiceSinglePage3.vue"
import SuccessStoriesVue from "@/views/SuccessStories.vue"
import AmICandidateVue from "@/views/AmICandidate.vue"
import ContactPageVue from "@/views/ContactPage.vue"
import Appointment from "@/views/Appointment.vue"
import PrivacyPolicyVue from "@/views/PrivacyPolicy.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeVue  },
  { path: '/about-us', component: AboutVue },
  { path: '/dr-deepu-sudhakaran', component: DrDeepuVue },
  { path: '/services', component: ServiceVue },
  { path: '/services/1', component: ServiceSinglePage1 },
  { path: '/services/2', component: ServiceSinglePage2 },
  { path: '/services/3', component: ServiceSinglePage3 },
  { path: '/success-stories', component: SuccessStoriesVue },
  { path: '/am-i-candidate', component: AmICandidateVue },
  { path: '/privacy-policy', component: PrivacyPolicyVue },
  { path: '/contact-us', component: ContactPageVue },
  { path: '/appointments', component: Appointment },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior:'smooth'
      }
    } else {
      return {
        top:0,
      }
    }
  },
})

export default router;
