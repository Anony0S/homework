<template>
  <div>
    <!-- <Life v-if="isShow"></Life> -->
    <!-- <button @click="isShow = false">点击销毁</button> -->
    <!-- <Mroe></Mroe> -->
    <UseDirective></UseDirective>
  </div>
</template>

<script>
// import Life from "./components/Life.vue"
// import Mroe from "./components/More.vue"
// import Tick from "./components/Tick.vue"
import UseDirective from "./components/UseDirective.vue"
export default {
  name: "App",
  components: { UseDirective },
}
</script>

<style></style>
