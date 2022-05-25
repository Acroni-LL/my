<template>
  <el-card>
    <el-table row-key="id" :data="userList.list" border>
      <el-table-column align="center" label="#" type="index" />
      <el-table-column align="center" label="姓名" prop="name" />
      <el-table-column align="center" label="手机" prop="phone" />
      <el-table-column align="center" label="性别">
        <template v-slot="{ row: { sex } }">
          <template v-if="sex == 1">男</template>
          <template v-else-if="sex == 0">女</template>
        </template>
      </el-table-column>
      <el-table-column align="center" label="会员">
        <template v-slot="{ row: { vip } }">
          <el-tag v-if="vip == 1" type="success">是</el-tag>
          <el-tag v-else-if="vip == 0" type="warning">否</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="生日" prop="birthday" />
      <el-table-column align="center" label="创建时间" prop="createTime" />
      <el-table-column align="center" label="操作">
        <template v-slot="{ row }">
          <el-button size="small" type="primary">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteUser(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="userList.currentPage"
      :page-size="userList.pageSize"
      :page-sizes="[20, 50, 100, 200]"
      :total="userList.total"
      background
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="sizeChange"
      @current-change="pageChange"
    />
  </el-card>
</template>

<script>
export default {
  name: "UserList",
  props: {
    userList: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    // 页面条数发生变化
    sizeChange(e) {
      this.$emit("size-change", e);
    },
    // 页数发生变化
    pageChange(e) {
      this.$emit("page-change", e);
    },
    // eslint-disable-next-line no-unused-vars
    async deleteUser({ id }) {
      const result = await this.$confirm(
        "此操作可能永久删除该用户，是否继续？",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((e) => e);
      if (result !== "confirm") return;
    },
  },
};
</script>

<style scoped></style>
