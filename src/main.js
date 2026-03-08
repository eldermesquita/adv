import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@assets/css/main.css'
import '@assets/css/swiper-bundle.min.css'
import '@assets/js/main.js'
import '@assets/js/jquery.magnific-popup.min.js'
import '@assets/css/magnific-popup.css'
import '@assets/css/jquery-ui.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ('@assets/css/animate.css')
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far, fab)
dom.watch()

import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')

AOS.init()
