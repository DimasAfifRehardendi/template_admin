import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/layout/Navbar.vue'
import Sidebar from '../views/layout/Sidebar.vue'
import Footer from '../views/layout/Footer.vue'
import TabelInformasi from '../views/TabelInformasi.vue'
import Database from '../views/Database.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, sidebar: Sidebar, footer:Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/tabelinformasi',
    name: 'tabelinformasi',
    components: {default: TabelInformasi, header: Navbar, sidebar: Sidebar, footer:Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/database',
    name: 'database',
    components: {default: Database, header: Navbar, sidebar: Sidebar, footer:Footer},
    meta: { 
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
  
})  

export default router


