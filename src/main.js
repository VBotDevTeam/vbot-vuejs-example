import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VBotPlugin from './vbot-plugin'

import './css/style.css'

const app = createApp(App)
app.use(router)
app.use(VBotPlugin)
app.mount('#app')
