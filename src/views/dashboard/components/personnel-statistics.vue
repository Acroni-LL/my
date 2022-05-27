<template>
  <div class="t-i-container" v-if="PersonnelStatisticsData.data">
    <div class="t-i-row">
      <div class="t-i-block">
        <div class="top">{{ PersonnelStatisticsData.data.arive }}</div>
        <div class="bottom">今日到园人数</div>
      </div>
      <div class="t-i-block">
        <div class="top">{{ PersonnelStatisticsData.data.leave }}</div>
        <div class="bottom">今日离园人数</div>
      </div>
    </div>
    <div class="t-i-row">
      <div class="t-i-block">
        <div class="top">{{ PersonnelStatisticsData.data.reported }}</div>
        <div class="bottom">体温上报人数</div>
      </div>
      <div class="t-i-block">
        <div class="top">{{ this.PersonnelStatisticsData.data.error }}</div>
        <div class="bottom">体温异常人数</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPersonnelStatisticsData } from "@/api/dashboard/PersonnelStatistics";
export default {
  name: "PersonnelStatistics",
  data() {
    return {
      PersonnelStatisticsData: "",
    };
  },
  created() {
    getPersonnelStatisticsData().then((response) => {
      this.PersonnelStatisticsData = response.data; // ??????
      // console.log(
      //   "this.PersonnelStatisticsData:",
      //   this.PersonnelStatisticsData
      // );
      // console.log("response.data:", response);
    });
  },
};
</script>

<style lang="scss" scoped>
.t-i-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .t-i-row {
    flex: 1;
    display: flex;

    .t-i-block {
      flex: 1;
      display: flex;
      flex-direction: column;

      .top {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: 700;
        color: #ffeb7b;
        border-bottom: 1px solid rgba(25, 186, 139, 0.17);
      }

      .bottom {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
        border-bottom: 1px solid rgba(25, 186, 139, 0.17);
      }
    }
  }

  .t-i-row:nth-child(1) {
    .t-i-block:nth-child(1) {
      border-right: 1px solid rgba(25, 186, 139, 0.17);
    }

    .t-i-block {
      border-top: 1px solid rgba(25, 186, 139, 0.17);
    }
  }

  .t-i-row:nth-child(2) {
    .t-i-block:nth-child(1) {
      border-right: 1px solid rgba(25, 186, 139, 0.17);
    }
  }
}
</style>
