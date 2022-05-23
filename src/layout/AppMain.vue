<template>
  <section :style="height" class="app-main">
    <transition mode="out-in" name="fade-transform">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {
      height: {},
      device: "",
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {
    key: {
      immediate: true,
      handler() {
        if (this.key === "/index") {
          this.height = {
            height: "calc(100vh - 110px)",
            bottom: "0px",
          };
        } else {
          this.height = {
            minHeight: "calc(100vh - 84px)",
            overflow: "scroll",
          };
        }
      },
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  /*34 = tagView*/
  /*min-height: calc(100vh - 50px);*/
  // background-color: #de5; // 无

  width: 100%;
  position: relative;
  overflow: scroll;
  top: 50px;

  &::-webkit-scrollbar {
    display: block;
  }
}

.hide-scroll {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}

.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
