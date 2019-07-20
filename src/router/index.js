import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue';
import Topic from '../page/Topic.vue';
import User from '../page/User.vue';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home 
  	},
    {
      path:'/topic/:id',
      name:'topic',
      component:Topic
    },
    {
      path:'/user/:id',
      name:'user',
      component:User
    }
  ]
})
