<template>
  <div>
    <MyTable :list="list">
      <!-- 使用插槽 -->
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ item }">
        <td>{{ item.id }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td style="display: flex">
          <span
            v-for="(tag, index) in item.tags"
            :key="index"
            class="badge bg-info text-dark"
            style="
              margin-right: 5px;
              font-size: 14px;
              padding: 5px;
              line-height: 31px;
            "
          >
            {{ tag }}
          </span>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 70px; height: 40px"
            v-if="item.inputVisible"
            @blur="item.inputVisible = false"
            v-focus
            @keydown.enter="enterFn(item)"
            @keydown.esc="item.inputValue = ''"
            v-model="item.inputValue"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="item.inputVisible = true"
          >
            +Tag
          </button>
        </td>
        <td>
          <button @click="delThis(item.id)" class="btn btn-danger btn-sm">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  name: "MyGoodList",
  data() {
    return {
      list: [],
    };
  },
  components: { MyTable },
  created() {
    this.$axios
      .get("https://www.escook.cn/api/goods")
      .then((res) => (this.list = res.data.data))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  methods: {
    delThis(id) {
      const index = this.list.findIndex((item) => item.id === id);
      this.list.splice(index, 1);
    },
    enterFn(item) {
      if (!item.inputValue.trim()) {
        alert("请输入数据");
        return;
      }

      item.tags.push(item.inputValue); // 表单里的字符串状态tags数组
      item.inputValue = "";
    },
  },
};
</script>

<style></style>
