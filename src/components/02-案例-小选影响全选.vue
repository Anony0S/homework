<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button>反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "沙僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    }
  },
  computed: {
    isAll: {
      get() {
        return this.arr.every(obj => obj.c === true)
      },
      set(val) {
        this.arr.forEach(item => item.c = val)
      },
    },
  },
}
</script>
