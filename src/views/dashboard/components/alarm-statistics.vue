<template>
  <div
    v-loading="loading"
    class="behavior-statistics"
    element-loading-background="rgba(11,22,191,0.7)"
    element-loading-spinner="el-icon-loading"
    element-loading-text="拼命加载中"
  >
    <div class="header">告警统计</div>
    <div class="body">
      <div ref="rc1" class="i-body" />
      <div ref="rc2" class="i-body" />
      <div ref="rc3" class="i-body" />
    </div>
    <div class="foot" />
  </div>
</template>

<script>
export default {
  name: "AlarmStatistics",
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.setChart();
  },
  methods: {
    setChart() {
      this.loading = true;
      this.rc1();
      this.rc2();
      this.rc3();
      this.loading = false;
    },
    rc1() {
      const rc1 = this.$echarts.init(this.$refs.rc1);
      const val = 70;
      rc1.setOption({
        title: {
          text: "越界告警",
          top: "4%",
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "400",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function (p) {
            // 其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
        },
        series: [
          {
            name: "",
            type: "pie",
            startAngle: 80,
            // radius: [105, 109],
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
            },
            data: [
              {
                value: val,
                name: "越界告警次数",
                color: "#53C0F9",

                itemStyle: {
                  normal: {
                    borderWidth: 5,
                    color: "#53C0F9",
                    shadowBlur: 20,
                  },
                },
              },
              {
                value: 100 - val,
                name: "C",
                itemStyle: {
                  normal: {
                    color: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  },
                },
              },
            ],
          },
        ],
      });
    },
    rc2() {
      const rc2 = this.$echarts.init(this.$refs.rc2);
      const val = 70;
      rc2.setOption({
        title: {
          text: "滞留告警",
          top: "4%",
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "400",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function (p) {
            // 其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
        },
        series: [
          {
            name: "",
            type: "pie",
            startAngle: 80,
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
            },
            data: [
              {
                value: val,
                name: "滞留告警次数",
                color: "#53C0F9",

                itemStyle: {
                  normal: {
                    borderWidth: 5,
                    color: "#1AD8BA",
                    shadowBlur: 20,
                  },
                },
              },
              {
                value: 100 - val,
                name: "C",
                itemStyle: {
                  normal: {
                    color: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  },
                },
              },
            ],
          },
        ],
      });
    },
    rc3() {
      const rc3 = this.$echarts.init(this.$refs.rc3);
      const val = 70;
      rc3.setOption({
        title: {
          text: "体温异常",
          top: "4%",
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "400",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function (p) {
            // 其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
        },
        series: [
          {
            name: "",
            type: "pie",
            startAngle: 80,
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
            },
            data: [
              {
                value: val,
                name: "体温异常人数",
                color: "#53C0F9",

                itemStyle: {
                  normal: {
                    borderWidth: 5,
                    color: "#D97C09",
                    shadowBlur: 20,
                  },
                },
              },
              {
                value: 100 - val,
                name: "C",
                itemStyle: {
                  normal: {
                    color: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  },
                },
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.behavior-statistics {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 16.5%;
    color: #ffffff;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body {
    flex: 1;
    display: flex;
    justify-content: space-around;

    .i-body {
      width: 33%;
      height: 100%;
    }
  }
}
</style>
