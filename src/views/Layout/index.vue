<template>
  <div>
    <div>
      <van-nav-bar :title="$route.meta.title" fixed />
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar route>
        <van-tabbar-item replace to="/layout/home" icon="home-o"
          >首页</van-tabbar-item
        >
        <van-tabbar-item replace to="/layout/search" icon="search"
          >搜索</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicIndex",

  data() {
    return {
    };
  },
};
</script>

<style scoped></style>
