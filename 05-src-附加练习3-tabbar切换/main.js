import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
// 导入 aios 组件
import axios from "axios"

// 引入路由模块
import VueRouter from "vue-router"

import GoodsList from "./views/MyGoodList.vue";
import GoodsSearch from "./views/MySearch.vue";
import UserInfo from "./views/MyInfo.vue";
// 使用路由
Vue.use(VueRouter)
// 编写路由规则
const routes = [
  {
    // 默认跳转路径 ==> 重定向
    path: "/",
    redirect: "/goodslist"
  },
  {
    path: "/goodslist",
    component: GoodsList,
    name: 'MyGoodsList'
  },
  {
    path: "/goodssearch",
    component: GoodsSearch,
    name: 'MyGoodsSearch'
  },
  {
    path: "/userinfo",
    component: UserInfo,
    name: 'MyUserInfo'
  },
  {
    // 找不到路径的时候
    path: "*",
    component: GoodsList
  },
]

Vue.config.productionTip = false
// 定义全局指令
Vue.directive("focus", {
  inserted(el) {
    el.focus()
  }
})

// 注册路由实例
const router  = new VueRouter({
  // 放置路由 规则
  routes
})

new Vue({
  router,
  render: h => h(App),
  created() {
    Vue.prototype.$axios = axios
  },
}).$mount('#app')
