<template>
    <!-- 容器 -->
    <el-container>
        <el-aside width="auto" class="header-logo tap">
            <!-- <img class="logo" src="@/assets/logo.png" alt="Logo" /> -->
        </el-aside>

        <el-aside width="auto" class="header-logo tap">
            <el-avatar icon="el-icon-user-solid" class="headerLogo"></el-avatar>
        </el-aside>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style>
.el-aside {
    display: flex;
    justify-content: center;
    align-items: center;
}

section {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
}

.logo {
    width: 200px;
}

.headerLogo,
.logo {
    cursor: pointer;
}
</style>