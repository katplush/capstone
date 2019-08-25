import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld'
import Shop from './views/Shop'
import About from './views/About'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop 
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})