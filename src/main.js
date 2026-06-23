// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router/router'
// import { VueRecaptchaPlugin } from 'vue-recaptcha/head'


// createApp(App).use(router).use(VueRecaptchaPlugin, {
//     v3SiteKey: '6LfV06QpAAAAANNYZTmTDLPF57Go8OukOgp1C9A_',
// }).mount('#app')


// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router/router'
// import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
// import { createHead } from '@vueuse/head'

// const app = createApp(App)

// app.use(router)
// app.use(VueRecaptchaPlugin, {
//     v3SiteKey: '6LfV06QpAAAAANNYZTmTDLPF57Go8OukOgp1C9A_',
// })
// app.use(createMetaManager())

// app.mount('#app')


import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createHead } from '@vueuse/head'
import { warmRecaptcha } from '@/utils/recaptcha'

const app = createApp(App)

const head = createHead()

app.use(router)
app.use(head)

app.mount('#app')
warmRecaptcha()
