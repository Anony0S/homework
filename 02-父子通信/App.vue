<template>
  <div>
    <MyProduct1
      v-for="(item, index) in list"
      :key="item.id"
      :price="item.proprice"
      :name="item.proname"
      :info="item.info"
      :index="index"
      v-on:del="delFn"
    ></MyProduct1>
  </div>
</template>

<script>
import MyProduct1 from "./components/MyProduct.vue"
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    }
  },
  methods: {
    delFn(val) {
      this.list[val].proprice--
    }
  },
  components: {
    MyProduct1,
  },
}
</script>

<style></style>
