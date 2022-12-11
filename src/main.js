import { createApp } from 'vue'
import './style.css'
import Home from './views/Home.vue'
import router from './router'

const app = createApp(Home)

app.use(router);
app.mount('#app')