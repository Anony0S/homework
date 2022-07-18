<template>
  <div>
    {{ msg }}
    <button @click="btn">click me</button>
  </div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  name: "DemoA",

  data() {
    return {
      msg: "A msg",
    };
  },

  mounted() {},

  methods: {
    btn() {
      EventBus.$emit("fromA", this.msg);
      // this.$emit('')
    },
  },
};
</script>

<style scoped></style>
