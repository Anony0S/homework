<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addList" v-text="!status ? '添加' : '修改'">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="delList(index)">删除</button>
            <button @click="changeInfo(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { name: "Tom", age: 19, sex: "男" },
        { name: "Jone", age: 21, sex: "女" },
      ],
      name: "",
      age: "",
      sex: "",
      index: 0,
      status: false
    }
  },
  methods: {
    // 添加数据功能
    addList() {
      if (this.name === "" || this.age === "" || this.sex === "")
        return alert("请输入完整的信息！")
      // 收集用户信息
      const user = {
        name: this.name,
        age: this.age,
        sex: this.sex,
      }
      if (!this.status) this.list.push(user)
      else {
        this.list.splice(this.index, 1, user)
        this.status = false
      }
      this.name = ''
      this.age = ''
      this.sex = ''
    },
    // 编辑数据功能
    changeInfo(index) {
      this.name = this.list[index].name
      this.age = this.list[index].age
      this.sex = this.list[index].sex
      this.index = index
      this.status = true
    },
    // 删除数据功能
    delList(index){
      this.list.splice(index, 1)
    }
  },
}
</script>
<style>
div {
  padding: 10px;
}
</style>
