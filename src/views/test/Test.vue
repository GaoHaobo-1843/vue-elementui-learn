<template>
    <div id="test">
        TEST

        <el-divider></el-divider>

        <!-- 表格1 - 基础表格 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>1362账户退款</span>
            </div>
            <br />
            <div class="con-info">
                <div class="text item">账号：5654316546132132132</div>
                <div class="text item">账户名称：珠江数码有限公司</div>
                <div class="text item">账户类型：个人</div>
                <div class="text item">未出账费用：0.00元</div>
            </div>

            <br />
            <div class="">
                <el-table
                    stripe
                    :data="tableData"
                    style="width: 100%"
                    @select="selectOne"
                    :row-style="{ height: '80px' }"
                >
                    <el-table-column
                        type="selection"
                        width="50"
                        align="center"
                        :selectable="backSelect"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p1"
                        label="操作流水"
                        width="200"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p2"
                        label="预存类型"
                        width="140"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p3"
                        label="预存金额"
                        width="140"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p4"
                        label="可退金额"
                        width="140"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p5"
                        label="可返还抵扣金额"
                        width="140"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p6"
                        label="缴费渠道"
                        width="180"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p7"
                        label="缴费方式"
                        width="140"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p8"
                        label="退款金额"
                        width="180"
                        align="center"
                    >
                        <template slot-scope="scope">
                            <el-input
                                v-if="scope.row.edit"
                                v-model="scope.row.p8"
                                placeholder="姓名"
                            ></el-input>
                            <span v-else>{{ scope.row.p8 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="p9" label="返回抵扣金额" width="120">
                    </el-table-column>
                    <el-table-column
                        prop="p10"
                        label="实退金额"
                        width="120"
                        align="center"
                    >
                    </el-table-column>
                </el-table>

                <br />
                <br />

                <el-divider content-position="left">关联缴费记录</el-divider>

                <el-form ref="form" label-width="80px">
                    <div class="auto-flex">
                        <el-form-item label="退款方式">
                            <el-radio-group
                                v-model="radioBack"
                                @change="backMethodName"
                            >
                                <el-radio :label="1">现金退款</el-radio>
                                <el-radio :label="2">pos机退款</el-radio>
                                <el-radio :label="3">翼支付退款</el-radio>
                                <el-radio :label="4">支付宝退款</el-radio>
                                <el-radio :label="5">微信退款</el-radio>
                                <el-radio :label="6">银行退款</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input v-model="remark"></el-input>
                        </el-form-item>
                    </div>

                    <div class="confirm-button">
                        <el-button type="primary" @click="dialog3 = true"
                            >关联缴费记录</el-button
                        >
                    </div>

                    <br />

                    <el-divider content-position="left"
                        >信息汇总确认</el-divider
                    >

                    <el-descriptions title="" border>
                        <el-descriptions-item label="应收"
                            >100.00</el-descriptions-item
                        >
                        <el-descriptions-item label="优惠"
                            >10.00</el-descriptions-item
                        >
                        <el-descriptions-item label="预存划拨"
                            >0.00</el-descriptions-item
                        >
                        <el-descriptions-item label="新交款"
                            >0.00</el-descriptions-item
                        >
                        <el-descriptions-item label="优惠后应收"
                            >90.00</el-descriptions-item
                        >
                        <el-descriptions-item label="退款方式">{{
                            backMethod1362
                        }}</el-descriptions-item>
                        <el-descriptions-item label="关联流水">{{
                            backSn1362
                        }}</el-descriptions-item>
                        <el-descriptions-item label="流水金额">{{
                            backFee1362
                        }}</el-descriptions-item>
                        <el-descriptions-item label="流水时间">{{
                            backTime1362
                        }}</el-descriptions-item>
                    </el-descriptions>

                    <br />
                    <br />

                    <div class="confirm-button">
                        <el-button type="primary">退款</el-button>
                        <el-button type="info">重置</el-button>
                    </div>
                </el-form>
            </div>

            <el-dialog
                title="关联缴费记录"
                :visible.sync="dialog3"
                center
                width="61.80%"
            >
                <el-table :data="data1362" ref="data1362">
                    <el-table-column label="选择" width="60px">
                        <template slot-scope="scope">
                            <el-radio
                                :label="scope.row"
                                v-model="radio1352"
                                @change="paySelect1362"
                                >&nbsp;</el-radio
                            >
                        </template>
                    </el-table-column>
                    <el-table-column prop="ts1" label="缴费类型" align="center">
                    </el-table-column>
                    <el-table-column prop="ts2" label="缴费金额" align="center">
                    </el-table-column>
                    <el-table-column prop="ts3" label="缴费渠道" align="center">
                    </el-table-column>
                    <el-table-column prop="ts4" label="缴费时间" align="center">
                    </el-table-column>
                </el-table>

                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialog3 = false"
                        >返回</el-button
                    >
                </span>
            </el-dialog>
        </el-card>

        <!-- ---------------------------  银行托收 - 托收数据生成 -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>4749银行托收 - 托收数据生成</span>
            </div>
            <br />

            <div class="auto-flex">
                <el-radio v-model="radio1" label="1" border>银行托收</el-radio>
                <el-radio v-model="radio1" label="2" border>微信托收</el-radio>
                <el-radio v-model="radio1" label="3" border
                    >支付宝托收</el-radio
                >
            </div>
            <br />
            <br />
            <br />

            <div class="auto-flex">
                <el-button type="primary">生成托收数据</el-button>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>4749银行托收 - 托收数据生成情况</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                    >刷新</el-button
                >
            </div>
            <div class="">
                <el-table
                    :data="tsResult"
                    style="width: 100%"
                    @select="selectOne"
                >
                    <el-table-column prop="ts1" label="托收类型" align="center">
                    </el-table-column>
                    <el-table-column prop="ts2" label="开始时间" align="center">
                    </el-table-column>
                    <el-table-column prop="ts3" label="结束时间" align="center">
                    </el-table-column>
                    <el-table-column prop="ts4" label="处理情况" align="center">
                    </el-table-column>
                    <!-- <el-table-column prop="ts5" label="处理线程" align="center">
                    </el-table-column> -->
                </el-table>
            </div>
        </el-card>
        <!-- ---------------------------  银行托收 - 托收文件生成 -------------------------------- -->
        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>4749银行托收 - 托收文件生成</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                    >刷新</el-button
                >
            </div>
            <br />
            <div class="">
                <el-table
                    :data="tsFileData"
                    style="width: 100%"
                    @select="selectOne"
                >
                    <el-table-column
                        label="选择"
                        align="center"
                        type="selection"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj1"
                        label="银行名称"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj2"
                        label="本月托收笔数"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj3"
                        label="本月托收金额"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj4"
                        label="托收方式"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj5"
                        label="托收月份"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj6"
                        label="文件生成笔数"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj7"
                        label="文件数据总金额"
                        align="center"
                    >
                    </el-table-column>
                </el-table>
            </div>
            <br />
            <br />
            <div class="auto-flex">
                <el-button type="primary">生成托收文件</el-button>
            </div>

            <!-- <div class="auto-flex">
                    <el-radio v-model="radio1" label="1" border>银行托收</el-radio>
                    <el-radio v-model="radio1" label="3" border>支付宝托收</el-radio>
                </div>
                <br>
                 <br>

                <div class="auto-flex">
                    <el-button type="primary">生成托收文件</el-button>
                </div> -->
        </el-card>

        <!-- ---------------------------  银行托收 - 返回文件解密 -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>4749银行托收 - 返回文件解密</span>
            </div>
            <br />
            <div class="">
                <el-table
                    :data="fileInData"
                    style="width: 100%"
                    @select="selectOne"
                >
                    <el-table-column
                        label="选择"
                        align="center"
                        type="selection"
                    >
                    </el-table-column>
                    <el-table-column prop="ts3" label="文件名" align="center">
                    </el-table-column>
                </el-table>
            </div>
            <br />
            <br />
            <div class="auto-flex">
                <el-button type="primary">解密</el-button>
            </div>
        </el-card>

        <!-- ---------------------------  银行托收 - 返回文件入库 -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>4749银行托收 - 返回文件入库</span>
            </div>
            <br />
            <div class="">
                <el-table
                    :data="fileInData"
                    style="width: 100%"
                    @select="selectOne"
                >
                    <el-table-column
                        label="选择"
                        align="center"
                        type="selection"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ts1"
                        label="托收单位代码"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column prop="ts2" label="托收单位" align="center">
                    </el-table-column>
                    <el-table-column
                        prop="ts3"
                        label="文件名"
                        align="center"
                        width="680"
                    >
                    </el-table-column>
                </el-table>
            </div>
            <br />
            <br />
            <div class="auto-flex">
                <el-button type="primary">文件数据入库</el-button>
            </div>

            <!-- <div class="auto-flex">
                    <el-radio v-model="radio1" label="1" border>银行托收</el-radio>
                    <el-radio v-model="radio1" label="3" border>支付宝托收</el-radio>
                </div>
                <br>
                 <br>

                <div class="auto-flex">
                    <el-button type="primary">生成托收文件</el-button>
                </div> -->
        </el-card>

        <!-- ---------------------------  银行托收 - 销账 -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>4749银行托收 - 销账</span>
            </div>
            <br />
            <div class="auto-flex">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in bankOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <br />
            <br />
            <div class="auto-flex">
                <el-button type="primary">销账</el-button>
            </div>
        </el-card>

        <!-- --------------------- 销账结果查询 ---------------------------- -->
        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>4749银行托收 - 销账结果查询</span>
            </div>
            <br />
            <div class="auto-flex">
                <div>
                    <span>时间：</span>
                    <el-date-picker
                        type="monthrange"
                        range-separator="至"
                        start-placeholder="开始月份"
                        end-placeholder="结束月份"
                    >
                    </el-date-picker>
                </div>
                <div>
                    <span>银行：</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in banks"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
            </div>

            <br />
            <br />

            <div class="auto-flex">
                <el-button type="primary">查询</el-button>
            </div>

            <br />
            <div class="">
                <el-table
                    stripe
                    :data="payResult"
                    style="width: 100%"
                    @select="selectOne"
                >
                    、
                    <el-table-column
                        prop="tswj1"
                        label="银行代码"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj2"
                        label="银行名称"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column prop="tswj3" label="批次" align="center">
                    </el-table-column>
                    <el-table-column prop="tswj4" label="年月" align="center">
                    </el-table-column>
                    <el-table-column prop="tswj5" label="总笔数" align="center">
                    </el-table-column>
                    <el-table-column prop="tswj6" label="总金额" align="center">
                    </el-table-column>
                    <el-table-column
                        prop="tswj7"
                        label="成功笔数"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj8"
                        label="成功金额"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj9"
                        label="失败笔数"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tswj10"
                        label="失败金额"
                        align="center"
                    >
                    </el-table-column>
                </el-table>
                <br />
                <div class="auto-flex">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000"
                    >
                    </el-pagination>
                </div>
            </div>
        </el-card>

        <!-- ---------------------------  银行托收 - 返回文件解密 -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>4749银行托收 - 微信支付宝送扣</span>
            </div>
            <br />
            <div class="auto-flex">
                <el-radio v-model="radio1" label="2" border>微信托收</el-radio>
                <el-radio v-model="radio1" label="3" border
                    >支付宝托收</el-radio
                >
            </div>
            <br />
            <br />
            <div class="auto-flex">
                <div class="confirm-button">
                    <el-button type="primary">送扣</el-button>
                    <!-- <el-button type="primary">补缴</el-button> -->
                </div>
            </div>
        </el-card>

        <!-- --------------------- 托收方式更改 ---------------------------- -->
        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>4749银行托收 - 托收方式更改</span>
            </div>
            <br />
            <div class="space-between">
                <div>
                    <span>银行：</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in banks"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <el-button type="primary">查询</el-button>
                </div>
                <el-button type="info" icon="el-icon-circle-plus"></el-button>
            </div>

            <br />
            <br />

            <br />
            <div class="">
                <el-table
                    stripe
                    :data="tsfsData"
                    style="width: 100%"
                    @select="selectOne"
                    border=""
                >
                    <el-table-column prop="ts1" label="银行" align="center">
                    </el-table-column>
                    <el-table-column prop="ts2" label="托收方式" align="center">
                    </el-table-column>
                    <el-table-column prop="ts3" label="地区" align="center">
                    </el-table-column>
                    <el-table-column prop="ts4" label="类型" align="center">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                type="primary"
                                @click="handleEdit(scope.$index, scope.row)"
                                >编辑</el-button
                            >
                            <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                                >删除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
                <br />
                <div class="auto-flex">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000"
                    >
                    </el-pagination>
                </div>
            </div>
        </el-card>
        <!-- ---------------------------  账单明细费用查询 -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>1522 - 账单明细费用查询</span>
            </div>
            <br />
            <div class="auto-flex">用户号码：15648655482</div>
            <br />
            <br />

            <el-form>
                <div class="auto-flex">
                    <el-form-item label="时间">
                        <el-date-picker
                            type="monthrange"
                            range-separator="至"
                            start-placeholder="开始月份"
                            end-placeholder="结束月份"
                        >
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="一级账目项">
                        <el-select
                            v-model="zmxOne"
                            placeholder="请选择一级账目项"
                            @change="selectTwoChagne(value)"
                        >
                            <el-option
                                v-for="item in optionsOne"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="二级账目项">
                        <el-select
                            v-model="zmxTwo"
                            placeholder="请选择二级账目项"
                        >
                            <el-option
                                v-for="item in optionsTwo"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </el-form>

            <br />
            <div class="auto-flex">
                <div class="confirm-button">
                    <el-button type="primary">查询</el-button>
                    <el-button type="info">重置</el-button>
                </div>
            </div>
            <br />
            <el-table
                stripe
                :data="billData"
                style="width: 100%"
                @select="selectOne"
            >
                <!-- :span-method="objectSpanMethod" -->
                <el-table-column prop="ts1" label="账户号码" align="center">
                </el-table-column>
                <el-table-column prop="ts2" label="年月" align="center">
                </el-table-column>
                <el-table-column
                    prop="ts21"
                    label="销售品（新增）"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="ts3"
                    label="费用明细（一级账目项，现有）"
                    align="center"
                    sortable
                >
                </el-table-column>
                <el-table-column
                    prop="ts22"
                    label="二级账目项目（新增）"
                    align="center"
                >
                </el-table-column>
                <el-table-column prop="ts4" label="应收" align="center">
                </el-table-column>
                <el-table-column prop="ts5" label="优惠" align="center">
                </el-table-column>
                <el-table-column prop="ts6" label="预存划拨" align="center">
                </el-table-column>
                <el-table-column prop="ts7" label="新交款" align="center">
                </el-table-column>
                <!-- <el-table-column label="操作" width="160px">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="openDetail(scope.row)"
                            >查看明细</el-button
                        >
                    </template>
                </el-table-column> -->
            </el-table>
            <br />
            <el-descriptions title="合计" border>
                <el-descriptions-item label="应收">100.00</el-descriptions-item>
                <el-descriptions-item label="优惠">0.00</el-descriptions-item>
                <el-descriptions-item label="预存划拨"
                    >2.00</el-descriptions-item
                >
                <el-descriptions-item label="新交款"
                    >12.00</el-descriptions-item
                >
                <el-descriptions-item label="优惠后应收"
                    >100.00</el-descriptions-item
                >
            </el-descriptions>

            <el-dialog
                title="明细查看"
                :visible.sync="dialogTableVisible"
                center
                width="61.80%"
            >
                <el-table :data="billDataDetail">
                    <!-- :span-method="objectSpanMethod" -->
                    <el-table-column prop="ts1" label="账户号码" align="center">
                    </el-table-column>
                    <el-table-column prop="ts2" label="年月" align="center">
                    </el-table-column>
                    <el-table-column prop="ts8" label="套餐" align="center">
                    </el-table-column>
                    <el-table-column prop="ts9" label="销售品" align="center">
                    </el-table-column>
                    <el-table-column prop="ts3" label="明细" align="center">
                    </el-table-column>
                    <el-table-column prop="ts4" label="应收" align="center">
                    </el-table-column>
                    <el-table-column prop="ts5" label="优惠" align="center">
                    </el-table-column>
                    <el-table-column prop="ts6" label="预存划拨" align="center">
                    </el-table-column>
                    <el-table-column prop="ts7" label="新交款" align="center">
                    </el-table-column>
                </el-table>
                <span slot="footer" class="dialog-footer">
                    <el-button
                        type="primary"
                        @click="dialogTableVisible = false"
                        >返回</el-button
                    >
                </span>
            </el-dialog>
        </el-card>

        <!-- ---------------------------  j050 - 账单综合信息查询 -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>j050 - 账单综合信息查询</span>
            </div>
            <br />
            <div class="confirm-content">
                <el-form ref="form" label-width="80px">
                    
                    <div class="auto-flex">
                        <el-form-item label="查询方式" label-width="160px">
                            <el-radio v-model="radioBack" label="1"
                                >按客户编码查询</el-radio
                            >
                            <el-radio v-model="radioBack" label="2"
                                >按账户号码查询</el-radio
                            >
                            <el-radio v-model="radioBack" label="3"
                                >按用户证号查询</el-radio
                            >
                        </el-form-item>

                        <el-form-item label="编号" label-width="160px">
                            <el-input v-model="owe" style="width: 360px;">></el-input>
                        </el-form-item>
                        <el-form-item label="时间" label-width="160px">
                            <el-date-picker
                                type="monthrange"
                                range-separator="至"
                                start-placeholder="开始月份"
                                end-placeholder="结束月份"
                            >
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item label="销售品名称" label-width="160px">
                            <el-input v-model="owe" style="width: 360px;"></el-input>
                        </el-form-item>

                        <el-form-item label="一级账目项" label-width="160px">
                            <el-select
                                v-model="zmxOne"
                                placeholder="请选择一级账目项"
                                @change="selectTwoChagne(value)"
                            >
                                <el-option
                                    v-for="item in optionsOne"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="二级账目项" label-width="160px">
                            <el-select
                                v-model="zmxTwo"
                                placeholder="请选择二级账目项"
                            >
                                <el-option
                                    v-for="item in optionsTwo"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <br />

                    <div class="confirm-button">
                        <el-button type="primary">确定</el-button>
                        <el-button type="info">取消</el-button>
                    </div>
                </el-form>

                <br />
                <br />
                <el-table
                    :data="billData1"
                    @selection-change="handleSelectChangeJ050"
                    ref="tableJ050"
                    stripe
                >
                    <el-table-column
                        v-if="displayJ050"
                        type="selection"
                        width="30"
                    >
                    </el-table-column>
                    <el-table-column prop="ts1" label="用户号" align="center">
                    </el-table-column>
                    <el-table-column
                        prop="ts2"
                        label="账户号码"
                        align="center"
                        width="160px"
                    >
                    </el-table-column>
                    <el-table-column prop="ts3" label="年月" align="center">
                    </el-table-column>
                    <el-table-column prop="ts4" label="账单批次" align="center">
                    </el-table-column>
                    <el-table-column prop="ts5" label="支付状态" align="center">
                    </el-table-column>
                    <el-table-column
                        prop="ts6"
                        label="销售品名称"
                        align="center"
                        width="160px"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column prop="ts21" label="一级账目项" align="center"  width="90px">
                        </el-table-column>
                    <el-table-column prop="ts22" label="二级账目项" align="center"  width="100px">
                    </el-table-column>
                    <el-table-column prop="ts7" label="欠费" align="center" width="80px">
                    </el-table-column>
                    <el-table-column prop="ts8" label="应收" align="center" width="80px">
                    </el-table-column>
                    <el-table-column prop="ts9" label="优惠" align="center" width="80px">
                    </el-table-column>
                    <el-table-column
                        prop="ts10"
                        label="预存划拨"
                        align="center"
                        width="80px"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ts11"
                        label="欠费冲销"
                        align="center"
                        width="80px"
                    >
                    </el-table-column>
                    <el-table-column label="详情" width="100px">
                        <template slot-scope="scope">
                            
                            <el-button
                                size="mini"
                                type="primary"
                                @click="openDetail2(scope.row)"
                                ><i class="el-icon-search"></i></el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
                <br />

                <el-collapse
                    v-model="activeNames"
                    @change="handleChangej050(activeNames)"
                >
                    <el-collapse-item>
                        <template slot="title">
                            点我查看汇总结果<i
                                class="header-icon el-icon-info"
                            ></i>
                        </template>
                        <el-descriptions
                            title=""
                            border
                            direction="vertical"
                            :column="5"
                        >
                            <el-descriptions-item label="欠费">{{
                                owe050
                            }}</el-descriptions-item>
                            <el-descriptions-item label="应收">{{
                                shouldPay050
                            }}</el-descriptions-item>
                            <el-descriptions-item label="优惠">{{
                                favourFee050
                            }}</el-descriptions-item>
                            <el-descriptions-item label="预存划拨">{{
                                prepayFee050
                            }}</el-descriptions-item>
                            <el-descriptions-item label="欠费冲销">{{
                                payOwe050
                            }}</el-descriptions-item>
                        </el-descriptions>
                    </el-collapse-item>
                </el-collapse>
            </div>

                <!-- :title="dialogTitle050" -->

            <el-dialog
                title="查看明细"
                :visible.sync="dialog2"
                center
                width="61.80%"
            >
            <!-- billDataDetail1 -->
                <el-table :data="billDataDetail1" border="">
                    <!-- <el-table-column prop="ts1" label="账户号码" align="center">
                    </el-table-column>
                    <el-table-column prop="ts2" label="用户号" align="center">
                    </el-table-column>
                    <el-table-column prop="ts3" label="年月" align="center">
                    </el-table-column> -->
                    <el-table-column
                        prop="ts9"
                        label="销售品名称"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column prop="ts4" label="一级账目项" align="center">
                    </el-table-column>
                    <el-table-column prop="ts44" label="一级账目项" align="center">
                    </el-table-column>
                    <el-table-column prop="ts5" label="应收" align="center">
                    </el-table-column>
                    <el-table-column prop="ts6" label="优惠" align="center">
                    </el-table-column>
                    <el-table-column prop="ts7" label="预存划拨" align="center">
                    </el-table-column>
                    <el-table-column prop="ts8" label="销账工号" align="center">
                    </el-table-column>
                    <el-table-column prop="ts9" label="操作模块" align="center">
                    </el-table-column>
                    <el-table-column
                        prop="ts10"
                        label="销账账本"
                        align="center"
                        width="200px"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ts11"
                        label="销账时间"
                        align="center"
                        width="200px"
                    >
                    </el-table-column>
                </el-table>

                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialog2 = false"
                        >返回</el-button
                    >
                </span>
            </el-dialog>
        </el-card>

        <!-- ---------------------------  1352- 收据发票补打  - 按流水（预存发票） -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>1352- 收据发票补打 - 按流水（预存发票）</span>
            </div>
            <br />

            <el-form ref="form" label-width="80px">
                <div class="auto-flex">
                    <el-form-item label="查询账户">
                        <el-input
                            placeholder="请输入内容"
                            v-model="input1352"
                            class="input-with-select"
                        >
                            <el-select
                                v-model="select1352"
                                slot="prepend"
                                placeholder="请选择"
                                style="width: 110px"
                            >
                                <el-option
                                    label="按用户查"
                                    value="1"
                                ></el-option>
                                <el-option
                                    label="按客户查"
                                    value="2"
                                ></el-option>
                            </el-select>
                            <el-button
                                slot="append"
                                icon="el-icon-search"
                            ></el-button>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="账户">
                        <el-input v-model="owe" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="时间">
                        <el-date-picker
                            type="monthrange"
                            range-separator="至"
                            start-placeholder="开始月份"
                            end-placeholder="结束月份"
                        >
                        </el-date-picker>
                    </el-form-item>
                </div>

                <br />

                <div class="confirm-button">
                    <el-button type="primary">查询缴费流水</el-button>
                    <!-- <el-button type="info">重置</el-button> -->
                </div>
            </el-form>

            <br />
            <br />
            <div class="auto-flex">
                <div style="width: 90%">
                    <el-table :data="data1352" style="">
                        <el-table-column label="选择" width="60px">
                            <template slot-scope="scope">
                                <el-radio
                                    :label="scope.row.loginAccept"
                                    v-model="radio1352"
                                    @change="selecPayt1352"
                                    >&nbsp;</el-radio
                                >
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="ts1"
                            label="缴费类型"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="ts2"
                            label="缴费金额"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="ts3"
                            label="缴费时间"
                            align="center"
                        >
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <el-dialog
                title="发票打印信息查看"
                :visible.sync="dialogTableVisible1352"
                center
                width="60%"
            >
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary">打印</el-button>
                    <el-button
                        type="info"
                        @click="dialogTableVisible1352 = false"
                        >返回</el-button
                    >
                </span>

                <div class="dialog1352">
                    <el-divider content-position="center"
                        >客户票据信息</el-divider
                    >

                    <el-descriptions title="">
                        <el-descriptions-item label="购买方名称"
                            >爱奇艺有限责任公司</el-descriptions-item
                        >
                        <el-descriptions-item label="纳税人识别号"
                            >LDSAKFJ231654641321321</el-descriptions-item
                        >
                        <el-descriptions-item label="电子发票银行账号"
                            >3448915486475236</el-descriptions-item
                        >

                        <el-descriptions-item label="电子发票开户行"
                            >469432123131</el-descriptions-item
                        >
                        <el-descriptions-item label="购买方地址"
                            >广东省广州市天河区黄埔大道20号</el-descriptions-item
                        >
                    </el-descriptions>

                    <br />
                    <el-divider content-position="center"
                        >收据发票信息</el-divider
                    >

                    <el-descriptions title="">
                        <el-descriptions-item label="业务类型"
                            >收据发票补打</el-descriptions-item
                        >
                        <el-descriptions-item label="缴费月份"
                            >202111</el-descriptions-item
                        >
                        <el-descriptions-item label="账户号码"
                            >4870000003136</el-descriptions-item
                        >
                        <el-descriptions-item label="缴费流水"
                            >565413265464313</el-descriptions-item
                        >
                        <el-descriptions-item label="客户名称"
                            >珠江数码有限责任公司</el-descriptions-item
                        >
                        <el-descriptions-item label="缴费金额"
                            >100.00</el-descriptions-item
                        >
                        <el-descriptions-item label="缴费方式"
                            >现金</el-descriptions-item
                        >
                        <el-descriptions-item label="缴费时间"
                            >2021-11-19 21:12:3</el-descriptions-item
                        >
                        <el-descriptions-item label="工号"
                            >si00001</el-descriptions-item
                        >

                        <el-descriptions-item label="发票打印次数"
                            >0</el-descriptions-item
                        >
                        <el-descriptions-item label="发票号"
                            >LSFJ12154521212123</el-descriptions-item
                        >
                        <el-descriptions-item label="是否已收费"
                            >否</el-descriptions-item
                        >
                    </el-descriptions>

                    <br />

                    <el-divider content-position="center">缴费信息</el-divider>

                    <el-descriptions title="">
                        <el-descriptions-item label="账户号码"
                            >100.00</el-descriptions-item
                        >
                        <el-descriptions-item label="缴费金额"
                            >10.00</el-descriptions-item
                        >
                        <el-descriptions-item label="预存划拨"
                            >0.00</el-descriptions-item
                        >
                        <el-descriptions-item label="预存款浮动"
                            >0.00</el-descriptions-item
                        >
                        <el-descriptions-item label="滞纳金"
                            >0.00</el-descriptions-item
                        >
                    </el-descriptions>

                    <br />
                    <el-divider content-position="center">用户备注</el-divider>
                    <el-input
                        label="备注"
                        placeholder="请输入备注"
                        v-model="remark1352"
                    ></el-input>
                </div>
            </el-dialog>
        </el-card>

        <!-- ---------------------------  1352- 收据发票补打  - 按年月（月结发票） -------------------------------- -->

        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="">
                <span>1352- 收据发票补打 - 按年月（月结发票）</span>
            </div>
            <br />
            <br />

            <el-form ref="form" label-width="80px">
                <div class="auto-flex">
                    <el-form-item label="查询账户">
                        <el-input
                            placeholder="请输入内容"
                            v-model="input1352"
                            class="input-with-select"
                        >
                            <el-button
                                slot="append"
                                icon="el-icon-search"
                                @click="search1352"
                            ></el-button>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="账户">
                        <el-input v-model="owe" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="时间">
                        <el-date-picker
                            type="monthrange"
                            range-separator="至"
                            start-placeholder="开始月份"
                            end-placeholder="结束月份"
                        >
                        </el-date-picker>
                    </el-form-item>
                </div>

                <br />

                <div class="confirm-button">
                    <el-button type="primary">确定</el-button>
                    <el-button type="info">重置</el-button>
                </div>
            </el-form>

            <br />

            <el-dialog
                :visible.sync="visible1352"
                width="40%"
                title="选择账户"
                center
            >
                <el-table :data="data1352" @row-click="selectAccount1352">
                    <el-table-column prop="ts1" label="账号" align="center">
                    </el-table-column>
                    <el-table-column prop="ts2" label="账户名称" align="center">
                    </el-table-column>
                    <el-table-column prop="ts3" label="账户类型" align="center">
                    </el-table-column>
                </el-table>
            </el-dialog>

            <el-dialog
                :visible.sync="print1352"
                width="60%"
                title="月结发票打印"
                center
            >
                <el-descriptions title="">
                    <el-descriptions-item label="账户号码"
                        >100.00</el-descriptions-item
                    >
                    <el-descriptions-item label="缴费金额"
                        >10.00</el-descriptions-item
                    >
                    <el-descriptions-item label="预存划拨"
                        >0.00</el-descriptions-item
                    >
                    <el-descriptions-item label="预存款浮动"
                        >0.00</el-descriptions-item
                    >
                    <el-descriptions-item label="滞纳金"
                        >0.00</el-descriptions-item
                    >
                </el-descriptions>

                <el-table>
                    <el-table-column prop="ts1" label="账号" align="center">
                    </el-table-column>
                    <el-table-column prop="ts2" label="账户名称" align="center">
                    </el-table-column>
                    <el-table-column prop="ts3" label="账户类型" align="center">
                    </el-table-column>
                </el-table>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Test",

    data() {
        return {
            dialogTitle050: "",
            owe050: 0,
            shouldPay050: 0,
            favourFee050: 0,
            payOwe050: 0,
            prepayFee050: 0,
            activeNames: [],
            print1352: false,
            displayJ050: false,
            visible1352: false,
            remark1352: "",
            backMethod1362: "",
            backSn1362: "",
            backFee1362: "",
            backTime1362: "",
            radio1: "1",
            radioBack: "",
            aaa: 0,
            owe: 0,
            zmxOne: "",
            zmxTwo: "",
            remark: "",
            dialogTableVisible: false,
            dialogTableVisible1352: false,
            dialog2: false,
            dialog3: false,
            billDataDetail: [],
            billDataDetail1: [],
            select1352: "",
            input1352: "",
            radio1352: "",
            tableData: [
                {
                    p1: "2016505502",
                    p2: "现金",
                    p3: "50",
                    p4: "50",
                    p5: "0",
                    p6: "营业厅",
                    p7: "现金",
                    p8: "50",
                    p9: "50",
                    p10: "50",
                },
                {
                    p1: "2016505502",
                    p2: "支付宝",
                    p3: "50",
                    p4: "50",
                    p5: "0",
                    p6: "营业厅",
                    p7: "支付宝",
                    p8: "50",
                    p9: "50",
                    p10: "50",
                },
                {
                    p1: "2016505502",
                    p2: "微信",
                    p3: "10",
                    p4: "10",
                    p5: "10",
                    p6: "营业厅",
                    p7: "微信",
                    p8: "10",
                    p9: "10",
                    p10: "10",
                },
                {
                    p1: "2016505502",
                    p2: "现金",
                    p3: "10",
                    p4: "10",
                    p5: "10",
                    p6: "营业厅",
                    p7: "现金",
                    p8: "10",
                    p9: "10",
                    p10: "10",
                },
            ],
            options: [
                {
                    value: "选项1",
                    label: "现金退款",
                },
                {
                    value: "选项2",
                    label: "pos机退款",
                },
                {
                    value: "选项3",
                    label: "翼支付退款",
                },
                {
                    value: "选项4",
                    label: "支付宝退款",
                },
                {
                    value: "选项5",
                    label: "微信退款",
                },
                {
                    value: "pos机退款",
                    label: "pos机退款",
                },
                {
                    value: "原路返回",
                    label: "原路返回",
                },
            ],

            optionsOne: [
                {
                    value: "1aaa",
                    label: "一级账目项aaa",
                },
                {
                    value: "1bbb",
                    label: "一级账目项bbb",
                },
                {
                    value: "1ccc",
                    label: "一级账目项ccc",
                },
            ],
            optionsTwo: [],
            optionsTwoA: [
                {
                    value: "1aaa",
                    label: "二级账目项111",
                },
                {
                    value: "1bbb",
                    label: "二级账目项222",
                },
                {
                    value: "1ccc",
                    label: "二级账目项333",
                },
            ],
            optionsTwoB: [
                {
                    value: "1aaa",
                    label: "二级账目项444",
                },
                {
                    value: "1bbb",
                    label: "二级账目项555",
                },
                {
                    value: "1ccc",
                    label: "二级账目项666",
                },
            ],
            optionsTwoC: [
                {
                    value: "1aaa",
                    label: "二级账目项777",
                },
                {
                    value: "1bbb",
                    label: "二级账目项888",
                },
                {
                    value: "1ccc",
                    label: "二级账目项999",
                },
            ],
            bankOptions: [
                {
                    value: "支付宝",
                    label: "支付宝",
                },
                {
                    value: "中国银行",
                    label: "中国银行",
                },
                {
                    value: "工商银行",
                    label: "工商银行",
                },
                {
                    value: "招商银行",
                    label: "招商银行",
                },
                {
                    value: "农业银行",
                    label: "农业银行",
                },
                {
                    value: "建设银行",
                    label: "建设银行",
                },
            ],
            banks: [
                {
                    value: "选项1",
                    label: "中国银行",
                },
                {
                    value: "选项2",
                    label: "人民银行",
                },
                {
                    value: "选项3",
                    label: "建设银行",
                },
                {
                    value: "选项4",
                    label: "工商银行",
                },
                {
                    value: "选项5",
                    label: "招商银行",
                },
                {
                    value: "北京银行",
                    label: "北京银行",
                },
                {
                    value: "邮政银行",
                    label: "邮政银行",
                },
                {
                    value: "农业银行",
                    label: "农业银行",
                },
                {
                    value: "交通银行",
                    label: "交通银行",
                },
                {
                    value: "中信银行",
                    label: "中信银行",
                },
                {
                    value: "支付宝",
                    label: "支付宝",
                },
                {
                    value: "微信",
                    label: "微信",
                },
            ],
            tsResult: [
                {
                    ts1: "银行托收",
                    ts2: "2021-11-02 20:12:13",
                    ts3: "2021-11-02 20:20:13",
                    ts4: "成功",
                },
                {
                    ts1: "微信托收",
                    ts2: "2021-11-02 20:12:13",
                    ts3: "",
                    ts4: "数据生成中",
                },
                {
                    ts1: "支付宝托收",
                    ts2: "2021-11-02 20:12:13",
                    ts3: "2021-11-02 20:20:13",
                    ts4: "失败",
                },
            ],
            tsFileData: [
                {
                    tswj1: "中国银行",
                    tswj2: "100",
                    tswj3: "652313.25",
                    tswj4: "银行托收",
                    tswj5: "202111",
                    tswj6: "100",
                    tswj7: "652313.25",
                },
                {
                    tswj1: "工商银行",
                    tswj2: "200",
                    tswj3: "52146.25",
                    tswj4: "银行托收",
                    tswj5: "202111",
                    tswj6: "199",
                    tswj7: "52106.22",
                },
                {
                    tswj1: "建设银行",
                    tswj2: "18",
                    tswj3: "521.33",
                    tswj4: "银行托收",
                    tswj5: "202111",
                    tswj6: "18",
                    tswj7: "521.33",
                },
                {
                    tswj1: "支付宝托收",
                    tswj2: "18",
                    tswj3: "521.33",
                    tswj4: "支付宝托收",
                    tswj5: "202111",
                    tswj6: "18",
                    tswj7: "521.33",
                },
            ],
            payResult: [
                {
                    tswj1: "62",
                    tswj2: "工商银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "10",
                    tswj6: "131987.45",
                    tswj7: "10",
                    tswj8: "131987.45",
                    tswj9: "0",
                    tswj10: "0.00",
                },
                {
                    tswj1: "65",
                    tswj2: "中国银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "155",
                    tswj6: "46461987.45",
                    tswj7: "150",
                    tswj8: "46461887.45",
                    tswj9: "5",
                    tswj10: "100.00",
                },
                {
                    tswj1: "62",
                    tswj2: "工商银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "10",
                    tswj6: "4545.45",
                    tswj7: "10",
                    tswj8: "4545.45",
                    tswj9: "0",
                    tswj10: "0.00",
                },
                {
                    tswj1: "62",
                    tswj2: "工商银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "10",
                    tswj6: "6565656.45",
                    tswj7: "10",
                    tswj8: "6565656.45",
                    tswj9: "0",
                    tswj10: "0.00",
                },
                {
                    tswj1: "62",
                    tswj2: "工商银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "10",
                    tswj6: "6565656.45",
                    tswj7: "10",
                    tswj8: "6565656.45",
                    tswj9: "0",
                    tswj10: "0.00",
                },
                {
                    tswj1: "62",
                    tswj2: "工商银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "10",
                    tswj6: "6565656.45",
                    tswj7: "10",
                    tswj8: "6565656.45",
                    tswj9: "0",
                    tswj10: "0.00",
                },
                {
                    tswj1: "62",
                    tswj2: "工商银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "10",
                    tswj6: "6565656.45",
                    tswj7: "10",
                    tswj8: "6565656.45",
                    tswj9: "0",
                    tswj10: "0.00",
                },
                {
                    tswj1: "62",
                    tswj2: "工商银行",
                    tswj3: "5",
                    tswj4: "202111",
                    tswj5: "10",
                    tswj6: "6565656.45",
                    tswj7: "10",
                    tswj8: "6565656.45",
                    tswj9: "0",
                    tswj10: "0.00",
                },
            ],
            fileInData: [
                {
                    ts1: "62",
                    ts2: "工商银行",
                    ts3: "8613052000078705_001_003_20200506_620771_O.TXT",
                },
                {
                    ts1: "62",
                    ts2: "工商银行",
                    ts3: "8613052000078705_001_003_20200506_620772_O.TXT",
                },
                {
                    ts1: "62",
                    ts2: "工商银行",
                    ts3: "8613052000078705_001_003_20200506_620773_O.TXT",
                },
                {
                    ts1: "62",
                    ts2: "工商银行",
                    ts3: "8613052000078705_001_003_20200506_620774_O.TXT",
                },
                {
                    ts1: "62",
                    ts2: "工商银行",
                    ts3: "8613052000078705_001_003_20200506_620775_O.TXT",
                },
                {
                    ts1: "99",
                    ts2: "支付宝",
                    ts3: "NTGUANGZHOU_REDKKK_36794_20181119.txt",
                },
            ],
            tsfsData: [
                {
                    ts1: "工商银行",
                    ts2: "翼支付",
                    ts3: "广州市组织机构",
                    ts4: "1",
                },
                {
                    ts1: "工商银行",
                    ts2: "翼支付",
                    ts3: "花都",
                    ts4: "4",
                },
                {
                    ts1: "工商银行",
                    ts2: "翼支付",
                    ts3: "广州市组织机构",
                    ts4: "1",
                },
                {
                    ts1: "农业银行",
                    ts2: "翼支付",
                    ts3: "广州市组织机构",
                    ts4: "1",
                },
                {
                    ts1: "农业银行",
                    ts2: "翼支付",
                    ts3: "广州市组织机构",
                    ts4: "4",
                },
                {
                    ts1: "国际开发银行",
                    ts2: "翼支付",
                    ts3: "广州市组织机构",
                    ts4: "1",
                },
                {
                    ts1: "交通银行",
                    ts2: "翼支付",
                    ts3: "广州市组织机构",
                    ts4: "1",
                },
                {
                    ts1: "招商银行",
                    ts2: "翼支付",
                    ts3: "广州市组织机构",
                    ts4: "1",
                },
                {
                    ts1: "招商银行",
                    ts2: "翼支付",
                    ts3: "花都",
                    ts4: "4",
                },
            ],
            billData1: [
                {
                    ts1: "1564659763",
                    ts2: "316515135541",
                    ts3: "2021-10",
                    ts4: "00001",
                    ts5: "已支付",
                    ts6: "新视觉（200元/年）",
                    ts7: 0.0,
                    ts8: 10.0,
                    ts9: 20.0,
                    ts10: 0.0,
                    ts11: 0.0,
                    ts21: "收视维护费AAA",
                    ts22: "广东时移回看包",
                    detail: [
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-10",
                            ts4: "收视维护费AAA",
                            ts44:"广东时移回看包",
                            ts5: "10.00",
                            ts6: "20.00",
                            ts7: "0.00",
                            ts8: "smtest",
                            ts9: "新视觉（200元/年）",
                            ts10: "44454874431321211",
                            ts11: "2021-02-15 12:45:32",

                        },
                       
                    ],
                },
                {
                    ts1: "1564659763",
                    ts2: "316515135541",
                    ts3: "2021-10",
                    ts4: "00001",
                    ts5: "已支付",
                    ts6: "预存入网（600元）（26.5元/月）",
                    ts7: 0.0,
                    ts8: 10.0,
                    ts9: 20.0,
                    ts10: 0.0,
                    ts11: 0.0,
                    ts21: "收视维护费AAA",
                    ts22: "亚洲国际时移回看包",
                    detail: [
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-10",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "预存入网（600元）（26.5元/月）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-10",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "预存入网（600元）（26.5元/月）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-10",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "预存入网（600元）（26.5元/月）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                    ],
                },
                {
                    ts1: "1564659763",
                    ts2: "316515135541",
                    ts3: "2021-11",
                    ts4: "00001",
                    ts5: "已支付",
                    ts6: "新视觉（200元/年）",
                    ts7: 0.0,
                    ts8: 10.0,
                    ts9: 20.0,
                    ts10: 0.0,
                    ts11: 0.0,
                    ts21: "收视维护费BBB",
                    ts22: "全时移回看",
                    detail: [
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-11",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "新视觉（200元/年）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-11",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "新视觉（200元/年）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-11",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "新视觉（200元/年）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                    ],
                },
                {
                    ts1: "1564659763",
                    ts2: "316515135541",
                    ts3: "2021-10",
                    ts4: "00001",
                    ts5: "已支付",
                    ts6: "购机购卡（月租5元）",
                    ts7: 0.0,
                    ts8: 10.0,
                    ts9: 20.0,
                    ts10: 0.0,
                    ts11: 0.0,
                    ts21: "收视维护费BBB",
                    ts22: "高清时移回看包",
                    detail: [
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-10",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "购机购卡（月租5元）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-10",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "购机购卡（月租5元）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                        {
                            ts1: "1564659763",
                            ts2: "316515135541",
                            ts3: "2021-10",
                            ts4: "00001",
                            ts5: "已支付",
                            ts6: "购机购卡（月租5元）",
                            ts7: "0.00",
                            ts8: "10.00",
                            ts9: "20.00",
                            ts10: "0.00",
                            ts11: "0.00",
                        },
                    ],
                },
            ],
            billData: [
                {
                    ts1: "16516464843123",
                    ts2: "2021-10",
                    ts3: "收拾维护费",
                    ts4: "100.0",
                    ts5: "50.0",
                    ts6: "30.0",
                    ts7: "80.0",
                    ts21: "套餐AAA",
                    ts22: "广东时移回看包",
                    detail: [
                        {
                            ts1: "1654654654654",
                            ts2: "2021-10",
                            ts3: "维护费AAA",
                            ts4: "50.0",
                            ts5: "30.0",
                            ts6: "20.0",
                            ts7: "40.0",
                            ts8: "套餐B",
                            ts9: "销售品222",
                        },
                        {
                            ts1: "1654654654654",
                            ts2: "2021-10",
                            ts3: "维护费BBB",
                            ts4: "40.0",
                            ts5: "10.0",
                            ts6: "20.0",
                            ts7: "30.0",
                            ts8: "套餐A",
                            ts9: "销售品111",
                        },
                        {
                            ts1: "1654654654654",
                            ts2: "2021-10",
                            ts3: "维护费CCC",
                            ts4: "10.0",
                            ts5: "10.0",
                            ts6: "10.0",
                            ts7: "10.0",
                            ts8: "套餐C",
                            ts9: "销售品2233",
                        },
                    ],
                },
                {
                    ts1: "16516464843123",
                    ts2: "2021-10",
                    ts3: "租金",
                    ts4: "50.0",
                    ts5: "20.0",
                    ts6: "40.0",
                    ts7: "50.0",
                    ts21: "套餐AAA",
                    ts22: "全时移回看",
                },
                {
                    ts1: "16516464843123",
                    ts2: "2021-10",
                    ts3: "租金",
                    ts4: "140.0",
                    ts5: "70.0",
                    ts6: "30.0",
                    ts7: "80.0",
                    ts21: "套餐AAA",
                    ts22: "高清时移回看包",
                },

                {
                    ts1: "444545454545",
                    ts2: "2021-12",
                    ts3: "租金",
                    ts4: "50.0",
                    ts5: "20.0",
                    ts6: "40.0",
                    ts7: "50.0",
                    ts21: "套餐BBB",
                    ts22: "高清时移回看包",
                },
                {
                    ts1: "4846556465465646",
                    ts2: "2021-11",
                    ts3: "收拾维护费",
                    ts4: "140.0",
                    ts5: "70.0",
                    ts6: "30.0",
                    ts7: "80.0",
                    ts21: "套餐BBB",
                    ts22: "中央八台时移回看包",
                },
                {
                    ts1: "4846556465465646",
                    ts2: "2021-12",
                    ts3: "租金",
                    ts4: "140.0",
                    ts5: "70.0",
                    ts6: "30.0",
                    ts7: "80.0",
                    ts21: "套餐BBB",
                    ts22: "亚洲国际时移回看包",
                },
            ],
            data1352: [
                {
                    loginAccept: 1346541321,
                    ts1: "1302-用户缴费",
                    ts2: "20.00",
                    ts3: "2021-10-29 20:21:10",
                },
                {
                    loginAccept: 1324538621,
                    ts1: "1302-用户缴费",
                    ts2: "28.00",
                    ts3: "2021-10-29 20:22:10",
                },
                {
                    loginAccept: 1322376521,
                    ts1: "1302-用户缴费",
                    ts2: "100.00",
                    ts3: "2021-10-29 20:25:08",
                },
                {
                    loginAccept: 13234868974,
                    ts1: "1302-用户缴费",
                    ts2: "50.00",
                    ts3: "2021-10-29 20:58:22",
                },
            ],
            data1362: [
                {
                    loginAccept: 1346541321,
                    ts1: "1302-用户缴费",
                    ts2: "20.00",
                    ts3: "支付宝",
                    ts4: "2021-10-29 20:21:10",
                },
                {
                    loginAccept: 1324538621,
                    ts1: "1302-用户缴费",
                    ts2: "28.00",
                    ts3: "支付宝",
                    ts4: "2021-10-29 20:22:10",
                },
                {
                    loginAccept: 1322376521,
                    ts1: "1302-用户缴费",
                    ts2: "100.00",
                    ts3: "支付宝",
                    ts4: "2021-10-29 20:25:08",
                },
                {
                    loginAccept: 13234868974,
                    ts1: "1302-用户缴费",
                    ts2: "50.00",
                    ts3: "支付宝",
                    ts4: "2021-10-29 20:58:22",
                },
            ],
            value: "",
            backCan: ["支付宝", "现金"],
        };
    },

    methods: {
        /* 表格多选框选中值处理 */
        handleSelectChangeJ050(rows) {
            this.owe050 = 0;
            this.shouldPay050 = 0;
            this.favourFee050 = 0;
            this.prepayFee050 = 0;
            this.payOwe050 = 0;

            rows.forEach((element) => {
                this.owe050 += element.ts7;
                this.shouldPay050 += element.ts8;
                this.favourFee050 += element.ts9;
                this.prepayFee050 += element.ts10;
                this.payOwe050 += element.ts11;
            });
            console.log(rows);
        },
        handleChangej050(actName) {
            console.log(actName[0]);
            console.log(typeof actName[0] == "undefined");

            if (typeof actName[0] != "undefined") {
                this.displayJ050 = true;
            } else {
                this.displayJ050 = false;
                //清空表格多选框
                this.$refs.tableJ050.clearSelection();
            }
        },

        search1352() {
            this.visible1352 = true;
        },

        /* 选中表格中一行触发操作 */
        selectAccount1352() {
            this.visible1352 = false;
        },

        selecPayt1352(row) {
            this.dialogTableVisible1352 = true;
        },

        /* 单选框选中表格一条记录，取得该记录做处理并关闭弹框*/
        paySelect1362(row) {
            this.backSn1362 = row.loginAccept;
            this.backFee1362 = row.ts2;
            this.backTime1362 = row.ts4;
            this.dialog3 = false;
            this.radio1352 = "";
        },

        /* 根据单选框选中修改一个地方现实值 */
        backMethodName(value) {
            console.log("value = " + value);
            if (value === 1) this.backMethod1362 = "现金退款";
            if (value === 2) this.backMethod1362 = "POS机退款";
            if (value === 3) this.backMethod1362 = "翼支付退款";
            if (value === 4) this.backMethod1362 = "支付宝退款";
            if (value === 5) this.backMethod1362 = "微信退款";
            if (value === 6) this.backMethod1362 = "银行退款";
        },

        /* 根据退款方式决定记录是否禁用 */
        backSelect(row, index) {
            let flag = this.backCan.indexOf(row.p7);
            console.log(this.radioBack);

            if (flag >= 0) {
                return true;
            } else {
                return false;
            }
        },

        /* 表格选择某条记录，控制相应字段可编辑 */
        selectOne(rows, row) {
            let selected = rows.length && rows.indexOf(row) !== -1;
            console.log(selected); // true就是选中，0或者false是取消选中
            if (selected) {
                row.edit = true;
            } else {
                row.edit = false;
                row.p8 = row.p4;
            }
        },

        /* 级联下拉框 */
        selectTwoChagne(value) {
            var self = this;
            if (this.zmxOne == "1aaa") {
                self.optionsTwo = self.optionsTwoA;
            }
            if (this.zmxOne == "1bbb") {
                self.optionsTwo = self.optionsTwoB;
            }
            if (this.zmxOne == "1ccc") {
                self.optionsTwo = self.optionsTwoC;
            }
        },

        /* 打开对话框 */
        openDetail(row) {
            this.dialogTableVisible = true;
            this.billDataDetail = row.detail;
        },

        /* 打开对话框 */
        openDetail2(row) {
            this.dialog2 = true;
            this.billDataDetail1 = row.detail;
            this.dialogTitle050 =
                "时间：【" +
                row.ts3 +
                "】 销售品：【" +
                row.ts6 +
                "】 - " +
                "明细查看";
        },

        /* 计算跨度 */
        calSpan(dataList, rowIndex, spanNum, columnIndex) {
            /* 第一列 */
            if (columnIndex === 0) {
                /* 第一行特殊情况处理 */

                if (
                    rowIndex === 0 &&
                    dataList[rowIndex].ts1 !== dataList[rowIndex + 1].ts1
                )
                    // 跟第二行不一样，独占一行
                    return -1;

                if (
                    rowIndex !== 0 &&
                    dataList[rowIndex].ts1 === dataList[rowIndex - 1].ts1
                ) {
                    return 0;
                }

                /* 最后一行特殊情况处理 */
                if (rowIndex + 1 === dataList.length) {
                    if (dataList[rowIndex].ts1 === dataList[rowIndex - 1].ts1)
                        // 如果跟上一行一样，不占行
                        return 0;
                    // 如果跟上一行不一样，占1行
                    else return -1;
                }
                if (
                    rowIndex !== 0 &&
                    dataList[rowIndex].ts1 !== dataList[rowIndex + 1].ts1 &&
                    dataList[rowIndex].ts1 !== dataList[rowIndex - 1].ts1
                )
                    return -1;

                /* 除去第一行和最后一行 */
                if (
                    rowIndex + spanNum < dataList.length &&
                    dataList[rowIndex].ts1 === dataList[rowIndex + spanNum].ts1
                ) {
                    return (
                        1 +
                        this.calSpan(
                            dataList,
                            rowIndex,
                            spanNum + 1,
                            columnIndex
                        )
                    );
                } else {
                    return 0;
                }
            }
            if (columnIndex === 1) {
                if (
                    rowIndex === 0 &&
                    dataList[rowIndex].ts2 !== dataList[rowIndex + 1].ts2
                )
                    // 跟第二行不一样，独占一行
                    return -1;

                if (
                    rowIndex !== 0 &&
                    dataList[rowIndex].ts2 === dataList[rowIndex - 1].ts2
                ) {
                    return 0;
                }

                /* 最后一行特殊情况处理 */
                if (rowIndex + 1 === dataList.length) {
                    if (dataList[rowIndex].ts2 === dataList[rowIndex - 1].ts2)
                        // 如果跟上一行一样，不占行
                        return 0;
                    // 如果跟上一行不一样，占1行
                    else return -1;
                }
                if (
                    rowIndex !== 0 &&
                    dataList[rowIndex].ts2 !== dataList[rowIndex + 1].ts2 &&
                    dataList[rowIndex].ts2 !== dataList[rowIndex - 1].ts2
                )
                    return -1;

                /* 除去第一行和最后一行 */
                if (
                    rowIndex + spanNum < dataList.length &&
                    dataList[rowIndex].ts2 === dataList[rowIndex + spanNum].ts2
                ) {
                    return (
                        1 +
                        this.calSpan(
                            dataList,
                            rowIndex,
                            spanNum + 1,
                            columnIndex
                        )
                    );
                } else {
                    return 0;
                }
            }
        },
        // /* 计算跨度2 */
        calSpan1(row, column, rowIndex, columnIndex, spanNum) {
            if (rowIndex !== 0 && row[columnIndex] === column[rowIndex - 1]) {
                return 0;
            }

            if (rowIndex === 0 && row[columnIndex] !== column[rowIndex + 1]) {
                return 0;
            }

            if (
                rowIndex !== 0 &&
                row[columnIndex] !== column[rowIndex + 1] &&
                row[rowIndex] !== column[rowIndex - 1]
            ) {
                return -1;
            }

            if (
                rowIndex + spanNum < column.length &&
                row[columnIndex] === column[rowIndex + spanNum]
            ) {
                return (
                    1 +
                    this.calSpan1(
                        row,
                        column,
                        rowIndex,
                        columnIndex,
                        spanNum + 1
                    )
                );
            } else {
                return 0;
            }
        },

        /* 行合并 */
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            var dataList = this.billData;

            /* 只针对第一列 */
            if (columnIndex === 0 || columnIndex === 1) {
                var span = this.calSpan(dataList, rowIndex, 1, columnIndex);
                console.log("span = " + span);
                if (span === 0) {
                    return {
                        rowspan: 0,
                        colspan: 1,
                    };
                } else if (span === -1) {
                    return {
                        rowspan: 1,
                        colspan: 1,
                    };
                } else {
                    return {
                        rowspan: span + 1,
                        colspan: 1,
                    };
                }
            }
        },

        objectSpanMethod1({ row, column, rowIndex, columnIndex }) {
            // var dataList = this.billData;

            console.log("row[columnIndex]  = " + row[columnIndex]);
            console.log("column[rowIndex]  = " + column[rowIndex]);
            console.log(column);
            console.log(row);

            /* 只针对第一列 */
            if (columnIndex === 0 || columnIndex === 1) {
                var span = this.calSpan1(row, column, rowIndex, columnIndex, 1);
                console.log("span = " + span);
                if (span === 0) {
                    return {
                        rowspan: 0,
                        colspan: 0,
                    };
                } else if (span === -1) {
                    return {
                        rowspan: 1,
                        colspan: 1,
                    };
                } else {
                    return {
                        rowspan: span + 1,
                        colspan: 1,
                    };
                }
            }
        },
    },
};
</script>

<style>
.con-info {
    display: flex; /* 自适应布局 */
    justify-content: flex-start; /* 左右布局  */
    flex-wrap: wrap; /* 换行 */
}
.auto-flex {
    display: flex; /* 自适应布局 */
    justify-content: space-around; /* 左右布局  */
    flex-wrap: wrap; /* 换行 */
}
.space-between {
    display: flex; /* 自适应布局 */
    justify-content: space-between; /* 左右布局  */
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
    margin-left: 100px;
    width: 600px;
}

.other .el-form-item__content {
    width: 400px;
    margin-left: 120px !important;
}

.back-method .el-form-item__content {
    width: 100%;
    margin-left: 120px !important;
}

.confirm-button {
    text-align: center;
}
.confirm-content {
    width: 100%;
}
.el-form-item {
    display: inline-block !important;
}
.el-form-item-self {
    display: inline-block !important;
}
.form-flex {
}
.dialog1352 .el-descriptions-item__content {
    color: #409eff;
}

.confirm-content .auto-flex .el-form-item{
    width: 50%
}
</style>


