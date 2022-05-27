<template>
  <div class="body">
    <div>
      {{ 1 }}
    </div>
    <el-table :data="employee">
      <el-table-column align="center" label="#" type="index" />
      <el-table-column align="center" label="姓名" prop="name" />
      <el-table-column align="center" label="电话" prop="phone" />
      <el-table-column align="center" label="部门" prop="department" />
      <el-table-column align="center" label="工号" prop="userNo" />
      <el-table-column align="center" label="工号" prop="userNo" />
      <el-table-column align="center" label="入职时间" prop="createTime" />
      <el-table-column align="center" label="账号" prop="account" />
      <el-table-column align="center" label="账号" prop="account"
    /></el-table>
  </div>
</template>

<script>
import { getEmployee } from "@/api/user/employee";
export default {
  name: "testTwo",
  data() {
    return {};
  },
  props: {
    employee: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {},
  mounted() {
    getEmployee().then(({ data }) => {
      this.$emit("show-data", data.index);
      console.log(data.index);
    });
  },
};
</script>

<style>
.body {
  color: aquamarine;
  font-size: 30px;
}
</style>
