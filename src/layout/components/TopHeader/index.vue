<template>
  <div class="top-header bgImage">
    <div class="header">
      <!-- 左侧标题 -->
      <div class="hamburger-container"></div>
      <!-- 右侧 -->
      <div class="right">
        <!-- 全屏 -->
        <screen-full
          class="right-menu-item"
          style="border: 2px solid black"
        ></screen-full>
        <div class="name"></div>
        <el-dropdown class="avatar-container">
          <div class="avatar-wrapper">
            <img src="" alt="" class="user-avatar" />
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item>1</el-dropdown-item>
            <el-dropdown-item>2</el-dropdown-item>
            <el-dropdown-item
              ><span style="display: block">安全退出</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.top-header {
  height: 60px !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1001;
  font-size: 15px;
}

.bgImage {
  background: url("~@/assets/nav/img.png");
  background-size: cover;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px !important;
}

.logo {
  cursor: pointer;
}

.left {
  padding-left: 30px;
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px !important;
  padding-right: 20px;
}

.right-item {
  display: flex;
  align-items: center;
  margin: 0px 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

.right-item-img {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.right-item-text {
  color: white;
  margin: 0px 5px;
}

.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-name {
  color: white;
  margin: 0px 5px;
}

.name {
  display: inline-block;
  //padding: 0 8px;
  padding-right: 8px;
  font-size: 18px;
  vertical-align: top;
  color: #ffffff;
  margin-left: 8px;
}

::v-deep .el-icon-caret-bottom:before {
  color: #fff;
}
</style>
