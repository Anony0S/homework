import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
// 导入 aios 组件
import axios from "axios"

Vue.config.productionTip = false
// 定义全局指令
Vue.directive("focus", {
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
  created() {
    Vue.prototype.$axios = axios
  },
}).$mount('#app')
