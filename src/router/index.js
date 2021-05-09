import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import TestHome from '../views/TestHome.vue'
import TestList from '../views/TestList.vue'
import Exam from '../views/Exam.vue'
const routes = [
  {
    path: '/',
    name: "Login",
    component: Login
  },
  {
    path: '/Exam',
    name: "Exam",
    component: Exam
  },
  {
    path: '/TestHome/:name',
    name: "TestHome",
    component: TestHome
  },
  {
    path: '/TestList',
    name: "TestList",
    component: TestList
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
