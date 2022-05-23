<template>
  <div class="container">
    <div class="header">员工考勤</div>
    <div ref="stay" class="body" />
    <div class="foot" />
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";

export default {
  name: "Attendance",
  mixins: [chartsInit],
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.stay);
      const initOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          // data: ["正常", "异常", "旷课"],
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          type: "value",
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },

          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)",
            },
          },
          // data: listTime,
        },
        series: [
          {
            name: "正常",
            type: "bar",
            stack: "总量",
            color: "#5EF15A",
            // data: listZcS,
          },
          {
            name: "异常",
            type: "bar",
            stack: "总量",
            color: "#87CEFA",
            // data: listYcS,
          },
          {
            name: "旷工",
            type: "bar",
            stack: "总量",
            color: "#F2765A",
            // data:listKcS,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart() {
      const dataOption = {
        legend: { data: ["正常", "异常", "旷工"] },
        xAxis: { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
        series: [
          {
            data: [
              100, 98, 99, 97, 101, 103, 105, 110, 109, 108, 106, 109, 105, 107,
              106,
            ],
          },
          { data: [9, 10, 11, 13, 9, 3, 4, 0, 1, 2, 2, 1, 2, 2, 2] },
          { data: [1, 2, 0, 0, 0, 4, 1, 0, 0, 1, 3, 0, 3, 1, 2] },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    // 窗口变化
    screenAdapter() {
      this.chartInstance.resize();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/chart/chart.scss";

.container {
  width: 100%;
  height: 100%;

  .header {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body {
    height: 90%;
  }
}
</style>
