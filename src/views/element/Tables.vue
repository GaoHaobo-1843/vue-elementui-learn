<style>
.tables-style {
    width: 800px;
}
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>
<template>
    <div id="tables">
        <h1>表格</h1>

        <el-divider></el-divider>

        <!-- 表格1 - 基础表格 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>基础表格</span>
            </div>
            <div class="tables-style">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-divider></el-divider>

        <!-- 表格2 - 带斑马纹表格 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span></span>
            </div>
            <div class="tables-style">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-divider></el-divider>

        <!-- 表格3 - 带边框表格 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>带边框表格</span>
            </div>
            <div class="tables-style">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-divider></el-divider>

        <!-- 表格4 - 带状态表格 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>带状态表格</span>
            </div>
            <div class="tables-style">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                >
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-divider></el-divider>

        <!-- 表格5 - 固定表头 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>固定表头</span>
            </div>
            <div class="tables-style">
                <el-table
                    :data="tableData2"
                    height="250"
                    border
                    style="width: 100%"
                >
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-divider></el-divider>

        <!-- 表格3 -  -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span></span>
            </div>
            <div class="tables-style"></div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "tables",
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 1) {
                return "warning-row";
            } else if (rowIndex === 3) {
                return "success-row";
            }
            return "";
        },
    },
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            tableData2: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-08",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-06",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
            ],
        };
    },
};
</script>
