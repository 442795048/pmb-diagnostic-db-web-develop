<template>
  <div class="w-full">
    <CollapseComponent title="Study Level 6" style="font-size: 14px;color: #4a4a4a;" :panels="panelForms"
      :showDelete="!disabled" :active-panels="activePanels" @add-panel="addPanelToFirst" @delete-panel="deletePanelToFirst"
      @update-panel="updatePanel">
      <template #panel-widget="{ item, idx }">

        <el-form :model="item" :disabled="disabled" label-position="top" label-width="150" class="filter-form-inline common-form"
          style="margin-top: 10px;" ref="queryFormRef">
					<el-form-item label="Event Name" prop="eventName">
						<el-input v-model="item.eventName" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event Type">
						<el-select-v2 v-model="item.eventType" placeholder="Please select" :options="eventTypeOptions" />
					</el-form-item>
				
					<el-form-item label="Event Level">
						<el-select-v2 v-model="item.eventLevel" placeholder="Please select" :options="eventLevelOptions" />
					</el-form-item>
				
					<el-form-item label="Event Brief">
						<el-input v-model="item.eventBrief" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event Detail">
						<el-input v-model="item.eventDetail" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event start date" prop="code">
						<el-date-picker v-model="item.eventStartDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="Event completion date" prop="code">
						<el-date-picker v-model="item.eventCompletionDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable />
					</el-form-item>
				
					<el-form-item label="Event completion Link Name" prop="linkName1">
						<el-input v-model="item.linkName1" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event completion Link To" prop="linkTo1">
						<el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event status">
						<el-select-v2 v-model="item.eventStatus" placeholder="Please select" :options="eventStatusOptions" />
					</el-form-item>
				
					<el-form-item label="Event outcome">
						<el-input v-model="item.eventOutcome" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event Note">
						<el-input v-model="item.eventNote" placeholder="Please enter" clearable />
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
	cdxId: string;
  testingPurpose: string;
  testingManagmentType: string;
  wpStatus: string;
  biomarker: string;
  testingLab: string;
  assayName: string;
  assayID: string;
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
	cdxId: 'wpId',
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

const panelForms = ref<StudyLevelTwoForm[]>([{}, {}]);
const activePanels = ref<String>("0");
watchEffect((data) => {
	if (props.activeIndex) {
		activePanels.value = (props.activeIndex - 1) + ''
	}
})
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
const eventStatusOptions = ref<OptionType[]>([
  { "value": "On track", "label": "On track" },
  { "value": "Risk", "label": "Risk" },
  { "value": "Delay", "label": "Delay" },
  { "value": "On Hold", "label": "On Hold" }
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
