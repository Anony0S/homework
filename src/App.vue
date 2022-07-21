<template>
  <div>
    <MyHeader></MyHeader>
    <MyTabBar></MyTabBar>
    <MyTable></MyTable>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyTable from "./components/MyTable.vue";
export default {
  name: "App",
  data() {
    return {
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
    };
  },
  components: { MyHeader, MyTabBar, MyTable },
};
</script>

<style></style>
