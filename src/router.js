import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld'
import Shop from './views/Shop'
import About from './views/About'
import Contact from './views/Contact'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/HelloWorld',
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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact 
    }
  ]
})