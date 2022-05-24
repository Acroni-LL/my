<template>
  <el-card>
    <slot />
  </el-card>
</template>

<script>
export default {
  name: 'SearchHeader'
}
</script>

<style lang="scss" scoped>
::v-deep .el-card__body {
  padding: 7px 15px;
}
</style>
