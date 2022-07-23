<template>
  <div>
    <div class="nav_main">
      <router-link to="/find/recommend">推荐</router-link>
      <router-link to="/find/ranking">排行榜</router-link>
      <router-link to="/find/songList">歌单</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "AA",
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.nav_main {
  background-color: red;
  color: white;
  padding: 10px 0;
}
.nav_main a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin: 7px 17px 0;
  padding: 0px 15px 2px 15px;
  height: 20px;
  display: inline-block;
  line-height: 30px;
  border-radius: 20px;
}
.nav_main a:hover {
  background-color: brown;
  height: 30px;
}
.nav_main .router-link-active {
  background-color: brown;
  height: 30px;
}
</style>
