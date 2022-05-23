<template>
  <div class="container">
    <div class="header">最受欢迎项目统计</div>
    <div ref="sleep" class="body" />
    <div class="foot" />
  </div>
</template>

<script>
import chartsInit from "@/mixins/charts-init";

export default {
  name: "ProjectStatistics",
  mixins: [chartsInit],
  methods: {
    getChart() {
      this.chartInstance = this.$echarts.init(this.$refs.sleep);
      const initOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
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
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
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
            name: "总人数",
            type: "bar",
            stack: "总量",
            barWidth: "35%", // 柱子宽度
            color: "#FFCB89",
            label: {
              show: false,
              position: "insideRight",
            },
            // data: listSleepS,
          },
          {
            name: "总时长",
            type: "bar",
            stack: "总量",
            barWidth: "35%", // 柱子宽度
            color: "#005EA1",
            label: {
              show: false,
              position: "insideRight",
            },
            // data: listSleepQ,
          },
          {
            name: "比值",
            type: "line",
            yAxisIndex: 1,
            stack: "单量",
            color: "#0AD6FF",
            smooth: true,
            symbol: "none",
            label: {
              show: false,
              position: "insideRight",
            },

            // data: listSleepX,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart() {
      const dataOption = {
        legend: { data: ["总人数", "总时长", "比值"] },
        xAxis: {
          data: [
            "3/3",
            "3/4",
            "3/5",
            "3/6",
            "3/7",
            "3/8",
            "3/9",
            "3/10",
            "3/11",
            "3/12",
            "3/13",
            "3/14",
            "3/15",
            "3/16",
            "3/17",
            "3/18",
            "3/19",
            "3/20",
            "3/21",
            "3/22",
            "3/23",
            "3/24",
            "3/25",
            "3/26",
            "3/27",
            "3/28",
            "3/29",
            "3/30",
            "3/31",
            "4/1",
          ],
        },
        series: [
          {
            data: [
              225.0, 255.0, 150.0, 220.0, 205.0, 140.0, 200.0, 185.0, 180.0,
              125.0, 190.0, 185.0, 110.0, 170.0, 185.0, 205.0, 0.0, 0.0, 0.0,
              0.0, 0.0, 0.0, 0.0, 160.0, 225.0, 260.0, 110.0, 175.0, 100.0,
              310.0,
            ],
          },
          {
            data: [
              245.0, 210.0, 95.0, 230.0, 180.0, 70.0, 130.0, 150.0, 110.0,
              155.0, 225.0, 175.0, 120.0, 250.0, 235.0, 220.0, 0.0, 0.0, 0.0,
              0.0, 0.0, 0.0, 0.0, 170.0, 175.0, 190.0, 130.0, 190.0, 250.0,
              150.0,
            ],
          },
          {
            data: [
              0.48, 0.55, 0.61, 0.49, 0.53, 0.67, 0.61, 0.55, 0.62, 0.45, 0.46,
              0.51, 0.48, 0.4, 0.44, 0.48, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
              0.48, 0.56, 0.58, 0.46, 0.48, 0.29, 0.67,
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
