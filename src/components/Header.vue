<template>
  <div :class="value ? 'header-ll' : 'header-ll2'">
    <div class="first">
      <el-tooltip content="k 键快速切换背景色" placement="top" transition>
        <el-switch
          v-model="value"
          active-color="#fff"
          inactive-color="#333"
          :disabled="disableds"
          @change="chang_switch"
        ></el-switch>
      </el-tooltip>
    </div>
    <div class="second">
      <el-menu
        :default-active="activeIndex"
        :class="value? 'el-menu-demo':'el-menu-demo2'"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#333"
        router
      >
        <el-menu-item index="/HelloWorld/Main">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="/HelloWorld/write">写博客</el-menu-item>
          <el-menu-item index="2-2">博客系统</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="/login">登录</el-menu-item>
      </el-menu>
    </div>
    <div class="final">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["gh"],
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input: "",
      value: true,
      time: "",
      disableds: false
    };
  },
  mounted() {
    document.onkeydown = e => {
      if (e.keyCode === 75) {
        this.ChangeColor();
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    chang_switch() {
      this.time = new Date().getHours();
      console.log(this.time);
      console.log(this.value);
      this.$emit("gh", !this.value);
      if (this.time >= 22) {
        (this.value = false), (this.disableds = true);
        this.$message("晚上了，请注意保护眼睛哟");
      }
    },
    ChangeColor() {
      //获取时间，进行比较
      this.time = new Date().getHours();
      this.$emit("gh", this.value);
      if (this.time >= 22) {
        (this.value = false), (this.disableds = true);
        this.$message("晚上了，请注意保护眼睛哟");
      }
      return (this.value = !this.value);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-demo {
  height: 60px;
  color: #fff;
  background-color: #fff;
  line-height: 60px;
  font-size: 14px;
}
.el-menu-demo2 {
  height: 60px;
  color: #fff;
  background-color: #333;
  line-height: 60px;
  font-size: 14px;
}

.el-menu {
  border: 0;
}
.header-ll {
  display: flex;
  justify-content: center;
  background-color: #fff;
  color: #333;
}
.header-ll2 {
  display: flex;
  justify-content: center;
  background-color: #333;
}
.first {
  width: 30%;
  line-height: 60px;
}
.second {
  width: 40%;
  color: #fff;
}

.final {
  width: 30%;
}
.final .el-input {
  width: 50%;
  margin-top: 2%;
}
.el-switch__label el-switch__label--right is-active {
  color: #333;
}
</style>