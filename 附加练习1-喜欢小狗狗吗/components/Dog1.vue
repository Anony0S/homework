<template>
  <div class="my_div">
      <img :src="url" alt="" />
      <p>这是一个孤独可怜的狗</p>
  </div>
</template>

<script>
import url from "../assets/01.jpg"
export default {
  data() {
    return {
      url,
    }
  },
}
</script>

<style>
.my_div {
  width: 250px;
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
