<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64" text-color="#fff"
    active-text-color="#ffd04b" @open="handleOpen" @close="handleClose">
    <h4 v-show="!isCollapse">EASY-DISCOUNT</h4>
    <h4 v-show="isCollapse">RMETS</h4>
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex"
          @click="clickMenu(subItem)">
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu {
  height: 100%;
  border: none;

  h4 {
    color: #ffd04b;
    text-align: center;
    line-height: 30px;
    font-weight: bold
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      menu: [],
    };
  },
  mounted() {
    this.menu = [
      {
        path: "/home",
        name: "home",
        label: '操作演示',
        icon: "s-home",
      },
      {
        path: "/learn",
        name: "learn",
        label: '学习进度',
        icon: "date"
      },
      {
        path: "/exercise",
        name: "exercise",
        label: "模拟练习 ",
        icon: "setting",
        children: [
          {
            path: "/simulate1",
            name: "simulate1",
            label: "模拟题1",
          },
          {
            path: "/simulate2",
            name: "simulate2",
            label: "模拟题2",

          },
          {
            path: "/simulate3",
            name: "simulate3",
            label: "模拟题3",
          },
          {
            path: "/simulate4",
            name: "simulate4",
            label: "模拟题4",
          },
        ],
      },
      {
        path: "/student",
        label: "在线考试",
        icon: "menu",
        name: "student",
      },
      {
        path: "/store",
        name: "store",
        label: '超市',
        icon: "date"
      },
    ],
      console.log(localStorage.getItem('usertype'))
    if (localStorage.getItem('usertype') === '2') {
      this.menu.splice(0, 4,
      )//删除第一个功能

      this.menu.splice(1, 0, {
        path: "/teacher",
        label: "老师出题",
        name: "teacher",
        icon: "location",
      }, {
        path: "/test",
        label: "学生成绩",
        name: "test",
        icon: "menu",
      },
        {
          path: "/publish",
          name: "publish",
          label: '任务发布',
          icon: "share",
        },
        {
          path: "/stu-progress",
          name: "stu-progress",
          label: '学生进度查看',
          icon: "view",
        },
      )

    }
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      console.log(item);
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
