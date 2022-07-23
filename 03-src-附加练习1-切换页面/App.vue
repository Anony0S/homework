<template>
  <div>
    <router-link to="/first">首页</router-link>
    <router-link to="/class">分类</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/my">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>

</style>