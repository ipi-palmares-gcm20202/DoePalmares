import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NovoUsuario from '../components/NovoUsuario.vue'



const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/cadastro', name: 'cadastro', component: NovoUsuario },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
