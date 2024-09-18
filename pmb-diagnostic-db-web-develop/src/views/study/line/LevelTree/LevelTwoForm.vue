<template>
  <div class="w-full">
    <CollapseComponent title="Study Level 2" style="font-size: 14px;color: #4a4a4a;" :panels="panelForms"
      :showDelete="!disabled" :active-panels="activePanels" @add-panel="addPanelToFirst" @delete-panel="deletePanelToFirst"
      @update-panel="updatePanel">
      <template #panel-widget="{ item, idx }">

        <el-form :model="item" :disabled="disabled" label-position="top" label-width="150" class="filter-form-inline common-form"
          style="margin-top: 10px;" ref="queryFormRef">
					<el-form-item label="WP ID" prop="wpId" >
						<el-input v-model="item.wpId" disabled />
					</el-form-item>
					
					<el-form-item label="Testing Purpose" prop="testingPurpose">
						<el-select-v2 v-model="item.testingPurpose" placeholder="Please select"
							:options="testingPurposeOptions" />
					</el-form-item>
				
					<el-form-item label="Testing Managment Type" prop="testingManagmentType">
						<el-select-v2 v-model="item.testingManagmentType" placeholder="Please select"
							:options="testingManagmentTypeOptions" />
					</el-form-item>
				
					<el-form-item label="WP Status" prop="wpStatus">
						<el-select-v2 v-model="item.wpStatus" placeholder="Please select" :options="wpStatusOptions" />
					</el-form-item>
				
					<el-form-item label="Biomarker" prop="biomarker">
						<el-input v-model="item.biomarker" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Testing Lab" prop="testingLab">
						<el-input v-model="item.testingLab" disabled />
					</el-form-item>
				
					<el-form-item label="Assay Name" prop="assayName">
						<el-input v-model="item.assayName" disabled />
					</el-form-item>
				
					<el-form-item label="Assay ID" prop="assayId">
						<el-input v-model="item.assayId" placeholder="Please enter" clearable
							@input="onInputChange($event, idx)" />
					</el-form-item>
				
					<el-form-item label="Sample type" prop="sampleType">
						<el-select-v2 v-model="item.sampleType" placeholder="Please select" :options="sampleTypeOptions"
							@change="makeWpId(idx)" />
					</el-form-item>
				
					<el-form-item label="Technology Group" prop="technologyGroup">
						<el-select-v2 v-model="item.technologyGroup" placeholder="Please select"
							:options="technologyGroupOptions" />
					</el-form-item>
				
					<el-form-item label="Technology Platform" prop="technologyPlatform">
						<el-select-v2 v-model="item.technologyPlatform" placeholder="Please select"
							:options="technologyPlatformOptions" />
					</el-form-item>
				
					<el-form-item label="Test strategy" prop="testStrategy">
						<el-select-v2 v-model="item.testStrategy" placeholder="Please select" :options="testStrategyOptions" />
					</el-form-item>
				
					<el-form-item label="Local IEC Needed" prop="localIecNeeded">
						<el-select-v2 v-model="item.localIecNeeded" placeholder="Please select"
							:options="localIecNeededOptions" />
					</el-form-item>
				
					<el-form-item label="Local IEC Approved date" prop="localIecApprovedDate">
						<el-date-picker v-model="item.localIecApprovedDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="Assay selection" prop="assaySelection" :class="disabled ? '' : 'highlight'" >
						<el-date-picker v-model="item.assaySelection" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="Assay selection Link Name" prop="studyTitle" :class="disabled ? '' : 'highlight'" >
						<el-input v-model="item.linkName1" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Assay selection Link To" prop="studyTitle" :class="disabled ? '' : 'highlight'">
						<el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Lab selection" prop="labSelection">
						<el-date-picker v-model="item.labSelection" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="Lab selection Link Name" prop="studyTitle">
						<el-input v-model="item.linkName2" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Lab selection Link To" prop="studyTitle">
						<el-input v-model="item.linkTo2" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Lab readiness" prop="labReadiness">
						<el-date-picker v-model="item.labReadiness" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="Lab readiness Link Name" prop="studyTitle">
						<el-input v-model="item.linkName3" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Lab readiness Link To" prop="studyTitle">
						<el-input v-model="item.linkTo3" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="FST" prop="fst">
						<el-date-picker v-model="item.fst" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="FST Link Name" prop="studyTitle">
						<el-input v-model="item.linkName4" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="FST Link To" prop="studyTitle">
						<el-input v-model="item.linkTo4" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="LST" prop="lst">
						<el-date-picker v-model="item.lst" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="LST Link Name" prop="studyTitle">
						<el-input v-model="item.linkName5" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="LST Link To" prop="studyTitle">
						<el-input v-model="item.linkTo5" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Data Recon Completion" prop="dataReconCompletion">
						<el-date-picker v-model="item.dataReconCompletion" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="Data Recon Completion Link Name" prop="studyTitle">
						<el-input v-model="item.linkName6" placeholder="Please enter" clearable />
					</el-form-item>

					<el-form-item label="Data Recon Completion Link To" prop="studyTitle">
						<el-input v-model="item.linkTo6" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="DCO" prop="dco">
						<el-date-picker v-model="item.dco" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="DCO Link Name" prop="studyTitle">
						<el-input v-model="item.linkName7" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="DCO Link To" prop="studyTitle">
						<el-input v-model="item.linkTo7" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="DBL" prop="dbl">
						<el-date-picker v-model="item.dbl" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="DBL Link Name" prop="studyTitle">
						<el-input v-model="item.linkName8" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="DBL Link To" prop="studyTitle">
						<el-input v-model="item.linkTo8" placeholder="Please enter" clearable />
					</el-form-item>
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
import { ref, defineExpose, watchEffect } from "vue";
import CollapseComponent from "@/views/study/components/CollapsePanel.vue";
import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";

interface StudyLevelTwoForm { // level 3 表单对象
  wpId: string;
  testingPurpose: string;
  testingManagmentType: string;
  wpStatus: string;
  biomarker: string;
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
const props = defineProps({
	activeIndex: {
		type: [String, Number],
		default: ''
	},
	highlight: {
		type: Array,
		default: () => {
			return []
		}
	},
	disabled: {
		type: Boolean,
		default: false
	},
});

const MOCK = {
	wpId: 'wpId',
  testingPurpose: 'Patient selection',
  testingManagmentType: 'In house',
  wpStatus: 'On-hold',
  biomarker: 'biomarker',
  testingLab: 'testingLab',
  assayName: 'assayName',
  assayId: 'assayId',
  sampleType: 'Tissue',
  technologyGroup: 'MDx',
  technologyPlatform: 'NGS',
  testStrategy: 'Prosepective',
  localIecNeeded: 'yes',
  localIecApprovedDate: '2024-05-08',
  assaySelection: '2024-05-08',
  labSelection: '2024-05-08',
  labReadiness: '2024-05-08',
  fst: '2024-05-08',
  lst: '2024-05-08',
  dataReconCompletion: '2024-05-08',
  dco: '2024-05-08',
  dbl: '2024-05-08',
}

const panelForms = ref<StudyLevelTwoForm[]>([{ code: 'Assay A', ...MOCK }, { code: 'Assay B', ...MOCK }]);
const activePanels = ref<String>("0");
watchEffect((data) => {
	if (props.activeIndex) {
		activePanels.value = (props.activeIndex - 1) + ''
		console.log(activePanels.value)
	}
})
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

const addPanelToFirst = () => {
  panelForms.value.unshift({});
  // 折叠其他面板
  activePanels.value = "0";
};
const deletePanelToFirst = (e: any) => {
	console.log(e)
  if (panelForms.value.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  panelForms.value.splice(e, 1)

}

const makeWpId = (e: number) => {
  panelForms.value[e].wpId = 'CTA_' + panelForms.value[e].biomarker + '_' + panelForms.value[e].sampleType
}

const onInputChange = (event: Event, extraParam: string) => {
  console.log('输入值改变了:', event);
  console.log('额外参数:', extraParam);
  StudyAPI.add(insertParams)
    .then((data) => {
      router.push('/study/page');
      loading.value = false;
    })
    .finally(() => {
      loading.value = false;
    });
};
const updatePanel = (e: String) => {
  console.log("切换了", e);
}

const getPanalForm = () => {
  return panelForms.value
}

const getHighlight = (val) => {
	console.log(val)
	return ''
}
defineExpose({
  getPanalForm
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
.highlight{
	:deep(.el-form-item__label){
		color: #20a6fc!important;
	}
	:deep(.el-input__wrapper){
		border: 1.5px solid #20a6fc;
		border-radius: 4px;
	}
	.el-input{

	}
}
</style>
