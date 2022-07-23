<template>
  <div>
    <MyHeader title="TabBar案例"></MyHeader>
    <div style="padding-top: 45px">
      <router-view></router-view>
    </div>
      <MyTabBar :list="tabList" @click="click"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"
import MyTabBar from "./components/MyTabBar.vue"

export default {
  name: "App",
  data() {
    return {
      comName: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    }
  },
  methods: {
    click(index) {
      this.comName = this.tabList[index].componentName
    },
  },
  components: { MyHeader, MyTabBar },
}
</script>

<style></style>
