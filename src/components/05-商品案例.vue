<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price >= 100 }">{{ item.price }}</td>
            <td>{{ item.time | formatTime }}</td>
            <td><a href="#" @click="del(item.id)">删除</a></td>
          </tr>
          <tr style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ totalPrice.toFixed(2) }}</td>
            <td colspan="2">平均价: {{ (totalPrice / list.length).toFixed(2) }}</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="5" style="text-align: center" v-show="!list.length">
              暂无数据
            </td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addPrice">
          添加资产
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment"
// 铺设页面 1. 表格样式正确展示 2.数据渲染到页面
// 1. 下载bootstrap, main.js引入bootstrap.css
//    yarn add bootstrap
// 2. 把list数组 - 铺设表格
// 3. 修改价格颜色 大于100 颜色为红
export default {
  name: "VueDemo",
  data() {
    return {
      list: [
        { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
        { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
        { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
        { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      ],
      name: "",
      price: "0",
    }
  },
  computed: {
    totalPrice() {
      return this.list.reduce((sum, item) => (sum += item.price), 0)
    },
  },
  methods: {
    addPrice() {
      if (!this.name.trim() || this.price.trim() == 0) {
        this.name = ""
        this.price = "0"
        return alert("请输入资产名称或价格！")
      }
      this.list.push({
        id: this.list.length + 100,
        name: this.name,
        price: +this.price,
        time: new Date(),
      })
      this.name = ""
        this.price = "0"
    },
    del(id) {
      if (!confirm("确认删除吗？")) return
      this.list.splice(
        this.list.findIndex((item) => item.id === id),
        1
      )
    },
  },
  filters: {
    formatTime: (val) => {
      return moment(val).format("YYYY-MM-DD hh:mm:ss")
    },
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
