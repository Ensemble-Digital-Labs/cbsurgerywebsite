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
import Insurance from "@/views/InsurancePage.vue"
import OurProducts from "@/views/OurProducts.vue"
import { createRouter, createWebHistory } from 'vue-router'
import { useHead } from '@vueuse/head'

const defaultKeywords = [
  'bariatric weight loss surgery',
  'weight loss surgery',
  'gastric sleeve surgery',
  'gastric bypass surgery',
  'bariatric surgery',
  'sleeve gastrectomy',
  'sleeve surgery',
  'weight loss doctor',
  'weight loss Clinic',
  'Gastric Bypass',
  'Weight Loss Surgery Cost',
  'Bariatric Surgery Cost',
  'Gastric Bypass Diet',
  'Gastric Band',
].join(', ');

const routes = [
  { 
    path: '/', 
    component: HomeVue,
    meta: { title: ' Chesterfield Bariatric Surgery | Weight Loss Clinic | Weight Loss', description: ' Effective weight loss solutions at bariatric surgery center, St. Louis. Renowned surgeon Dr. Sudhakaran provides effective weight loss solutions for patients.' }
  },
  { 
    path: '/chesterfield-weight-loss-surgeon/meet-the-doctor', 
    component: AboutVue,
    meta: { title: 'Gastric sleeve surgery | Gastric bypass surgery | Sleeve gastrectomy', description: 'Advanced weight loss surgeries. Dr. Sudhakaran specializes in minimally invasive surgeries like gastric sleeve, gastric bypass, robotic, and revision surgery.' }
  },
  { 
    path: '/dr-deepu-sudhakaran', 
    component: DrDeepuVue,
    // meta: { title: 'Dr. Deepu Sudhakaran', description: 'Information about Dr. Deepu Sudhakaran' }
  },
  { 
    path: '/weight-loss-surgery/treatments', 
    component: ServiceVue,
    meta: { title: 'Chesterfield Bariatric Surgery | Weight Loss Surgery | Sleeve Surgery', description: ' St. Louis Bariatrics offers a range of weight loss solutions including Sleeve Gastrectomy, Revision Bariatric Surgery, Robotic Surgery, General Surgery & more.' }
  },
  { 
    path: '/services/1', 
    component: ServiceSinglePage1,
    // meta: { title: 'Service 1', description: 'Details about Service 1' }
  },
  { 
    path: '/services/2', 
    component: ServiceSinglePage2,
    // meta: { title: 'Service 2', description: 'Details about Service 2' }
  },
  { 
    path: '/services/3', 
    component: ServiceSinglePage3,
    // meta: { title: 'Service 3', description: 'Details about Service 3' }
  },
  { 
    path: '/BariatricSurgeryStLouis/weightlossclinic', 
    component: SuccessStoriesVue,
    meta: { title: 'Success Stories | Weight Loss | Chesterfield Bariatric Surgery', description: 'Expert Surgical Team Providing Prime Patient-Centred Care Before, During & After Surgery. Know about our Bariatric Surgeon and start your transformation today!' }
  },
  { 
    path: '/bariatricSurgeryStLouis/BMI-calculator', 
    component: AmICandidateVue,
    meta: { title: 'Am I A Candidate? | Bariatric Surgery St. Louis | BMI Calculator', description: 'Experienced With Procedures like Gastric Balloon and Endoscopic Sleeve Gastroplasty. Check your BMI to see if you qualify for bariatric surgery.' }
  },
  { 
    path: '/Our-Products', 
    component: OurProducts,
    meta: { title: 'Our Products | Bariatric Vitamins & Supplements | Chesterfield Bariatric Surgery', description: 'Bariatric Fusion, ProCare Health, and Ortho Molecular vitamins and supplements. Shop partner stores and contact our office for guidance and registration codes.' }
  },
  { 
    path: '/BariatricSurgeryStLouis/HIPPA', 
    component: PrivacyPolicyVue,
    meta: { title: 'HIPAA Policy | Weight Loss Surgery | Weight Loss', description: 'Learn about our HIPAA policy and how we protect your privacy at our weight loss surgery center. Your health information is secure with us.    ' }
  },
  { 
    path: '/contact-us', 
    component: ContactPageVue,
    meta: { title: 'Get In Touch Today | Chesterfield Bariatric Clinic | Call Us Now', description: 'See If A gastric sleeve surgery or gastric bypass surgery Is Right For You. Speak with our experienced team to learn more about Bariatric Weight Loss Surgery.' }
  },
  { 
    path: '/appointments', 
    component: Appointment,
    meta: { title: 'Book an Appointment | Obesity Weight Loss Surgery | Call Us', description: 'If you wish to be advised on the most appropriate treatment, please call +1 (314) 500 2424 to schedule an appointment or to get an online appointment.   ' }
  },
  { 
    path: '/BariatricSurgeryStLouis/Weight-Loss-Surgery-Cost', 
    component: Insurance,
    meta: { title: 'Insurance and Self-Pay | Weight Loss Surgery Cost', description: 'Explore insurance and self-pay options for weight loss surgery at our St. Louis center. Find the right financial plan for your health and wellness journey.    ' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
      }
    }
  },
})

router.beforeEach((to, from, next) => {
  useHead({
    title: to.meta.title || 'Chesterfield Bariatric Surgery | Weight Loss Clinic | Weight Loss',
    meta: [
      {
        name: 'description',
        content: to.meta.description || 'Effective weight loss solutions at bariatric surgery center, St. Louis. Renowned surgeon Dr. Sudhakaran provides effective weight loss solutions for patients.'
      },
      {
        name: 'keywords',
        content: to.meta.keywords || defaultKeywords
      }
    ]
  })
  next()
})

export default router
