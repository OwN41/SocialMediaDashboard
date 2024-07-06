import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Login from './components/login.vue'
import Dashboard from './components/dashboard.vue'

const app = createApp(App)

app.component('login', Login)
app.component('dashboard', Dashboard)

app.mount('#app')
