<template>
  <div class="container">
    <div class="header">人员停留统计</div>
    <div ref="stay" class="body" />
    <div class="foot" />
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";

export default {
  name: "PersonnelStayStatistics",
  mixins: [chartsInit],
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.stay);
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
          {
            data: [
              30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 450, 200, 150, 50,
            ],
          },
          {
            data: [
              25, 45, 40, 55, 85, 80, 110, 100, 300, 200, 500, 300, 80, 20,
            ],
          },
          {
            data: [
              10, 20, 50, 100, 130, 200, 300, 310, 303, 400, 450, 200, 150, 50,
            ],
          },
          {
            data: [
              0, 50, 90, 80, 95, 100, 200, 222, 210, 221, 215, 200, 150, 50,
            ],
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
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
