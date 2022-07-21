<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button>点击-查看控制台</button>
    <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bookname" />
    <button>查询</button>
    <p>3. 新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button @click="addBook">发布</button>
  </div>
</template>

<script>
// 目标1: 获取所有图书信息
// 1. 下载axios
// yarn add axios/ npm i axios/ cnpm i axios
// 2. 引入axios 做接口请求

// 3. 发起axios请求
// 4. 全局配置
export default {
  data() {
    return {
      bookObj: {
        // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
        bookname: "",
        author: "",
        publisher: "",
      },
      bookname: "",
    };
  },
  methods: {},
};
</script>

<style></style>
