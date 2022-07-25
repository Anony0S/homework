import VueRouter from "vue-router";
import Layout from "@/views/Layout/index.vue"
import Play from "@/views/Play/index.vue"
import Home from "@/views/Home/index.vue"
import Search from "@/views/Search/index.vue"
import Vue from "vue";

Vue.use(VueRouter);
export default new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/layout"
		},
		{
			path: "/layout",
			component: Layout,
			redirect: "/layout/home",
			children: [
				{
					path: "home",
					component: Home,
					// 保存路由对象额外的信息
					meta: {
						title: "首页"
					}
				},
				{
					path: "search",
					component: Search,
					meta: {
						title: "搜索"
					}
				}
			]
		},
		{
			path: "/play",
			component: Play
		}
	]
})