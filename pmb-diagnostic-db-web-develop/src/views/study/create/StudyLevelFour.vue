<template>
  <div class="w-full" style="width: 100%;">
    <CollapseComponent
			title="HGR"
			style="font-size: 12px;color: #4a4a4a;"
			:panels="panelForms"
      :showTitleBtn="false"
			:showDelete="!disabled"
			:showAdd="getShowAdd"
			:active-panels="activePanels"
			@add-panel="addPanelToFirst"
      @delete-panel="deletePanelToFirst"
			@update-panel="updatePanel"
			@add-panel-child="addPanelToFirst"
		>
      <!-- <CollapseComponent title="HGR" style="font-size: 12px;color: #4a4a4a;" :panels="panelForms"
          :active-panels="activePanels" @add-panel="addPanelToFirst" @delete-panel="deletePanelToFirst"
          @update-panel="updatePanel" @add-panel-child="addPanelToChild"> -->
      <template #panel-widget="{ item, idx }">
        <el-form :model="item" label-position="top" label-width="150" class="filter-form-inline"
          style="margin-top: 10px;" ref="queryFormRef">
          <el-row :gutter="10">
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Biomark" prop="biomark">
                <el-input v-model="item.biomark" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Partner">
                <el-input v-model="item.partner" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Testing Lab">
                <el-input v-model="item.testingLab" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR Type">
                <el-select-v2 v-model="item.hgrType" placeholder="Please select" :options="hgrTypeOptions" @change="hgrTypeChange(idx)"/>
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR Change order (only for change application)">
                <el-input v-model="item.hgrChangeOrder" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR Approved ID">
                <el-input v-model="item.hgrApprovedId" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR Scope">
                <el-select-v2 v-model="item.hgrScope" placeholder="Please select" :options="hgrScopeOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR purpose" prop="wp">
                <el-input v-model="item.hgrPurpose" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR submission date">
                <el-date-picker v-model="item.hgrSubmissionDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable @change="handleSubmissionDate($event, idx)"/>
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR approval date">
                <el-date-picker v-model="item.hgrApprovalDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable @change="handleApprovalDate($event, idx)" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR approval Link Name" prop="studyTitle">
                <el-input v-model="item.linkName1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR approval Link To" prop="studyTitle">
                <el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>


            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="HGR comment">
                <el-input v-model="item.hgrComment" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <!-- 子级折叠面板 -->
        <CollapseComponent
					:showTitle="false"
					:showAdd="getShowAdd"
					:showDelete="!disabled"
					:title="`Sample type-${idx + 1}`"
          style="font-size: 12px;color: #4a4a4a;"
					:panels="item.sampleInfoList"
					:active-panels="item.activePanels"
          @add-panel-child="(panelList, panel) => addPanelChild(panelList, panel, item)"
					@delete-panel="deletePanelChild"
					@update-panel="updatePanel"
				>
          <template #panel-widget="{ row, index }">
            <el-form :model="row" label-position="top" label-width="150" class="filter-form-inline"
              style="margin-top: 10px;width: 100%;" ref="queryFormRef">
              <el-row :gutter="10">
                <el-col :span="6">
                  <el-form-item label="Sample Type">
                    <el-select-v2 v-model="row.sampleType" placeholder="Please select" :options="sampleTypeOptions" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label="Sample Specifiction">
                    <el-input v-model="row.sampleSpecifiction" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Sample number before">
                    <el-input v-model="row.sampleNumberBefore" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Sample number after">
                    <el-input v-model="row.sampleNumberAfter" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="Data specification for set 1">
                    <el-input v-model="row.dataSpecificationSet1" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="Data size before for set 1">
                    <el-input v-model="row.dataSizeBeforeSet1" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="Data size after for set 1">
                    <el-input v-model="row.dataSizeAfterSet1" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="Data specification for set 2">
                    <el-input v-model="row.dataSpecificationSet2" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="Data size before for set 2">
                    <el-input v-model="row.dataSizeBeforeSet2" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="Data size after for set 2">
                    <el-input v-model="row.dataSizeAfterSet2" placeholder="Please enter" clearable />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </CollapseComponent>
      </template>
    </CollapseComponent>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { StudyBasicForm } from "@/api/study";
import CollapseComponent from "@/views/study/components/CollapsePanel.vue";
//   import {formItems} from '../config/create';
defineOptions({
  name: "StudyLevelFour",
  inheritAttrs: false,
});

const hgrScopeOptions = ref<OptionType[]>([
  { "value": "Main study", "label": "Main study" },
  { "value": "Exploratory", "label": "Exploratory" },
  { "value": "Other", "label": "Other" }
]);
const hgrTypeOptions = ref<OptionType[]>([
  { "value": "HGR initial submission", "label": "HGR initial submission" },
  { "value": "HGR change application", "label": "HGR change application" },
  { "value": "HGR final report", "label": "HGR final report" }
]);
const sampleTypeOptions = ref<OptionType[]>([
  { "value": "Tissue", "label": "Tissue" },
  { "value": "Blood", "label": "Blood" },
  { "value": "Other", "label": "Other" }
]);
const formData = reactive<StudyBasicForm>({
  panelForms: [{ panelForms: [{}] }]
});

const panelForms = ref<any[]>([{ sampleInfoList: [{}] }]);
const activePanels = ref<String>("1");
const disabled = ref<Boolean>(false)
const activePanelsChild = ref<String>("0");

const emits = defineEmits(['handleHgrSubmissionDate','handleHgrApproveDate'])
/**
 * 判断是否显示add按钮
 * 同级别只有最后一个显示按钮
 */
const getShowAdd = (panel: any, index: any, panels: any) => {
	return index == panels.length - 1
}

/**
 * 父级添加面板
 */
const addPanelToFirst = (panelList: any) => {
	panelList.push({ sampleInfoList: [{}] });
  // 折叠其他面板
	nextTick(() => {
		activePanels.value = `${panelForms.value.length - 1}`;
	})
};
/**
 * 子级添加面板
 */
const addPanelChild = (panelList: any, panel: any, parent: any) => {
	panelList.push({});
	// 折叠其他面板
	nextTick(() => {
		parent.activePanels = `${panelList.length - 1}`;
	})
}

/**
 * 子级删除面板
 */
const deletePanelChild = (index: any, data) => {
  data.splice(index, 1)
}

const handleApprovalDate = (value: string, extraParam: number) => {
  if(panelForms.value[extraParam].hgrType == 'HGR initial submission') {
    emits('handleHgrApproveDate', panelForms.value[extraParam].hgrApprovalDate)
  }
  
}

const handleSubmissionDate = (value: string, extraParam: number) => {
  if(panelForms.value[extraParam].hgrType == 'HGR initial submission') {
    emits('handleHgrSubmissionDate', panelForms.value[extraParam].hgrSubmissionDate)
  }
}

const hgrTypeChange = (extraParam: number) => {
  if(panelForms.value[extraParam].hgrType == 'HGR initial submission') {
    if(panelForms.value[extraParam].hgrSubmissionDate) {
      emits('handleHgrSubmissionDate', panelForms.value[extraParam].hgrSubmissionDate)
    }
    if(panelForms.value[extraParam].hgrApprovalDate) {
      emits('handleHgrApproveDate', panelForms.value[extraParam].hgrApprovalDate)
    }
    
  } else {
    emits('handleHgrSubmissionDate', '')
    emits('handleHgrApproveDate', '')
  }
}

const deletePanelToFirst = (e: any) => {
  if (panelForms.value.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  panelForms.value.splice(e, 1)

}
const updatePanel = (e: String) => {
  console.log("切换了", e);
}
const getPanalForm = () => {
  return panelForms.value
}
const getFormData = () => {
  return formData
}
defineExpose({
  getFormData,
  getPanalForm
})

onMounted(() => { });
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
