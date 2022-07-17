<template>
  <div class="box">
    <dir class="imgBox">
      <Dog1
        v-for="(item, index) in arr"
        :key="index"
        :item="item"
        :index="index"
        v-on:printDog="printDog"
      ></Dog1>
    </dir>
    <div class="text">
      <ul>
        <li>喜欢的狗狗</li>
        <li v-for="(item, index) in loveDog" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Dog1 from "./components/Dog1.vue"
export default {
  data() {
    return {
      arr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "http://p6.itc.cn/images01/20200716/6f80693e5d584c1c861f5d4c2b8d4004.jpeg",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://th.bing.com/th/id/R.65d3f22071b42bbc27eabbc5c9c10ebf?rik=psfIP0pgeQydkw&pid=ImgRaw&r=0",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://uploadfile.bizhizu.cn/up/e0/0a/b6/e00ab611e8dead17e19dd01509fdde17.jpg",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://tva2.sinaimg.cn/large/005LOWUxly1h49v8z7c6aj30qn0zktsb.jpg",
          dogName: "萨摩耶",
        },
      ],
      loveDog: [],
    }
  },
  methods: {
    printDog(dogName) {
      this.loveDog.push(dogName)
    },
  },
  components: { Dog1 },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.box {
  display: flex;
  width: 770px;
  border: 1px solid #000;
  padding: 0;
  margin: 10px;
}
.imgBox {
  width: 666px;
  padding: 0;
  margin: 0;
}
.text {
  flex: 1;
  border: 1px solid #000;
  margin: 10px 10px 10px 0;
  line-height: 25px;
  text-align: center;
}
li:first-child {
  border-bottom: 1px solid #000;
}
</style>
