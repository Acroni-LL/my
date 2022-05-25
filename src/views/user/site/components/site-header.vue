<template>
  <search-header>
    <el-autocomplete
      v-model="search.name"
      :fetch-suggestions="
        (queryString, cb) => {
          querySearch(key, queryString, cb);
        }
      "
      clearable
      placeholder="请输入用户名或手机号"
      size="small"
      style="width: 180px; margin-right: 10px; margin-left: 10px"
    />
    <el-button
      size="small"
      style="margin-left: 8px"
      type="primary"
      @click="btnSearch"
      >查询</el-button
    >
  </search-header>
</template>

<script>
import localStorageSearch from "@/mixins/localStorageSearch";

const key = "site-header";
export default {
  name: "SiteHeader",
  mixins: [localStorageSearch],
  data() {
    return {
      search: {
        type: 0,
        name: "",
        pageSize: 20,
        currentPage: 1,
      },
      key,
    };
  },
  methods: {
    btnSearch() {
      this.setLocalHistory(key, this.search.name);
    },
  },
};
</script>

<style scoped></style>
