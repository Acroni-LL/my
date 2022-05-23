<template>
  <div class="has-logo">
    <logo :collapse="false" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu>
        <sidebar-item :item="{}"></sidebar-item>
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
  mounted() {},
  computed: {
    variables() {
      return variables;
    },
    // activeMenu() {
    //   const route = this.$route;
    //   const { meta, path } = route;
    //   // if set path, the sidebar will highlight the path you set
    //   if (meta.activeMenu) {
    //     return meta.activeMenu;
    //   }
    //   return path;
    // },
  },
};
</script>
