<template>
  <div>
    <input ref="myInp" type="text" placeholder="这是一个输入框" />
    <button>点击我进行搜索</button>
  </div>
</template>

<script>
// 需求: 点按钮(消失) - 输入框出现并聚焦
// 1. 获取到输入框
// 2. 输入框调用事件方法focus()达到聚焦行为
export default {
  name: "TickTest",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {},
};
</script>

<style></style>
