<template>
  <div>
    <p>我的收藏</p>
    <p>我的历史记录</p>
    <h1>{{ $route.query.username }}</h1>
    <h1>{{ $route.query.age }}</h1>
    <h1>{{ $route.query }}</h1>

    <h1>{{ $route.params }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <h1>{{ $route.params.username }}</h1>
  </div>
</template>

<script>
export default {
  name: "AA",
}
</script>

<style></style>
