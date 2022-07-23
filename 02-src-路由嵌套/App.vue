<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find" class="test" @click="btn('/find', 'Find')"
        >发现音乐</router-link
      >
      <router-link to="/my" class="test" @click="btn('/my', 'My')"
        >我的音乐</router-link
      >
      <router-link to="/part" class="test" @click="btn('/part', 'Part')"
        >朋友</router-link
      >
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 目标: 编程式导航 - js方式跳转路由
// 语法:
// this.$router.push({path: "路由路径"})
// this.$router.push({name: "路由名"})
// 注意:
// 虽然用name跳转, 但是url的hash值还是切换path路径值
// 场景:
// 方便修改: name路由名(在页面上看不见随便定义)
// path可以在url的hash值看到(尽量符合组内规范)
export default {
  methods: {
    btn(targetPath, targetName) {
      // 方式1: path跳转
      this.$router.push({
        // path: targetPath,
        query: {
          id: 123,
          username: "zs",
        },
        params: {
          age: 18,
        },
        name: targetName,
      })
    },
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
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
.footer_wrap .test,
router-link {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: rgb(255, 255, 255);
  border: 1px solid black;
  font-size: 18px;
  font-weight: 700;
}
/* .footer_wrap a:hover {
  background-color: #555;
} */
.top {
  padding-top: 56px;
}
.footer_wrap .router-link-active {
  background-color: rgb(0, 251, 255);
}
</style>
