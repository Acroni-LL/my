<template>
  <el-card>
    <el-table :data="employee.list">
      <el-table-column align="center" label="#" type="index" />
      <el-table-column align="center" label="姓名" prop="name" />
      <el-table-column align="center" label="电话" prop="phone" />
      <el-table-column align="center" label="部门" prop="department" />
      <el-table-column align="center" label="工号" prop="userNo" />
      <el-table-column align="center" label="工号" prop="userNo" />
      <el-table-column align="center" label="入职时间" prop="createTime" />
      <el-table-column align="center" label="账号" prop="account" />
      <el-table-column align="center" label="账号" prop="account" />
      <el-table-column align="center" label="性别">
        <template v-slot="{ row: { sex } }">
          <template v-if="sex === 0">女</template>
          <template v-else-if="sex == 1">男</template>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="150px">
        <template v-slot="{ row }">
          <el-button-group>
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="warning">重置密码</el-button>
            <el-button size="mini" type="danger" @click="deleteEmployee(row)"
              >删除</el-button
            >
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="employee.currentPage"
      :page-size="employee.pageSize"
      :page-sizes="[20, 50, 100, 200]"
      :total="employee.total"
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
    employee: {
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
    async deleteEmployee({ id }) {
      const result = await this.$confirm(
        "此操作可能永久删除该员工，是否继续？",
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
