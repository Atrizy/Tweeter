import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLogin from '@/views/PageLogin.vue'
import PageRegister from '@/views/PageRegister.vue'

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
];

const router = new VueRouter({
  routes
})

export default router
