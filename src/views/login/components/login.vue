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
        @click="handleLoginInfoFromVuexPOST(loginFormData)"
        >{{ "handleLoginInfoFromVuexPOST" }}
      </el-button>

      <el-checkbox v-model="loginForm.checked">{{
        userInfo.name || "baochi denglu"
      }}</el-checkbox>
    </el-form>
  </div>
</template>

<script>
// import { login } from "@/api/user";
import axios from "axios";
import { mapGetters } from "vuex";
// import qs from "qs";
export default {
  /* eslint-disable*/
  name: "login",
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("请输入正确的密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "abcde",
        password: "1111111",
        checked: false,
      },
      loginFormParams: {
        username: "abcde",
        password: "1111111",
        checked: false,
      },
      loginFormData: {
        username: "abcde",
        password: "1111111",
        checked: false,
      },
      loginRules: {
        username: [
          { required: false, trigger: "blur", message: "请输入用户名" },
        ],
        password: [
          { required: false, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      errVisible: false,
      errText: "用户名或密码错误",
      btnText: "登录",
      btnStatus: false,
      validatorLogin: false,
    };
  },
  methods: {
    handleLoginGET(params) {
      // if(this.btnStatus&&validatorLogin){
      // login(this.loginForm)
      axios({
        method: "GET",
        url: "https://mock.mengxuegu.com/mock/628d9b2ccc411017d3bb5bcb/mock/oauth/token",
        params: params, // URL像这样“https://mock.mengxuegu.com/mock/628d9b2ccc411017d3bb5bcb/mock/oauth/token?username=abcde&password=1111111&checked=false”
        // 其中params“token?username=abcde&password=1111111&checked=false”明文传输
        // 使用params会将params拼接在url中进行传递
      });
      // this.$router.push('/')
      // }
    },
    handleLoginPOSTParams(params) {
      axios({
        method: "POST",
        url: "https://mock.mengxuegu.com/mock/628d9b2ccc411017d3bb5bcb/mock/oauth/token_copy_1654088786479",
        params: params, // 一样的，params会将载荷进行拼接，明文发送
      });
    },
    handleLoginPOSTData(params) {
      axios({
        method: "POST",
        url: "https://mock.mengxuegu.com/mock/628d9b2ccc411017d3bb5bcb/mock/oauth/token_copy_1654088786479",
        data: params, // 传输一个对象
        // 可以通过_req.body拿到
      });
    },
    handleLoginPOSTData2Vuex(params) {
      axios({
        method: "POST",
        url: "https://mock.mengxuegu.com/mock/628d9b2ccc411017d3bb5bcb/mock/oauth/token_copy_1654088786479",
        data: params, // 传输一个对象
        // 可以通过_req.body拿到
      });
    },
    handleLoginInfoFromVuexPOST(params){
      this.$store.dispatch("getUserInfo",params)
      .then(()=>{
        this.$router.push('/index')
      })
      if(this.$store.state.userInfo){

        // this.$router.push('/')
      }
    },
  },
  computed: {
    ...mapGetters(['userInfo'])

  },
  watch: {},
  created() {
  },
  mounted() {
    // imgTest()
// console.log(this.img.a);
    // console.log(this.$refs.password);
    // console.log(this.$refs.loginForm.validate());
  },
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
