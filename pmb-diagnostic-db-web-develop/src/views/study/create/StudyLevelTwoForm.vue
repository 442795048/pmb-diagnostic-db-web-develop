<template>
  <div class="w-full">
    <!-- <el-button type="primary" @click="addPanelToFirst">
      新增第一个折叠组件面板
    </el-button> -->
    <CollapseComponent title="Study Level 2" style="font-size: 14px;color: #4a4a4a;" :panels="panelForms"
      :active-panels="activePanels" @add-panel="addPanelToFirst" @delete-panel="deletePanelToFirst"
      @update-panel="updatePanel">
      <template #panel-widget="{ item, idx }">

        <el-form :model="item" label-position="top" label-width="150" class="filter-form-inline"
          style="margin-top: 10px;" ref="queryFormRef">
          <el-row :gutter="10">
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="WP ID" prop="wpId">
                <el-input v-model="item.wpId" disabled />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Testing Purpose" prop="testingPurpose">
                <el-select-v2 v-model="item.testingPurpose" placeholder="Please select"
                  :options="testingPurposeOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Testing Managment Type" prop="testingManagmentType">
                <el-select-v2 v-model="item.testingManagmentType" placeholder="Please select"
                  :options="testingManagmentTypeOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="WP Status" prop="wpStatus">
                <el-select-v2 v-model="item.wpStatus" placeholder="Please select" :options="wpStatusOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Biomarker" prop="biomarker">
                <el-input v-model="item.biomark" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Testing Lab" prop="testingLab">
                <el-input v-model="item.testingLab" disabled />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Assay Name" prop="assayName">
                <el-input v-model="item.assayName" disabled />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Assay ID" prop="assayId">
                <el-input v-model="item.assayId" placeholder="Please enter" clearable
                  @blur="onInputChange($event, idx)" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Sample type" prop="sampleType">
                <el-select-v2 v-model="item.sampleType" placeholder="Please select" :options="sampleTypeOptions"
                  @change="makeWpId(idx)" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Technology Group" prop="technologyGroup">
                <el-select-v2 v-model="item.technologyGroup" placeholder="Please select"
                  :options="technologyGroupOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Technology Platform" prop="technologyPlatform">
                <el-select-v2 v-model="item.technologyPlatform" placeholder="Please select"
                  :options="technologyPlatformOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Test strategy" prop="testStrategy">
                <el-select-v2 v-model="item.testStrategy" placeholder="Please select" :options="testStrategyOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Local IEC Needed" prop="localIecNeeded">
                <el-select-v2 v-model="item.localIecNeeded" placeholder="Please select"
                  :options="localIecNeededOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Local IEC Approved date" prop="localIecApprovedDate">
                <el-date-picker v-model="item.localIecApprovedDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Assay selection" prop="assaySelection">
                <el-date-picker v-model="item.assaySelection" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Assay selection Link Name" prop="studyTitle">
                <el-input v-model="item.linkName1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Assay selection Link To" prop="studyTitle">
                <el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Lab selection" prop="labSelection">
                <el-date-picker v-model="item.labSelection" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Lab selection Link Name" prop="studyTitle">
                <el-input v-model="item.linkName2" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Lab selection Link To" prop="studyTitle">
                <el-input v-model="item.linkTo2" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Lab readiness" prop="labReadiness">
                <el-date-picker v-model="item.labReadiness" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Lab readiness Link Name" prop="studyTitle">
                <el-input v-model="item.linkName3" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Lab readiness Link To" prop="studyTitle">
                <el-input v-model="item.linkTo3" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="FST" prop="fst">
                <el-date-picker v-model="item.fst" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="FST Link Name" prop="studyTitle">
                <el-input v-model="item.linkName4" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="FST Link To" prop="studyTitle">
                <el-input v-model="item.linkTo4" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="LST" prop="lst">
                <el-date-picker v-model="item.lst" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="LST Link Name" prop="studyTitle">
                <el-input v-model="item.linkName5" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="LST Link To" prop="studyTitle">
                <el-input v-model="item.linkTo5" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Data Recon Completion" prop="dataReconCompletion">
                <el-date-picker v-model="item.dataReconCompletion" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Data Recon Completion Link Name" prop="studyTitle">
                <el-input v-model="item.linkName6" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Data Recon Completion Link To" prop="studyTitle">
                <el-input v-model="item.linkTo6" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="DCO" prop="dco">
                <el-date-picker v-model="item.dco" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="DCO Link Name" prop="studyTitle">
                <el-input v-model="item.linkName7" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="DCO Link To" prop="studyTitle">
                <el-input v-model="item.linkTo7" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="DBL" prop="dbl">
                <el-date-picker v-model="item.dbl" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="DBL Link Name" prop="studyTitle">
                <el-input v-model="item.linkName8" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="DBL Link To" prop="studyTitle">
                <el-input v-model="item.linkTo8" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row></el-row>
        </el-form>
      </template>
    </CollapseComponent>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "StudyLevelThree",
  inheritAttrs: false,
  components: {
    CollapseComponent,
  },
});
import { ref, defineExpose } from "vue";
import CollapseComponent from "../components/CollapseComponent.vue";
import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";
import { emit } from "process";

interface StudyLevelTwoForm { // level 3 表单对象
  wpId: string;
  testingPurpose: string;
  testingManagmentType: string;
  wpStatus: string;
  biomark: string;
  testingLab: string;
  assayName: string;
  assayId: string;
  sampleType: string;
  technologyGroup: string;
  technologyPlatform: string;
  testStrategy: string;
  localIecNeeded: string;
  localIecApprovedDate: string;
  assaySelection: string;
  labSelection: string;
  labReadiness: string;
  fst: string;
  lst: string;
  dataReconCompletion: string;
  dco: string;
  dbl: string;
}


// const props = defineProps({
//   panelForms: {
//     type: ref<StudyLevelThreeForm[]>,
//     default: () => [{ input1: "2", select1: "2" }]
//   }
// })

const props = defineProps({
  studyName: {
    type: [String, Number],
    default: ''
  }
})

const panelForms = ref<StudyLevelTwoForm[]>([{}]);
const activePanels = ref<String>("1");

const testingPurposeOptions = ref<OptionType[]>([
  { "value": "Patient selection", "label": "Patient selection" },
  { "value": "Patient Stratification", "label": "Patient Stratification" },
  { "value": "Exploratory", "label": "Exploratory" },
  { "value": "Other", "label": "Other" }
]);
const testingManagmentTypeOptions = ref<OptionType[]>([
  { "value": "In house", "label": "In house" },
  { "value": "Clinical Outsourced", "label": "Clinical Outsourced" },
  { "value": "DDS Outsourced", "label": "DDS Outsourced" },
  { "value": "QC Outsourced", "label": "QC Outsourced" },
  { "value": "Other", "label": "Other" }
]);
const wpStatusOptions = ref<OptionType[]>([
  { "value": "On-hold", "label": "On-hold" },
  { "value": "Upcoming", "label": "Upcoming" },
  { "value": "Ph3ID Pre", "label": "Ph3ID Pre" },
  { "value": "Lab selection and contracting", "label": "Lab selection and contracting" },
  { "value": "Lab setup", "label": "Lab setup" },
  { "value": "QC and monitoring", "label": "QC and monitoring" },
  { "value": "Data reconciliation", "label": "Data reconciliation" },
  { "value": "Transitioned to TM", "label": "Transitioned to TM" },
  { "value": "PMB Dx activity closed", "label": "PMB Dx activity closed" }
]);
const sampleTypeOptions = ref<OptionType[]>([
  { "value": "Tissue", "label": "Tissue" },
  { "value": "Plasma (ctDNA)", "label": "Plasma (ctDNA)" },
  { "value": "Blood", "label": "Blood" },
  { "value": "Other", "label": "Other" }
]);
const technologyGroupOptions = ref<OptionType[]>([
  { "value": "MDx", "label": "MDx" },
  { "value": "TDx", "label": "TDx" },
  { "value": "Other", "label": "Other" }
]);
const technologyPlatformOptions = ref<OptionType[]>([
  { "value": "NGS", "label": "NGS" },
  { "value": "PCR", "label": "PCR" },
  { "value": "IHC", "label": "IHC" },
  { "value": "FISH", "label": "FISH" },
  { "value": "ISH", "label": "ISH" },
  { "value": "QCS", "label": "QCS" },
  { "value": "Other", "label": "Other" }
]);
const testStrategyOptions = ref<OptionType[]>([
  { "value": "Prosepective", "label": "Prosepective" },
  { "value": "Retrospective", "label": "Retrospective" },
  { "value": "Other", "label": "Other" }
]);
const localIecNeededOptions = ref<OptionType[]>([
  { "value": "yes", "label": "yes" },
  { "value": "no", "label": "no" }
]);

const emits = defineEmits(['handleCount', 'handleWps'])

const addPanelToFirst = () => {
  panelForms.value.unshift({});
  // 折叠其他面板
  activePanels.value = "0";

  emits('handleCount', panelForms.value.length)
  const wpValues: any[] = [];
  for (const key in panelForms.value) {

    const form = panelForms.value[key];
    if (typeof form.wpId === 'string' && form.wpId != '' && form.wpId != null && form.wpId != undefined) {
      wpValues.push({ label: form.wpId, value: form.wpId });
    }

  }
  emits('handleWps', wpValues)

};
const deletePanelToFirst = (e: any) => {
  if (panelForms.value.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  panelForms.value.splice(e, 1)
  emits('handleCount', panelForms.value.length)
  const wpValues: any[] = [];
  for (const key in panelForms.value) {

    const form = panelForms.value[key];
    if (typeof form.wpId === 'string' && form.wpId != '' && form.wpId != null && form.wpId != undefined) {
      wpValues.push({ label: form.wpId, value: form.wpId });
    }

  }
  emits('handleWps', wpValues)
}

const makeWpId = (e: number) => {
  panelForms.value[e].wpId = 'CTA_' + props.studyName + '_' + panelForms.value[e].biomark + '_' + panelForms.value[e].sampleType
  const wpValues: any[] = [];
  for (const key in panelForms.value) {

    const form = panelForms.value[key];
    if (typeof form.wpId === 'string' && form.wpId != '' && form.wpId != null && form.wpId != undefined) {
      wpValues.push({ label: form.wpId, value: form.wpId });
    }

  }
  emits('handleWps', wpValues)
}

const onInputChange = (event: Event, extraParam: number) => {
  console.log('输入值改变了:', event.target?.value);
  console.log('额外参数:', extraParam);
  StudyAPI.getAssayById({ assayId: event.target?.value })
    .then((data) => {
      if (data != null && data.testingLab != null && data.testingLab != '') {
        panelForms.value[extraParam].testingLab = data.testingLab
      } else {
        panelForms.value[extraParam].testingLab = ''
      }
      if (data != null && data.assayName != null && data.assayName != '') {
        panelForms.value[extraParam].assayName = data.assayName
      } else {
        panelForms.value[extraParam].assayName = ''
      }


    })
    .finally(() => {

    });
};
const updatePanel = (e: String) => {
  console.log("切换了", e);
}

const getPanalForm = () => {
  return panelForms.value
}
defineExpose({
  getPanalForm
})

// watchEffect(() => {
//   if (props.studyName) {
//     formData.wp = props.wpCount
//   }
//   if (props.cdxCount) {
//     formData.cdx = props.cdxCount
//   }
// })
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
