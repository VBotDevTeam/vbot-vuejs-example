import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VBotPlugin from './vbot-plugin'
import { VBotClient } from './vbot-sdk'

import './css/style.css'

const app = createApp(App)
app.use(router)
app.use(VBotPlugin)
app.config.globalProperties.$vbotSDK = VBotClient
app.mount('#app')
