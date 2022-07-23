<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part">朋友</router-link>
    </div>
    <div class="top">
      <!-- 渲染路径匹配到的路由组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: rgb(0, 76, 255);
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: rgb(0, 76, 255);
  border: 1px solid black;
}
/* .footer_wrap a:hover {
  background-color: #555;
} */
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-active {
  background-color: rgb(0, 251, 255);
}
</style>