<template>
  <div class="site-container">
    <div class="site-header">
      <siteHeader />
    </div>
    <div class="site-body">
      <base-station-management />
    </div>
  </div>
</template>

<script>
import siteHeader from "./components/site-header";

export default {
  name: "Site",
  components: {
    siteHeader,
  },
};
</script>

<style lang="scss" scoped>
.site {
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

  &-body {
    padding: 20px;
    width: 100%;
    height: 80vh;
    border: 1px solid #ebeef5;
    background-color: #fff;
    transition: 0.3s;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    overflow: hidden;
  }
}
</style>
