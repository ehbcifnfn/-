<template>
  <div :class="this.bgc ? 'hello1' : 'hello2'">
    <el-container>
      <el-header><Header @gh="gets"></Header></el-header>
      <el-main>
        <Main></Main>
        <!-- <router-view> </router-view> -->
      </el-main>
      
    </el-container>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Main from "./main.vue";

export default {
  name: "HelloWorld",
  components: { Header, Main },
  data() {
    return {
      bgc: "",
    };
  },
  methods: {
    gets(a) {
      this.bgc = a;
      console.log(this.bgc);
      console.log(this.bgc ? "hello1" : "hello2");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-header,
.el-footer {
  text-align: center;
  width: 100%;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  min-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  min-height: 800px;
  height: auto;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.hello1 {
  background-color: #333;
  color: #fff font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
.hello2 {
  background-color: #e9eef3;
  color: #333;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
