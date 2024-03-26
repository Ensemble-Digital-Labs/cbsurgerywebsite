import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

createApp(App).use(router).use(VueRecaptchaPlugin, {
    v3SiteKey: '6LfV06QpAAAAANNYZTmTDLPF57Go8OukOgp1C9A_',
}).mount('#app')
