<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" @mouseleave="change(1)" @click="clickChange(1)"/>
      <img src="./assets/02.jpg" alt="" @mouseleave="change(2)" @click="clickChange(2)"/>
      <img src="./assets/03.jpg" alt="" @mouseleave="change(3)" @click="clickChange(3)"/>
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="imgUrl" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img1 from "@/assets/01.jpg"
import img2 from "@/assets/02.jpg"
import img3 from "@/assets/03.jpg"

export default {
  data() {
    return {
      imgUrl: img1,
    }
  },
  methods: {
    change(i) {
      this.imgUrl = {1: img1, 2: img2, 3: img3}[i]
    },
    clickChange(i) {
      document.body.style.background = `url(${{1: img1, 2: img2, 3: img3}[i]}) no-repeat 0 0/cover`
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
