<template>
  <div>
    <div class="w-full" style="font-size: 14px;color: #4a4a4a;">Study Level 1 Unique</div>
    <el-form :model="formData" label-position="top" label-width="150" class="filter-form-inline"
      style="margin-top: 10px;" ref="queryFormRef" :rules="rules">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Franchise Name" prop="franchiseName">
            <el-input v-model="formData.franchiseName" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Drug Name" prop="drugName">
            <el-select-v2 v-model="formData.drugName" placeholder="Please select" :options="drugNameOptions"
              clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Name" prop="studyName">
            <el-input v-model="formData.studyName" placeholder="Please enter" clearable @input="handleStudyNameInput" />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Code" prop="studyCode">
            <el-input v-model="formData.studyCode" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study title" prop="studyTitle">
            <el-input v-model="formData.studyTitle" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study phase">
            <el-select-v2 v-model="formData.studyPhase" clearable placeholder="Please select"
              :options="studyPhaseOptions" />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study tumor type">
            <el-select-v2 v-model="formData.studyTumorType" clearable placeholder="Please select"
              :options="studyTumorTypeOptions" />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Indication">
            <el-select-v2 v-model="formData.studyIndication" clearable placeholder="Please select"
              :options="studyIndicationOptions" />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study line">
            <el-select-v2 v-model="formData.studyLine" clearable placeholder="Please select"
              :options="studyLineOptions" />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Main study design">
            <el-select-v2 v-model="formData.mainStudyDesign" clearable placeholder="Please select"
              :options="mainStudyDesignOptions" />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="WP #" prop="wp">
            <el-input v-model="formData.wp" disabled />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CDx #" prop="cdx">
            <el-input v-model="formData.cdx" disabled />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Status">
            <el-select-v2 v-model="formData.studyStatus" clearable placeholder="Please select"
              :options="studyStatusOptions" />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <!-- <el-form-item label="Study Status">
            <el-select-v2 v-model="formData.studyStatus" clearable placeholder="Please select"
              :options="studyStatusOptions" />
          </el-form-item> -->
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <!-- <el-form-item label="Study Status">
            <el-select-v2 v-model="formData.studyStatus" clearable placeholder="Please select"
              :options="studyStatusOptions" />
          </el-form-item> -->
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <!-- <el-form-item label="Study Status">
            <el-select-v2 v-model="formData.studyStatus" clearable placeholder="Please select"
              :options="studyStatusOptions" />
          </el-form-item> -->
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Pre-PH3ID" prop="code">
            <el-date-picker v-model="formData.prePh3id" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Pre-PH3ID Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName1" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Pre-PH3ID Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo1" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="LSPC" prop="code">
            <el-date-picker v-model="formData.lspc" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="LSPC Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName2" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="LSPC Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo2" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="CSP Available" prop="code">
            <el-date-picker v-model="formData.cspAvailable" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="CSP Available Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName3" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="CSP Available Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo3" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="HGR initial submission" prop="code">
            <el-date-picker v-model="formData.hgrInitialSubmission" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable disabled/>
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="HGR initial submission Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName4" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="HGR initial submission Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo4" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="HGR initial approval" prop="code">
            <el-date-picker v-model="formData.hgrInitialApproval" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable disabled />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="HGR initial approval Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName5" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="HGR initial approval Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo5" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="FSI" prop="code">
            <el-date-picker v-model="formData.fsi" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="FSI Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName6" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="FSI Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo6" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="LSI" prop="code">
            <el-date-picker v-model="formData.lsi" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="LSI Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName7" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="LSI Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo7" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="NDA-S" prop="code">
            <el-date-picker v-model="formData.ndaS" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="NDA-S Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName8" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="NDA-S Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo8" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="NDA-A" prop="code">
            <el-date-picker v-model="formData.ndaA" class="date-form-label" width="100%" type="date"
              placeholder="Pick a date" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="NDA-A Link Name" prop="studyTitle">
            <el-input v-model="formData.linkName9" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="NDA-A Link To" prop="studyTitle">
            <el-input v-model="formData.linkTo9" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row />
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, defineExpose, watch, watchEffect } from "vue";
import { StudyBasicForm } from "@/api/study";
//   import {formItems} from '../config/create';
defineOptions({
  name: "CreateBasicForm",
  inheritAttrs: false,
});

const props = defineProps({
  wpCount: {
    type: [String, Number],
    default: ''
  },
  cdxCount: {
    type: [String, Number],
    default: ''
  },
  hgrApproveDate: {
    type: [String, Date],
    default: ''
  },
  hgrSubmissionDate: {
    type: [String, Date],
    default: ''
  }
})
const emits = defineEmits(['handleStudyName'])


const rules = ref({
  franchiseName: [
    { required: true, message: 'please enter franchiseName', trigger: 'blur' }
  ],
  drugName: [
    { required: true, message: 'please enter drugName', trigger: 'change' }
  ],
  studyName: [
    { required: true, message: 'please enter studyName', trigger: 'blur' }
  ],
});
const drugNameOptions = ref<OptionType[]>([
  { value: "Drug1", label: "Drug1" },
  { value: "Drug2", label: "Drug2" },
  { value: "Drug3", label: "Drug3" },
  { value: "Drug4", label: "Drug4" },
  { value: "Drug5", label: "Drug5" }]);
const studyPhaseOptions = ref<OptionType[]>([
  { value: "Phase I", label: "Phase I" },
  { value: "PhaseII a", label: "PhaseII a" },
  { value: "Phase Iib", label: "Phase Iib" },
  { value: "Phase II", label: "Phase II" },
  { value: "Phase I", label: "PhaseIII/PhaseIV" }
]);
const studyTumorTypeOptions = ref<OptionType[]>([
  { "value": "BC", "label": "BC" },
  { "value": "PC", "label": "PC" },
  { "value": "OC", "label": "OC" },
  { "value": "PanC", "label": "PanC" }
]);
const studyIndicationOptions = ref<OptionType[]>([
  { "value": "mCSPC", "label": "mCSPC" },
  { "value": "TNBC", "label": "TNBC" }
]);
const studyLineOptions = ref<OptionType[]>([
  { "value": "1L", "label": "1L" },
  { "value": "2L", "label": "2L" },
  { "value": "3L", "label": "3L" }
]);
const studyStatusOptions = ref<OptionType[]>([
  { "value": "Planned", "label": "Planned" },
  { "value": "Setup", "label": "Setup" },
  { "value": "Ongoing", "label": "Ongoing" },
  { "value": "On hold", "label": "On hold" },
  { "value": "close out", "label": "close out" },
  { "value": "Approved", "label": "Approved" }
]);
const mainStudyDesignOptions = ref<OptionType[]>([
  { "value": "ITT", "label": "ITT" },
  { "value": "Patient selected", "label": "Patient selected" }
]);

const formData = reactive<StudyBasicForm>({
  // 定义表单接口类型
  //   pageNum: 1,
  //   pageSize: 10,
  //   code: '',
});
const handleStudyNameInput = (value: string) => {
  emits('handleStudyName', formData.studyName)
}

const getPanalForm = () => {
  return formData
}
defineExpose({
  getPanalForm
})

onMounted(() => {

});
watchEffect(() => {
  formData.wp = props.wpCount
  formData.cdx = props.cdxCount
  
  if(props.hgrSubmissionDate) {
    formData.hgrInitialSubmission = props.hgrSubmissionDate
  }
  if(props.hgrApproveDate) {
    formData.hgrInitialApproval = props.hgrApproveDate
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
