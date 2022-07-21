<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';
export default {
  name: "LifeAxiosLife",

  data() {
    return {
      msg: "Hello Vue!",
      arr: [1, 2, 3, 4],
      timer: null
    };
  },

  // 声明周期函数
  // 一、创建
  beforeCreate() {
    this.msg = "你好啊！"
    // 修改 data 没有反应
    console.log("BeforeCreate 执行！");
  },
  created() {
    console.log("created 执行");
    this.msg = "你好啊！"
    // 初始化数据的场景放在这儿，请求接口/全局事件的监听
    this.timer = setInterval(() => console.log('======='), 1000)
  },

  // 二、挂载
  beforeMount() {
    // 挂载前，无法操作 Dom
    console.log(document.querySelector('#myP'));
    console.log('beforeMount 执行！');
  },
  mounted() {
    console.log(document.querySelector('#myP'));
    console.log('mounted 执行');
  },

  // 三、更新阶段，数据会被触发
  // beforeUpdate 数据变了，视图没有变
  // updated 数据变了，视图也变了
  beforeUpdate() {
    console.log("beforeUpdate 执行");
    console.log(document.querySelectorAll('#myUL li')[4]);
  },
  updated() {
    console.log("updated 执行");
    console.log(document.querySelectorAll('#myUL li')[4]);
  },

  // 四 销毁阶段
  beforeDestroy() {
    console.log("beforeDestroy", this.msg);
  
  },
  destroyed() {
    console.log("destroyed", this.msg);
  }
  
 
};
</script>
