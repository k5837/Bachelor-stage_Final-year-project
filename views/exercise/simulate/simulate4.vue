<template>
    <el-row class="home">

        <el-col :span="6" style="margin-top: 10px;width: 330px;">
            <el-card class="box-card" style="width:330px">
                <div slot="header" class="clearfix" style="height:40px">
                    <span>题目1</span>&nbsp;&nbsp;
                </div>
                <div>
                    请规划无线电监测任务，参数如下：<br />
                    <p>扫描方式：单频测量</p>
                    <p> 扫描参数：中心频率：90MHZ；</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        显示宽度：9KHZ；</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        解调带宽：160KHZ；</p>
                    <p>①根据题目填写对应的参数信息。</p>
                    <p>注意：考试时间为3分钟。</p>
                </div>
            </el-card>

            <el-card style="margin-top: 20px; height: auto;height:540px">
                <div slot="header" class="clearfix">
                    <span>答题1
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <i class="el-icon-time"></i> {{ `${hr}: ${min}: ${sec}` }}
                </div>
                <div class="TestWord">
                    <!-- 转化后 -->
                    <el-table border style="margin-top: 10px" :data="transData">
                        <el-table-column v-for="(item, index) in transTitle" :label="item" :key="index" align="center">

                            <template slot-scope="scope">
                                <el-input class="uusr" v-if="index" v-model="scope.row[index]" auto-complete="off">
                                </el-input>
                                <el-span v-if="!index">{{ scope.row[index] }}</el-span>
                                <!--{{scope.row[index]}}-->
                            </template>
                        </el-table-column>
                    </el-table>

                    <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
                    <div class="SSS" style="margin-top: 10px; padding-right=0px">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-button style="margin-top:10px;margin-right:0px" v-show="isshow1" @click="begin"
                            type="primary" round icon="el-icon-check">开始答题</el-button>
                        <el-button v-show="!isshow1" @click="stop" round type="danger" icon="el-icon-finished">交卷
                        </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>

        <el-col style="margin-top: 10px;width: 330px;">
            <el-card class="box-card" style="width:330px">
                <div slot="header" class="clearfix" style="height:40px">
                    <span>题目2</span> &nbsp;&nbsp;
                    <el-select v-model="selected" placeholder="题库" @change="changeHref(parseInt(selected))">
                        <!--selected需转换成数值型，否则不会响应-->
                        <el-option value="1">模拟题1</el-option>
                        <el-option value="2">模拟题2</el-option>
                        <el-option value="3">模拟题3</el-option>
                        <el-option value="4">模拟题4</el-option>
                    </el-select>

                </div>
                <div>
                    请规划无线电监测任务，参数如下：<br />
                    <p>扫描方式：离散扫描</p>
                    <p> 扫描参数：频点：89；频点：97；</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        频点：100；频点：103；</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        (单位均为MHZ)</p>
                    <p>①根据题目填写对应的参数信息。</p>
                    <p>注意：考试时间为2分钟。</p>
                </div>
            </el-card>

            <el-card style="margin-top: 20px; height: auto;height:540px">
                <div slot="header" class="clearfix">
                    <span>答题2
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <i class="el-icon-time"></i> {{ `${hr1}: ${min1}: ${sec1}` }}
                </div>
                <div class="TestWord">
                    <!-- 转化后 -->
                    <el-table border style="margin-top: 10px" :data="transData1">
                        <el-table-column v-for="(item, index) in transTitle1" :label="item" :key="index" align="center">

                            <template slot-scope="scope">
                                <el-input class="uusr" v-if="index" v-model="scope.row[index]" auto-complete="off">
                                </el-input>
                                <el-span v-if="!index">{{ scope.row[index] }}</el-span>
                                <!--{{scope.row[index]}}-->
                            </template>
                        </el-table-column>
                    </el-table>

                    <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
                    <div class="SSS" style="margin-top: 10px; padding-right=0px">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-button style="margin-top:10px;margin-right:0px" v-show="isshow11" @click="begin1"
                            type="primary" round icon="el-icon-check">开始答题</el-button>
                        <el-button v-show="!isshow11" @click="stop1" round type="danger" icon="el-icon-finished">交卷
                        </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>

        <el-col style=" width:730px;margin-top: 10px; margin-left: 10px;">
            <el-card>
                <div style="margin-top: 5px; margin-left: 0px;">
                    <Chart v-show="show1" ref="chart_line_one" />
                </div>
                <div style="margin-top: 5px; margin-left: 0px;">
                    <Chart v-show="show2" ref="chart_line_two" />
                </div>

                <div style="margin-top: 5px; padding-left: 0px;">
                    <Chart v-show="show11" ref="chart_line_one1" />
                </div>
                <div>
                    <Chart v-show="show21" ref="chart_line_two1" />
                </div>

            </el-card>
        </el-col>



        <el-col :span="18" style="margin-top: 10px; ">
            <el-card v-show="show3">
                <br> 题目1解析:<br /><br />
                <div class="block">
                    <el-timeline style="font-size:17px;font-style:oblique;font-family:arial; padding-inline-start:0px">
                        <el-timeline-item style="padding-left:10px" v-for="(activity, index) in activities" :key="index"
                            :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size">
                            {{ activity.content }}
                        </el-timeline-item>
                    </el-timeline>
                </div>


                <div class="block" v-show="show31">
                    <br>题目2解析:<br /><br />
                    <el-timeline style="font-size:17px;font-style:oblique;font-family:arial; padding-inline-start:0px">
                        <el-timeline-item style="padding-left:10px" v-for="(activity, index) in activities1"
                            :key="index" :icon="activity.icon" :type="activity.type" :color="activity.color"
                            :size="activity.size">
                            {{ activity.content }}
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-card>
        </el-col>
        <el-col style="margin-top: 10px; margin-left: 20px;width: 330px;">
            <el-card style="" v-show="show3"> <br>
                <el-button type="success" style="margin-top: 15px" icon="el-icon-star-off" round>题目1答案</el-button><br>
                <i style="font-size:15px;font-style:normal" v-show="show3"><br>
                    <li style="font-size:15px">①FFM</li><br>
                    <li style="font-size:15px">②SCPI </li><br>
                    <li style="font-size:15px">③90</li> <br>
                    <li style="font-size:15px">④0.009</li><br>
                    <li style="font-size:15px">⑤89.9955</li>
                </i><br>
                <div v-show="show31">
                    <br><br>
                    <el-button type="success" style="margin-top: 15px" icon="el-icon-star-off" round v-show="show31">
                        题目2答案</el-button><br>
                    <i style="font-size:15px;font-style:normal" v-show="show31"><br>
                        <li style="font-size:15px">①MSCAN</li><br>
                        <li style="font-size:15px">②SCPI </li><br>
                        <li style="font-size:15px">③4</li> <br>
                        <li style="font-size:15px">④频谱评估</li><br>
                        <li style="font-size:15px">⑤否</li>
                    </i><br>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>

import Chart from "@/components/ChartLine";
var timer = null;
var timer1 = null //计时器变量，用于销毁计时器


export default {
    name: "Home",
    components: { Chart },
    data() {
        return {
            // originData 为后端原始正常的数据, 此数据按正常表格展示 一行一行的数据
            // 保证数组里每一个对象中的字段顺序, 从上到下 一次对应显示表格中的从左到右
            originData: [
                {
                    简写: "a",
                    通信协议: "b",
                    中心频率: "0",
                    显示宽度: "0",
                    起始频率: "0",
                },
            ],
            originTitle: ["简写", "通信协议", "中心频率(单位为MHZ)", "显示宽度(单位为MHZ)", "起始频率(单位为KHZ)"], // originTitle 该标题为 正常显示的标题, 数组中的顺序就是上面数据源对象中的字段标题对应的顺序
            transTitle: ["单频测量", "参数"], // transTitle 该标题为转化后的标题, 注意多一列,  因为原来的标题变成了竖着显示了, 所以多一列标题, 第一个为空即可
            transData: [],
            ruleData: ["FFM", "SCPI", "90", "0.009", "89.9955"],
            show1: false,
            show2: true,
            show3: false,

            isshow1: true,
            time: '',
            hr: 0,
            min: 3,
            sec: 0,
            type: "line",
            co: "#409EFF",

            xData: ['89.99550', '89.99552', '89.99554', '89.99556', '89.99558', '89.99560', '89.99562', '89.99564', '89.99566', '89.99568', '89.99570', '89.99572', '89.99574', '89.99576', '89.99578', '89.99580', '89.99582', '89.99584', '89.99586', '89.995.88', '89.99590', '89.99592', '89.99594', '89.99596', '89.99598', '89.99600', '89.99602', '89.99604', '89.99606', '89.99608', '89.99610', '89.99612', '89.99614', '89.99616', '89.99618', '89.99620', '89.99622', '89.99624', '89.99626', '89.99628', '89.99630', '89.99632', '89.99634', '89.99636', '89.99638', '89.99640', '89.99642', '89.99644', '89.99646', '89.99648', '89.99650', '89.99652', '89.99654', '89.99656', '89.99658', '89.99660', '89.99662', '89.99664', '89.99666', '89.99668', '89.99670', '89.99672', '89.99674', '89.99676', '89.99678', '89.99680', '89.99682', '89.99684', '89.99686', '89.99688', '89.99690', '89.99692', '89.99694', '89.99696', '89.99698', '89.99700', '89.99702', '89.99704', '89.99706', '89.99708', '89.99710', '89.99712', '89.99714', '89.99716', '89.99718', '89.99720', '89.99722', '89.99724', '89.99726', '89.99728', '89.99730', '89.99732', '89.99734', '89.99736', '89.99738', '89.99740', '89.99742', '89.99744', '89.99746', '89.99748', '89.99750', '89.99752', '89.99754', '89.99756', '89.99758', '89.99760', '89.99762', '89.99764', '89.99766', '89.99768', '89.99770', '89.99772', '89.99774', '89.99776', '89.99778', '89.997.80', '89.997.82', '89.997.84', '89.997.86', '89.997.88', '89.997.90', '89.997.92', '89.997.94', '89.997.96', '89.997.98', '89.998.00', '89.998.02', '89.998.04', '89.998.06', '89.998.08', '89.998.10', '89.998.12', '89.998.14', '89.998.16', '89.998.18', '89.998.20', '89.998.22', '89.998.24', '89.998.26', '89.998.28', '89.998.30', '89.998.32', '89.998.34', '89.998.36', '89.998.38', '89.998.40', '89.998.42', '89.998.44', '89.998.46', '89.998.48', '89.998.50', '89.998.52', '89.998.54', '89.998.56', '89.998.58', '89.998.60', '89.998.62', '89.998.64', '89.998.66', '89.998.68', '89.998.70', '89.998.72', '89.998.74', '89.998.76', '89.998.78', '89.998.80', '89.998.82', '89.998.84', '89.998.86', '89.998.88', '89.998.90', '89.998.92', '89.998.94', '89.998.96', '89.998.98', '89.999.00', '89.999.02', '89.999.04', '89.999.06', '89.999.08', '89.999.10', '89.999.12', '89.999.14', '89.999.16', '89.999.18', '89.999.20', '89.999.22', '89.999.24', '89.999.26', '89.999.28', '89.999.30', '89.999.32', '89.999.34', '89.999.36', '89.999.38', '89.999.40', '89.999.42', '89.999.44', '89.999.46', '89.999.48', '89.999.50', '89.999.52', '89.999.54', '89.999.56', '89.999.58', '89.999.60', '89.999.62', '89.999.64', '89.999.66', '89.999.68', '89.999.70', '89.999.72', '89.999.74', '89.999.76', '89.999.78', '89.999.80', '89.999.82', '89.999.84', '89.999.86', '89.999.88', '89.999.90', '89.999.92', '89.999.94', '89.999.96', '89.999.98', '90000.00', '90000.02', '90000.04', '90000.06', '90000.08', '90000.10', '90000.12', '90000.14', '90000.16', '90000.18', '90000.20', '90000.22', '90000.24', '90000.26', '90000.28', '90000.30', '90000.32', '90000.34', '90000.36', '90000.38', '90000.40', '90000.42', '90000.44', '90000.46', '90000.48', '90000.50', '90000.52', '90000.54', '90000.56', '90000.58', '90000.60', '90000.62', '90000.64', '90000.66', '90000.68', '90000.70', '90000.72', '90000.74', '90000.76', '90000.78', '90000.80', '90000.82', '90000.84', '90000.86', '90000.88', '90.00090', '90000.92', '90000.94', '90000.96', '90000.98', '90001.00', '90001.02', '90001.04', '90001.06', '90001.08', '90001.10', '90001.12', '90001.14', '90001.16', '90001.18', '90001.20', '90001.22', '90001.24', '90001.26', '90001.28', '90001.30', '90001.32', '90001.34', '90001.36', '90001.38', '90001.40', '90001.42', '90001.44', '90001.46', '90001.48', '90001.50', '90001.52', '90001.54', '90001.56', '90001.58', '90001.60', '90001.62', '90001.64', '90001.66', '90001.68', '90001.70', '90001.72', '90001.74', '90001.76', '90001.78', '90001.80', '90001.82', '90001.84', '90001.86', '90001.88', '90001.90', '90001.92', '90001.94', '90001.96', '90.00198', '90002.00', '90002.02', '90002.04', '90002.06', '90002.08', '90002.10', '90002.12', '90002.14', '90002.16', '90002.18', '90002.20', '90002.22', '90002.24', '90002.26', '90002.28', '90002.30', '90002.32', '90002.34', '90002.36', '90002.38', '90002.40', '90002.42', '90002.44', '90002.46', '90002.48', '90002.50', '90002.52', '90002.54', '90002.56', '90002.58', '90002.60', '90002.62', '90002.64', '90002.66', '90002.68', '90002.70', '90002.72', '90002.74', '90002.76', '90002.78', '90002.80', '90002.82', '90002.84', '90002.86', '90002.88', '90002.90', '90002.92', '90002.94', '90002.96', '90002.98', '90003.00', '90003.02', '90003.04', '90.00306', '90003.08', '90003.10', '90003.12', '90003.14', '90003.16', '90003.18', '90003.20', '90003.22', '90003.24', '90003.26', '90003.28', '90003.30', '90003.32', '90003.34', '90003.36', '90003.38', '90003.40', '90003.42', '90003.44', '90003.46', '90003.48', '90003.50', '90003.52', '90003.54', '90003.56', '90003.58', '90003.60', '90003.62', '90003.64', '90003.66', '90003.68', '90003.70', '90003.72', '90003.74', '90003.76', '90003.78', '90003.80', '90003.82', '90003.84', '90003.86', '90003.88', '90003.90', '90003.92', '90003.94', '90003.96', '90003.98', '90004.00', '90004.02', '90004.04', '90004.06', '90004.08', '90004.10', '90004.12', '90.00414', '90004.16', '90004.18', '90004.20', '90004.22', '90004.24', '90004.26', '90004.28', '90004.30', '90004.32', '90004.34', '90004.36', '90004.38', '90004.40', '90004.42', '90004.44', '90004.46', '90004.48', '90004.50',],
            yData: [3, 7, 7, 3, 2, 9, 9, 7, 11, 10, -1, 2, 3, 5, 5, 1, -2, -4, 6, 7, 7, 5, 2, 0, 1, 3, 6, 3, 0, -1, 2, 3, 6, 6, 0, 1, -5, 0, 4, 6, 6, 7, 4, -1, -3, 2, -2, 7, 9, 0, 4, 6, 0, -14, 0, 1, 4, 6, -6, 1, -3, 2, 4, 6, 8, 3, 3, 3, -2, 4, 5, -4, 2, 0, 5, 1, 4, 4, 6, 9, 9, 7, 6, 3, 0, 1, -6, 3, 5, -2, -4, 7, 8, 6, 2, 3, 2, -4, 8, 9, 9, 5, -10, 3, 2, -2, -6, 1, 0, 7, 11, 7, -3, -2, 0, 7, 8, 9, 5, -2, -12, 2, 5, -8, 2, 0, 2, 0, 0, 0, 3, 2, -6, -8, -7, 1, 10, 8, 2, 4, 2, -3, 2, 0, -3, -1, 2, 7, 11, 10, 8, 5, 3, 0, 3, 6, 6, 4, 1, -7, -8, -4, -1, 4, -7, 4, 5, 4, 0, -1, -4, -8, -7, -3, 3, 6, 9, 7, 4, -2, 9, 6, 7, 6, 4, 0, -1, 4, 0, -22, -18, 3, 9, 6, 1, 9, 8, 3, -16, 0, 1, -9, -10, 0, -4, 0, 4, -1, 5, 6, 6, 6, 6, 7, 4, -5, -9, 5, 10, 3, 8, 11, 8, 8, 1, -1, 6, 1, -6, -4, -6, -1, -4, 1, -1, 0, -1, 0, 6, 6, 6, 9, 9, 5, 1, 4, 1, 1, 4, 3, -6, 2, 0, 1, 4, 2, 0, -15, 1, 0, -10, 3, 8, 8, 3, 2, 3, 4, 6, 4, 3, 5, 5, 1, 0, -1, -2, 2, 4, 5, -1, 0, 4, 3, -3, -7, -3, 2, 5, 5, -2, 0, 6, 7, 6, 8, 10, 8, 0, 1, 4, 7, 8, 5, -2, -1, -5, -5, -10, 4, 3, -9, -5, 1, 2, 4, 0, 1, 2, -2, 0, -8, 0, 5, 6, 3, 0, 2, 7, 5, 0, 8, 4, 2, 4, 3, -1, 0, 8, 6, -1, 4, 8, 4, 6, 2, 5, 4, -4, 2, 5, 4, 3, 7, 6, 0, 5, 3, 7, 7, 0, 1, 3, 6, 7, 6, -2, -2, 6, 6, -4, 0, -2, 0, 2, 1, -2, -5, -1, 2, 3, 4, -2, 6, 4, -1, -4, 5, 10, 8, 4, 7, 8, 6, 6, 7, 1, -3, 3, 6, 10, 10, 8, 5, 3, 6, 8, 7, 6, 5, 5, 4, 5, 3, -18, -6, 4, 8, 7, 2, 3, 1, 0, -13, 5, 5, -2, -7, 1, -2, 0, 0, 4, 5, 3, 2, 3, 2, 4, 5, 1, 0, 2, 0, -3, 0, 3, 5, 10, 1, 0],
            data1: [[2, 7, 5, 0, -6, -1, -2, 4, -2, 0, 6, 7, 6, 6, 7, 7, 4, 4, 6, 5, -1, -7, -6, 0, 3, 6, 5, 5, 7, 3, 0, -2, 3, 3, 3, 2, -11, -1, -4, 0, 4, 8, 10, 8, 7, 7, 4, 5, 5, 5, 1, -1, 3, 6, 8, 8, -2, 3, 5, 6, 6, 6, 0, 6, 11, 10, 7, -8, 0, -9, 4, 6, 6, 1, 5, 4, 4, 5, 4, 5, 0, 6, 7, 4, -7, -4, -6, 4, 8, 7, 5, 3, 4, 8, 7, 0, -4, 0, 1, -6, 4, 4, -1, 1, 7, 5, 4, 2, 0, 3, 5, 3, -1, 1, 7, 3, 3, 7, 7, 5, 0, 2, 4, 3, 3, 7, 10, 8, 1, -6, -2, 5, 5, 3, 3, -1, -1, 2, 5, 5, 0, -1, -1, -2, -1, 4, 5, 2, -2, 3, 5, -4, 5, 8, 11, 10, 0, 6, 9, 5, 8, 10, 8, 3, -4, 3, 6, 5, 2, 9, 11, 7, 2, -1, 3, 1, -7, -3, 6, 7, 3, -5, 0, -8, -9, 3, 2, 7, 4, 1, 6, 8, 10, 10, 9, 6, -9, 0, -2, 2, 8, 9, 4, -2, -2, -1, -9, -13, 1, -1, 0, 0, -3, 0, 0, 4, 9, 11, 10, 5, 4, -8, 6, 8, 5, -6, 3, 4, 9, 7, -4, 3, 4, 0, -10, -2, 6, 4, -1, 2, -10, 3, 6, 4, -4, 0, -5, 2, 0, -7, 1, 0, 0, 3, 5, 5, 0, 0, -5, 1, -2, -1, -2, 0, 9, 10, 7, 4, 4, 9, 5, -4, 0, 6, 5, 1, -4, 0, -5, 7, 8, 8, 10, 8, 2, 9, 7, 4, 1, -10, 1, 6, -3, 3, 4, 0, 3, 2, 6, -2, 6, 5, -3, 6, 8, 2, -1, 3, 6, 4, -7, -5, 6, 8, 6, 5, 9, 7, -6, 8, 8, 1, 1, -7, -2, 7, 5, 0, 1, 7, 2, -6, 0, -2, 0, -4, -2, 4, 1, -5, 2, 2, -6, 1, 2, 0, 5, 7, 6, 7, 6, 4, -1, 4, 6, 5, 3, 3, 1, -22, 3, 7, 4, 4, 5, 5, 5, 9, 10, 8, -1, 2, 3, 10, 13, 10, 6, 4, 6, 6, 5, 6, 6, 7, 11, 12, 11, 9, 2, 2, 3, 1, -5, -3, 2, 6, 6, 3, 10, 10, 7, 7, 6, 5, 5, 6, 4, 4, 7, 7, 9, 9, 3, 0, 9, 10, 3, 1, 3, 6, 4, 1, 6, 8, 10, 9, -1, -8, -2, 0, 3, 3, 1, -10, 1, -2, 3, 7, 10, 10, 11, 11, 3, -2, 4, 4, 2, 3, 7, 10, 10],
            [4, 6, 8, 6, 4, 2, 2, 5, 4, -1, 2, 3, 2, 4, 6, 7, 6, -2, 3, 4, -11, 4, 5, -2, 2, 6, 3, 4, 5, 6, 12, 13, 7, 4, 2, 4, 7, 8, 6, 6, 4, -5, 2, 5, 4, 1, -7, -3, 0, 4, 2, 2, 7, 2, -1, 6, 6, -6, 5, 3, 3, 0, -11, 1, 2, 4, 2, 1, 7, 6, 0, -3, 0, -3, -2, 4, 3, 1, -1, 0, 0, -1, 6, 6, -1, -1, 1, 0, 3, 3, 5, 3, 0, 4, 2, -2, 4, 5, 8, -3, 9, 8, 1, 0, 3, 10, 8, 0, -2, -4, -4, 5, 0, 2, 5, 4, 4, 4, 3, -1, 2, 9, 11, 4, 3, 7, 5, -28, 5, 8, 7, 7, 10, 8, -2, 5, 5, 3, 1, 1, -5, 7, 12, 10, 7, 5, 2, 1, 3, 2, 4, 3, -6, 0, -1, 2, 2, 8, 8, -1, 0, -6, 9, 10, 6, -4, -1, 6, 7, 6, 8, 7, 0, 3, 7, 7, 4, 0, 0, 4, 0, -9, -4, 5, 6, 3, -5, -6, -3, 1, 6, 5, -4, -10, 6, 7, -4, 10, 13, 10, 1, 0, 6, 6, -5, -4, 3, 3, 3, 0, -7, -3, -3, 1, -4, -6, 4, 6, -4, -1, 2, 3, 2, 2, -1, 4, 10, 8, 0, -1, -13, -2, 0, -3, 5, 3, 3, 3, 1, 3, 7, 9, 7, -3, -6, 2, 7, 8, 7, 4, -2, -7, -5, 4, 6, 4, -1, 4, 10, 9, -2, -9, 2, 0, -7, 0, 1, 8, 9, 8, 3, -1, 7, 3, 2, 8, 6, -3, 3, 0, -1, 3, 3, 2, 1, -4, -2, 3, 6, 3, -4, 1, 3, -12, 5, 5, 1, -2, -4, -11, 0, 2, 3, 0, 0, 2, 3, 0, 2, -1, -1, -22, 2, 9, 8, 3, -7, 6, 2, -27, 0, 5, 3, 5, 3, 0, 2, -15, -44, -11, -5, 2, 2, -4, -3, 5, 8, 10, 8, -2, 1, -3, -3, 0, 2, 1, -19, 3, 7, 11, 10, 4, 4, -1, 6, 7, 0, -4, 2, 5, 0, -8, -2, 5, 8, 1, 1, 3, -6, 1, -14, 4, 8, 8, 7, 4, 2, 3, 2, -1, -2, -2, 0, -4, -7, -1, 8, 10, 7, 5, 6, 6, 2, -3, -11, -3, 3, 8, 9, 5, 9, 8, 5, 4, -3, 5, 2, 6, 9, 10, 11, 10, 8, 2, -4, 2, 3, 2, 0, 3, 5, 5, 5, 6, 9, 9, 3, 5, 7, 1, 0, -7, 1, -2, -3, -7, -5, 1, 6, 6, 1, 0, -7, 1, -2, -3, -7, -5, 1, 6, 6,],
            [10, 4, 1, -6, 0, -2, 0, 4, 7, 7, 0, -9, -8, 6, 11, 11, 6, -3, 4, 5, 0, -5, 0, 0, 5, 10, 3, -5, -3, -3, 2, 2, 0, 0, -11, 3, 7, 7, 7, 6, 1, 4, 0, 3, 6, 3, -2, -3, -5, 0, -5, -6, -5, -3, -11, -1, 1, 2, 2, 3, 3, 0, 4, 8, 9, 2, 3, 2, 2, 4, 6, 7, 5, 2, 6, 10, 10, 6, 2, 0, 0, 1, 5, 8, 7, 7, 4, 0, 8, 4, 2, -1, -1, -3, 0, -1, 1, 7, 7, 0, 0, 1, 0, 3, 0, 2, 8, 3, -2, 4, 7, 7, -2, 8, 7, 1, 4, 0, -7, 4, 1, 1, -1, -10, 1, 8, 9, 5, 7, 10, 8, 9, 9, 0, 4, 6, 4, 0, -13, 0, 4, 3, -5, 0, -1, -5, 0, -4, -1, -1, 0, -24, 4, 3, 3, 7, 7, 4, -5, 4, 9, 8, 4, 0, 0, 10, 10, -3, 2, 1, 5, 7, 6, 5, 3, 4, 4, 4, 5, 6, 0, 3, 5, 4, 7, 5, 0, 0, -13, 5, 6, 5, 5, -4, 8, 5, 0, 0, -1, 0, 6, 6, 7, 10, 2, 4, 9, 5, -12, 1, 6, 6, 3, -11, -7, -6, -7, -1, 1, 2, -3, -9, 0, 2, -2, -5, -1, 1, -1, 4, 9, 7, 0, -1, 2, 5, 2, -7, 4, 8, 9, 7, 3, 3, 5, 1, 4, 7, 9, 10, 9, -1, 9, 12, 10, 7, -3, 3, 4, 7, 8, 8, 10, 9, 4, -7, 2, 4, 0, -3, 5, 8, 8, 6, 5, 4, 3, 2, 3, 0, -5, 2, 1, 5, 8, 5, 4, 7, 7, 6, 3, -4, 0, 1, 3, 4, 2, 0, -7, 5, 9, 3, 6, 4, 5, -5, 7, 5, -2, 0, -4, -10, -1, 3, 1, -6, 0, -7, 4, 9, 8, 10, 5, -12, 1, 3, 4, -2, 0, 0, 4, 8, 8, 5, 4, -1, 5, 0, 7, 3, -6, -9, 0, 0, 1, -8, 4, 7, -6, 1, 0, 0, 0, -4, 0, 3, 2, 1, -4, -9, 5, 10, 9, -1, 8, 11, 12, 11, 8, 0, -1, 5, 0, 1, 4, 2, -5, -19, -6, 5, 8, 3, -8, -10, 0, 3, 1, 7, 8, 7, 7, 7, 7, 9, 8, 5, 11, 13, 12, 5, 2, 11, 13, 12, 9, 5, 1, 4, 10, 12, 5, -1, 8, 11, 8, 3, 5, 6, 5, 5, 3, -19, 2, -11, 6, 6, 6, 3, 2, 0, -1, 9, 9, 8, 6, 0, -5, -8, 3, 7, 0, -4, -1, 1, -8, 3, 7, 0, -4, -1, 1,],
            ],

            xData2: ['', '', '', '', '',],
            yData2: [0],

            originData1: [
                {
                    简写: "a",
                    通信协议: "b",
                    频点个数: "0",
                    存储方式: "0",
                    频点为107MHZ的对最小电平值: "0",
                },
            ],
            originTitle1: ["简写", "通信协议", "频点个数", "存储方式", "频点为102MHZ是否有电平值"], // originTitle 该标题为 正常显示的标题, 数组中的顺序就是上面数据源对象中的字段标题对应的顺序
            transTitle1: ["离散扫描", "参数"], // transTitle 该标题为转化后的标题, 注意多一列,  因为原来的标题变成了竖着显示了, 所以多一列标题, 第一个为空即可
            transData1: [],
            ruleData1: ["MSCAN", "SCPI", "4", "频谱评估", "否"],
            show11: false,
            show21: true,
            show31: false,
            isshow11: true,
            time1: '',
            hr1: 0,
            min1: 2,
            sec1: 0,
            type1: "bar",
            co1: "#F00",

            xData1: ['89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104'],
            yData1: [30, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 28, 0, 0, 39, 0,],
            data11: [[34, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 26, 0, 0, 21, 0,],
            [26, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 26, 0, 0, 24, 0],
            [35, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 28, 0, 0, 25, 0,],
            [41, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 28, 0, 0, 24, 0,],
            [24, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 27, 0, 0, 23, 0,],
            [29, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 27, 0, 0, 24, 0,],
            ],

            xData21: ['', '', '', '', '',],
            yData21: [0],


            activities: [{
                content: '①单频测量(Singl-Frequency Frequency-Modulated，缩写：FFM)。',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more',
                color: '#409EFF'
            },
            {
                content: '②扫描方式默认的通信协议是可编程仪器标准命令(Standard Commands for Programmable Instruments，缩写：SCPI。)',
                size: 'large',
                icon: 'el-icon-setting',
                color: '#0bbd87'
            }, {
                content: '③由题可知中心频率为90MHZ(注意单位)。',
                size: 'large',
                icon: 'el-icon-s-goods',
                color: '#E6A23C',
            }, {
                content: '④由题目可知显示宽度为9KHZ，答题板要求显示宽度单位为MHZ，要进行单位换算：9KHZ=0.009MHZ。',
                size: 'large',
                icon: 'el-icon-s-grid',
                color: '#F56C6C',
            },
            {
                content: '⑤由题中心频率90MHZ=90000KHZ，x轴起始点与终止点横坐标差为9KHZ,所以起始频率：90000-4.5=89.995.5KHZ。',
                size: 'large',
                icon: 'el-icon-s-opportunity',
                color: '#909399',
            }],
            activities1: [{
                content: '①全景扫描(Memory -SCAN，缩写：MSCAN)',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more',
                color: '#409EFF'
            },
            {
                content: '②扫描方式默认的通信协议是可编程仪器标准命令(Standard Commands for Programmable Instruments，缩写：SCPI。)',
                size: 'large',
                icon: 'el-icon-setting',
                color: '#0bbd87'
            }, {
                content: '③由题可知只有四个频点有相应的电平值，所以频点数为4。',
                size: 'large',
                icon: 'el-icon-s-goods',
                color: '#E6A23C',
            }, {
                content: '④不同的扫描方式默认的存储方式均为存储评估。',
                size: 'large',
                icon: 'el-icon-s-grid',
                color: '#F56C6C',
            },
            {
                content: '⑤由题可知四个频点分别为89，97，100，103(单位为MHZ),并不包括102MHZ，所以答案为否。',
                size: 'large',
                icon: 'el-icon-s-opportunity',
                color: '#909399',
            }],
            activities1: [{
                content: '①全景扫描(Memory -SCAN，缩写：MSCAN)',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more',
                color: '#409EFF'
            },
            {
                content: '②扫描方式默认的通信协议是可编程仪器标准命令(Standard Commands for Programmable Instruments，缩写：SCPI。)',
                size: 'large',
                icon: 'el-icon-setting',
                color: '#0bbd87'
            }, {
                content: '③由题可知只有四个频点有相应的电平值，所以频点数为4。',
                size: 'large',
                icon: 'el-icon-s-goods',
                color: '#E6A23C',
            }, {
                content: '④不同的扫描方式默认的存储方式均为存储评估。',
                size: 'large',
                icon: 'el-icon-s-grid',
                color: '#F56C6C',
            },
            {
                content: '⑤由题可知四个频点分别为89，97，100，103(单位为MHZ),并不包括102MHZ，所以答案为否。',
                size: 'large',
                icon: 'el-icon-s-opportunity',
                color: '#909399',
            }]
        };
    },
    mounted() {
        var i = 0;
        this.$refs.chart_line_one.initChart(this.xData, this.yData, this.type, this.co)
        this.$refs.chart_line_two.initChart(this.xData2, this.yData2, this.type, this.co)

        timer = setInterval(() => {
            this.yData = this.data1[i];
            i++;
            if (i > this.data1.length - 1) {
                i = 0;
            }
            this.$refs.chart_line_one.initChart(this.xData, this.yData, this.type, this.co)
        }, 2000);


        timer = setInterval(() => {
            this.yData2 = this.data2[i];
            i++;
            if (i > this.data2.length - 1) {
                i = 0;
            }
            this.$refs.chart_line_two.initChart(this.xData2, this.yData2, this.type, this.co)
        }, 2000);

        var i1 = 0;
        this.$refs.chart_line_one1.initChart(this.xData1, this.yData1, this.type1, this.co1)
        this.$refs.chart_line_two1.initChart(this.xData21, this.yData21, this.type1, this.co1)

        timer1 = setInterval(() => {
            this.yData1 = this.data11[i1];
            i1++;
            if (i1 > this.data11.length - 1) {
                i1 = 0;
            }
            this.$refs.chart_line_one1.initChart(this.xData1, this.yData1, this.type1, this.co1)
        }, 2000);


        timer1 = setInterval(() => {
            this.yData21 = this.data21[i1];
            i1++;
            if (i1 > this.data21.length - 1) {
                i1 = 0;
            }
            this.$refs.chart_line_two1.initChart(this.xData21, this.yData21, this.type1, this.co1)
        }, 2000);
    },
    beforeDestroy() {
        clearInterval(timer1);
    },
    beforeDestroy() {
        clearInterval(timer);
    },



    created() {
        // 数组按矩阵思路, 变成转置矩阵
        let matrixData = this.originData.map((row, i) => {
            let arr = [];
            for (let key in row) {
                arr.push(row[key]);
            }
            return arr;
        });
        // 加入标题拼接最终的数据
        this.transData = matrixData[0].map((col, i) => {
            return [
                this.originTitle[i],
                ...matrixData.map((row) => {
                    return row[i];
                }),
            ];
        });

        let matrixData1 = this.originData1.map((row, i) => {
            let arr = [];
            for (let key in row) {
                arr.push(row[key]);
            }
            return arr;
        });
        // 加入标题拼接最终的数据
        this.transData1 = matrixData1[0].map((col, i) => {
            return [
                this.originTitle1[i],
                ...matrixData1.map((row) => {
                    return row[i];
                }),
            ];
        });
    },
    methods: {
        begin() {
            // 点击按钮后开始计算指定长度的时间
            this.time = (Date.parse(new Date()) + ((1 / 20 * 60 * 60)) * 1000);
            // 开始执行倒计时
            this.countdown();
            // 更换按钮，根据情况选择v-if或v-show
            this.isshow1 = false;
            //	this.$message({
            //    type: 'success',
            //  message: '开始答题'
            // });

        },
        countdown() {
            const end = this.time; // 定义结束时间
            const now = Date.parse(new Date()); // 获取本地时间
            const msec = end - now; // 定义总共所需的时间
            // 将时间戳进行格式化
            let hr = parseInt(msec / 1000 / 60 / 60 % 24);
            let min = parseInt(msec / 1000 / 60 % 60);
            let sec = parseInt(msec / 1000 % 60);
            // 倒计时结束时的操作
            const that = this;
            if (this.hr == 0 && this.min == 0 && this.sec == 0) {
                console.log('时间已经结束，答题完毕');
                this.hr = 0;
                this.min = 10;
                this.sec = 0;
            } else {
                // 如时间未归零则继续在一秒后执行
                this.hr = hr > 9 ? hr : '0' + hr;
                this.min = min > 9 ? min : '0' + min;
                this.sec = sec > 9 ? sec : '0' + sec;
                setTimeout(that.countdown, 1000)
            }
        },

        stop() {
            this.$confirm('即将结束答题, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then((action) => {
                // eleUI的确定结束回调函数方法
                if (action === 'confirm') {
                    this.hr = 0;
                    this.min = 0;
                    this.sec = 0;
                    console.log(this.hr + ',' + this.min + ',' + this.sec);
                    this.isshow1 = true;
                }
                this.$message({
                    type: 'success',
                    message: '交卷成功!'
                });
                this.submit();
            }).catch(() => {
                // 点击取消后
                this.$message({
                    type: 'info',
                    message: '已取消交卷'
                });

            });

        },

        submit() {
            //这部分应该是保存提交你添加的内容
            var a = 0;
            for (var i = 0; i < 5; i++) {
                if (this.transData[i][1] == this.ruleData[i]) {
                    a = a + 1;
                }
                else {
                    a = a - 1;
                }
            }
            if (a == 5) {
                this.$message({
                    message: '答案正确',
                    type: 'success'
                });
                this.show1 = true;
                this.show2 = false;
                this.show3 = true;
            }
            else {
                this.$message({
                    message: '答案错误',
                    type: 'error'
                });
                this.show1 = false;
                this.show2 = true;
                this.show3 = true;
            }
            this.$nextTick(function () {
                var myEvent = new Event('resize'); // 创建一个支持冒泡且不能被取消的resize事件
                window.dispatchEvent(myEvent); // 事件可以在任何元素触发
            });
        },
        changeHref: function (sortnum) {
            switch (sortnum) {
                case 1:
                    this.$router.push({
                        path: "/simulate1"
                    });
                    break;
                case 2:
                    this.$router.push({
                        path: "/simulate2",
                    });
                    break;
                case 3: this.$router.push({
                    path: "/simulate3",
                });
                    break;
                case 4: this.$router.push({
                    path: "/simulate4",
                });
                    break;


            }
        },

        begin1() {
            // 点击按钮后开始计算指定长度的时间
            this.time = (Date.parse(new Date()) + ((1 / 30 * 60 * 60)) * 1000);
            // 开始执行倒计时
            this.countdown1();
            // 更换按钮，根据情况选择v-if或v-show
            this.isshow11 = false;
            //	this.$message({
            //    type: 'success',
            //  message: '开始答题'
            // });

        },
        countdown1() {
            const end = this.time; // 定义结束时间
            const now = Date.parse(new Date()); // 获取本地时间
            const msec = end - now; // 定义总共所需的时间
            // 将时间戳进行格式化
            let hr1 = parseInt(msec / 1000 / 60 / 60 % 24);
            let min1 = parseInt(msec / 1000 / 60 % 60);
            let sec1 = parseInt(msec / 1000 % 60);
            // 倒计时结束时的操作
            const that = this;
            if (this.hr1 == 0 && this.min1 == 0 && this.sec1 == 0) {
                console.log('时间已经结束，答题完毕');
                this.hr1 = 0;
                this.min1 = 10;
                this.sec1 = 0;
            } else {
                // 如时间未归零则继续在一秒后执行
                this.hr1 = hr1 > 9 ? hr1 : '0' + hr1;
                this.min1 = min1 > 9 ? min1 : '0' + min1;
                this.sec1 = sec1 > 9 ? sec1 : '0' + sec1;
                setTimeout(that.countdown1, 1000)
            }
        },

        stop1() {
            this.$confirm('即将结束答题, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then((action) => {
                // eleUI的确定结束回调函数方法
                if (action === 'confirm') {
                    this.hr1 = 0;
                    this.min1 = 0;
                    this.sec1 = 0;
                    console.log(this.hr1 + ',' + this.min1 + ',' + this.sec1);
                    this.isshow11 = true;
                }
                this.$message({
                    type: 'success',
                    message: '交卷成功!'
                });
                this.submit1();
            }).catch(() => {
                // 点击取消后
                this.$message({
                    type: 'info',
                    message: '已取消交卷'
                });

            });

        },

        submit1() {
            //这部分应该是保存提交你添加的内容
            var a = 0;
            for (var i = 0; i < 5; i++) {
                if (this.transData1[i][1] == this.ruleData1[i]) {
                    a = a + 1;
                }
                else {
                    a = a - 1;
                }
            }
            if (a == 5) {
                this.$message({
                    message: '答案正确',
                    type: 'success'
                });
                this.show11 = true;
                this.show21 = false;
                this.show31 = true;
            }
            else {
                this.$message({
                    message: '答案错误',
                    type: 'error'
                });
                this.show11 = false;
                this.show21 = true;
                this.show31 = true;
            }
            this.$nextTick(function () {
                var myEvent = new Event('resize'); // 创建一个支持冒泡且不能被取消的resize事件
                window.dispatchEvent(myEvent); // 事件可以在任何元素触发
            });

        },

    },
};
</script>
<style lang="less" scoped>
.inputStyle {
    text-align: center;
    /*主要就是这个，下面的都是样式*/
    width: 6rem;
    height: 2.5rem;
    border: 1px solid #5a5e66;
    font-size: 14px;
    line-height: 48px;
    border-radius: 25px;
}
