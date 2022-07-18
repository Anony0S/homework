<template>
  <button :class="`one-button-${type}`" @click="click">{{ title }}</button>
</template>

<script>
// 需求： 要求 title 和背景颜色自定义
export default {
  props: {
    title: String,
    type: {
		type: String,
		// require: true,
		default: 'default',
		// val：type接收到的值
		validator: (val) => ['danger', 'warning', 'success', 'primary', 'default'].includes(val)
	}
  },
  methods: {
	click() {
		this.$emit("click")
	}
  }
}
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
  margin-right: 5px;
}
.one-button-default {
  background-color: rgb(196, 196, 196);
}
.one-button-primary {
  background-color: skyblue;
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: yellow;
}
.one-button-danger {
  background-color: red;
}
</style>
