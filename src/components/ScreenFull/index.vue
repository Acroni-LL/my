<template>
  <div class="full-screen">
    <svg-icon
      :icon-class="screenState ? 'fullscreen' : 'exit-fullscreen'"
      style="fill: #fff"
      @click="changeScreen"
    />
  </div>
</template>

<script>
// 全屏 document.documentElement.requestFullscreen()
// 退出全屏 document.exitFullscreen()
import ScreenFull from "screenfull";

export default {
  name: "ScreenFull",
  data() {
    return {
      screenState: true,
    };
  },
  mounted() {
    // 页面加载添加事件监听
    window.addEventListener("keydown", this.KeyDown, true);
  },
  beforeDestroy() {
    // 销毁组件之前移除监听事件
    window.removeEventListener("keydown", this.KeyDown);
  },
  methods: {
    //   改变全屏
    changeScreen() {
      // document.documentElement.requestFullscreen()  原生js调用
      //   如果可用 就可以全屏
      // console.log(this.screenState)
      this.screenState = !this.screenState;
      ScreenFull.toggle();
    },
    KeyDown($event) {
      if ($event.keyCode === 122) {
        $event.preventDefault();
        $event.returnValue = false;
        this.changeScreen();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.full-screen {
  cursor: pointer;
}
</style>
