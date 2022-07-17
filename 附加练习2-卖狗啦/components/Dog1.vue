<template>
  <div class="my_div">
    <img :src="item.dogImgUrl" alt="" />
    <p>{{ item.dogName }}</p>
  </div>
</template>

<script>
import url from "../assets/01.jpg"
export default {
  props: ["item"],
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
}
</style>
