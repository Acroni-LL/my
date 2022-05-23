<template>
  <div class="container">
    <div class="header">人员实时统计</div>
    <div ref="location" class="body" />
    <div class="foot" />
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";

export default {
  name: "PersonnelLocationStatistics",
  mixins: [chartsInit],
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.location);
      const initOption = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          right: "5%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
          },
        },
        series: [
          {
            name: "位置停留统计",
            type: "pie",
            radius: [0, "55%"],
            label: { show: false, position: "center" },
            labelLine: { show: false },
            // color: ['#5CD860', '#F8CE54', '#5AE5F1'],
            color: ["#41E3D4", "#FDAB2B", "#FE776C", "#7509F1"],

            // data: into
          },
          {
            name: "位置停留统计",
            type: "pie",
            radius: ["70%", "90%"],
            label: { show: false, position: "center" },
            labelLine: { show: false },
            // color: ['#A285D2', '#FF9158', '#6C5AF1', '#5AE5F1'],
            color: ["#00C79A", "#AFD527", "#7509F1"],
            // data: out
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    async updateChart() {
      const dataOption = {
        legend: { data: ["电游区", "滑梯区", "剧场区", "粘土区"] },
        series: [
          {
            data: [
              { name: "电游区", value: 300 },
              { name: "滑梯区", value: 300 },
            ],
          },
          {
            data: [
              { name: "剧场区", value: 300 },
              { name: "粘土区", value: 300 },
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
</style>
