<template>
  <search-header>
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
          placeholder="请输入用户名或手机号"
          size="small"
          style="width: 180px; margin-right: 10px; margin-left: 10px"
        />
        <el-radio-group v-model="search.type" size="mini">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">会员用户</el-radio-button>
          <el-radio-button :label="2">普通用户</el-radio-button>
        </el-radio-group>
        <el-button
          size="small"
          style="margin-left: 8px"
          type="primary"
          @click="btnSearch"
          >查询</el-button
        >
      </div>
      <div>
        <el-button
          size="small"
          style="margin-left: 8px"
          type="primary"
          @click="importUser"
          >导入</el-button
        >
        <el-button
          size="small"
          style="margin-left: 8px"
          type="primary"
          @click="addUser"
          >添加</el-button
        >
      </div>
    </div>
  </search-header>
</template>

<script>
import { getUserList } from "@/api/user/user";
import localStorageSearch from "@/mixins/localStorageSearch";

const key = "user_header";

export default {
  name: "UserHeader",
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
      getUserList(this.search)
        .then(({ data }) => {
          console.log(data);
          this.$emit("show-data", data);
        })
        .catch((e) => e)
        .finally(() => {
          this.$emit("change-loading", false);
        });
    },
    importUser() {},
    addUser() {
      // this.$router.push('/user/user/add')
      this.$router.push({ name: "addUserView" });
    },
  },
};
</script>

<style scoped></style>
