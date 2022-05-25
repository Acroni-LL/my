<template>
  <search-header v-sticky="10">
    <div class="top-header-in">
      <div>
        <el-autocomplete
          v-model="search.name"
          :fetch-suggestions="
            (queryString, cb) => {
              querySearch(key, queryString, cb);
            }
          "
          clearable
          placeholder="请输入员工工号或姓名"
          size="small"
          style="width: 180px; margin-right: 10px; margin-left: 10px"
        />
        <el-button size="small" type="primary" @click="btnSearch"
          >查询</el-button
        >
      </div>
      <div>
        <el-button size="small" type="primary" @click="addEmployee"
          >添加员工</el-button
        >
        <el-button size="small" type="primary" @click="importEmployee"
          >导入员工</el-button
        >
        <el-button size="small" type="primary" @click="exportEmployee"
          >导出员工</el-button
        >
      </div>
    </div>
  </search-header>
</template>

<script>
import localStorageSearch from "@/mixins/localStorageSearch";
import { getEmployee } from "@/api/user/employee";

const key = "employee_header";
export default {
  name: "EmployeeHeader",
  mixins: [localStorageSearch],
  data() {
    return {
      key,
      search: {
        name: "",
        pageSize: 20,
        currentPage: 1,
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    btnSearch() {
      this.setLocalHistory(key, this.search.name);
      this.getData();
    },
    getData() {
      this.$emit("change-loading", true);
      //getEmployee(this.search)  //原始值
      getEmployee()
        .then(({ data }) => {
          this.$emit("show-data", data);
          console.log(data);
        })
        .catch((e) => e)
        .finally(() => {
          this.$emit("change-loading", false);
        });
    },
    addEmployee() {},
    importEmployee() {},
    exportEmployee() {},
  },
};
</script>

<style scoped>
search-header {
  width: 100%;
}
</style>
