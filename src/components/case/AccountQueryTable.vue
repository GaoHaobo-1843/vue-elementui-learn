<template>

    <el-table 
        :data="accountDataList" 
        stripe
        @row-click="returnSelected"
    >
        <el-table-column prop="ts1" label="账号" align="center">
        </el-table-column>
        <el-table-column prop="ts2" label="账户名称" align="center">
        </el-table-column>
        <el-table-column prop="ts3" label="账户类型" align="center">
        </el-table-column>
    </el-table>
 

</template>

<script>
export default {
    props:{
        'accountDataList':[],
    },
    methods:{
        returnSelected(row){
            this.$emit('get-one-line',row);
        }
    }

};
</script>

<style>
</style>