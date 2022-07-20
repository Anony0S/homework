import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import '../node_modules/layui/dist/css/layui.css'
// 基础地址
axios.defaults.baseURL = "http://www.liulongbin.top:3006"

// 挂载 $axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    // console.log(Vue.prototype === this.__proto__);
  }
}).$mount('#app')
