<template>
  <div class="container">
    <div class="header">员工考勤</div>
    <div class="body" ref="line"></div>
    <div class="foot"></div>
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";
export default {
  name: "lineDemo",
  mixins: [chartsInit],
  data() {
    return {};
  },
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.line);
      const initOption = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart() {
      const dataOption = {
        legend: { data: [] },
        xAxis: { data: [] },
        series: [
          {
            data: [],
          },
          {
            data: [],
          },
          {
            data: [],
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      this.chartInstance.resize();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/chart/chart.scss";
.body {
  height: 90%;
}
</style>
