<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="walk">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["帅哥", "美女", "程序员"],
    }
  },
  methods: {
    walk() {
      this.list.push(this.list.shift())
    },
  },
}
</script>

<style></style>
