<template>
  <div class="my-product">
    <h3>标题: {{ obj.proname }}</h3>
    <p>价格: {{ obj.proprice }}</p>
    <p>{{ obj.info }}</p>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      require: true,
      default: () => ({}),
    },
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
