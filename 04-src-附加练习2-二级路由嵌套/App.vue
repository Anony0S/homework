<template>
  <div class="appBox">
    <div>
      <h2>嵌套路由</h2>
    </div>

    <div>
      <router-link to="/index">主页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/sports">体育</router-link>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.router-link-active {
  background-color: lime;
}
.router-link-exact-active {
  background-color: orange;
}
a {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 18px;
  margin-right: 10px;
}
.appBox {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  width: 500px;
  height: 300px;
  border: 1px solid #000;
}
.appBox h2 {
  text-align: center;
  line-height: 60px;
}
</style>
