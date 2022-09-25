<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <div class="container">
        <!--背景图片 暂时没找到很好的-->
        <div class="puzzle-rule"><h2>图片密码功能介绍</h2></div>
        <div class="box">
          <div class="img">
            <div class="content-box">
              <img src="../img/图片3.png" />
              <h2>图片密码</h2>
              <div class="size">
                <h3>输入图片，获得密码</h3>
              </div>
              <a @click="light1">Got it !</a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <div class="content-box">
              <img src="../img/图片5.png" />
              <h2>图片加密</h2>
              <div class="size">
                <h3>输入图片进行图片加密</h3>
              </div>
              <a @click="light2">Got it !</a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <div class="content-box">
              <img src="../img/图片4.png" />
              <h2>图片解密</h2>
              <div class="size">
                <h3>输入加密图片进行图片解密</h3>
              </div>
              <a @click="light3">Got it !</a>
            </div>
          </div>
        </div>
        <a @click="play" style="margin-top: 60px">mode1</a>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "rule",
  data() {
    return {
      rule1: "#fff",
      rule2: "#fff",
      rule3: "#fff",
    };
  },
  methods: {
    light1() {
      this.$router.push("/decryption");
    },
    light2() {
      this.$router.push("/encryption");
    },
    light3() {
      this.$router.push("/key");
    },
    play() {
      this.$router.push("/cal");
    },
  },
};
</script>

<style >
.container {
  width: 1000px;
  height: 99%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.puzzle-rule {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.container .box {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 270px;
  height: 450px;
  margin: 20px;
}

.container .box .img {
  width: 270px;
  height: 450px;
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.1),
    -18px -18px 30px rgba(255, 255, 255, 1);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efeeee;
  transition: box-shadow 0.2s ease-out;
  position: relative;
}

.container .box .img img {
  width: 200px;
  height:200px;
  transition: width 0.2s ease-out;
  -moz-user-select: none; /*图片不可被选中*/
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -webkit-user-drag: none; /*图片不可被拖动*/
}

.container .box .img:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1),
    inset -18px -18px 30px rgba(255, 255, 255, 1);
  transition: box-shadow 0.2s ease-out;
}

.container .box .img:hover img {
  width: 180px;
  transition: width 0.2s ease-out;
}

.container .box .content-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 360px;
  text-align: center;
  transition: 1s;
  z-index: 0;
  overflow: hidden;
}

.container .box:hover .content-box {
  height: 380px;
}

.container .box .content-box h2 {
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 20px 8px 8px 8px;
  color: slategrey;
}

.container .box .content-box .size {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.container .box:hover .content-box .size {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.15s;
}

.container .box .content-box .size h3 {
  color: slategrey;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/*最下面的got it按钮 */
.container .box .content-box a {
  display: inline-block;
  padding: 10px 20px;
  background: #efeeee;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px -10px 20px rgba(255, 255, 255, 1);
  border-radius: 50px;
}

.container .box:hover .content-box a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.15s;
}

.container .box .content-box a:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 10px 10px 20px rgba(0, 0, 0, 0.1),
    inset -10px -10px 20px rgba(255, 255, 255, 1);
  transition: box-shadow 0.1s ease-out;
}

.container a {
  display: inline-block;
  padding: 10px 20px;
  background: #43cf7c;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: white;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px -10px 20px rgba(255, 255, 255, 1);
  border-radius: 50px;
}
.container a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.15s;
}
.container a:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(165, 247, 127, 0.8),
    inset 10px 10px 20px rgba(0, 0, 0, 0.1),
    inset -10px -10px 20px rgba(156, 247, 127, 1);
  transition: box-shadow 0.1s ease-out;
}
</style>