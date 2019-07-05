import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppPosts from '@/components/AppPosts'
import SinglePost from '@/components/SinglePost'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AppPosts },
  { path: '/posts', component: AppPosts },
  { path: '/posts/:id', component: SinglePost },
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
