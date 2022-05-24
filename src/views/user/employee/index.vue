<template>
  <div class="employee-container">
    <div class="employee-header">
      <employee-header
        ref="header"
        @change-loading="loading = $event"
        @show-data="employee = $event"
      />
    </div>
    <employee-list
      v-loading="loading"
      :employee="employee"
      element-loading-spinner="el-icon-loading"
      element-loading-text="拼命加载中"
      @size-change="sizeChange"
      @page-change="pageChange"
    />
  </div>
</template>

<script>
import employeeHeader from "./components/employee-header";
import employeeList from "./components/employee-list";

export default {
  name: "EmployeeManagement",
  components: {
    employeeHeader,
    employeeList,
  },
  data() {
    return {
      loading: false,
      employee: {},
    };
  },
  methods: {
    sizeChange(e) {
      this.$refs.header.search.pageSize = e;
      this.$refs.header.search.currentPage = 1;
      this.$refs.header.getData();
    },
    pageChange(e) {
      this.$refs.header.search.currentPage = e;
      this.$refs.header.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
.employee {
  &-container {
    padding: 5px;
    width: 100%;
    min-height: calc(100vh - 84px);
    display: flex;
    flex-direction: column;
  }

  &-header {
    margin-bottom: 5px;
  }
}
</style>
