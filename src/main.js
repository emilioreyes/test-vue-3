import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import httpInstance from './http-config/http-main'
import router from './router.js'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app=createApp(App)
app.use(router)
app.use(pinia)
app.provide('$httpMain', httpInstance)
app.mount('#app')
