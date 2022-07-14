<template>
  <div>
    请输入：<input type="text" :value="name" @keyup="debounce" />
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张三",
      timer: null,
    }
  },
  methods: {
    debounce(e) {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.name = e.target.value
      }, 200)
    },
  },
}
</script>
