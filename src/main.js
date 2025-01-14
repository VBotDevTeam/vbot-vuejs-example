import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VBotPlugin from './vbot-plugin'
import {VBotWebPlugin} from './vbot-web-plugin'
import './css/style.css'

const app = createApp(App)
app.use(router)
app.use(VBotPlugin)
app.use(VBotWebPlugin)
app.mount('#app')
