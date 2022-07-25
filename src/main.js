import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// @相当于 src 路径
import "@/assets/reset.css"
import "@/assets/flexible"

// 导入路由规则
import router from "@/router/index"

// 使用 vant 组件
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, CellGroup, Icon, Search } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);

// // 测试使用API
// import { recommendMusicAPI } from "@/api/index"
// async function myFn() {
//   const res = await recommendMusicAPI({ limit: 6 })
//   console.log(res);
// }
// myFn()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
