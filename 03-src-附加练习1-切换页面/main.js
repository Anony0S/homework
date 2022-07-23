import Vue from "vue";
import App from "./App"
import VueRouter from "vue-router"

// 引入页面
import First from "./views/First.vue"
import Class from "./views/Class.vue"
import Order from "./views/Order.vue"
import My from "./views/My.vue"
import NotFound from "./views/NotFound.vue"

Vue.config.productionTip = false

// 使用路由插件
Vue.use(VueRouter)
// 创建路由规则数组
const routes = [
  {
    // 首页跳转
    path: "/",
    redirect: "/first"
  },
  {
    path: "/first",
    component: First,
    name: "First"
  },
  {
    path: "/class",
    component: Class,
    name: "Class"
  },
  {
    path: "/order",
    component: Order,
    name: "Order"
  },
  {
    path: "/my",
    component: My,
    name: "My"
  },
  {
    path: "*",
    component: NotFound,
    name: "NotFound"
  },
]

// 根据路由规则生成路由对象
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")