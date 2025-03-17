<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>学生进度查看</span>
      </div>
      <div class="tableMain">
        <el-table border class="num1" :data="tableData" style="width: 1440px">
          <el-table-column
            align="center"
            prop="id"
            label="学号"
            width="180px"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="姓名"
            width="200px"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="progress"
            label="学习进度"
            width="1005px"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="time"
            label="时间"
            width="1005px"
          ></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {
      this.$axios
        .post("/getAllProgress") //显示所有学生的学习进度的后端接口
        .then((res) => {
          console.log("getData is :", res.data);
          this.tableData = res.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>