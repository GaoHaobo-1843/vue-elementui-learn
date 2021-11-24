<style>
.el-main {
  background-color: #f5f7f9;
  /* width: 100%; */
  height: 100%;
}

.el-header,
.el-footer {
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f1f1;
  height: 100%;
  width: 100%;
  padding: 0px;
}

.el-container {
  height: 100%;
  width: 100%;
}
</style>

 <template>
  <el-container>
    <!-- header部分 -->
    <el-header>
      <nav-top></nav-top>
    </el-header>
    <el-container>
       <!-- aside部分 -->
      <left-nav></left-nav>
      <el-main>
         <!-- main部分 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>


 <script>
import navTop from "@/components/layout/nav-top.vue";
import leftNav from "../../components/layout/nav-left.vue";
export default {
  components: {
    'nav-top':navTop,   // 变量采用驼峰
    'left-nav':leftNav  // DOM采用全小写和-连接
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
