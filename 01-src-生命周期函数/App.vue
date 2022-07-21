<template>
  <div>
    <Life v-if="isShow"></Life>
    <button @click="isShow = false">点击销毁</button>
  </div>
</template>

<script>
import Life from "./components/Life.vue"
export default {
  data() {
    return {
      isShow: true
    }
  },
  name: 'App',
  components: { Life },
}
</script>

<style></style>
