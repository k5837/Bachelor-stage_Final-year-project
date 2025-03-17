<template>
    <div class="basetable" v-loading="loading" element-loading-text="Loading desperately.">
      <!-- v-loading 设置加载 -->
      <div class="selectMenu">
        <el-date-picker v-model="value6" type="daterange" placeholder="Select date range."></el-date-picker>
        <!-- 点击触发add方法 -->
        <el-button type="primary" @click="add">Add</el-button>
      </div>
      <div class="tableMain">
        <el-table :data="tableData" style="width: 100%">
  
          <el-table-column
        label="Picture"  >
      <template #default = "props">
        <img  :src="props.row.img" width="100" height="100" >
      </template>
      </el-table-column>
  
                  <el-table-column prop="name" label="Name" width="150px" ></el-table-column>
                      <el-table-column prop="Price" label="Price" width="130px"></el-table-column>
                      <el-table-column prop="address" label="Address" width="150px" ></el-table-column>
          <el-table-column prop="date" label="Issue date" ></el-table-column>
                      <el-table-column prop="region" label="Stock" width="120px"></el-table-column>
        
  
          <el-table-column label="Operation">
            <template slot-scope="scope">
              <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
              <el-button size="small"  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
      <!-- 下面这个用来设置点击添加按钮的弹出框，里面可以进行嵌套表格来展示弹出的表格信息,使用下面的:visible.sync来控制显示与否 -->
      <!-- 里面绑定的是我们新设置的值，填写完成后，将我们这个新值塞到页面中所有的数据当中去 -->
      <el-dialog title="Commodity information" :visible.sync="dialogFormVisible">
        <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
        <el-form :model="form">
                  <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Price" :label-width="formLabelWidth">
            <el-input v-model="form.Price" auto-complete="off"></el-input>
          </el-form-item>
                              <el-form-item label="address" :label-width="formLabelWidth">
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Issue date" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="Select date"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
  
          <el-form-item label="stock" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="stock">
              <el-option label="Yes" value="Yes"></el-option>
              <el-option label="No" value="No"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">Cancel</el-button>
          <!-- 设置触发更新的方法 -->
          <el-button type="primary" @click="update">Confirm</el-button>
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
        tableData: [
          {
                      //img:require('@/assets/images/iPhone13.png'),
            date: "2021-09-17",
            name: "iPhone 13",
            region: "Yes",
            address: "Beijing",
                      Price:'$799',
            city: ""
          },
          {
                      //img:require('@/assets/images/iPhone12.png'),
            date: "2020-10-16",
            name: "iPhone 12",
            region: "No",
            address: "Chengdu",
                      Price:'$799',
            city: ""
          },
          {
                     // img:require('@/assets/images/xiaomi10.png'),
            date: "2020-02-13",
            name: "Xiaomi 10",
            region: "Yes",
            address: "Shenzhen",
                      Price:'$469',
            city: ""
          },
          {
                      //img:require('@/assets/images/Xiaomi 10pro.png'),
            date: "2020-02-13",
            name: "Xiaomi 10pro",
            region: "Yes",
            address: "Shenzhen",
                      Price:'$569',
            city: ""
          },
          {
                      //img:require('@/assets/images/SAMSUNG.png'),
            date: "2015-03-02",
            name: "SAMSUNG galaxys6",
            region: "No",
            address: "Chengdu",
                      Price:'$599',
            city: ""
          },
          {
                      //img:require('@/assets/images/meizu.png'),
            date: "2015-03-02",
            date: "2017-05-03",
            name: "Meizu",
            region: "No",
            address: "Wuhan",
                      Price:'$399',
            city: ""
          },
          {
                     // img:require('@/assets/images/vivo.png'),
            date: "2015-03-02",
            date: "2021-01-21",
            name: "vivo x60pro",
            region: "No",
            address: "Hangzhou",
                      Price:'$499',
            city: ""
          }
        ],
        //   城市选择数据
        cityList: [
          { name: "国王大道" },
          { name: "尼泊尔" },
          { name: "沃斯卡亚工业区" },
          { name: "花村" },
          { name: "尼泊尔" },
          { name: "月球基地" }
        ],
        dialogFormVisible: false,
        formLabelWidth: "80px",
        // 设置form用于进行添加的时候绑定值
        form: {},
        value6: "",
        currentPage3: 1,
        currentIndex: ""
      };
    },
    created() {
      //   设置回调函数，进行1.5秒的loading动画显示
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    },
    methods: {
      showTime() {
        this.$alert(this.value6, "Start and end time", {
          confirmButtonText: "Confirm",
          callback: action => {
            this.$message({
              type: "info",
              message: "Displayed"
            });
          }
        });
      },
      // 增加数据的方式，单独的设置一些值，用于增加功能，这些值放在对象里面进行设置，然后将这个新增的对象塞到总数据里面
      add() {
        this.form = {
          date: "",
          name: "",
          region: "",
          address: ""
        };
        this.dialogFormVisible = true;
      },
      update() {
        //   this.form.date = reformat(this.form.date);
        //    可以在html上面进行设置日期的格式化
        //   将我们添加的信息提交到总数据里面
        this.tableData.push(this.form);
        this.dialogFormVisible = false;
      },
      handleEdit(index, row) {
        // 将数据的index传递过来用于实现数据的回显
        this.form = this.tableData[index];
        this.currentIndex = index;
        // 设置对话框的可见
        this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        // 设置类似于console类型的功能
        this.$confirm("Permanently delete this file, do you want to continue?", "Tips", {
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
          type: "warning"
        })
          .then(() => {
            // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
            this.tableData.splice(index, 1);
            this.$message({
              type: "success",
              message: "Delete succeeded!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Deletion cancelled."
            });
          });
      },
      cancel() {
        // 取消的时候直接设置对话框不可见即可
        this.dialogFormVisible = false;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };
  </script>
  <style lang="less">
  .basetable {
    .tableMain {
      margin-top: 10px;
       
    }
    .page {
      float: left;
      margin-top: 10px;
    }
  }
  </style>
  