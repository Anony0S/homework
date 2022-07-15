<template>
  <div>
    <span v-for="(item, index) in arr" :key="index">
      <input type="checkbox" :value="item" v-model="val">
      {{item}}
    </span>
    <p>你选中的元素，累加和为：{{total}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      val: []
    }
  },
  computed: {
    total() {
      return this.val.reduce((sum, item) => sum += item, 0)
    }
  }
}
</script>

<style></style>
