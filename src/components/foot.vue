<template>
  <div class="frist1">
    <div class="block">
      <el-pagination
        background
        :pager-count="7"
        layout="prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :total="10"
        :page-size="1"
      ></el-pagination>
    </div>
    <div class="end">
      <span>© 2022 - 2024 小学生</span>
      <span v-html="weather"></span>
      <span>学习使用,无其他用途</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: ""
    };
  },
  created() {
    // this.ajax();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async ajax() {
      const { data: res } = await this.$axios({
        url: "/api",
        method: "get",
        params: { city: "武汉", appkey: "da39dce4f8aa52155677ed8cd23a6470" }
      });
       console.log(res)
      this.weather =
        "城市" +
        ":" +
        res.result.HeWeather5[0].basic.city +
        "      " +
        "日期" +
        ":" +
        res.result.HeWeather5[0].hourly_forecast[0].date +
        "    " +
        "天气" +
        ":" +
        res.result.HeWeather5[0].hourly_forecast[0].cond.txt;
    }
  }
};
</script>

<style lang="less" scoped>
.frist1 {
  width: 100%;
}
.frist1 .block {
  width: 100%;
  height: 50px;
}
.frist1 .end {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px 10px;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  background-color: #fff;
}
.frist1 .end span {
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-family: "隶书";
  font-style: italic;
  font-weight: 700;
}
</style>