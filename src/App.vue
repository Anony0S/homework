<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="value" @change="isAll" />
            <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <TheTr
          v-for="(item, index) in goodList"
          :key="index"
          :item="item"
          :index="index"
          v-on:addNum="addNum"
          v-on:sumNum="sumNum"
          v-on:delList="delList"
        ></TheTr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{total}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import TheTr from "./components/shopping.vue"
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: true,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
      value: null,
      // total: 0
    }
  },
  components: { TheTr },
  methods: {
    // 数量加
    addNum(index) {
      this.goodList[index].num++
    },
    // 数量减
    sumNum(index) {
      if (this.goodList[index].num > 0) this.goodList[index].num--
      else return alert("数量不能小于0!")
    },
    // 全选
    isAll() {
      this.goodList.forEach((item) => (item.checked = this.value))
    },
    // 删除
    delList(index){
      this.goodList.splice(index, 1)
    }
  },
  watch: {
    goodList: {
      deep: true,
      handler() {
        // 方法一
        this.value = this.goodList.find(item => !item.checked) ? false : true; 
        // 方法二
        // this.goodList.forEach((item) => {
        //   if (!item.checked) return (this.value = false)
        //   else this.value = true
        // })
        // 方法三
        // arr.some(): 返回 true 或者 false, 同every 和 map: 判断 true 和 false 返回新数组 
      },
    },
  },
  computed: {
    total() {
      return this.goodList.reduce((sum, item) => {
        sum += item.price * item.num * item.checked
        return sum
      }, 0)
    }
  }
}
</script>

<style></style>
