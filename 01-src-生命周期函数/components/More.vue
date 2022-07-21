<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>

    <p>3. vue更新DOM是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
// ref $refs ==> 获取dom元素/组件

// 1. 创建组件/引入组件/注册组件/使用组件
// 2. 给组件/dom 起别名ref 起一个标记的作用
// 3. 获取组件对象/dom元素

export default {
  name: "MoreTest",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btn() {
      this.count++;
    },
  },
};
</script>
