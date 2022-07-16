<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <PannelL></PannelL>
    <PannelL></PannelL>
    <!-- 使用全局注册的组件 -->
    <PanelG></PanelG>
  </div>
</template>

<script>
// 1.创建组件
// .vue文件 components文件 复用类型组件  component 组件
// 把可以重复使用的html/css/js 抽取出来，放在一个单独的文件里， 一般放在 components

// 2. 引入注册组件
// import 组件对象 from 'vue文件路径'
// 2.1 局部注册
// components: {
//  "组件名": 组件对象
// }

// 2.2 全局注册
// Vue.component("组件名", 组件对象)

// 3.组件使用 当成普通标签来用即可
// <组件名></组件名>
// <PannelG></PannelG>
// <PannelG/>
// <pannel-g></pannel-g>
import PannelL from './components/Panel'
export default {
  data() {
    return {}
  },
  components: {
    PannelL: PannelL,
  },
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
