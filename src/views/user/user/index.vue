<template>
  <div class="user-container">
    <div class="user-header">
      <user-header
        ref="header"
        @show-data="userList = $event"
        @change-loading="loading = $event"
      />
    </div>
    <user-list
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      :user-list="userList"
      @size-change="sizeChange"
      @page-change="pageChange"
    />
  </div>
</template>

<script>
import userHeader from "./components/user-header";
import userList from "./components/user-list";

export default {
  name: "User",
  components: {
    userHeader,
    userList,
  },
  data() {
    return {
      loading: false,
      userList: {},
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
.user {
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
