<template>
  <div>请输入：<input type="text" :value="name" @keyup="value"/></div>
</template>

<script>
export default {
  data() {
    return {
      name: "你好！",
    }
  },
  methods: {
    value(e) {
      this.name = e.target.value
    }
  }
}
</script>
