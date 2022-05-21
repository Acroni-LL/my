<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      auto-complete="off"
      class="login-form"
    >
      <div class="title-container">
        <el-alert
          v-if="errVisible"
          :closable="false"
          show-icon
          :title="errText"
          type="error"
        />
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          auto-complete="off"
          name="username"
          placeholder="请输入用户名"
          tabindex="1"
          type="text"
        >
          <span slot="prefix" class="svg-container">
            <svg-icon icon-class="user" />
          </span>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          auto-complete="off"
          name="password"
          placeholder="请输入密码"
          tabindex="2"
          @keyup.enter.native="handleLogin"
        >
          <span slot="prefix" class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <span slot="suffix" class="show-pwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-input>
      </el-form-item>
      <el-button
        style="width: 100%; margin-bottom: 20px"
        type="primary"
        @click="handleLogin"
        >{{ btnText }}
      </el-button>
      <el-checkbox v-model="loginForm.checked">保持登录</el-checkbox>
    </el-form>
  </div>
</template>

<script>
export default {
  /* eslint-disable*/
  name: "login",
  data () {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: "",
        password: "",
        checked: false,
      },
      loginRules: {
        username: [{ required: false, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: false, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      errVisible: false,
      errText: '用户名或密码错误',
      btnText: '登录',
      btnStatus:false,
      validatorLogin:false,
    };
  },
  methods: {
handleLogin(){
  if(this.btnStatus&&validatorLogin){
    this.$router.push('/')
  }
},
  },
  computed: {
  },
  watch:{
  },
  mounted(){
    console.log(this.$refs.password);

  }
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-form {
  padding: 20px;

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      //color: $light_gray;
      //margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      font-weight: 400;
    }
  }

  .svg-container {
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .show-pwd {
    cursor: pointer;
  }
}
</style>
