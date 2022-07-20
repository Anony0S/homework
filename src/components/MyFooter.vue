<template>
  <div>
    <form class="layui-form">
      <div class="layui-form-item">
        <label class="layui-form-label" style="text-align: left; width: 70px"
          >书名</label
        >
        <div class="layui-input-block" style="margin-left: 100px">
          <input
            type="text"
            required
            lay-verify="required"
            placeholder="请输入标题"
            class="layui-input"
            style="width: 500px"
            v-model.trim="bookname"
          />
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label" style="text-align: left; width: 70px"
          >作者</label
        >
        <div class="layui-input-block" style="margin-left: 100px">
          <input
            type="text"
            name="author"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
            style="width: 500px"
            v-model.trim="author"
          />
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label" style="text-align: left; width: 70px"
          >出版社</label
        >
        <div class="layui-input-block" style="margin-left: 100px">
          <input
            type="text"
            name="publisher"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
            style="width: 500px"
            v-model.trim="publisher"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <button
          class="layui-btn"
          lay-submit
          lay-filter="formDemo"
          @click.prevent="sbmit"
        >
          立即提交
        </button>
        <button class="layui-btn" @click.prevent="del" v-show="true">
          删除全部
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      bookname: "",
      author: "",
      publisher: "",
    };
  },
  methods: {
    sbmit() {
      if (!this.bookname || !this.author || !this.publisher) return;
      this.$axios({
        method: "POST",
        url: "/api/addbook",
        data: {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        },
      }).then((res) => {
        const { msg, status } = res.data;
		layer.msg(msg, {icon: 2});  
        // 添加成功
        if (status === 201) {
          this.$bus.$emit("request");
          this.bookname = "";
          this.author = "";
          this.publisher = "";
        }
      });
    },

    // 删除按钮隐藏 === v-show
    del() {
      const that = this;
      let data = [];
      this.$axios({
        url: "/api/getbooks",
      })
        .then((res) => {
          return (data = res.data.data.map((item) => item.id));
        })
        .then((res) => {
          res.forEach((ele) => delFn(ele));
        });

      function delFn(id) {
        that.$axios({
          url: "/api/delbook?id=" + id,
        });
        console.log(id);
      }
      //   delFn(1600, 1620);
    },
  },
};
</script>

<style></style>
