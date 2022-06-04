<template>
  <div :class="classObj" class="app-wrapper">
    <div class="drawer-bg">
      <!-- 不带顶栏 -->
      <!-- 带顶栏 -->
      <div class="hasTopHeader">
        <sidebar class="sidebar-container" style="top: 60px" />
        <top-header
          :avatar="this.$store.state.userInfo.avatar"
          :username="this.$store.state.userInfo.name"
        />
        <div class="main-container">
          <div class="fixed-top-header">
            <!-- <tags-view /> -->
          </div>
        </div>
      </div>
      <app-main style="padding-top: 0" />
    </div>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import AppMain from "./AppMain.vue";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  data() {
    return {
      classObj: {},
    };
  },
  components: {
    TopHeader,
    AppMain,
    Sidebar,
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  // opacity: 0.3;  //意义不明
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

/* TopHeader */
.hasTopHeader {
  padding-top: 60px;

  .fixed-top-header {
    position: fixed;
    top: 60px;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .fixed-top-header + .app-main {
    padding-top: 50px;
  }

  .hasTagsView {
    .fixed-top-header + .app-main {
      /* 84 = navbar + tags-view = 50 + 34 */
      padding-top: 84px;
    }
  }
}

.hideSidebar .fixed-top-header {
  width: calc(100% - 54px);
}
</style>
