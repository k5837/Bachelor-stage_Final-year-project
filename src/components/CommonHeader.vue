<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <el-breadcrumb>
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{path:item.path}">{{item.label}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item :to="currentMenu.path" v-if="currentMenu">{{
          currentMenu.label
        }}</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          
          <el-dropdown-item><router-link :to="{ path: '/' }">退出</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/images/user.png"),
    };
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
	  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex; //布局样式，左右
  height: 100%;
  justify-content: space-between; //左右居中
  align-items: center; //上下居中
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.router-link-active {
  text-decoration: none;
	color: #606266;
}
</style>
