<template>
  <div class="login-container">
    <login-box />
  </div>
</template>

<script>
import loginBox from "./components/login-box.vue";
export default {
  name: "Login",
  components: {
    loginBox,
  },
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  //background-color: $bg;
  background: url("@/assets/common/loginBackground.svg");
  background-size: cover;
  overflow: hidden;
  position: relative;

  ::v-deep .login-box {
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
