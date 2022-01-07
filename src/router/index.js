import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLogin from '@/views/PageLogin.vue'
import PageRegister from '@/views/PageRegister.vue'
import PageFeed from '@/views/PageFeed.vue'
import PageProfile from '@/views/PageProfile.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageLogin',
    component: PageLogin
  },
  {
    path: '/register',
    name: 'PageRegister',
    component: PageRegister
  },
  {
    path: '/feed',
    name: 'PageFeed',
    component: PageFeed
  },
  {
    path: '/profile',
    name: 'PageProfile',
    component: PageProfile
  }
];

const router = new VueRouter({
  routes
})

export default router
