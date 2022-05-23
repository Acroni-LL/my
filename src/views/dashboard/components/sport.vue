<template>
  <div class="container">
    <div class="header">人员运动统计</div>
    <div ref="sport" class="body" />
    <div class="foot" />
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";

export default {
  name: "Sport",
  mixins: [chartsInit],
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.sport);
      const initOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#dddc6b",
            },
          },
        },
        grid: {
          left: "10",
          top: "30",
          right: "10",
          bottom: "10",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
            // data: listTime
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: "bottom",
            offset: 20,
          },
        ],

        yAxis: [
          {
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
              // eslint-disable-next-line no-unused-vars
              formatter: (v, i) => {
                if (v <= 10000) {
                  return v;
                } else {
                  return `${parseInt(v / 10000)}W`;
                }
              },
            },

            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "步数统计",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              color: "#0184d5",
              width: 2,
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            // data: listSteps,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart() {
      const dataOption = {
        xAxis: [
          { data: ["3/26", "3/27", "3/28", "3/29", "3/30", "3/31", "4/1"] },
        ],
        series: [{ data: [5161, 8255, 7308, 7639, 7083, 25068, 4206] }],
      };
      this.chartInstance.setOption(dataOption);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/chart/chart.scss";
</style>
