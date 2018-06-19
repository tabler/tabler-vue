import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import FormsPage from '@/components/FormsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/forms',
      name: 'forms',
      component: FormsPage
    }
  ]
})
