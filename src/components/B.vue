<template>
  <div>123123</div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  name: "DemoB",

  data() {
    return {};
  },

  mounted() {
    // vue 实例创建的时候 必然会执行
    EventBus.$on("fromA", (val) => {
      console.log("BBBBBBB", val);
    });
  },

  methods: {},
};
</script>

<style scoped></style>
