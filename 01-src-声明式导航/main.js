import Vue from "vue"
import App from "./App.vue"
import Find from "./views/Find.vue"
import My from "./views/My.vue"
import Part from "./views/Part.vue"
import NotFound from "./views/NotFound.vue"

// 引入 Vue router
import VueRouter from "vue-router"
// 使用路由插件
Vue.use(VueRouter)
// 创建路由规则数组
const routes = [
  {
    path: '/',
    redirect: "/find"
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/my/:username/:id',
    component: My
  },
  {
    path: '/part',
    component: Part
  },
  {
    path: "*",
    component: NotFound
  }
]
// 根据路由规则生成路由对象
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")

console.log(vm);