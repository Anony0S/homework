<template>
  <div class="my-product">
    <h3>标题: {{name}}</h3>
    <p>价格: {{price}}</p>
    <p>{{info}}</p>
    <button @click="cutPrice">点击砍价</button>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "info", "index"],
  methods: {
    cutPrice() {
      this.$emit("del", this.index)
    }
  }

}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
