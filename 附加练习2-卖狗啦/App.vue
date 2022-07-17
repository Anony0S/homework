<template>
  <div>
    <Dog1 v-for="(item, index) in arr" :key="index" :item="item"></Dog1>
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
    }
  },
  components: { Dog1 },
}
</script>

<style></style>
