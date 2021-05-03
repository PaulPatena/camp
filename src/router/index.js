import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Diy from '../views/Diy.vue'
import Videos from '../views/Videos.vue'
import Gallery from '../views/Gallery.vue'
import MyCerts from '../views/MyCerts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/diy',
    name: 'Diy',
    component: Diy
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/my-certificates',
    name: 'MyCerts',
    component: MyCerts
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue')
  },
  {
    path: '*',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
