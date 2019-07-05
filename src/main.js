import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppPosts from '@/components/AppPosts'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AppPosts },
  { path: '/posts', component: AppPosts },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
