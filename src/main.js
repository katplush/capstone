import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-146783045-1',
  checkDuplicatedScript: true
})

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App), 
  router
}).$mount('#app')

