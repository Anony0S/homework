import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"

// 引入路由页面
import Index from "./views/Index.vue"
import News from "./views/News.vue"
import Sports from "./views/Sports.vue"

// 引入二级菜单页面、
import SportsIndex from "./views/second/SportsIndex.vue"
import SportsIn from "./views/second/SportsIn.vue"
import SportsOut from "./views/second/SportsOut.vue"

Vue.config.productionTip = false
// 使用路由
Vue.use(VueRouter)
// 编写路由规则数组
const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: Index,
  }, 
  {
    path: "/news",
    component: News
  },
  {
    path: "/sports",
    component: Sports,
    children: [
      {
        path: "sportsIndex",
        component: SportsIndex
      },
      {
        path: "sportsIn",
        component: SportsIn
      },
      {
        path: "sportsOut",
        component: SportsOut
      },
    ]
  },
]

// 创建路由实例
const router = new VueRouter({
  // 填写路由规则
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")