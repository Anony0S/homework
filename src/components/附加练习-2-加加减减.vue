<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
        <button @click="delList(index)">删除</button>
      </li>
    </ul>
    <button @click="addLi">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 3, 5],
    }
  },
  methods: {
    addLi() {
      this.list.push(Math.floor(Math.random() * 10))
    },
    delList(index) {
      this.list.splice(index, 1)
    },
  },
}
</script>

<style></style>
