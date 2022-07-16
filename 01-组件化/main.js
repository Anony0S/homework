import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

// 全局注册组件
import Panel1 from "./components/Panel.vue"
Vue.component("PanelG",Panel1)

new Vue({
  render: (h) => h(App),
}).$mount("#app")
