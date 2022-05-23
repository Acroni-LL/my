<template>
  <div class="container">
    <div class="header">常态化防疫体温监测</div>
    <div ref="epidemic" class="body" />
    <div class="foot" />
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";

export default {
  name: "EpidemicControl",
  mixins: [chartsInit],
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.epidemic);
      const initOption = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function (p) {
            // 其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
        },
        legend: {
          orient: "vertical",
          right: "5%",
          itemWidth: 10,
          itemHeight: 10,
          // data: [ "未佩戴", "正常",'异常'],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
          },
        },
        series: [
          {
            name: "体温统计",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["90%"],
            color: ["#5470C6", "#F31C1C"],
            label: { show: false, position: "center" },
            labelLine: { show: false },
            // data
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart() {
      const dataOption = {
        legend: { data: ["体温正常", "体温异常"] },
        series: [
          {
            data: [
              { name: "体温正常", value: 1000 },
              { name: "体温异常", value: 20 },
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
