import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

const app = createApp(App).use(router)
app.config.errorHandler = (err) => {

}
app.use(OpenLayersMap)
app.mount('#app')
