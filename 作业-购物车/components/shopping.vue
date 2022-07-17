<template>
  <tr>
    <td><input type="checkbox" v-model="item.checked" /></td>
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td>
      <button @click="sumNum(index)">-</button>
      {{ item.num }}
      <button @click="addNum(index)">+</button>
    </td>
    <td>{{ item.price * item.num }}</td>
    <td><button @click="delList(index)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: ["item", "index"],
  methods: {
    addNum(index) {
      this.$emit("addNum", index)
    },
    sumNum(index) {
      this.$emit("sumNum", index)
    },
    delList(index) {
      this.$emit("delList", index)
    }
  },
}
</script>

<style></style>
