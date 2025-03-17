<template>
  <div
    class="echart"
    id="echart-line"
    :style="{ float: 'left', width:'730px', height: '456px',}"
    ref="mychat"
  ></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  methods: {
    initChart(xData, yData,type,co) {
      let getchart = echarts.init(this.$refs.mychat);//ECharts对象实例化
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
					splitLine: {
            show: true,
            lineStyle: {
              color: ["#008000"],
            },
          },
          data: xData,
          name: "频率/MHZ",
          offset: 10,
          nameLocation: "middle",
          nameGap: 20,
          nameTextStyle: {
            color: "green",
            fontSize: 20,
          },
					axisLine: {
            show: true,
						onZero:false,
						symbol: ["none", "arrow"],
            symbolSize: [10, 15],
            lineStyle: {
              color:"#333",
            },
          },
        },
        yAxis: {
          data: yData,
          type: "value",
          name: "电平值/dBuV",
          nameRotate: 90,
          offset: 8,
          nameLocation: "middle",
          nameGap: 25,
          nameTextStyle: {
            color: "green",
            fontSize: 20,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["#000"],
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#008000"],
            },
          },
          show: true,
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [10, 15],
            lineStyle: {
              color: "#333",
              type: "solid",
            },
          },
          axisTick: {
            alignWithLabel: true,
            show: true,
          },
          axisLabel: {
            show: true,
            interval: 0,
          },
          axisPointer: {
            show: false,
          },
        },
				color:co,
        legend: {
          data: ["电平值"],
           icon: "rect",
            itemWidth: 16,
            itemHeight: 4,
						left:70,
            top: 15
						,
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            animation: false,
            label: {
              backgroundColor: "#505765",
            },
          },
        },
        dataZoom: [
          {
            show: false,
            realtime: true,
            start: 0,
            end: 100,
          },
          {
            type: "inside",
            realtime: true,
            start: 65,
            end: 85,
          },
        ],
        series: [
          {
            name: "电平值",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1,
									color:co,
                },
              },
            },
            stack: "总量",
            data: yData,
            type: type,
						barWidth:3,
          },
        ],
      };
      getchart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        getchart.resize();
      });
    },
  },
  mounted() {},
};
</script>