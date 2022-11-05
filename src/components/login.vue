<template>
  <div class="login">
    <!-- 搭建结构 -->
    <div class="container switch">
      <!-- 注册页面 -->
      <div class="container-form container-signup">
        <el-form :model="registerdata" :rules="rules" ref="ruleForm" class="form">
          <h2 class="form-title">注册</h2>
          <el-form-item prop="username">
            <el-input
              v-model="registerdata.username"
              placeholder="User"
              class="input"
              style="width: 500px"
            ></el-input>
          </el-form-item>
          <el-form-item prop="Email">
            <el-input
              v-model="registerdata.Email"
              placeholder="Email"
              class="input"
              style="width: 500px"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="registerdata.password"
              placeholder="Password"
              class="input"
              style="width: 500px"
            ></el-input>
          </el-form-item>
          <button class="submit" @click="register">sign up</button>
        </el-form>
      </div>
      <!-- 登录页面 -->
      <div class="container-form container-signin">
        <el-form :model="loginForm" :rules="rules" ref="ruleForm" class="form">
          <h2 class="form-title">登录</h2>

          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="User"
              class="input"
              style="width: 500px"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="Password"
              class="input"
              style="width: 500px"
              show-password
            ></el-input>
          </el-form-item>
          <a href="javascript:void(0);">forgot your password?</a>
          <button class="submit" @click="login">sign in</button>
        </el-form>
      </div>
      <!-- 覆盖层 -->
      <div class="container-overlay">
        <div class="overlay">
          <div class="overlay-slide overlay-left">
            <button class="submit" id="goSignIn" @click="login1">sign in</button>
          </div>
          <div class="overlay-slide overlay-right">
            <button class="submit" id="goSignUp" @click="register1">sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        Email: ""
      },
      registerdata: {
        username: "",
        password: ""
      },
      x: "",
      num1: 0,
      num2: 0,

      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 7, message: "长度在 3 到 7 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在6到 10个字符", trigger: "blur" }
          //   { validator: validatePass, trigger: "blur" },
        ],
        Email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },

  methods: {
    login1() {
      this.num1++;
      const goSignIn = document.querySelector("#goSignIn");
      const goSignUp = document.querySelector("#goSignUp");
      // 获取被切换的样式类
      const container = document.querySelector(".container");
      // 添加点击事件
      container.classList.remove("switch");
    },
    async login() {
      // const token = sessionStorage.getItem("token");
      // console.log(token != null);
      if (sessionStorage.getItem("token")) {
        this.$message({
          message: "您已登录，请勿重复登录",
          type: "success"
        });
      } else {
        let { data: res } = await this.$axios({
          method: "post",
          url: "/login",
          data: {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
        });
        // console.log(this.num1);

        if (res.status == 200) {
          this.$message({
            message: res.msg,
            type: "success"
          });
          sessionStorage.setItem("token", "Bearer " + res.token);
          sessionStorage.setItem("userID", +res.id);
          this.$router.push("/HelloWorld/show");
        } else {
          this.$message({
            message: res.msg,
            type: "warning"
          });
        }

        (this.loginForm.username = ""), (this.loginForm.password = "");
      }
    },
    register1() {
      this.num2++;
      const goSignIn = document.querySelector("#goSignIn");
      const goSignUp = document.querySelector("#goSignUp");
      // 获取被切换的样式类
      const container = document.querySelector(".container");
      container.classList.add("switch");
    },
    async register() {
      let { data: res } = await this.$axios({
        method: "post",
        url: "/register",
        data: {
          username: this.registerdata.username,
          password: this.registerdata.password,
          Email: this.registerdata.Email
        }
      });
      console.log(this.num2);
      if (res.status == 200) {
        this.$message({
          message: res.msg,
          type: "success"
        });
        (this.registerdata.username = ""), (this.registerdata.password = "");
        this.registerdata.Email = "";
      } else {
        this.$message({
          message: res.msg,
          type: "warning"
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://i.loli.net/2021/10/24/gkIC45ZqmLBRSAD.jpg") no-repeat
    fixed center;
  background-size: cover;
  // background-color: rgb(143, 74, 255);
  height: 940px;
  width: 100%;
}

/* 清除所有元素内外边距 转换为c3盒子模型 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 清除input、button默认边框以及点击高亮 */
input,
button {
  outline: none;
  border: none;
}
/* 清除a标签默认下划线 颜色设置为#333 */
a {
  text-decoration: none;
  color: #333;
  margin: 1.25rem 0;
}
/* 页面整体样式 */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("../img/login.jpg") no-repeat fixed center;
  background-size: cover;
}
/* 盒子样式 */
.container {
  position: relative;
  width: 60vw;
  height: 70vh;
  background-color: #e9e9e9;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3),
    0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
}
/* 将两个form表单设置绝对定位 */
.container-form {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.5s ease-in-out;
}
/* 设置注册页样式 */
.container-signup {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}
/* 设置登录页样式 */
.container-signin {
  left: 0;
  width: 50%;
  z-index: 2;
  opacity: 1;
}
/* 默认显示signup注册页，通过操作switch类名 显示登录页 */
.container.switch .container-signup {
  transform: translateX(100%);
  z-index: 5;
  opacity: 1;
}
.container.switch .container-signin {
  transform: translateX(100%);
  opacity: 0;
}
/* 设置覆盖层 */
.container-overlay {
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
  z-index: 999;
}
/* 设置显示背景图 */
.overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: url("https://i.loli.net/2021/10/24/gkIC45ZqmLBRSAD.jpg") no-repeat
    fixed center;
  background-size: cover;
  transition: transform 0.5s ease-in-out;
  /* 完工！ */
}
/* 默认左边显示 通过操作switch类名显示登录页 */
.container.switch .container-overlay {
  transform: translateX(-100%);
}
.container.switch .overlay {
  transform: translateX(50%);
}
/* 设置切换按钮页样式 */
.overlay-slide {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  transition: transform 0.5s ease-in-out;
}
/* 这一块在最后讲解 */
/* 这里的意思就是让按钮跟随页面一起进行移动 如果不加会有点难看 */
/* 是不是很难看！ */
.overlay-left {
  transform: translateX(-20%);
}
.overlay-right {
  transform: translateX(0);
  right: 0;
}
.container.switch .overlay-left {
  transform: translateX(0);
}
.container.switch .overlay-right {
  transform: translateX(20%);
}
/* 设置表单内元素样式 */
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
}

/* 设置input标签样式 */
.el-input {
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem;
}
/* 设置表单标题样式 */
.form-title {
  font-weight: 300;
  margin-bottom: 1rem;
}
.input {
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem;
}
/* 设置按钮样式 */
.submit {
  padding: 1rem 3rem;
  background-image: -webkit-linear-gradient(40deg, #0367a6 0%, #008997 70%);
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.1s ease-in-out;
}
/* 偷偷添加个小手  对了！ */
/* 只设置表单按钮的外边距 */
.form > .submit {
  margin-top: 1.5rem;
}
/* 设置按钮按下样式 */
.submit:active {
  transform: scale(0.95);
}

/* 目前还看不出效果 我们去设置js把！ */
/* 过渡已经加好了 但是有些小问题 就是按钮透明度  因为两个页面没有对称
导致的 我们再看一下*/
/* 这样是不是稍微好一些了呢 整体已经完成！ */
</style>