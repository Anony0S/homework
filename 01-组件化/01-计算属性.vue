<template>
  <dir>
    姓：<input type="text" v-model="firstName" /> 
    <br>
    <br>
    名：<input
      type="text"
      v-model="lastName"
    />
    <br /><br />
    姓名：<input type="text" v-model="fullName" />
  </dir>
</template>

<script>
export default {
  data() {
    return {
      firstName: "1",
      lastName: "2",
    }
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + '-' + this.lastName
      },
      set(val) {
        if(val.split('-').length > 2) return alert("输入错误！")
        this.firstName = val.split("-")[0] || ""
        this.lastName = val.split("-")[1] || ""
      },
    },
  },
}
</script>

<style></style>
