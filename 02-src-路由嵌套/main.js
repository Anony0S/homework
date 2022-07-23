import Vue from "vue"
import App from "./App.vue"
import Find from "./views/Find.vue"
import My from "./views/My.vue"
import Part from "./views/Part.vue"
import NotFound from "./views/NotFound.vue"
import Ranking from "./views/Second/Ranking.vue"
import Recommend from "./views/Second/Recommend.vue"
import SongList from "./views/Second/SongList.vue"

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
    component: Find,
    name: "Find",
    children: [
      {
        path: "recommend",
        component: Recommend,
      },
      {
        path: "ranking",
        component: Ranking,
      },
      {
        path: "songList",
        component: SongList,
      },
    ],
  },
  {
    path: '/my',
    component: My,
    name: "My"
  },
  {
    path: '/part',
    component: Part,
    name: "Part"
  },
  {
    path: "*",
    component: NotFound,
    name: "NotFound"
  }
]
// 根据路由规则生成路由对象
const router = new VueRouter({
  routes
})

// 判断用户是否登录，是否决定去“我的音乐” /my
const isLogin = false
router.beforeEach((to, from, next) => {
  // 去哪里
  console.log(to);
  // 来自哪里
  console.log(from);
  if (to.path == "/my" && !isLogin) {
    // 提示用户登录没有成功
    alert("Plase Login!")
    next(false)
  } else {
    next()
  }
})

Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")

// console.log(vm);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};