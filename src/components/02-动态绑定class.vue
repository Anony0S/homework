<template>
  <div>
    <!-- 动态绑定class
  v-bind:class = '{类名: 布尔值}'
  :class="{类名: 布尔值}"
  使用场景: vue变量控制标签是否应该有类名-->

    <p v-bind:class="{ active: true }">我是p标签</p>
    <button>点击我切换p标签的颜色</button>

    <div class="box" v-bind:class="{ active: true }">
      v-bind:class 可以与普通的class特性共存 吗？？？？
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo04Class",
  data() {
    return {}
  },
}
</script>
<style>
.active {
  color: red;
}
.bg {
  background-color: pink;
}
.box {
  border: 2px solid green;
}
</style>
