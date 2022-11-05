<template>
  <div class="fri">
    <div class="yanzhneg">
      <h3>请输入验证码 {{time}}</h3>
      <span>{{num}}</span>
      <div class="uu">
        <div v-for="(item,index) in  random" :key="index">
          <input type="text" v-model="item.val" @input="input(index)" ref="input" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      str: "",
      data1: "",
      time: 60,
      tt: null,
      i: 0,
      random: [
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" }
      ]
    };
  },

  created() {
    this.getrandom();
  },

  methods: {
    input(index) {
      // console.log(index < this.random.length - 1);

      if (index < this.random.length - 1) {
        console.log(this.$refs.input[index].value);
        if (this.$refs.input[index].value) {
          this.str += this.$refs.input[index].value;
          index = index + 1;
          this.$nextTick(() => {
            this.$refs.input[index].focus();
          });
        }
      } else {
        this.str += this.$refs.input[index].value;
        this.yan();
        this.str = "";
      }
      //   console.log(this.$refs.input);
    },
    async yan() {
      const { data: res } = await this.$axios({
        url: "/proving",
        method: "post",
        data: {
          num: this.str,
          idnum: this.data1.idnum,
          index: this.data1.insertId
        }
      });
      // console.log(res.msg);
      if (res.msg == "验证通过" && res.status == 200) {
        this.$message({
          type: "success",
          message: res.msg
        });
        this.$root.switch = false;
        this.clearInterval(this.tt);
      } else {
        this.$message({
          type: "error",
          message: res.msg
        });
        // console.log(this.$refs.input[0].value );
        if (this.$refs.input[0].value != null) {
          //清空值
          setTimeout(() => {
            this.random.forEach(item => {
              item.val = "";
            });
            //聚焦点第一个输入框
            this.$refs.input[0].focus();
            clearInterval(this.tt);
            this.time = 60;
            this.getrandom();
          }, 1000);
        }
      }
    },
    async getrandom() {
      const { data: res } = await this.$axios({
        url: "/random",
        method: "get"
      });
       console.log(res);
      this.data1 = res.data;
      this.num = res.data.rondomNumber;
      const that = this;
      this.tt = setInterval(() => {
        console.log(this.time);
        if (this.time > 0) {
          this.time--;
        } else {
          that.clearInterval(this.tt);
          this.tt = null;
        }
      }, 1000);
    }
  }
};
</script >

<style lang="less" scoped>
.fri {
  position: absolute;
  top: 10%;
  left: 40%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.fri .yanzhneg {
  width: 600px;
  height: 300px;
  background-color: rgb(252, 242, 242);
  border-radius: 10px;
  z-index: 99999;
}
.fri .yanzhneg .uu {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-around;
  align-items: center;
}
.fri .yanzhneg .uu div {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(152, 152, 152);
}
span {
  text-align: center;
  height: 40px;
  color: rgb(253, 119, 8);
  width: 100%;
}
input {
  width: 100%;
  height: 100%;
  background-color: rgb(152, 152, 152);
  border: 0;
  border-radius: 10px;
  font-size: 18px;
  text-align: center;
}
</style>