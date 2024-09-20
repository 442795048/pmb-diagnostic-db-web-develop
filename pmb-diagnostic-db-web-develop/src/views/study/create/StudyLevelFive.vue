<template>
  <div class="w-full" style="margin-top: 15px;">
    <!-- <el-button type="primary" @click="addPanelToFirst">
      新增第一个折叠组件面板
    </el-button> -->
    <CollapseComponent title="Study Level 6" style="font-size: 14px;color: #4a4a4a;" :panels="panelForms"
      :active-panels="activePanels" @add-panel="addPanelToFirst" @delete-panel="deletePanelToFirst"
      @update-panel="updatePanel">

      <template #panel-widget="{ item, idx }">
        <el-form :model="formData" label-position="top" label-width="150" class="filter-form-inline"
          style="margin-top: 10px;width: 100%;" ref="queryFormRef">
          <el-row :gutter="10">
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event Name" prop="eventName">
                <el-input v-model="item.eventName" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event Type">
                <el-select-v2 v-model="item.eventType" placeholder="Please select" :options="eventTypeOptions"
                  clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event Level">
                <el-select-v2 v-model="item.eventLevel" placeholder="Please select" :options="eventLevelOptions"
                  clearable @change="changeLevel" />
              </el-form-item>
            </el-col>
            <el-col v-if="showSub" :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Sub Event Level">
                <el-select-v2 v-model="item.subEventLevel" placeholder="Please select" :options="eventSubOptions"
                  clearable />
              </el-form-item>
            </el-col>
            <el-col v-if="showSubLevel3" :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Sub Event Level">
                <el-select-v2 v-model="item.subEventLevel" placeholder="Please select" :options="eventSubLevel3Options"
                  clearable />
              </el-form-item>
            </el-col>


            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event Brief">
                <el-input v-model="item.eventBrief" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event Detail">
                <el-input v-model="item.eventDetail" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>


            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event start date" prop="code">
                <el-date-picker v-model="item.eventStartDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event completion date" prop="code">
                <el-date-picker v-model="item.eventCompletionDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event completion Link Name" prop="linkName1">
                <el-input v-model="item.linkName1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event completion Link To" prop="linkTo1">
                <el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event status">
                <el-select-v2 v-model="item.eventStatus" placeholder="Please select" :options="eventStatusOptions"
                  clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event outcome">
                <el-input v-model="item.eventOutcome" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Event Note">
                <el-input v-model="item.eventNote" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

          </el-row>
          <el-row />
        </el-form>
      </template>
    </CollapseComponent>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from "vue";
import { StudyBasicForm } from "@/api/study";
//   import {formItems} from '../config/create';
defineOptions({
  name: "CreateBasicForm",
  inheritAttrs: false,
});

const props = defineProps({
  wps: {
    type: [Array],
    default: []
  },
  cdx: {
    type: [Array],
    default: []
  }
})
const panelForms = ref<any[]>([{}]);
const activePanels = ref<String>("1");
const showSub = ref(false)
const showSubLevel3 = ref(false)

const eventTypeOptions = ref<OptionType[]>([
  { "value": "Milstone", "label": "Milstone" },
  { "value": "Activity", "label": "Activity" }
]);
const eventLevelOptions = ref<OptionType[]>([
  { "value": "1", "label": "1" },
  { "value": "2", "label": "2" },
  { "value": "3", "label": "3" },
  { "value": "4", "label": "4" },
  { "value": "5", "label": "5" },
]);

const eventSubOptions = ref<OptionType[]>([]);
const eventSubLevel3Options = ref<OptionType[]>([]);
const eventStatusOptions = ref<OptionType[]>([
  { "value": "On track", "label": "On track" },
  { "value": "Risk", "label": "Risk" },
  { "value": "Delay", "label": "Delay" },
  { "value": "On Hold", "label": "On Hold" }
]);

const formData = reactive<StudyBasicForm>({
  // 定义表单接口类型
  //   pageNum: 1,
  //   pageSize: 10,
  //   code: '',
});
const addPanelToFirst = () => {
  panelForms.value.push({});
  // 折叠其他面板
  activePanels.value = "0";
};
const deletePanelToFirst = (e: any) => {
  if (panelForms.value.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  panelForms.value.splice(e, 1)

}
const getPanalForm = () => {
  return panelForms.value
}

const changeLevel = (e: String) => {
  if (e == '2') {
    showSub.value = true
    showSubLevel3.value = false
  } else if (e == '3') {
    showSubLevel3.value = true
    showSub.value = false
  } else {
    showSub.value = false
    showSubLevel3.value = false
  }
}

const updatePanel = (e: String) => {
  console.log("切换了", e);
}
defineExpose({
  getPanalForm
})


onMounted(() => { });

watchEffect(() => {
  if (props.wps) {
    eventSubOptions.value = props.wps
  }
  if (props.cdx) {
    eventSubLevel3Options.value = props.cdx
  }
})
</script>

<style lang="scss" scoped>
:deep(.date-form-label) {
  width: 100%;
}

:deep(.el-form-item__label) {
  color: #516a83;
  font-size: 11px;
}
</style>
