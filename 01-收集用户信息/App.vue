<template>
  <div>
    选择所在地区：
    <input
      type="radio"
      name="address"
      v-model="area"
      value="中国大陆"
    />中国大陆
    <input
      type="radio"
      name="address"
      v-model="area"
      value="中国香港"
    />中国香港
    <br />
    <br />

    手机号码：
    <input type="text" v-model="tel" />
    <br />
    <br />

    年龄：
    <input type="text" v-model.number="age" />
    <br />
    <br />

    密码：
    <input type="password" v-model="passwd" />
    <br />
    <br />

    爱好：
    <input type="checkbox" value="看书" v-model="hobby" />看书
    <input type="checkbox" value="学习" v-model="hobby" />学习
    <input type="checkbox" value="写代码" v-model="hobby" />写代码
    <input type="checkbox" value="游戏" v-model="hobby" />游戏
    <br />
    <br />
    <input type="checkbox" v-model="isGrow" />记住密码

    <br />
    <br />
    =============================================================
    <br />
    <br />

    <div>
      我来自：{{ area }}
      <br />
      <br />
      手机号码是：{{ tel }}
      <br />
      <br />
      年龄是：{{ age }}
      <br />
      <br />
      密码是：{{ passwd }}
      <br />
      <br />
      爱好是：{{ hobby.join(",") }}
      <br />
      <br />
      是否记住密码：{{ isGrow ? "是" : "否" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: "中国大陆",
      tel: "",
      age: "",
      passwd: "",
      hobby: ["学习", "写代码"],
      isGrow: "",
    }
  },
}
</script>

<style></style>
