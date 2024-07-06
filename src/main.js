
import { createApp } from 'vue'

import App from './App.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Dashboard from './components/dashboard.vue'

const app = createApp(App)

app.component('login', Login)
app.component('register', Register)
app.component('dashboard', Dashboard)

app.mount('#app')
