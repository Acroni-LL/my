<template>
  <div class="title-box">
    <div class="title-text">{{ title }}</div>
    <div ref="showTime" class="title-time" />
  </div>
</template>

<script>
// 获取设置中title设置给平台
import { title } from "@/settings";
import dayjs from "dayjs";

export default {
  name: "Title",
  data() {
    return {
      title,
      // 定时器ID
      timeId: "",
    };
  },
  // 激活
  activated() {
    this.dateTime();
  },
  // 失活
  deactivated() {
    clearInterval(this.timeId);
  },
  // 组件即将被销毁
  beforeDestroy() {
    clearInterval(this.timeId);
  },
  methods: {
    /**
     *时间显示函数
     */
    dateTime() {
      const dom = this.$refs.showTime;
      const weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      this.timeId = setInterval(() => {
        const now = new Date();
        const day = now.getDay();
        const week = weeks[day];
        const time = dayjs(now).format("YYYY年MM月DD日 HH:mm:ss");
        dom.innerHTML = `${time} ${week}`;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  &-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: url("~@/assets/common/index/header.png");
    background-size: cover;
  }

  &-text {
    font-size: 2rem;
    text-align: center;
  }

  &-time {
    flex-shrink: 0;
    position: absolute;
    color: #b6b8c6;
    top: 40%;
    right: 5%;
  }
}
</style>
