import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'ant-design-vue/dist/reset.css';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
