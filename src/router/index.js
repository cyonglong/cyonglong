import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('../views/home/home.vue')
const Cart =()=>import('../views/cart/cart.vue')
const Category=()=>import('../views/category/category.vue')
const Profile =()=>import('../views/profile/profile.vue')
const Detail=()=>import('../views/Detail/detail.vue')
Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/',
   
    redirect:'/home'
  },
   {
      path: '/home',
      name: 'home',
      component:Home
    },
    {
      path: '/cart',
      name: 'cart',
      component:Cart
    },{
      path: '/category',
      name: 'category',
      component:Category
    },{
      path: '/profile',
      name: 'profile',
      component:Profile
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    }
  ]
})
