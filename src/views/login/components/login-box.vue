<template>
  <div class="login-box">
    <login />
  </div>
</template>

<script>
import login from "./login";

export default {
  name: "LoginBox",
  components: {
    login,
  },
};
</script>
<style lang="scss" scoped>
.login-box {
  background: #ffffff;
  width: 400px;
  max-width: 100%;
  height: 350px;
  border-radius: 10px;
  //padding: 160px 35px 0;
}
</style>
