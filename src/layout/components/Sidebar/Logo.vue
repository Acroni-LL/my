<template>
  <div :class="{ collapse: collapse }" class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <div v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <!--        <img v-if="logo" :src="logo" alt="" class="sidebar-logo">-->
        <!--        <h1 class="sidebar-title">{{ title }} </h1>-->
      </div>
      <div v-else key="expand" class="sidebar-logo-link" to="/">
        <!--        <img v-if="logo" :src="logo" alt="" class="sidebar-logo">-->
        <h1 class="sidebar-title">{{ title }}</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidebarLogo",
  components: {},
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
    props: {
      collapse: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        title: "综合定位服务管理平台",
        logo: "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png",
      };
    },
    computed: {
      sidebar() {
        // return this.$store.state.app.sidebar;
        return true;
      },
      // device() {
      //   return this.$store.state.app.device;
      // },
    },
    methods: {
      // handleClickOutside() {
      //   this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
      // },
      // toggleSideBar() {
      //   this.$store.dispatch("app/toggleSideBar");
      // },
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0;
    }
  }
}
</style>
