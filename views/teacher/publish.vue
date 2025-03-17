
<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>学习任务</span>
        <el-button type="primary" @click="addVisibleDialog">发布任务
        </el-button>
      </div>
      <div class="tableMain">
        <el-table border class="num1" :data="tableData">
          <el-table-column align="center" prop="id" label="任务编号" width="180px"></el-table-column>
          <el-table-column align="center" prop="content" label="任务说明" width="1005px"></el-table-column>
          <el-table-column align="center" label="操作" width="200px">
            <!--          编辑功能-->
            <template slot-scope="scope">
              <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
              <el-button size="small" @click="editVisibleDialog(scope.$index, scope.row)">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog title="发布任务" :visible.sync="addDialogFormVisible" style="width: 1000px; margin-left: 350px">
        <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
        <el-form :model="addForm">
          <el-form-item label="任务编号" :label-width="formLabelWidth">
            <el-input v-model="addForm.id" auto-complete="off" style="width: 350px"></el-input>
          </el-form-item>

          <el-form-item label="任务说明" :label-width="formLabelWidth">
            <el-input v-model="addForm.content" auto-complete="off" style="width: 350px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <!-- 设置触发添加的方法 -->
          <el-button type="primary" @click="addFormData">添加</el-button>
        </div>
      </el-dialog>
      <el-dialog title="编辑任务" :visible.sync="editDialogFormVisible" style="width: 500px; margin-left: 350px">
        <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
        <el-form :model="editForm">
          <el-form-item label="任务编号" :label-width="formLabelWidth">
            <el-input v-model="editForm.id" auto-complete="off" style="width: 350px"></el-input>
          </el-form-item>

          <el-form-item label="任务说明" :label-width="formLabelWidth">
            <el-input v-model="editForm.content" auto-complete="off" style="width: 350px"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <!-- 设置触发更新的方法 -->
          <el-button type="primary" @click="handleEdit">更新</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      addDialogFormVisible: false,
      editDialogFormVisible: false,
      formLabelWidth: "90px",

      addForm: {
        id: "",
        content: "",
      },
      editForm: {
        id: "",
        content: "",
      },
    };
  },
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {
      this.$axios
        .post("/getAllTaskData") //显示学习任务的后端接口
        .then((res) => {
          console.log("getData is :", res.data);
          this.tableData = res.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    addVisibleDialog() {
      this.addDialogFormVisible = true;
    },

    addFormData() {
      let formData = new FormData();
      formData.append("id", this.addForm.id);
      formData.append("content", this.addForm.content);
      // this.form = {}
      console.log("NEW FORM DATA:", this.form);
      // url:addFormData
      this.$axios
        .post("/addTaskFormData", formData) //录入题目
        .then((res) => {
          console.log("add Form Data result:", res.data.message);
          this.addDialogFormVisible = false;
        })
        .catch((error) => {
          console.error(error);
        });
      this.initPage1();
    },
    cancel() {
      // 取消的时候直接设置对话框不可见即可
      this.dialogFormVisible = false;
    },
    say(message) {
      alert(message);
    },
    editVisibleDialog(index, row) {
      // 设置对话框的可见
      this.editDialogFormVisible = true;
      // 将数据的index传递过来用于实现数据的回显
      this.editForm = this.tableData[index];
    },

    handleEdit() {
      let formData = new FormData();
      formData.append("id", this.editForm.id);
      formData.append("content", this.editForm.content);
      this.$axios
        .post("/editTaskFormData", formData) //编辑题目后端接口
        .then((res) => {
          console.log("edit Form Data result:", res.data.message);
          this.editDialogFormVisible = false;
        })
        .catch((error) => {
          console.error(error);
        });
      // 更新后重新获取数据
      this.initPage();
    },

    // 删除数据
    handleDelete(index, row) {
      this.$confirm("永久删除此题目，是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        console.log("确认框点击后进入回调函数");
        console.log("删除行所在id：", row.id);
        // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
        this.$axios
          .post("/deleteTaskFormData", { id: row.id }) //删除任务接口
          .then((res) => {
            console.log("delete Form Data result:", res.data.data);
            // 后台返回后再删除前台数据
            this.tableData.splice(index, 1);
            this.$message({
              type: "success",
              message: "成功删除!",
            });
          })
          .catch((error) => {
            console.error(error);
          });
      });
    },
  },
};
</script>