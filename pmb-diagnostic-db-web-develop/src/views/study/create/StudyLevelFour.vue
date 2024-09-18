<template>
  <div class="w-full" style="width: 100%;">
    <div style="font-size: 14px;color: #4a4a4a;margin-top: 15px;"></div>
    
      <el-row :gutter="10">
        
        <CollapseComponent title="HGR" :showAdd="true" style="font-size: 12px;color: #4a4a4a;" :panels="panelForms"
          :showDelete="!disabled" :active-panels="activePanels" @add-panel="addPanelToFirst"
          @delete-panel="deletePanelToFirst" @update-panel="updatePanel" @add-panel-child="addPanelToChild">

          <!-- <CollapseComponent title="HGR" style="font-size: 12px;color: #4a4a4a;" :panels="panelForms"
          :active-panels="activePanels" @add-panel="addPanelToFirst" @delete-panel="deletePanelToFirst"
          @update-panel="updatePanel" @add-panel-child="addPanelToChild"> -->
          <template #panel-widget="{ item, idx }">
            <el-form :model="item" label-position="top" label-width="150" class="filter-form-inline"
              style="margin-top: 10px;" ref="queryFormRef">
              <el-row :gutter="10">
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Biomark" prop="biomark">
            <el-input v-model="formData.biomark" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Partner">
            <el-input v-model="formData.partner" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Testing Lab">
            <el-input v-model="formData.testingLab" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="HGR Type">
                    <el-select-v2 v-model="item.hgrType" placeholder="Please select" :options="hgrTypeOptions" />
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
                      placeholder="Pick a date" clearable />
                  </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                  <el-form-item label="HGR approval date">
                    <el-date-picker v-model="item.hgrApprovalDate" class="date-form-label" width="100%" type="date"
                      placeholder="Pick a date" clearable />
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
            <CollapseComponent :showTitle="false" :showAdd="true" :showDelete="!disabled" :title="`Sample-${idx}`"
              style="font-size: 12px;color: #4a4a4a;width: 100%;" :panels="item.panelForms" :active-panels="activePanelsChild"
              @add-panel="addPanelChild" @delete-panel="deletePanelChild" @update-panel="updatePanel"
              @add-panel-child="addPanelChild" >
              <template #panel-widget="{ row, index }">
                <el-form :model="row" label-position="top" label-width="150" class="filter-form-inline common-form"
                  style="margin-top: 10px;" ref="queryFormRef">
                  <el-row :gutter="10">
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Sample Type">
                        <el-select-v2 v-model="item.sampleType" placeholder="Please select"
                          :options="sampleTypeOptions" />
                      </el-form-item>
                    </el-col>

                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Sample Specifiction">
                        <el-input v-model="item.sampleSpecifiction" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Sample number before">
                        <el-input v-model="item.sampleNumberBefore" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Sample number after">
                        <el-input v-model="item.sampleNumberAfter" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Data specification for set 1">
                        <el-input v-model="item.dataSpecificationForSet1" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Data size before for set 1">
                        <el-input v-model="item.dataSizeBeforeForSet1" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Data size after for set 1">
                        <el-input v-model="item.dataSizeAfterForSet1" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Data specification for set 2">
                        <el-input v-model="item.dataSpecificationForSet2" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Data size before for set 2">
                        <el-input v-model="item.dataSizeBeforeForSet2" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                      <el-form-item label="Data size after for set 2">
                        <el-input v-model="item.dataSizeAfterForSet2" placeholder="Please enter" clearable />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </template>
            </CollapseComponent>
          </template>
        </CollapseComponent>

      </el-row>
      <el-row />

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
  // 定义表单接口类型
  //   pageNum: 1,
  //   pageSize: 10,
  //   code: '',
});

const panelForms = ref<any[]>([{}]);
const activePanels = ref<String>("0");
const disabled = ref<Boolean>(false)
const activePanelsChild = ref<String>("0");

const addPanelToFirst = () => {
  panelForms.value.unshift({});
  // 折叠其他面板
  activePanels.value = "0";
};

/**
 * 子级添加面板
 */
const addPanelChild = (panelList) => {
  panelList.unshift({ panelForms: [{}] });
  activePanelsChild.value = "0";
}

/**
 * 父级向子集添加caollapse
 */
const addPanelToChild = (panelList, panel) => {
  console.log(panelList, panel)
  if (panel.panelForms) {
    panel.panelForms.unshift({});
  } else {
    panel.panelForms = []

  }
}

/**
 * 子级删除面板
 */
const deletePanelChild = (index: any, data) => {
  data.splice(index, 1)
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
