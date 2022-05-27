<template>
  <div>
    <h1>TEST1</h1>
    <div class="test2">
      <test-two @show-data="employee = $event" :employee="employee"></test-two>
    </div>
  </div>
</template>

<script>
import testTwo from "./testTwo.vue";
export default {
  name: "test1",
  data() {
    return {
      employee: {},
    };
  },
  mounted() {},
  components: {
    testTwo,
  },
};
</script>

<style>
.test2 {
  color: blue;
  background-color: #fff;
  border: #ff1 solid 2px;
  border-radius: 2px;
}
</style>
