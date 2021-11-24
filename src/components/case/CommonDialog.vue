<template>
    <el-dialog 
        :visible.sync="visible" 
        width="40%" 
        center 
        :title="dialogTitle"
    >
        <slot></slot>
    </el-dialog>
</template>

<script>
export default {
    props: {
        dialogTitle: "",
        visible: false,
    },
    methods: {},
};
</script>

<style>
</style>