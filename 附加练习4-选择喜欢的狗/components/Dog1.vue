<template>
  <div class="my_div">
    <img :src="item.dogImgUrl" alt="" />
    <p @click="changeColor(item.dogName)" :style="{ backgroundColor: color }">
      {{ item.dogName }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "",
    }
  },
  props: ["item", "index"],
  methods: {
    changeColor(dogName) {
      // 改变背景颜色
      this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

      // 传参
      this.$emit("printDog", dogName)
    },
  },
}
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
  margin: 10px;
}

.my_div img {
  width: 100%;
  height: 200px;
  vertical-align: top;
}

p {
  cursor: pointer;
  margin: 0;
  padding: 8px;
}
p:hover {
  background-color: rgb(227, 227, 227);
}
</style>
