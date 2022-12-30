import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)
app.config.errorHandler = (err) => {

}
app.mount('#app')
