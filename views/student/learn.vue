<template>
    <div>
        <div>
            <el-card>
                <div slot="header" class="clearfix">
                    <span>学习任务</span>
                </div>
                <div class="tableMain">
                    <el-table border class="num1" :data="tableData" style="width: 1440px">
                        <el-table-column align="center" prop="id" label="任务编号" width="180px"></el-table-column>
                        <el-table-column align="center" prop="task" label="任务说明" width="1205px"></el-table-column>
                    </el-table>
                </div>
            </el-card>
        </div>
        <br><br><br>
        <div>
            <el-card>
                <div slot="header" class="clearfix">
                    <span>学习进度记录</span>
                </div>
                <div class="tableMain">
                    <el-table border class="num1" :data="tableData1" style="width: 1440px">
                        <el-table-column align="center" prop="id" label="学号" width="180px"></el-table-column>
                        <el-table-column align="center" prop="name" label="姓名" width="180px"></el-table-column>
                        <el-table-column align="center" prop="task" label="学习进度" width="825px"></el-table-column>
                        <el-table-column align="center" prop="date" label="选择时间" width="200px"></el-table-column>
                        <!--直接录入学生当前学习了什么，字符串类型-->
                    </el-table>
                </div>
                <el-dialog title="录入进度" :visible.sync="addDialogFormVisible" style="width: 1000px; margin-left: 350px">
                    <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
                    <el-form :model="addForm">
                        <el-form-item label="学号" :label-width="formLabelWidth">
                            <el-input v-model="addForm.id" auto-complete="off" style="width: 350px"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="addForm.name" auto-complete="off" style="width: 350px"></el-input>
                        </el-form-item>
                        <el-form-item label="学习进度" :label-width="formLabelWidth">
                            <el-input v-model="addForm.task" auto-complete="off" style="width: 350px"></el-input>
                        </el-form-item>

                        <el-form-item label="选择时间" :label-width="formLabelWidth" style="width: 350px">
                            <el-date-picker v-model="addForm.date" type="datetime" placeholder="选择日期"
                                value-format="yyyy-MM-dd " style="width: 350px"></el-date-picker>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="cancel">取消</el-button>
                        <!-- 设置触发添加的方法 -->
                        <el-button type="primary" @click="addFormData">添加</el-button>
                    </div>
                </el-dialog>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: '',
            id1: 0,
            tableData: [],
            tableData1: [],
            addDialogFormVisible: false,
            formLabelWidth: "90px",
            addForm: {
                'id': '',
                'name': '',
                'task': '',
                'date': '',
            },
        }
    },
    mounted() {
        this.initPage()
        this.initPage1()
    },
    methods: {
        initPage() {
            this.$axios.post('/')  //显示学习任务的后端接口
                .then((res) => {
                    console.log('getData is :', res.data)
                    this.tableData = res.data.data
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        initPage1() {
            this.id = localStorage.getItem('userid')
            this.id1 = this.id - 0,
                this.$axios.post('/ ', id1)  //显示当前学生进度的后端接口
                    .then((res) => {
                        console.log('getData is :', res.data)
                        this.tableData1 = res.data.data
                    })
                    .catch((error) => {
                        console.error(error)
                    })
        },
    }
}
</script>