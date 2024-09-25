<!-- 日志列表 -->
<template>
  <div class="app-container">
    <div class="search-container">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item label="Keywords" prop="keywords">
              <el-input
                v-model="queryParams.keywords"
                placeholder="Table/field name"
                clearable
                style="width: 150px"
              />
        </el-form-item>
        <el-form-item label="Primary Key" prop="primaryKey">
              <el-input
                v-model="queryParams.primaryKey"
                placeholder="primaryKey"
                clearable
                style="width: 150px"
              />
        </el-form-item>
        <el-form-item label="Operate by" prop="username">
              <el-input
                v-model="queryParams.username"
                placeholder="Operate by"
                clearable
                style="width: 100px"
              />
        </el-form-item>
        <el-form-item label="Time of update">
              <el-date-picker
                class="!w-[240px]"
                v-model="dateTimeRange"
                type="daterange"
                range-separator="~"
                start-placeholder="start time"
                end-placeholder="end time"
                value-format="YYYY-MM-DD"
              />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery()">
            <i-ep-search />
            搜索
          </el-button>
          <el-button @click="handleResetClick()">
            <i-ep-refresh />
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-card shadow="never">
      <el-table
        v-loading="loading"
        highlight-current-row
        :data="tableData"
        border
        :header-cell-style="{fontSize: '14px', backgroundColor: '#eef1f6',color:'#333'}"
        @selection-change="handleSelectionChange"
        @expand-change="expandChange"
      >
        <el-table-column width="55" align="center">
          <template #default="scope">
            <el-icon><Grid /></el-icon>
          </template>
        </el-table-column>  

        <el-table-column type="expand" label="log table" width="100">
          <template #default="props">
            <el-table :data="props.row.userLogItems" border
            :header-cell-style="{fontSize: '12px', backgroundColor: '#f8f8f8',color:'#333'}"
            >
              <el-table-column label="Primary key" prop="primaryKey" align="center"/>
              <el-table-column label="Field Name" prop="fieldName" align="center" />
              <el-table-column label="Operate Type" prop="operateType" align="center" width="100" />
              <el-table-column label="Value Before" prop="valueBefore" align="center" show-overflow-tooltip/>
              <el-table-column label="Value After" prop="valueAfter" align="center" show-overflow-tooltip/>
              <el-table-column label="Operate Time" prop="createTime" align="center" />
              <el-table-column label="Operate by" prop="createBy" align="center" width="100" />
              <el-table-column label="operation" fixed="right" align="center" width="100">
              <template #default="scope">
                <el-button
                  type="primary"
                  size="small"
                  link
                  @click="handleOpenDialog(props.row.tableName ,scope.row)">
                    <el-icon><Paperclip /></el-icon>
                    details
                </el-button>
              </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="Table name" prop="tableName" />
        <el-table-column label="Edit history Count" prop="count" />
        <el-table-column label="Time of update" prop="timeSpan">
        </el-table-column>
      </el-table>

      <pagination
        v-if="total > 0"
        v-model:total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="handleQuery"
      />
    </el-card>
    <!-- 用户表单弹窗 -->
    <el-drawer
      v-model="dialog.visible"
      :title="dialog.title"
      :withHeader = false
      append-to-body
      @close="handleCloseDialog"
    >
      <el-timeline>
        <el-timeline-item  v-for="(item, index) in timelineData"  :timestamp="item.createTime?.substring(0, 10)" placement="top"  :color = getColor(item.operateType)>
          <el-card>
            <div style="font-size: 10px; margin-top: 10px;">
              <el-text truncated class="!mx-2 flex-1 !text-xs !text-[var(--el-text-color-secondary)]">修改前:  {{item.valueBefore}}</el-text>
            </div>
            <div style="font-size: 10px; margin-top: 10px;">
              <el-text truncated class="!mx-2 flex-1 !text-xs !text-[var(--el-text-color-secondary)]">修改后:  {{item.valueAfter}}</el-text>
            </div>
            <div style="font-size: 10px; margin-top: 10px;">
              <el-text truncated class="!mx-2 flex-1 !text-xs !text-[var(--el-text-color-secondary)]">{{item.createBy}}修改于{{item.createTime}}</el-text>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleCloseDialog">取 消</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "UserLog",
  inherititems: false,
});

import UserLogAPI, { UserLogPageQuery, UserLogPageVO, UserLogItemQuery, UserLogItemVO, TimelineQuery} from "@/api/user-log";

const queryFormRef = ref(ElForm);

const loading = ref(false);
const ids = ref<number[]>([]);
const total = ref(0);

const color = ref('#0bbd87');

const timelineData = ref<UserLogItemVO[]>();

const queryParams = reactive<UserLogPageQuery>({
  pageNum: 1,
  pageSize: 10,
});

const dateTimeRange = ref("");
watch(dateTimeRange, (newVal) => {
  if (newVal) {
    queryParams.startDate = newVal[0];
    queryParams.endDate = newVal[1];
  } else {
    queryParams.startDate = undefined;
    queryParams.endDate = undefined;
  }
});

const tableData = ref<UserLogPageVO[]>();

/**  用户弹窗对象  */
const dialog = reactive({
  visible: false,
  title: "",
});

// 查询
function handleQuery() {
  loading.value = true;
  UserLogAPI.getPage(queryParams)
    .then((data) => {
      data.list.map(item => {
        //item.userLogItems = [];
      });
      tableData.value = data.list;
      total.value = data.total;
    })
    .finally(() => {
      loading.value = false;
    });
}

// 重置查询
function handleResetClick() {
  queryFormRef.value.resetFields();
  queryParams.pageNum = 1;
  handleQuery();
}

// 行选择
function handleSelectionChange(selection: any) {
  ids.value = selection.map((item: any) => item.id);
}

// 展开事件----动态获取内嵌表数据
function expandChange(row: UserLogPageVO, expandedRows: any[]) {
  // 该处是用于判断是展开还是收起行，只有展开的时候做请求，避免多次请求！
  // 展开的时候expandedRows有值，收起的时候为空.
  if (expandedRows.length > 0) {
    if (row.userLogItems.length > 0) {
      return;
    }
    loading.value = true;
    UserLogAPI.listUserLogItems({
            tableName: row.tableName,
            startDate: queryParams.startDate,
            endDate: queryParams.endDate
    })
    .then((data) => {
      row.userLogItems = data;
    })
    .finally(() => {
      loading.value = false;
    });
  }
}

/**
 * 打开弹窗
 *
 * @param row
 */
 async function handleOpenDialog(tableName:string,row:any) {
  timelineData.value = [];
  const timelineParams = {"tableName":tableName,"primaryKey":row.primaryKey,"fieldName":row.fieldName};
  UserLogAPI.listTimeline(timelineParams)
    .then((data) => {
      timelineData.value = data;
      console.log("data",data);
      console.log("timelineData.value",timelineData.value);
    })
  dialog.visible = true;
}

/** 关闭弹窗 */
function handleCloseDialog() {
  dialog.visible = false;
}

function getColor(status?:string) {
  if (status === 'insert') {
    return '#3fca60';
  }else if (status === 'update'){
    return '#f9a33f';
  }else{
    return '#eb5757';
  }
}

onMounted(() => {
  handleQuery();
});
</script>

<style scoped lang="scss">
.el-form--inline .el-form-item {
  margin-top: 18px;
}
.table-header {
  background-color: #29d11a; /* 你想要的表头颜色 */
}
</style>
