<template>
  <div>
    <div align="center">
      <el-card>
        <div slot="header" class="clearfix">
          <span>学生成绩单</span>
        </div>
        <div class="tableMain">
          <el-table border class="num1" :data="tableData" style="width: 1440px">
            <el-table-column
              align="center"
              prop="id"
              label="学号"
              width="100px"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="姓名"
              width="100px"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="pscan"
              label="pscan成绩"
              width="100px"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="mscan"
              label="mscan成绩"
              width="100px"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="ffm"
              label="ffm成绩"
              width="100px"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="fscan"
              label="fscan成绩"
              width="100px"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sum"
              label="总成绩"
              width="100px"
            ></el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>

    <br />
    <div align="center" class="card2">
      <h3 align="center">得分情况</h3>
      <table>
        <tr>
          <td>pscan部分均分为：</td>
          <td>
            <label id="pscanA"></label>
          </td>
        </tr>
        <tr>
          <td>mscan部分均分为：</td>
          <td>
            <label id="mscanA"></label>
          </td>
        </tr>
        <tr>
          <td>ffm部分均分为：</td>
          <td>
            <label id="ffmA"></label>
          </td>
        </tr>
        <tr>
          <td>fscan部分均分为：</td>
          <td>
            <label id="fscanA"></label>
          </td>
        </tr>
        <tr>
          <td>总分均分为：</td>
          <td>
            <label id="zongfenA"></label>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <br />
    <div align="center">
      <div id="AAA" style="width: 600px; height: 400px"></div>
    </div>
    <br />
    <div align="center" class="card2">
      <h3 align="center">得分区间人数</h3>
      <table>
        <tr>
          <td>60分以下人数：</td>
          <td>
            <label id="E"></label>
          </td>
        </tr>
        <tr>
          <td>60-70分人数：</td>
          <td>
            <label id="D"></label>
          </td>
        </tr>
        <tr>
          <td>70-80分人数：</td>
          <td>
            <label id="C"></label>
          </td>
        </tr>
        <tr>
          <td>80-90分人数：</td>
          <td>
            <label id="B"></label>
          </td>
        </tr>
        <tr>
          <td>90-100分人数：</td>
          <td>
            <label id="A"></label>
          </td>
        </tr>
      </table>
      <div align="center">
        <div id="main" style="width: 600px; height: 400px"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "kaoshifenxi",
  data() {
    return {
      tableData: [],
      pscanSum: 0,
      mscanSum: 0,
      ffmSum: 0,
      fscanSum: 0,
      zongfenSum: 0,
      pE: 0,
      pD: 0,
      pC: 0,
      pB: 0,
      pA: 0,
      pscanAverage: 0,
      mscanAverage: 0,
      ffmAverage: 0,
      fscanAverage: 0,
      zongfenAverage: 0,
      myChart1: "",
      myChart: "",
      junfen: [],
      v: [],
    };
  },
  mounted() {
    this.initTable();
  },
  methods: {
    initTable() {
      this.$axios
        .post("/getAllScore") //显示所有学生成绩的后端接口
        .then((res) => {
          console.log("getData is :", res.data.data);
          this.tableData = res.data.data;
          console.log(this.tableData[0].ffm);
          for (var i = 0; i < this.tableData.length; i++) {
            this.pscanSum += this.tableData[i].pscan;
            this.mscanSum += this.tableData[i].mscan;
            this.ffmSum += this.tableData[i].ffm;
            this.fscanSum += this.tableData[i].fscan;
            this.zongfenSum += this.tableData[i].sum;
            if (this.tableData[i].sum < 60) {
              this.pE += 1;
            }
            if (this.tableData[i].sum >= 60 && this.tableData[i].sum < 70) {
              this.pD += 1;
            }
            if (this.tableData[i].sum >= 70 && this.tableData[i].sum < 80) {
              this.pC += 1;
            }
            if (this.tableData[i].sum >= 80 && this.tableData[i].sum < 90) {
              this.pB += 1;
            }
            if (this.tableData[i].sum >= 90 && this.tableData[i].sum <= 100) {
              this.pA += 1;
            }
          }
          this.pscanAverage = (this.pscanSum / this.tableData.length).toFixed(
            2
          );
          this.mscanAverage = (this.mscanSum / this.tableData.length).toFixed(
            2
          );
          this.ffmAverage = (this.ffmSum / this.tableData.length).toFixed(2);
          this.fscanAverage = (this.fscanSum / this.tableData.length).toFixed(
            2
          );
          this.zongfenAverage = (
            this.zongfenSum / this.tableData.length
          ).toFixed(2);
          document.getElementById("pscanA").innerHTML = this.pscanAverage;
          document.getElementById("mscanA").innerHTML = this.mscanAverage;
          document.getElementById("ffmA").innerHTML = this.ffmAverage;
          document.getElementById("fscanA").innerHTML = this.fscanAverage;
          document.getElementById("zongfenA").innerHTML = this.zongfenAverage;
          this.junfen.push(this.pscanAverage);
          this.junfen.push(this.mscanAverage);
          this.junfen.push(this.ffmAverage);
          this.junfen.push(this.fscanAverage);
          this.junfen.push(this.zongfenAverage);
          document.getElementById("E").innerHTML = this.pE;
          document.getElementById("D").innerHTML = this.pD;
          document.getElementById("C").innerHTML = this.pC;
          document.getElementById("B").innerHTML = this.pB;
          document.getElementById("A").innerHTML = this.pA;
          this.v.push(this.pE);
          this.v.push(this.pD);
          this.v.push(this.pC);
          this.v.push(this.pB);
          this.v.push(this.pA);

          //绘图
          this.myChart1 = echarts.init(document.getElementById("AAA"));
          this.myChart1.setOption({
            legend: {
              data: ["平均分"],
            },

            tooltip: {
              trigger: "item",
            },
            xAxis: {
              data: ["PSCAN", "MSCAN", "FFM", "FSCAN", "总分"],
            },
            yAxis: {},
            series: [
              {
                name: "平均分",
                data: this.junfen,
                type: "bar",
                emphasis: {
                  focus: "series",
                },
              },
            ],
          });

          this.myChart = echarts.init(document.getElementById("main"));
          var a = [
            "60分以下人数",
            "60-70分人数",
            "70-80分人数",
            "80-90分人数",
            "90-100分人数",
          ];
          var pieList = [];
          for (let i = 0; i < a.length; i++) {
            var d = new Object();
            d.name = a[i];
            d.value = this.v[i];
            pieList.push(d);
          }
          this.myChart.setOption({
            tooltip: {
              trigger: "item",
            },
            series: [
              {
                type: "pie", // 设置图表类型为饼图
                radius: "55%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data: pieList,
              },
            ],
          });
        })

        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>




<style>
.css1 {
  border-collapse: collapse;
  text-align: center;
}

.card2 {
  height: 200px;
  width: 600px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  display: inline-block;
  margin-left: 18px;
  vertical-align: top;
  position: relative;
  left: 25%;
}
</style>