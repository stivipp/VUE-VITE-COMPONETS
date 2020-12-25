import { createApp } from 'vue'
import mitt from 'mitt'

import DudesApp from './DudesApp.vue'
import '/src/style.css'

window.eventBus = mitt()

createApp(DudesApp).mount('#app')
