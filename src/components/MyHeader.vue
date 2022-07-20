<template>
  <div>
    <input
      class="layui-input"
      type="text"
      placeholder="搜索-书本名称"
      style="width: 300px"
      @keyup.enter="search"
      @blur="resetV"
      v-model="searchV"
    />
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      searchV: "",
    };
  },
  methods: {
    search() {
      if (!this.searchV.trim()) {
        this.searchV = "";
        return alert("请输入搜索值！");
      }
      this.$bus.$emit("search", this.searchV);
    },
    resetV() {
      if (!this.searchV.trim()) {
        // 当搜索值为空且失去焦点时，触发获取数据事件
        this.$bus.$emit("request");
      }
    },
  },
};
</script>

<style></style>
