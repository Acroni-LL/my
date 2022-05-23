<template>
  <div class="container">
    <div class="header">人员广播统计</div>
    <div ref="broadcast" class="body" />
    <div class="foot" />
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";

export default {
  name: "BroadcastStatistics",
  mixins: [chartsInit],
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.broadcast);
      const initOption = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          // xAxis: {
          type: "value",
        },
        xAxis: {
          // yAxis: {
          type: "category",
          boundaryGap: false,
        },
        series: [
          {
            name: "电游区",
            type: "line",
            stack: "sumList",
            color: "#109CFF",
            smooth: true,
            symbol: "none",
          },
          {
            name: "滑梯区",
            type: "line",
            stack: "winSumList",
            color: "#2ECA74",
            smooth: true,
            symbol: "none",
          },
          {
            name: "剧场区",
            type: "line",
            stack: "stuSumList",
            color: "#FDAB2B",
            smooth: true,
            symbol: "none",
          },
          {
            name: "粘土区",
            type: "line",
            stack: "noSumList",
            color: "#F05A56",
            smooth: true,
            symbol: "none",
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart() {
      const dataOption = {
        legend: { data: ["电游区", "滑梯区", "剧场区", "粘土区"] },
        xAxis: {
          data: [
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
          ],
        },
        series: [
          { data: [0, 0, 0, 0, 7, 0, 0, 10, 6, 0, 0, 0, 10, 10] },
          { data: [1, 0, 3, 0, 7, 0, 5, 0, 7, 0, 0, 0, 3, 3] },
          { data: [0, 0, 2, 0, 0, 0, 4, 0, 0, 1, 0, 0, 2, 0] },
          { data: [0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0] },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/chart/chart.scss";
</style>
