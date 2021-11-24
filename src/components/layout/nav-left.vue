<template>
    <el-aside width="200px">
        <el-row class="tac">
            <el-col>
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                >

                    <el-menu-item index="1" @click="goPage('home')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">后台中心</span>
                    </el-menu-item>

                    <el-menu-item index="2" @click="goPage('order')">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">订单列表</span>
                    </el-menu-item>

                    <el-menu-item index="3" @click="goPage('tables')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">表格</span>
                    </el-menu-item>

                    <el-menu-item index="4" @click="goPage('test')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">广电家客</span>
                    </el-menu-item>

                    <!-- <el-submenu index="4">

                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>测试3</span>
                        </template>

                        <el-menu-item-group>
                            <el-menu-item index="4-1">测试3-1</el-menu-item>
                        </el-menu-item-group>

                    </el-submenu> -->
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>

<script>
export default {

  data() {
    return {};
  },
  beforeCreate() {
    // $this = this;
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    goPage(link) {
      if (link === "home") {
        this.$router.push("/").catch(error => error);
      } else if ((link == "order")) {
        this.$router.push("/order").catch(error => error);
      } else if ((link == "tables")) {
        this.$router.push("/tables").catch(error => error);
      } else if ((link == "test")) {
        this.$router.push("/test").catch(error => error);
      }else {}
    }
  }

};
</script>

<style>
.el-row {
    height: 100%;
}

.el-menu {
    border-right: none;
    height: 100%;
}
.el-aside {
    border-right: 1px solid #f5f1f1;
    height: 100%;
}
</style>