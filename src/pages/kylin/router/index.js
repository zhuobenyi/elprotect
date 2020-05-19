import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main'
import Home from '../views/home'
import Back from '../views/back'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/back',
      name: 'Back',
      component: Back
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
