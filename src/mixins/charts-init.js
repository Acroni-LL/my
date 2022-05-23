/**
 * 图表共有的属性，钩子函数，和共有方法
 */
export default {
  data() {
    return {
      chartInstance: "",
    };
  },
  mounted() {
    this.getChart();
    this.updateChart();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.screenAdapter);
    this.chartInstance.dispose();
  },
  methods: {
    // 获取echarts实例
    getChart() {},
    // 获取数据后进行更新echarts
    updateChart() {},
    // 窗口变化
    screenAdapter() {
      this.chartInstance.resize();
    },
  },
};
