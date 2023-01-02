import { createApp } from 'vue'
import { createPinia } from 'pinia'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import elementIcons from '@/components/SvgIcon/svgicon'

import './permission' // permission control

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.use(elementIcons)

app.use(createPinia())
app.use(router)

app.mount('#app')
