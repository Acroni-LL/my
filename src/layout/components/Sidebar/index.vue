<template>
  <div class="has-logo">
    <logo :collapse="true" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :active-text-color="variables.menuActiveText"
        :background-color="variables.menuBg"
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="activeMenu"
        :text-color="variables.menuText"
        :unique-opened="false"
        mode="vertical"
        style="margin-bottom: 60px"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :base-path="route.path"
          :item="route"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  data() {
    return {};
  },
  mounted() {
    // console.log("$route:", this.$route);
    // console.log("$routes:", this.$router.options.routes);
  },
  computed: {
    variables() {
      return variables;
    },
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // console.log(route);
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      // return this.$store.state.settings.sidebarLogo;
      return true;
    },
    isCollapse() {
      return true;
      // return !this.sidebar.opened;
    },
  },
};
</script>
