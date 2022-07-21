<template>
  <div>
    <input v-focus />
    <p v-color="colorStr">修改文字颜色</p>
    <button @click="colorStr == 'red' ? 'green' : 'red'">点击变红</button>
  </div>
</template>

<script>
// 自定义指令的使用
// 1.注册
// 1.1 全局 Vue.directive('指令名称', {})
// 1.2 局部 directives: {}

// 2.使用 v-指令名称

// 注意:
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
// /[^\d.]/g

// 需求：
// 1. 实现表单自动获取焦点的自定义指令
// 2. 实现一个修改标签颜色的指令
// 3. 解决 v-model.number修饰符的问题
export default {
  name: "UseDirective",
  data() {
    return {
      colorStr: "green",
      qwe: "",
    }
  },
  // 自定义指令
  directives: {
    focus: {
      inserted(el) {
        // el 就是指令所在的 dom 元素
        el.focus()
      },
    },
    color: {
      inserted(el, binding) {
        // 指令所在标签，被插入到网页上触发（一次）
        // console.log(binding); //指令的合集
        el.style.color = binding.value
      },
      update(el, binding) {
        // 指令对应数据/标签更新时，此方法执行
        el.style.color = binding.value
      },
    },
  },
}
</script>

<style></style>
