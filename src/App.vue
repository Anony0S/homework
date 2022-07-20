<template>
  <div class="appBox">
    <MyHeader></MyHeader>
    <MyBody :list="list"></MyBody>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyBody from "./components/MyBody.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyBody,
    MyFooter,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    search(val) {
      this.list = this.list.filter((item) => item.bookname == val);
    },
    request() {
      // console.log('被触发了！');
      this.$axios({
        url: "/api/getbooks",
      }).then((res) => {
        this.list = res.data.data;
      });
    },
  },
  // 钩子设置初始化数据
  created() {
    this.request()
  },
  mounted() {
    this.$bus.$on("search", this.search);
    this.$bus.$on("request", this.request);
  },
};
</script>

<style>
.appBox {
  margin-top: 50px !important;
  margin-left: 50px !important;
}
</style>
