<template>
  <div
    class="basetable"
    v-loading="loading"
    element-loading-text="Loading desperately."
  >
    <!-- v-loading 设置加载 -->
    <div class="selectMenu" style="font-family: arial; font-size: 18px">
      &nbsp; &nbsp;当前题目
      <!-- 点击触发addFormData方法 -->
      &nbsp; &nbsp;
      <el-button type="primary" @click="addVisibleDialog">录入题目</el-button>
    </div>
<!--    :data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)为设置显示页数以及每页显示条数-->
    <div class="tableMain">
      <el-table border class="num1" :data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)" style="width: 1440px">
        <el-table-column
          align="center"
          prop="id"
          label="题目编号"
          width="160px"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="扫描协议"
          width="160px"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="method"
          label="扫描方式"
          width="160px"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="num"
          label="扫描参数(MHZ)"
          width="200px"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="num1"
          label="信号值个数"
          width="160px"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="date"
          label="起始时间"
          width="200px"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="dateend"
          label="终止时间"
          width="200px"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="考试时间(min)"
          width="160px"
        ></el-table-column>
        <el-table-column align="center" label="操作" width="200px">
<!--          编辑功能-->
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small" @click="editVisibleDialog(scope.$index,scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pagesize"
        :total="userList.length"
        layout="total, sizes, next, pager, prev, jumper"
      ></el-pagination>
    </div>
    <!-- 下面这个用来设置点击添加按钮的弹出框，里面可以进行嵌套表格来展示弹出的表格信息,使用下面的:visible.sync来控制显示与否 -->
    <!-- 里面绑定的是我们新设置的值，填写完成后，将我们这个新值塞到页面中所有的数据当中去 -->
    <el-dialog
      title="添加题目"
      :visible.sync="addDialogFormVisible"
      style="width: 1000px; margin-left: 400px;padding-right: 350px"
    >
      <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
      <el-form :model="addForm">
        <el-form-item label="题目编号" :label-width="formLabelWidth">
          <el-input
            v-model="addForm.id"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>

        <el-form-item label="扫描协议" :label-width="formLabelWidth">
          <el-input
            v-model="addForm.name"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>
        <el-form-item label="扫描方式" :label-width="formLabelWidth">
          <el-select
            v-model="addForm.method"
            placeholder="选择"
            style="width: 350px"
          >
            <el-option label="PSCAN" value="PSCAN"></el-option>
            <el-option label="MSCAN" value="MSCAN"></el-option>
            <el-option label="FFM" value="FFM"></el-option>
            <el-option label="FSCAN" value="FSCAN"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="扫描参数" :label-width="formLabelWidth">
          <el-input
            v-model="addForm.num"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-form-item label="信号值个数" :label-width="formLabelWidth">
            <el-input
              v-model="addForm.num1"
              auto-complete="off"
              style="width: 350px"
            ></el-input>
          </el-form-item>
        </el-form-item>

        <el-form-item
          label="起始时间"
          :label-width="formLabelWidth"
          style="width: 350px"
        >
          <el-date-picker
            v-model="addForm.date"
            type="datetime"
            placeholder="选择日期和时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 350px"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="终止时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="addForm.dateend"
            type="datetime"
            placeholder="选择日期和时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 350px"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="考试时间" :label-width="formLabelWidth">
          <el-input
            v-model="addForm.time"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <!-- 设置触发添加的方法 -->
        <el-button type="primary" @click="addFormData">添加</el-button>
      </div>
    </el-dialog>


    <el-dialog
      title="编辑题目"
      :visible.sync="editDialogFormVisible"
      style="width: 1000px; margin-left: 350px"
    >
      <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
      <el-form :model="editForm">
        <el-form-item label="题目编号" :label-width="formLabelWidth">
          <el-input
            v-model="editForm.id"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>

        <el-form-item label="扫描协议" :label-width="formLabelWidth">
          <el-input
            v-model="editForm.name"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>
        <el-form-item label="扫描方式" :label-width="formLabelWidth">
          <el-select
            v-model="editForm.method"
            placeholder="选择"
            style="width: 350px"
          >
            <el-option label="PSCAN" value="PSCAN"></el-option>
            <el-option label="MSCAN" value="MSCAN"></el-option>
            <el-option label="FFM" value="FFM"></el-option>
            <el-option label="FSCAN" value="FSCAN"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="扫描参数" :label-width="formLabelWidth">
          <el-input
            v-model="editForm.num"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-form-item label="信号值个数" :label-width="formLabelWidth">
            <el-input
              v-model="editForm.num1"
              auto-complete="off"
              style="width: 350px"
            ></el-input>
          </el-form-item>
        </el-form-item>

        <el-form-item
          label="起始时间"
          :label-width="formLabelWidth"
          style="width: 350px"
        >
          <el-date-picker
            v-model="editForm.date"
            type="datetime"
            placeholder="选择日期和时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 350px"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="终止时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="editForm.dateend"
            type="datetime"
            placeholder="选择日期和时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 350px"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="考试时间" :label-width="formLabelWidth">
          <el-input
            v-model="editForm.time"
            auto-complete="off"
            style="width: 350px"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <!-- 设置触发更新的方法 -->
        <el-button type="primary" @click="handleEdit" >更新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script >
export default {
  data() {
    return {
      loading: true,
      //   表格的数据
      tableData: [ ],
      addDialogFormVisible: false,
      editDialogFormVisible: false,
      formLabelWidth: "90px",
      // 设置form用于进行添加的时候绑定值
      addForm: {
        'name':'',
        'method':'',
        'num':'',
        'num1':0,
        'date':'',
        'dateend':'',
        'time':'',
        'id': ''
      },
      editForm: {
        'name':'',
        'method':'',
        'num':'',
        'num1':0,
        'date':'',
        'dateend':'',
        'time':'',
        'id': ''
      },
			currentPage: 1,
// 每页的数据
      pagesize: 20,
      userList: [],
    };
  },
  mounted() {
    this.initPage()
    },
  created() {

  },
  methods: {
    // 初始列表数据
    initPage() {
      this.$axios.post('/getExamData')
        .then((res) => {
          console.log('getData is :',res.data)
          this.tableData = res.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    addVisibleDialog() {
      this.addDialogFormVisible = true
    },
    editVisibleDialog(index,row) {
      // 设置对话框的可见
      this.editDialogFormVisible = true
      // 将数据的index传递过来用于实现数据的回显
      this.editForm = this.tableData[index]
    },
    // 增加数据的方式，单独的设置一些值，用于增加功能，这些值放在对象里面进行设置，然后将这个新增的对象塞到总数据里面
    addFormData() {
      let formData = new FormData()
      formData.append('name',this.addForm.name)
      formData.append('method',this.addForm.method)
      formData.append('num',this.addForm.num)
      formData.append('num1',this.addForm.num1)
      formData.append('date',this.addForm.date)
      formData.append('dateend',this.addForm.dateend)
      formData.append('time',this.addForm.time)
      formData.append('id',this.addForm.id)
      // this.form = {}
      console.log('NEW FORM DATA:',this.form)
      // url:addFormData
      this.$axios.post('/addFormData',formData)
        .then((res)=> {
          console.log('add Form Data result:',res.data.message)
          this.addDialogFormVisible = false
        })
        .catch((error) => {
          console.error(error)
        })
      this.initPage()
    },
     // 更新对应项数据
    updateFormData() {
      //   this.form.date = reformat(this.form.date);
      //    可以在html上面进行设置日期的格式化
      //   将我们添加的信息提交到总数据里面
      this.tableData.push(this.form);
      this.dialogFormVisible = false;
    },

    handleEdit() {
      // console.log('row is:',row)
      // console.log('index is:',index+1)
      // const id = index+1
      let formData = new FormData()
      formData.append('name',this.editForm.name)
      formData.append('method',this.editForm.method)
      formData.append('num',this.editForm.num)
      formData.append('num1',this.editForm.num1)
      formData.append('date',this.editForm.date)
      formData.append('dateend',this.editForm.dateend)
      formData.append('time',this.editForm.time)
      formData.append('id',this.editForm.id)
      this.$axios.post('/editFormData',formData)
        .then((res)=> {
          console.log('edit Form Data result:',res.data.message)
          this.editDialogFormVisible = false
        })
        .catch((error) => {
          console.error(error)
        })
      // 更新后重新获取数据
      this.initPage()
    },
    // 删除数据
    handleDelete(index, row) {
      this.$confirm("永久删除此题目，是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log('确认框点击后进入回调函数')
          console.log('删除行所在id：',row.id)
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.$axios.post('/deleteFormData',{'id':row.id})
            .then((res)=> {
              console.log('delete Form Data result:',res.data.data)
              // 后台返回后再删除前台数据
              this.tableData.splice(index, 1)
              this.$message({
                type: "success",
                message: "成功删除!",
              })
            })
            .catch((error) => {
              console.error(error)
            })
        })
    },
    cancel() {
      // 取消的时候直接设置对话框不可见即可
      this.dialogFormVisible = false;
    },
		say(message) {
      alert(message);
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
  },
};
</script>
<style scoped lang="less" />