import { createApp } from 'vue'

import Login from './components/login.vue'
import Dashboard from './components/dashboard.vue'

const app = createApp(App)

app.component('login', Login)
app.component('dashboard', Dashboard)

app.mount('#app')