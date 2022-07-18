<template>
  <div>
    <MyButton title='成功按钮' type='success' @click="fn"></MyButton>
    <MyButton title='警告按钮' type='warning' @click="fn2"></MyButton>
    <MyButton title='蓝色按钮' type='primary'></MyButton>
    <MyButton title='危险按钮' type='danger'></MyButton>
    <MyButton title='默认按钮'></MyButton>
  </div>
</template>

<script>
import MyButton from './components/button.vue'
export default {
  components: { MyButton },
  methods: {
    fn() {
      console.log(111);
    },
    fn2() {
      console.log(222);
    }
  }
}
</script>

<style></style>
