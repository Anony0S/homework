<template>
  <div class="box">
    <table class="layui-table">
      <colgroup>
        <col width="100" />
        <col width="200" />
        <col width="200" />
        <col width="350" />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td>
            <button
              type="button"
              class="layui-btn layui-btn-sm layui-btn-danger"
              @click="delThis(item.id)"
            >
              删除
            </button>
            <button
              type="button"
              class="layui-btn layui-btn-sm layui-btn-normal"
              @click="showInfo(item)"
            >
              详情
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyBody",
  methods: {
    delThis(id) {
      this.$axios({
        url: "/api/delbook?id=" + id,
      }).then((res) => {
        const { msg, status } = res.data;
        layer.msg(msg, { icon: 2, time: 1000 });
        // 删除数据成功
        if (status === 200) {
          // 更新数据
          this.$bus.$emit("request");
        }
      });
    },
    showInfo(item) {
      // 弹出层设置
      layer.open({
        type: 0,
        title: "详情",
        shade: 0.2,
        anim: 1,
        area: "800px",
        content: `
			<div>
				<table class="layui-table">
  				<colgroup>
  				  <col width="150">
  				  <col width="150">
  				  <col />
  				</colgroup>
  				<thead>
  				  <tr>
  				    <th>书名</th>
  				    <th>作者</th>
  				    <th>出版商</th>
  				  </tr>
  				</thead>
  				<tbody>
  				  <tr>
  				    <td>${item.bookname}</td>
  				    <td>${item.author}</td>
  				    <td>${item.publisher}</td>
  				  </tr>
  				</tbody>
				</table>
			</div>
		`,
      });
    },
  },
  props: {
    list: Array,
  },
};
</script>

<style>
table {
  width: 1000px !important;
}
</style>
