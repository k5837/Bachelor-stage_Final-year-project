<template>
  <div>
    <div class="timers">
      <span id="minute">10</span>
      <span id="second">00</span>
      <!-- <span id="mil">00</span><br> -->
      <br />
      <label id="kaishitishi"
        >点击开始考试后，请在10分钟内完成考试，考试过程中不能暂停。</label
      >
      <br />
      <input type="button" value="开始考试" id="btn" @click="start_timer()" />
    </div>
    <div id="kaoshiqingkuang" align="center" style="display: none">
      <label id="totalResult"></label>
    </div>
    <div id="timuxunhao" align="center" style="display: none">
      <!-- style="display: none" -->
      <input type="button" id="timu1" value="题目1" @click="button1()" />
      &nbsp;
      <input type="button" id="timu2" value="题目2" @click="button2()" />
      &nbsp;
      <input type="button" id="timu3" value="题目3" @click="button3()" />
      &nbsp;
      <input type="button" id="timu4" value="题目4" @click="button4()" />
    </div>
    <br>

    <!-- //pscan题目 -->
    <div id="pscan" style="display: none">
      <!-- style="display: none;" -->
      <div align="center">
        <label id="pscanResult"></label>
        <label id="pscanHOUXUHOUXU"></label>
      </div>
      <!-- 题目部分 -->
      <div class="card2" align="center">
        <h3 align="center">题目</h3>
        <table>
          <tr>
            请完成以下扫描的参数设置：
          </tr>
          <tr>
            <td>设置通信协议为：</td>
            <td>SCPI</td>
          </tr>
          <tr>
            <td>扫描方式为：</td>
            <td>全景扫描</td>
          </tr>
          <tr>
            <td>设置起始频率为：</td>
            <td>
              <label id="pscan_startF"></label>
              MHz
            </td>
          </tr>
          <tr>
            <td>设置终止频率为：</td>
            <td>
              <label id="pscan_stopF"></label>
              MHz
            </td>
          </tr>
          <tr>
            <td>设置步进为：</td>
            <td>
              <label id="pscan_stepF"></label>
              kHz
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <!-- //pscan答题部分 -->
      <div class="card2" align="center">
        <table id="pscanTbale1">
          <tr>
            <h3 align="center">答题</h3>
          </tr>

          <tr>
            <td>通信协议：</td>
            <td>
              <input type="text" id="pcan_xieyi" />
            </td>
          </tr>
          <tr>
            <td>扫描方式：</td>
            <td>
              <select id="pscan_saomiao">
                <option value="PSCAN">PSCAN</option>
                <option value="FSCAN">FSCAN</option>
                <option value="MSCAN">MSCAN</option>
                <option value="FFM">FFM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>FREQ:PSC:STAR:</td>
            <td>
              <input type="text" id="pscan_startFreq" />MHz
            </td>
          </tr>
          <tr>
            <td>FREQ:PSC:STOP:</td>
            <td>
              <input type="text" id="pscan_stopFreq" />MHz
            </td>
          </tr>
          <tr>
            <td>PSC:STEP:</td>
            <td>
              <input type="text" id="pscan_stepFreq" />
              kHz
            </td>
          </tr>
        </table>
        <div align="center">
          <input
            type="button"
            id="pscanButton"
            value="确定"
            @click="comparePscan()"
          />
        </div>
        <br />
        <div id="pscanHOUXU1" style="display: none">
          <label>结合频谱图回答下列问题</label>
          <table>
            <tr>
              <td>1、下列哪个频段有信号且最强：</td>
              <td>
                <select id="pscan_1">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label id="pscan_11"></label>
              </td>
            </tr>
          </table>
          <div align="center">
            <input
              type="button"
              id="pscanhouxu"
              value="确定"
              @click="comparePscanHOUXU()"
            />
          </div>
        </div>
      </div>
      <br />
      <br />

      <br />
      <div class="card3">
        <!-- //pscan对应图片显示区域 -->
        <div id="pscanimg" style="display: none">
          <!-- style="display: none" -->
          <div class="imgBox">
            <img class="img-slide img1" id="PSCANIMG1" alt="1" />
            <img class="img-slide img2" id="PSCANIMG2" alt="2" />
            <img class="img-slide img3" id="PSCANIMG3" alt="3" />
            <img class="img-slide img4" id="PSCANIMG4" alt="4" />
            <img class="img-slide img5" id="PSCANIMG5" alt="5" />
          </div>
        </div>
      </div>
    </div>
    <!-- //mscan题目 -->
    <div id="mscan" style="display: none">
      <div align="center">
        <label id="mscanResult"></label>
        <label id="mscanHOUXU"></label>
      </div>
      <div class="card2" align="center">
        <h3 align="center">题目</h3>
        <table align="center">
          <tr>
            请完成以下扫描的参数设置：
          </tr>
          <tr>
            <td>设置通信协议为：</td>
            <td>SCPI</td>
          </tr>
          <tr>
            <td>扫描方式为：</td>
            <td>离散扫描</td>
          </tr>
          <tr>
            <td>扫描参数为</td>
            <td>
              <label id="mscancanshu"></label>
              MHz
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />

      <!-- 答题部分 -->
      <div class="card2" align="center">
        <h3 align="center">答题</h3>
        <table id="mscanTable1">
          <tr>
            <td>通信协议：</td>
            <td>
              <input type="text" id="mscan_xieyi" />
            </td>
          </tr>
          <tr>
            <td>扫描方式为：</td>
            <td>
              <select id="mscan_saomiao">
                <option value="PSCAN">PSCAN</option>
                <option value="FSCAN">FSCAN</option>
                <option value="MSCAN">MSCAN</option>
                <option value="FFM">FFM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>扫描频率：</td>
            <td>
              <input type="text" id="mscan_canshu" />
              MHz
            </td>
          </tr>
        </table>
        <div align="center">
          <input
            type="button"
            id="mscanButton"
            value="确定"
            @click="compareMscan()"
          />
        </div>
        <div id="mscanHouxutimu" style="display: none" align="center">
          <label>结合频谱图回答下列问题</label>
          <br />
          <label>如果信号门限为20，请问哪些频率可能有信号(MHz)：</label>
          <input type="text" id="mscan_houxu" />
          <br />
          <input
            type="button"
            id="mscanButtonhouxu"
            value="确定"
            @click="compareMscanHouxu()"
          />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="card4">
        <!-- //mscan对应图片显示区域 -->
        <div id="mscanimg" style="display: none">
          <!-- style="display: none" -->
          <div class="imgBox">
            <img class="img-slide2 img1" id="MSCANIMG1" alt="1" />
            <img class="img-slide2 img2" id="MSCANIMG2" alt="2" />
            <img class="img-slide2 img3" id="MSCANIMG3" alt="3" />
            <img class="img-slide2 img4" id="MSCANIMG4" alt="4" />
            <img class="img-slide2 img5" id="MSCANIMG5" alt="5" />
            <img class="img-slide2 img6" id="MSCANIMG6" alt="6" />
            <img class="img-slide2 img7" id="MSCANIMG7" alt="7" />
            <img class="img-slide2 img8" id="MSCANIMG8" alt="8" />
            <img class="img-slide2 img9" id="MSCANIMG9" alt="9" />
            <img class="img-slide2 img10" id="MSCANIMG10" alt="10" />
          </div>
        </div>
      </div>
    </div>
    <!-- //ffm题目 -->
    <div id="ffm" style="display: none">
      <div align="center">
        <label id="ffmResult"></label>
        <label id="ffmResult2"></label>
      </div>
      <div class="card2" align="center">
        <h3 align="center">题目</h3>
        <table>
          <tr>
            请完成以下扫描的参数设置：
          </tr>
          <tr>
            <td>设置通信协议为：</td>
            <td>SCPI</td>
          </tr>
          <tr>
            <td>扫描方式为：</td>
            <td>单频测量</td>
          </tr>
          <tr>
            <td>中心频率为：</td>
            <td>
              <label id="ffm_centerF"></label>
              MHz
            </td>
          </tr>
          <tr>
            <td>调解带宽为：</td>
            <td>
              <label id="ffm_bandF"></label>
              kHz
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <!-- 答题部分 -->
      <div class="card2" align="center">
        <h3 align="center">答题</h3>
        <table id="ffmTable22">
          <tr>
            <td>通信协议：</td>
            <td>
              <input type="text" id="ffm_xieyi" />
            </td>
          </tr>
          <tr>
            <td>扫描方式为：</td>
            <td>
              <select id="ffm_saomiao">
                <option value="PSCAN">PSCAN</option>
                <option value="FSCAN">FSCAN</option>
                <option value="MSCAN">MSCAN</option>
                <option value="FFM">FFM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>FREQuency:</td>
            <td>
              <input type="text" id="ffm_CF" />
              MHz
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>BAND:</td>
            <td>
              <input type="text" id="ffm_BF" />
              kHz
            </td>
          </tr>
        </table>
        <div align="center">
          <input
            type="button"
            id="ffmButton"
            value="确定"
            @click="compareFfm()"
          />
        </div>
        <div id="ffmTable" style="display: none" align="center">
          <label>结合频谱图回答下列问题</label>
          <br />
          <table>
            <tr>
              <td>
                <label>该单频测量显示宽度大致为：</label>
              </td>
              <td>
                <select id="ffm_1">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label id="ffm_2"></label>
              </td>
            </tr>
          </table>
          <br />
          <input
            type="button"
            id="FFMHOUXU"
            value="确定"
            @click="compareFfmHOUXU()"
          />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="card4">
        <!-- 此处加ffm对应数据图片 -->
        <div id="ffmimg" style="display: none">
          <!-- style="display: none" -->
          <div class="imgBox">
            <img class="img-slide3 img1" id="FFMIMG1" alt="1" />
            <img class="img-slide3 img2" id="FFMIMG2" alt="2" />
            <img class="img-slide3 img3" id="FFMIMG3" alt="3" />
            <img class="img-slide3 img4" id="FFMIMG4" alt="4" />
            <img class="img-slide3 img5" id="FFMIMG5" alt="5" />
          </div>
        </div>
      </div>
    </div>
    <!-- //fscan题目 -->
    <div id="fscan" style="display: none">
      <div align="center">
        <label id="fscanResult"></label>
        <label id="fscanHOUXU"></label>
      </div>
      <div class="card2" align="center">
        <h3 align="center">题目</h3>
        <table>
          <tr>
            请完成以下扫描的参数设置：
          </tr>
          <tr>
            <td>设置通信协议为：</td>
            <td>SCPI</td>
          </tr>
          <tr>
            <td>扫描方式为：</td>
            <td>频率扫描</td>
          </tr>
          <tr>
            <td>设置起始频率为：</td>
            <td>
              <label id="fscan_startF"></label>
              MHz
            </td>
          </tr>
          <tr>
            <td>设置终止频率为：</td>
            <td>
              <label id="fscan_stopF"></label>
              MHz
            </td>
          </tr>
          <tr>
            <td>设置步进为：</td>
            <td>
              <label id="fscan_stepF"></label>
              kHz
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <!-- 答题部分 -->
      <div class="card2" align="center">
        <h3 align="center">答题</h3>
        <table id="fscanTTT">
          <tr>
            <td>通信协议：</td>
            <td>
              <input type="text" id="fscan_xieyi" />
            </td>
          </tr>
          <tr>
            <td>扫描方式为：</td>
            <td>
              <select id="fscan_saomiao">
                <option value="PSCAN">PSCAN</option>
                <option value="FSCAN">FSCAN</option>
                <option value="MSCAN">MSCAN</option>
                <option value="FFM">FFM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>FREQ:STAR:</td>
            <td>
              <input type="text" id="fscan_startFreq" />
              MHz
            </td>
          </tr>
          <tr>
            <td>FREQ:STOP:</td>
            <td>
              <input type="text" id="fscan_stopFreq" />
              MHz
            </td>
          </tr>
          <tr>
            <td>STEP:</td>
            <td>
              <input type="text" id="fscan_stepFreq" />
              kHz
            </td>
          </tr>
        </table>
        <div align="center">
          <input
            type="button"
            id="fscanButton"
            value="确定"
            @click="compareFscan()"
          />
        </div>
        <div id="fscanTable" style="display: none" align="center">
          <label>结合频谱图回答下列问题</label>
          <table>
            <tr>
              <td>
                <label>如果接收机的门限电平值设为：</label>
                <label id="fscan_1"></label>
                <label id="fscan_2"></label>
              </td>
              <td>
                <select id="fscan_3">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label id="fscan_4"></label>
              </td>
            </tr>
          </table>
          <input
            type="button"
            id="FSCANHOUXU"
            value="确定"
            @click="compareFscanHOUXU()"
          />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="card4">
        <div id="fscanimg" style="display: none">
          <!-- style="display: none" -->
          <div class="imgBox">
            <img class="img-slide4 img1" id="FSCANIMG1" alt="1" />
            <img class="img-slide4 img2" id="FSCANIMG2" alt="2" />
            <img class="img-slide4 img3" id="FSCANIMG3" alt="3" />
            <img class="img-slide4 img4" id="FSCANIMG4" alt="4" />
            <img class="img-slide4 img5" id="FSCANIMG5" alt="5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "kaoshia",
  data() {
    return {
      index: 0,
      index2: 0,
      index3: 0,
      index4: 0,
      id: 101811, //用户ID
      pscanZZ: false,
      pscanZZ2: false,
      mscanZZ1: false,
      mscanZZ2: false,
      ffmZZ: false,
      ffmZZ2: false,
      fscanZZ: false,
      fscanZZ2: false,
      maxMinute: 10 * 60, // 10分钟,以秒为单位计算
      timer: null, //清除定时器变量
      // flag: true, //开关
      //分数
      zongfenshu: 0,
      pscanFenshu: 0,
      mscanFenshu: 0,
      ffmFenshu: 0,
      fscanFenshu: 0,
      pscan_canshu: "",
      //number: randomNum(0, 4),
      pscanpath: "img/PSCAN/" + this.pscan_canshu + "/",
      PSCANsrc1: this.pscanpath + "1.png",
      PSCANsrc2: this.pscanpath + "2.png",
      PSCANsrc3: this.pscanpath + "3.png",
      PSCANsrc4: this.pscanpath + "4.png",
      PSCANsrc5: this.pscanpath + "5.png",
      pscan1S: "",
      list: "",
      startFreq: "",
      stopFreq: "",
      stepFreq: "",
      mscanpath: "",
      mscan_canshu: "",
      MSCANsrc1: this.mscanpath + "1.png",
      MSCANsrc2: this.mscanpath + "2.png",
      MSCANsrc3: this.mscanpath + "3.png",
      MSCANsrc4: this.mscanpath + "4.png",
      MSCANsrc5: this.mscanpath + "5.png",
      MSCANsrc6: this.mscanpath + "6.png",
      MSCANsrc7: this.mscanpath + "7.png",
      MSCANsrc8: this.mscanpath + "8.png",
      MSCANsrc9: this.mscanpath + "9.png",
      MSCANsrc10: this.mscanpath + "10.png",

      ffm_canshu: "",
      ffmpath: "img/FFM/" + this.ffm_canshu + "/",
      FFMsrc1: this.ffmpath + "1.png",
      FFMsrc2: this.ffmpath + "2.png",
      FFMsrc3: this.ffmpath + "3.png",
      FFMsrc4: this.ffmpath + "4.png",
      FFMsrc5: this.ffmpath + "5.png",
      ffmlist: "",
      centerFreq: "",
      spanFreq: "",
      bandFreq: "",

      fscan_canshu: "",
      flist: "",
      fstartFreq: "",
      fstopFreq: "",
      fstepFreq: "",
    };
  },
  mounted() {},
  methods: {
    //PSCAN效果
    ChangeImg() {
      this.index++;
      var a = document.getElementsByClassName("img-slide");
      if (this.index >= a.length) this.index = 0;
      for (var i = 0; i < a.length; i++) {
        a[i].style.display = "none";
      }
      a[this.index].style.display = "block";
    },
    //MSCAN显示
    ChangeImg2() {
      this.index2++;
      var b = document.getElementsByClassName("img-slide2");
      if (this.index2 >= b.length) this.index2 = 0;
      for (var i = 0; i < b.length; i++) {
        b[i].style.display = "none";
      }
      b[this.index2].style.display = "block";
    },
    //FFM显示
    ChangeImg3() {
      this.index3++;
      var c = document.getElementsByClassName("img-slide3");
      if (this.index3 >= c.length) this.index3 = 0;
      for (var i = 0; i < c.length; i++) {
        c[i].style.display = "none";
      }
      c[this.index3].style.display = "block";
    },
    //fscan效果
    ChangeImg4() {
      this.index4++;
      var d = document.getElementsByClassName("img-slide4");
      if (this.index4 >= d.length) this.index4 = 0;
      for (var i = 0; i < d.length; i++) {
        d[i].style.display = "none";
      }
      d[this.index4].style.display = "block";
    },
    //计时
    countTime() {
      if (this.maxMinute >= 0) {
        console.log("countTime test");
        this.maxMinute--;
        document.getElementById("minute").innerHTML = this.addzero(
          Math.floor(this.maxMinute / 60)
        ); //分钟
        document.getElementById("second").innerHTML = this.addzero(
          Math.floor(this.maxMinute % 60)
        ); //秒
        if (this.maxMinute == 0) {
          zongfenshu = pscanFenshu + mscanFenshu + ffmFenshu + fscanFenshu;
          alert("考试结束\n总分数为：" + zongfenshu);
          //pscan部分禁止填写。
          document.getElementById("pcan_xieyi").setAttribute("disabled", true);
          document
            .getElementById("pscan_saomiao")
            .setAttribute("disabled", true);
          document
            .getElementById("pscan_startFreq")
            .setAttribute("disabled", true);
          document
            .getElementById("pscan_stopFreq")
            .setAttribute("disabled", true);
          document
            .getElementById("pscan_stepFreq")
            .setAttribute("disabled", true);
          document.getElementById("pscanButton").setAttribute("disabled", true);
          //mscan部分禁止填写
          document.getElementById("mscan_xieyi").setAttribute("disabled", true);
          document
            .getElementById("mscan_saomiao")
            .setAttribute("disabled", true);
          document
            .getElementById("mscan_canshu")
            .setAttribute("disabled", true);
          document.getElementById("mscanButton").setAttribute("disabled", true);
          document.getElementById("mscan_houxu").setAttribute("disabled", true);
          document
            .getElementById("mscanButtonhouxu")
            .setAttribute("disabled", true);
          //ffm部分禁止填写
          document.getElementById("ffm_xieyi").setAttribute("disabled", true);
          document.getElementById("ffm_saomiao").setAttribute("disabled", true);
          document.getElementById("ffm_CF").setAttribute("disabled", true);
          // document.getElementById("ffm_SF").setAttribute("disabled", true);
          document.getElementById("ffm_BF").setAttribute("disabled", true);
          document.getElementById("ffmButton").setAttribute("disabled", true);
          //fscan部分禁止填写
          document.getElementById("fscan_xieyi").setAttribute("disabled", true);
          document
            .getElementById("fscan_saomiao")
            .setAttribute("disabled", true);
          document
            .getElementById("fscan_startFreq")
            .setAttribute("disabled", true);
          document
            .getElementById("fscan_stepFreq")
            .setAttribute("disabled", true);
          document
            .getElementById("fscan_stopFreq")
            .setAttribute("disabled", true);
          document.getElementById("fscanButton").setAttribute("disabled", true);
          var total = "考试结束，考试总分为：";
          total += zongfenshu;
          document.getElementById("totalResult").innerHTML = total;
          // writeTotxt(id, pscanFenshu, mscanFenshu, ffmFenshu, fscanFenshu, zongfenshu);
          document.getElementById("kaoshiqingkuang").style.display = "";
        }
      }
    },
    start_timer() {
      //开启定时器倒计时
      this.timer = setInterval(this.countTime, 1000);
      //设置定时器，每隔两秒切换一张图片PSCAN
      setInterval(this.ChangeImg, 1000);
      setInterval(this.ChangeImg2, 1000);
      setInterval(this.ChangeImg3, 1000);
      setInterval(this.ChangeImg4, 1000);
      this.getPscan_canshu();
      this.getMscan_canshu();
      this.getFfm_canshu();
      this.getFscan_canshu();
      document.getElementById("btn").style.display = "none";
      document.getElementById("kaishitishi").style.display = "none";
      document.getElementById("pscan").style.display = "";
      document.getElementById("mscan").style.display = "none";
      document.getElementById("ffm").style.display = "none";
      document.getElementById("fscan").style.display = "none";
      document.getElementById("timuxunhao").style.display = "";
    },
    addzero(num) {
      return num < 10 ? "0" + num : num;
    },
    button1() {
      document.getElementById("pscan").style.display = "";
      document.getElementById("mscan").style.display = "none";
      document.getElementById("ffm").style.display = "none";
      document.getElementById("fscan").style.display = "none";
    },
    button2() {
      document.getElementById("pscan").style.display = "none";
      document.getElementById("mscan").style.display = "";
      document.getElementById("ffm").style.display = "none";
      document.getElementById("fscan").style.display = "none";
    },
    button3() {
      document.getElementById("pscan").style.display = "none";
      document.getElementById("mscan").style.display = "none";
      document.getElementById("ffm").style.display = "";
      document.getElementById("fscan").style.display = "none";
    },
    button4() {
      document.getElementById("pscan").style.display = "none";
      document.getElementById("mscan").style.display = "none";
      document.getElementById("ffm").style.display = "none";
      document.getElementById("fscan").style.display = "";
    },
    // 生成从minNum到maxNum的随机数。
    // 如果指定decimalNum个数，则生成指定小数位数的随机数
    // 如果不指定任何参数，则生成0-1之间的随机数。
    // @minNum：[数据类型是Integer]生成的随机数的最小值（minNum和maxNum可以调换位置）
    // @maxNum：[数据类型是Integer]生成的随机数的最大值
    // @decimalNum：[数据类型是Integer]如果生成的是带有小数的随机数，则指定随机数的小数点后的位数
    randomNum(maxNum, minNum, decimalNum) {
      var max = 0,
        min = 0;
      minNum <= maxNum
        ? ((min = minNum), (max = maxNum))
        : ((min = maxNum), (max = minNum));
      switch (arguments.length) {
        case 1:
          return Math.floor(Math.random() * (max + 1));
          break;
        case 2:
          return Math.floor(Math.random() * (max - min + 1) + min);
          break;
        case 3:
          return (Math.random() * (max - min) + min).toFixed(decimalNum);
          break;
        default:
          return Math.random();
          break;
      }
    }, //函数结尾
    //pscan相关函数
    getPscan_canshu() {
      switch (this.randomNum(0, 4)) {
        case 0:
          this.pscan_canshu = "87 108 25";
          break;
        case 1:
          this.pscan_canshu = "90 100 25";
          break;
        case 2:
          this.pscan_canshu = "93 105 50";
          break;
        case 3:
          this.pscan_canshu = "99 105 50";
          break;
        case 4:
          this.pscan_canshu = "100 108 100";
          break;
        default:
          break;
      }
      //PSCAN图片D:\new\my_project\views\student\img
      this.pscanpath = "../../static/img/PSCAN/" + this.pscan_canshu + "/";
      this.PSCANsrc1 = this.pscanpath + "1.png";
      this.PSCANsrc2 = this.pscanpath + "2.png";
      this.PSCANsrc3 = this.pscanpath + "3.png";
      this.PSCANsrc4 = this.pscanpath + "4.png";
      this.PSCANsrc5 = this.pscanpath + "5.png";
      document.getElementById("PSCANIMG1").src = this.PSCANsrc1;
      document.getElementById("PSCANIMG2").src = this.PSCANsrc2;
      document.getElementById("PSCANIMG3").src = this.PSCANsrc3;
      document.getElementById("PSCANIMG4").src = this.PSCANsrc4;
      document.getElementById("PSCANIMG5").src = this.PSCANsrc5;
      //获得题目的值
      this.list = this.pscan_canshu.split(" ");
      this.pstartFreq = this.list[0];
      this.pstopFreq = this.list[1];
      this.pstepFreq = this.list[2];
      document.getElementById("pscan_startF").innerHTML = this.pstartFreq;
      document.getElementById("pscan_stopF").innerHTML = this.pstopFreq;
      document.getElementById("pscan_stepF").innerHTML = this.pstepFreq;
      console.log(this.pscanpath);
      console.log(this.PSCANsrc1);
      //pscan_11
      if (this.pscan_canshu == "87 108 25") {
        var pscan1S = "";
        this.pscan1S += "A.96075000Hz-99100000Hz" + "<br>";
        this.pscan1S += "B.87000000Hz-90025000Hz" + "<br>";
        this.pscan1S += "C.93050000Hz-96075000Hz" + "<br>";
        this.pscan1S += "D.102125000Hz-105150000Hz";
        document.getElementById("pscan_11").innerHTML = this.pscan1S;
      }
      if (this.pscan_canshu == "90 100 25") {
        var pscan1S = "";
        this.pscan1S += "A.90000000Hz-91450000Hz" + "<br>";
        this.pscan1S += "B.94350000Hz-95800000Hz" + "<br>";
        this.pscan1S += "C.95800000Hz-97250000Hz" + "<br>";
        this.pscan1S += "D.91450000Hz-92900000Hz";
        document.getElementById("pscan_11").innerHTML = this.pscan1S;
      }
      if (this.pscan_canshu == "93 105 50") {
        var pscan1S = "";
        this.pscan1S += "A.93000000Hz-94750000Hz" + "<br>";
        this.pscan1S += "B.94750000Hz-96500000Hz" + "<br>";
        this.pscan1S += "C.98250000Hz-100000000Hz" + "<br>";
        this.pscan1S += "D.100000000Hz-101750000Hz";
        document.getElementById("pscan_11").innerHTML = this.pscan1S;
      }
      if (this.pscan_canshu == "99 105 50") {
        var pscan1S = "";
        this.pscan1S += "A.99000000Hz-99900000Hz" + "<br>";
        this.pscan1S += "B.99900000Hz-100800000Hz" + "<br>";
        this.pscan1S += "C.102600000Hz-103500000Hz" + "<br>";
        this.pscan1S += "D.103500000Hz-104400000Hz";
        document.getElementById("pscan_11").innerHTML = this.pscan1S;
      }
      if (this.pscan_canshu == "100 108 100") {
        var pscan1S = "";
        this.pscan1S += "A.100000000Hz-101200000Hz" + "<br>";
        this.pscan1S += "B.102400000Hz-103600000Hz" + "<br>";
        this.pscan1S += "C.103600000Hz-104800000Hz" + "<br>";
        this.pscan1S += "D.104800000Hz-106000000Hz";
        document.getElementById("pscan_11").innerHTML = this.pscan1S;
      }
      console.log(this.pscan1S);
    },
    comparePscan() {
      //标记正确个数，五个都正确才显示对应图像。
      var yp = 0;
      //获取协议
      var pscanXieyi = document.getElementById("pcan_xieyi").value;
      //获取扫描方式
      var Sel = document.getElementById("pscan_saomiao");
      var index = Sel.selectedIndex;
      var pscanSaomiao = Sel.options[index].value;
      //获取起始频率
      var pscanStartFreq = document.getElementById("pscan_startFreq").value;
      // //获取结束频率
      var pscanStopFreq = document.getElementById("pscan_stopFreq").value;
      // //获取步进
      var pscanStepFreq = document.getElementById("pscan_stepFreq").value;
      console.log(pscanXieyi);
      console.log(pscanSaomiao);
      console.log(pscanStartFreq);
      console.log(pscanStopFreq);
      console.log(pscanStepFreq);
      //检验填写框是否为空
      if (
        pscanXieyi == "" ||
        pscanStartFreq == "" ||
        pscanStopFreq == "" ||
        pscanStepFreq == ""
      ) {
        alert("不能有空");
      } else {
        //表示PSCAN部分以及答题答完
        this.pscanZZ = true;
        //填写点击确定后，设置文本框不可更改
        document.getElementById("pcan_xieyi").setAttribute("disabled", true);
        document.getElementById("pscan_saomiao").setAttribute("disabled", true);
        document
          .getElementById("pscan_startFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("pscan_stopFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("pscan_stepFreq")
          .setAttribute("disabled", true);
        //按钮不能重复按
        document.getElementById("pscanButton").setAttribute("disabled", true);
        var s = "";
        if (pscanXieyi == "SCPI" || pscanXieyi == "scpi") {
          this.pscanFenshu += 2;
          yp += 1;
          s += "协议正确；" + "<br>";
        } else {
          s += "协议不正确，应为：SCPI；" + "<br>";
        }
        if (pscanSaomiao == "PSCAN") {
          yp += 1;
          this.pscanFenshu += 2;
          s += "扫描方式正确；" + "<br>";
        } else {
          s += "扫描不正确，应为：PSCAN;" + "<br>";
        }
        if (pscanStartFreq == this.pstartFreq) {
          yp += 1;
          this.pscanFenshu += 5;
          s += "起始频率正确；" + "<br>";
        } else {
          s += "FREQ:PSC:STAR不正确，应为" + this.pstartFreq + "；" + "<br>";
        }
        if (pscanStopFreq == this.pstopFreq) {
          yp += 1;
          this.pscanFenshu += 5;
          s += "终止频率正确；" + "<br>";
        } else {
          s += "FREQ:PSC:STOP不正确，应为：" + this.pstopFreq + "；" + "<br>";
        }
        if (pscanStepFreq == this.pstepFreq) {
          yp += 1;
          this.pscanFenshu += 5;
          s += "步进正确；" + "<br>";
        } else {
          s += "PSC:STEP不正确，应为：" + this.pstepFreq + "；" + "<br>";
        }
        document.getElementById("pscanResult").innerHTML = s;
        console.log(this.pscanFenshu);
        // console.log(yp);
        if (yp == 5) {
          //在这里加显示数据图片的代码。对应数据路径为 pscanpath,在div的id等于pscanimg加数据图片
          document.getElementById("pscanimg").style.display = ""; //显示
          document.getElementById("pscanTbale1").style.display = "none";
          document.getElementById("pscanButton").style.display = "none";
          document.getElementById("pscanHOUXU1").style.display = "";
        } else {
          this.end();
        }
      }
      console.log("分数" + this.pscanFenshu);
    }, //函数结尾
    comparePscanHOUXU() {
      var Sel = document.getElementById("pscan_1");
      var index = Sel.selectedIndex;
      var pscanHOUXU = Sel.options[index].value;
      var houxuTIshi;
      console.log(pscanHOUXU);
      console.log(this.pscan_canshu);
      if (this.pscan_canshu == "87 108 25") {
        if (pscanHOUXU == "A") {
          this.pscanFenshu += 6;
          houxuTIshi = "选择正确;";
        } else {
          houxuTIshi = "不正确，应选A;";
        }
      }
      if (this.pscan_canshu == "90 100 25") {
        if (pscanHOUXU == "C") {
          this.pscanFenshu += 6;
          houxuTIshi = "选择正确;";
        } else {
          houxuTIshi = "不正确，应选C;";
        }
      }
      if (this.pscan_canshu == "93 105 50") {
        if (pscanHOUXU == "B") {
          this.pscanFenshu += 6;
          houxuTIshi = "选择正确;";
        } else {
          houxuTIshi = "不正确，应选B;";
        }
      }
      if (this.pscan_canshu == "99 105 50") {
        if (pscanHOUXU == "C") {
          this.pscanFenshu += 6;
          houxuTIshi = "选择正确;";
        } else {
          houxuTIshi = "不正确，应选C;";
        }
      }
      if (this.pscan_canshu == "100 108 100") {
        if (pscanHOUXU == "B") {
          this.pscanFenshu += 6;
          houxuTIshi = "选择正确;";
        } else {
          houxuTIshi = "不正确，应选B;";
        }
      }
      console.log(this.pscanFenshu);
      document.getElementById("pscanHOUXUHOUXU").innerHTML = houxuTIshi;
      document.getElementById("pscan_1").setAttribute("disabled", true);
      document.getElementById("pscanhouxu").setAttribute("disabled", true);
      this.end();
    },

    //mscan相关函数
    getMscan_canshu() {
      switch (this.randomNum(0, 3)) {
        case 0:
          this.mscan_canshu = "87 93.2 97 102 105.3 113.5 117";
          break;
        case 1:
          this.mscan_canshu = "88 103.5 105 107 108";
          break;
        case 2:
          this.mscan_canshu = "89 97 100 103";
          break;
        case 3:
          this.mscan_canshu = "90 95.3 99";
          break;
        default:
          break;
      }
      this.mscanpath = "../../static/img/MSCAN/" + this.mscan_canshu + "/";
      this.MSCANsrc1 = this.mscanpath + "1.png";
      this.MSCANsrc2 = this.mscanpath + "2.png";
      this.MSCANsrc3 = this.mscanpath + "3.png";
      this.MSCANsrc4 = this.mscanpath + "4.png";
      this.MSCANsrc5 = this.mscanpath + "5.png";
      this.MSCANsrc6 = this.mscanpath + "6.png";
      this.MSCANsrc7 = this.mscanpath + "7.png";
      this.MSCANsrc8 = this.mscanpath + "8.png";
      this.MSCANsrc9 = this.mscanpath + "9.png";
      this.MSCANsrc10 = this.mscanpath + "10.png";
      document.getElementById("MSCANIMG1").src = this.MSCANsrc1;
      document.getElementById("MSCANIMG2").src = this.MSCANsrc2;
      document.getElementById("MSCANIMG3").src = this.MSCANsrc3;
      document.getElementById("MSCANIMG4").src = this.MSCANsrc4;
      document.getElementById("MSCANIMG5").src = this.MSCANsrc5;
      document.getElementById("MSCANIMG6").src = this.MSCANsrc6;
      document.getElementById("MSCANIMG7").src = this.MSCANsrc7;
      document.getElementById("MSCANIMG8").src = this.MSCANsrc8;
      document.getElementById("MSCANIMG9").src = this.MSCANsrc9;
      document.getElementById("MSCANIMG10").src = this.MSCANsrc10;

      document.getElementById("mscancanshu").innerHTML = this.mscan_canshu;
    },
    compareMscan() {
      //标记正确个数，3个都正确才显示对应图像。
      var ym = 0;
      //获取协议
      var mscanXieyi = document.getElementById("mscan_xieyi").value;
      //获取扫描方式
      var mSel = document.getElementById("mscan_saomiao");
      var mindex = mSel.selectedIndex;
      var mscanSaomiao = mSel.options[mindex].value;
      //获取用户输入参数
      var mcanshu = document.getElementById("mscan_canshu").value;
      // console.log(mscanXieyi);
      // console.log(mscanSaomiao);
      // console.log(mcanshu);
      console.log(mscanXieyi);
      console.log(mscanSaomiao);
      console.log(mcanshu);

      if (mscanXieyi == "" || mcanshu == "") {
        alert("不能有空");
      } else {
        //表示mscan第一部分答完
        this.mscanZZ1 = true;
        this.mscanZZ2 = true;
        document.getElementById("mscan_xieyi").setAttribute("disabled", true);
        document.getElementById("mscan_saomiao").setAttribute("disabled", true);
        document.getElementById("mscan_canshu").setAttribute("disabled", true);
        document.getElementById("mscanButton").setAttribute("disabled", true);
        var ms = "";
        if (mscanXieyi == "scpi" || mscanXieyi == "SCPI") {
          ym += 1;
          this.mscanFenshu += 5;
          ms += "通信协议正确；" + "<br>";
        } else {
          ms += "通信协议不正确，应为：SCPI；" + "<br>";
        }
        if (mscanSaomiao == "MSCAN") {
          ym += 1;
          this.mscanFenshu += 5;
          ms += "扫描方式正确；" + "<br>";
        } else {
          ms += "扫描方式不正确，应为：MSCAN；" + "<br>";
        }
        if (mcanshu == this.mscan_canshu) {
          ym += 1;
          this.mscanFenshu += 5;
          ms += "扫描频率正确；";
          +"<br>";
        } else {
          ms += "扫描频率不正确，应为：" + this.mscan_canshu + "；";
          +"<br>";
        }
        document.getElementById("mscanResult").innerHTML = ms;
        console.log(ym);
        if (ym == 3) {
          //在这里加显示数据图片的代码。对应数据路径为 mscanpath,在div的id等于mscanimg加数据图片
          document.getElementById("mscanHouxutimu").style.display = ""; //显示
          document.getElementById("mscanimg").style.display = "";
          document.getElementById("mscanTable1").style.display = "none";
          document.getElementById("mscanButton").style.display = "none";
        } else {
          this.end();
        }
      }
      console.log("mscan分数：" + this.mscanFenshu);
    },
    compareMscanHouxu() {
      var mscanHouxu = document.getElementById("mscan_houxu").value;
      console.log(mscanHouxu);
      if (mscanHouxu == "") {
        alert("不能为空");
      } else {
        this.mscanZZ2 = true;
        document.getElementById("mscan_houxu").setAttribute("disabled", true);
        document
          .getElementById("mscanButtonhouxu")
          .setAttribute("disabled", true);
        if (mscanHouxu == this.mscan_canshu) {
          var mshx = "<br>" + "正确;";
          this.mscanFenshu += 10;
        } else {
          var mshx = "<br>" + "不正确，应为" + this.mscan_canshu + ";";
        }
        document.getElementById("mscanHOUXU").innerHTML = mshx;
        this.end();
      }
    },

    //ffm相关函数
    getFfm_canshu() {
      switch (this.randomNum(0, 2)) {
        case 0:
          this.ffm_canshu = "90 9 160";
          break;
        case 1:
          this.ffm_canshu = "95 9 150";
          break;
        case 2:
          this.ffm_canshu = "100 9 150";
          break;
        default:
          break;
      }
      this.ffmpath = "../../static/img/FFM/" + this.ffm_canshu + "/";
      this.FFMsrc1 = this.ffmpath + "1.png";
      this.FFMsrc2 = this.ffmpath + "2.png";
      this.FFMsrc3 = this.ffmpath + "3.png";
      this.FFMsrc4 = this.ffmpath + "4.png";
      this.FFMsrc5 = this.ffmpath + "5.png";
      document.getElementById("FFMIMG1").src = this.FFMsrc1;
      document.getElementById("FFMIMG2").src = this.FFMsrc2;
      document.getElementById("FFMIMG3").src = this.FFMsrc3;
      document.getElementById("FFMIMG4").src = this.FFMsrc4;
      document.getElementById("FFMIMG5").src = this.FFMsrc5;
      this.ffmlist = this.ffm_canshu.split(" ");
      this.centerFreq = this.ffmlist[0];
      this.spanFreq = this.ffmlist[1];
      this.bandFreq = this.ffmlist[2];
      document.getElementById("ffm_centerF").innerHTML = this.centerFreq;
      document.getElementById("ffm_bandF").innerHTML = this.bandFreq;
      var ffmSSS = "";
      var ffmA = this.randomNum(1, 5);
      var ffmC = this.randomNum(20, 25);
      var ffmD = this.randomNum(30, 35);
      ffmSSS += "A.";
      ffmSSS += ffmA;
      ffmSSS += "kHz" + "<br>";
      ffmSSS += "B.9kHz" + "<br>";
      ffmSSS += "C.";
      ffmSSS += ffmC;
      ffmSSS += "kHz" + "<br>";
      ffmSSS += "D.";
      ffmSSS += ffmD;
      ffmSSS += "kHz" + "<br>";
      document.getElementById("ffm_2").innerHTML = ffmSSS;
    },
    compareFfm() {
      var yf = 0;
      //获取协议
      var ffmXieyi = document.getElementById("ffm_xieyi").value;
      //获取扫描方式
      var fSel = document.getElementById("ffm_saomiao");
      var findex = fSel.selectedIndex;
      var ffmSaomiao = fSel.options[findex].value;

      //获取中心频率
      var ffmCF = document.getElementById("ffm_CF").value;
      //获取解调宽度
      var ffmBF = document.getElementById("ffm_BF").value;

      if (ffmXieyi == "" || ffmCF == "" || ffmBF == "") {
        alert("不能有空");
      } else {
        //ffm部分以及答完
        this.ffmZZ = true;
        document.getElementById("ffm_xieyi").setAttribute("disabled", true);
        document.getElementById("ffm_saomiao").setAttribute("disabled", true);
        document.getElementById("ffm_CF").setAttribute("disabled", true);
        // document.getElementById("ffm_SF").setAttribute("disabled", true);
        document.getElementById("ffm_BF").setAttribute("disabled", true);
        document.getElementById("ffmButton").setAttribute("disabled", true);
        var fs = "";
        if (ffmXieyi == "scpi" || ffmXieyi == "SCPI") {
          yf += 1;
          this.ffmFenshu += 5;
          fs += "通信协议正确；" + "<br>";
        } else {
          fs += "通信协议不正确，应为：SCPI" + "<br>";
        }
        if (ffmSaomiao == "FFM") {
          yf += 1;
          this.ffmFenshu += 5;
          fs += "扫描方式正确；" + "<br>";
        } else {
          fs += "扫描方式不正确；应为：FFM；" + "<br>";
        }
        if (ffmCF == this.centerFreq) {
          yf += 1;
          this.ffmFenshu += 5;
          fs += "中心频率正确；" + "<br>";
        } else {
          fs += "FREQuency不正确，应为：" + this.centerFreq + "；" + "<br>";
        }
        if (ffmBF == this.bandFreq) {
          yf += 1;
          this.ffmFenshu += 5;
          fs += "解调带宽正确；" + "<br>";
        } else {
          fs += "BAND不正确，应为：" + this.bandFreq + "；" + "<br>";
        }
        console.log(fs);
        document.getElementById("ffmResult").innerHTML = fs;
        if (yf == 4) {
          document.getElementById("ffmimg").style.display = ""; //显示
          document.getElementById("ffmTable22").style.display = "none";
          document.getElementById("ffmButton").style.display = "none";
          document.getElementById("ffmTable").style.display = "";
        } else {
          this.end();
        }
      }
      console.log("FFM分数:" + this.ffmFenshu);
    },
    compareFfmHOUXU() {
      var fSel = document.getElementById("ffm_1");
      var findex = fSel.selectedIndex;
      var ffmxuanze = fSel.options[findex].value;
      console.log(ffmxuanze);
      var SSSSS = "";
      if (ffmxuanze == "B") {
        this.ffmFenshu += 5;
        SSSSS += "选择正确;";
      } else {
        SSSSS += "选择不正确，应选B;";
      }
      document.getElementById("ffmResult2").innerHTML = SSSSS;
      console.log(this.ffmFenshu);
      document.getElementById("ffm_1").setAttribute("disabled", true);
      document.getElementById("FFMHOUXU").setAttribute("disabled", true);
      this.end();
    },

    //fscan相关函数
    getFscan_canshu() {
      switch (this.randomNum(0, 4)) {
        case 0:
          this.fscan_canshu = "87 108 25";
          break;
        case 1:
          this.fscan_canshu = "90 100 25";
          break;
        case 2:
          this.fscan_canshu = "93 105 50";
          break;
        case 3:
          this.fscan_canshu = "99 105 50";
          break;
        case 4:
          this.fscan_canshu = "100 108 100";
          break;
        default:
          break;
      }
      var fscanpath = "../../static/img/PSCAN/" + this.fscan_canshu + "/";
      var FSCANsrc1 = fscanpath + "1.png";
      var FSCANsrc2 = fscanpath + "2.png";
      var FSCANsrc3 = fscanpath + "3.png";
      var FSCANsrc4 = fscanpath + "4.png";
      var FSCANsrc5 = fscanpath + "5.png";
      document.getElementById("FSCANIMG1").src = FSCANsrc1;
      document.getElementById("FSCANIMG2").src = FSCANsrc2;
      document.getElementById("FSCANIMG3").src = FSCANsrc3;
      document.getElementById("FSCANIMG4").src = FSCANsrc4;
      document.getElementById("FSCANIMG5").src = FSCANsrc5;

      this.flist = this.fscan_canshu.split(" ");
      this.fstartFreq = this.flist[0];
      this.fstopFreq = this.flist[1];
      this.fstepFreq = this.flist[2];
      document.getElementById("fscan_startF").innerHTML = this.fstartFreq;
      document.getElementById("fscan_stopF").innerHTML = this.fstopFreq;
      document.getElementById("fscan_stepF").innerHTML = this.fstepFreq;
      if (this.fscan_canshu == "87 108 25") {
        var f1 = "30,则";
        var f2 = "94350000Hz所在信道的FCO接近：";
        var f4 = "";
        f4 += "A.0%" + "<br>";
        f4 += "B.45%" + "<br>";
        f4 += "C.70%" + "<br>";
        f4 += "D.100%";
        document.getElementById("fscan_1").innerHTML = f1;
        document.getElementById("fscan_2").innerHTML = f2;
        document.getElementById("fscan_4").innerHTML = f4;
      }
      if (this.fscan_canshu == "90 100 25") {
        var f1 = "30,则";
        var f2 = "96525000Hz所在信道的FCO接近：";
        var f4 = "";
        f4 += "A.0%" + "<br>";
        f4 += "B.45%" + "<br>";
        f4 += "C.70%" + "<br>";
        f4 += "D.100%";
        document.getElementById("fscan_1").innerHTML = f1;
        document.getElementById("fscan_2").innerHTML = f2;
        document.getElementById("fscan_4").innerHTML = f4;
      }
      if (this.fscan_canshu == "93 105 50") {
        var f1 = "40,则";
        var f2 = "93000000Hz所在信道的FCO接近：";
        var f4 = "";
        f4 += "A.0%" + "<br>";
        f4 += "B.45%" + "<br>";
        f4 += "C.70%" + "<br>";
        f4 += "D.100%";
        document.getElementById("fscan_1").innerHTML = f1;
        document.getElementById("fscan_2").innerHTML = f2;
        document.getElementById("fscan_4").innerHTML = f4;
      }
      if (this.fscan_canshu == "99 105 50") {
        var f1 = "30,则";
        var f2 = "99400000Hz所在信道的FCO接近：";
        var f4 = "";
        f4 += "A.0%" + "<br>";
        f4 += "B.45%" + "<br>";
        f4 += "C.70%" + "<br>";
        f4 += "D.100%";
        document.getElementById("fscan_1").innerHTML = f1;
        document.getElementById("fscan_2").innerHTML = f2;
        document.getElementById("fscan_4").innerHTML = f4;
      }
      if (this.fscan_canshu == "100 108 100") {
        var f1 = "40,则";
        var f2 = "100300000Hz所在信道的FCO接近：";
        var f4 = "";
        f4 += "A.0%" + "<br>";
        f4 += "B.45%" + "<br>";
        f4 += "C.70%" + "<br>";
        f4 += "D.100%";
        document.getElementById("fscan_1").innerHTML = f1;
        document.getElementById("fscan_2").innerHTML = f2;
        document.getElementById("fscan_4").innerHTML = f4;
      }
    },
    compareFscan() {
      //标记正确个数，五个都正确才显示对应图像。
      var yff = 0;
      //获取协议
      var fscanXieyi = document.getElementById("fscan_xieyi").value;
      //获取扫描方式
      var ffSel = document.getElementById("fscan_saomiao");
      var ffindex = ffSel.selectedIndex;
      var fscanSaomiao = ffSel.options[ffindex].value;

      //获取起始频率
      var fscanStartFreq = document.getElementById("fscan_startFreq").value;
      // //获取结束频率
      var fscanStopFreq = document.getElementById("fscan_stopFreq").value;
      // //获取步进
      var fscanStepFreq = document.getElementById("fscan_stepFreq").value;

      if (
        fscanXieyi == "" ||
        fscanStartFreq == "" ||
        fscanStopFreq == "" ||
        fscanStepFreq == ""
      ) {
        alert("不能有空");
      } else {
        //表示fscan部分已经答完
        this.fscanZZ = true;
        document.getElementById("fscan_xieyi").setAttribute("disabled", true);
        document.getElementById("fscan_saomiao").setAttribute("disabled", true);
        document
          .getElementById("fscan_startFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("fscan_stepFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("fscan_stopFreq")
          .setAttribute("disabled", true);
        document.getElementById("fscanButton").setAttribute("disabled", true);
        var ffs = "";
        if (fscanXieyi == "SCPI" || fscanXieyi == "scpi") {
          this.fscanFenshu += 2;
          yff += 1;
          ffs += "通信协议正确；" + "<br>";
        } else {
          ffs += "通信协议不正确，应为：SCPI；" + "<br>";
        }
        if (fscanSaomiao == "FSCAN") {
          yff += 1;
          this.fscanFenshu += 2;
          ffs += "扫描方式正确；" + "<br>";
        } else {
          ffs += "扫描不正确，应为：FSCAN;" + "<br>";
        }
        if (fscanStartFreq == this.fstartFreq) {
          yff += 1;
          this.fscanFenshu += 5;
          ffs += "起始频率正确；" + "<br>";
        } else {
          ffs += "FREQ:STAR不正确，应为" + this.fstartFreq + "；" + "<br>";
        }
        if (fscanStopFreq == this.fstopFreq) {
          yff += 1;
          this.fscanFenshu += 5;
          ffs += "终止频率正确；" + "<br>";
        } else {
          ffs += "FREQ:STOP不正确，应为：" + this.fstopFreq + "；" + "<br>";
        }
        if (fscanStepFreq == this.fstepFreq) {
          yff += 1;
          this.fscanFenshu += 5;
          ffs += "步进正确；" + "<br>";
        } else {
          ffs += "STEP不正确，应为：" + this.fstepFreq + "；" + "<br>";
        }
        document.getElementById("fscanResult").innerHTML = ffs;
        if (yff == 5) {
          //在这里加显示数据图片的代码。对应数据路径为 pscanpath,在div的id等于pscanimg加数据图片
          document.getElementById("fscanimg").style.display = ""; //显示
          document.getElementById("fscanTable").style.display = "";
          document.getElementById("fscanTTT").style.display = "none";
          document.getElementById("fscanButton").style.display = "none";
        } else {
          this.end();
        }
      }
      console.log("Fscan分数：" + this.fscanFenshu);
    }, //函数结尾
    compareFscanHOUXU() {
      var ffSel = document.getElementById("fscan_3");
      var ffindex = ffSel.selectedIndex;
      var fscanXUANZE = ffSel.options[ffindex].value;
      var fscanSSS = "";
      if (this.fscan_canshu == "87 108 25") {
        if (fscanXUANZE == "A") {
          fscanSSS += "选择正确；";
          this.fscanFenshu += 6;
        } else {
          fscanSSS += "选择错误，应选择A；";
        }
      }
      if (this.fscan_canshu == "90 100 25") {
        if (fscanXUANZE == "D") {
          fscanSSS += "选择正确；";
          this.fscanFenshu += 6;
        } else {
          fscanSSS += "选择错误，应选择D；";
        }
      }
      if (this.fscan_canshu == "93 105 50") {
        if (fscanXUANZE == "A") {
          fscanSSS += "选择正确；";
          this.fscanFenshu += 6;
        } else {
          fscanSSS += "选择错误，应选择A；";
        }
      }
      if (this.fscan_canshu == "99 105 50") {
        if (fscanXUANZE == "D") {
          fscanSSS += "选择正确；";
          this.fscanFenshu += 6;
        } else {
          fscanSSS += "选择错误，应选择D；";
        }
      }
      if (this.fscan_canshu == "100 108 100") {
        if (fscanXUANZE == "A") {
          fscanSSS += "选择正确；";
          this.fscanFenshu += 6;
        } else {
          fscanSSS += "选择错误，应选择A；";
        }
      }
      document.getElementById("fscanHOUXU").innerHTML = fscanSSS;
      document.getElementById("FSCANHOUXU").setAttribute("disabled", true);
      document.getElementById("fscan_3").setAttribute("disabled", true);
      console.log("FSCAN分数：" + this.fscanFenshu);
      this.end();
    },

    addScore() {
      let formData = new FormData();
      formData.append("id", this.id);
      formData.append("pscan", this.pscanFenshu);
      formData.append("mscan", this.mscanFenshu);
      formData.append("ffm", this.ffmFenshu);
      formData.append("fscan", this.fscanFenshu);
      formData.append("sum", this.zongfenshu);
      // this.form = {}
      console.log("NEW FORM DATA:", formData);
      // url:addFormData
      this.$axios
        .post("/addScore", formData) //录入成绩的后端接口
        .then((res) => {
          console.log("add Form Data result:", res.data.message);
          this.addDialogFormVisible = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    end() {
      if (
        this.pscanZZ == true &&
        this.mscanZZ1 == true &&
        this.mscanZZ2 == true &&
        this.ffmZZ == true &&
        this.fscanZZ == true
      ) {
        this.zongfenshu =
          this.pscanFenshu +
          this.mscanFenshu +
          this.ffmFenshu +
          this.fscanFenshu;
        alert("考试结束，总分为：" + this.zongfenshu);
        //pscan部分禁止填写。
        document.getElementById("pcan_xieyi").setAttribute("disabled", true);
        document.getElementById("pscan_saomiao").setAttribute("disabled", true);
        document
          .getElementById("pscan_startFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("pscan_stopFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("pscan_stepFreq")
          .setAttribute("disabled", true);
        document.getElementById("pscanButton").setAttribute("disabled", true);
        //mscan部分禁止填写
        document.getElementById("mscan_xieyi").setAttribute("disabled", true);
        document.getElementById("mscan_saomiao").setAttribute("disabled", true);
        document.getElementById("mscan_canshu").setAttribute("disabled", true);
        document.getElementById("mscanButton").setAttribute("disabled", true);
        document.getElementById("mscan_houxu").setAttribute("disabled", true);
        document
          .getElementById("mscanButtonhouxu")
          .setAttribute("disabled", true);
        //ffm部分禁止填写
        document.getElementById("ffm_xieyi").setAttribute("disabled", true);
        document.getElementById("ffm_saomiao").setAttribute("disabled", true);
        document.getElementById("ffm_CF").setAttribute("disabled", true);
        // document.getElementById("ffm_SF").setAttribute("disabled", true);
        document.getElementById("ffm_BF").setAttribute("disabled", true);
        document.getElementById("ffmButton").setAttribute("disabled", true);
        //fscan部分禁止填写
        document.getElementById("fscan_xieyi").setAttribute("disabled", true);
        document.getElementById("fscan_saomiao").setAttribute("disabled", true);
        document
          .getElementById("fscan_startFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("fscan_stepFreq")
          .setAttribute("disabled", true);
        document
          .getElementById("fscan_stopFreq")
          .setAttribute("disabled", true);
        document.getElementById("fscanButton").setAttribute("disabled", true);
        clearInterval(this.timer); //清除定时器
        var total = "你已经完成考试，考试总分为：";
        total += this.zongfenshu;
        document.getElementById("totalResult").innerHTML = total;
        console.log(total);
        // writeTotxt(id, name, pscanFenshu, mscanFenshu, ffmFenshu, fscanFenshu, zongfenshu);
        document.getElementById("kaoshiqingkuang").style.display = "";
        this.addScore();
      }
    },
  },
};
</script>


    <style>
.timers {
  width: 300px;
  margin: 0 auto;
  margin-top: 10px;
  font-weight: 700;
  text-align: center;
  color: #333;
  overflow: hidden;
}

.timers span {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #2f3430;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}

.timers span::after {
  content: "：";
  position: absolute;
  top: 0;
  right: -23px;
  display: block;
  width: 20px;
  height: 100%;
  font-size: 18px;
  color: red;
}

.timers span:last-of-type::after {
  content: "";
}

#btn {
  margin-left: -22px;
}

.card2 {
  height: 250px;

  width: 350px;

  background-color: white;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  border-radius: 4px;

  display: inline-block;

  margin-left: 18px;

  vertical-align: top;
  position: relative;
  left: 100px;
}

.card3 {
  height: 520px;

  width: 500px;

  background-color: white;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  border-radius: 4px;

  display: inline-block;

  margin-left: 18px;

  vertical-align: top;

  position: relative;
  left: 50%;
  bottom: 562px;
}

.card4 {
  height: 520px;

  width: 500px;

  background-color: white;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  border-radius: 4px;

  display: inline-block;

  margin-left: 18px;

  vertical-align: top;

  position: relative;
  left: 50%;
  bottom: 583px;
}

.divcss5 {
  border: 1px solid #f00;
}

.imgBox {
  border-top: 2px solid cadetblue;
  width: 100%;
  height: 250px;
  margin: 0 auto;
}

.imgBox img {
  width: 480px;
  height: 450px;
  margin: 0 auto;
  padding-top: 30px;
}

.img1 {
  display: block;
}

.img2 {
  display: none;
}

.img3 {
  display: none;
}
</style>