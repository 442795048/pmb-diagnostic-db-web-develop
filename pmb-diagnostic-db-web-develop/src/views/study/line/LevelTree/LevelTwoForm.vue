<template>
  <div class="w-full">
    <CollapsePanel title="Study Level 2" :showTitleBtn="false" style="font-size: 14px;color: #4a4a4a;" :showAdd="getShowAdd" :panels="panelForms"
      :showDelete="!disabled" :active-panels="activePanels" @add-panel-child="addPanelToFirst" @delete-panel="deletePanelToFirst">
      <template #panel-widget="{ item, idx }">
        <el-form :model="item" :disabled="disabled" label-position="top" label-width="150" class="filter-form-inline common-form"
          style="margin-top: 10px;" ref="queryFormRef">
					<el-form-item label="WP ID" prop="wpId" :class="{ highlight: getHighlight('wpId', idx) }">
						<el-input v-model="item.wpId" disabled />
					</el-form-item>
				
					<el-form-item label="Testing Purpose" prop="testingPurpose" :class="{ highlight: getHighlight('testingPurpose', idx) }">
						<el-select-v2 v-model="item.testingPurpose" placeholder="Please select"
							:options="optionsLevel2.testingPurposeOptions" />
					</el-form-item>
					
					<el-form-item label="Testing Managment Type" prop="testingManagmentType" :class="{ highlight: getHighlight('testingManagmentType', idx) }">
						<el-select-v2 v-model="item.testingManagmentType" placeholder="Please select"
							:options="optionsLevel2.testingManagmentTypeOptions" />
					</el-form-item>
				
					<el-form-item label="WP Status" prop="wpStatus" :class="{ highlight: getHighlight('wpStatus', idx) }">
						<el-select-v2 v-model="item.wpStatus" placeholder="Please select" :options="optionsLevel2.wpStatusOptions" />
					</el-form-item>
				
					<el-form-item label="Biomarker" prop="biomark" :class="{ highlight: getHighlight('biomark', idx) }">
						<el-input v-model="item.biomark" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Testing Lab" prop="testingLab" :class="{ highlight: getHighlight('testingLab', idx) }">
						<el-input v-model="item.testingLab" disabled />
					</el-form-item>
				
					<el-form-item label="Assay Name" prop="assayName" :class="{ highlight: getHighlight('assayName', idx) }">
						<el-input v-model="item.assayName" disabled />
					</el-form-item>
				
					<el-form-item label="Assay ID" prop="assayId" :class="{ highlight: getHighlight('assayId', idx) }">
						<el-input v-model="item.assayId" placeholder="Please enter" clearable
							@blur="onInputChange($event, idx)" />
					</el-form-item>
				
					<el-form-item label="Sample type" prop="sampleType" :class="{ highlight: getHighlight('sampleType', idx) }">
						<el-select-v2 v-model="item.sampleType" placeholder="Please select" :options="optionsLevel2.sampleTypeOptions"
							@change="makeWpId(idx)" />
					</el-form-item>
				
					<el-form-item label="Technology Group" prop="technologyGroup" :class="{ highlight: getHighlight('technologyGroup', idx) }">
						<el-select-v2 v-model="item.technologyGroup" placeholder="Please select"
							:options="optionsLevel2.technologyGroupOptions" />
					</el-form-item>
				
					<el-form-item label="Technology Platform" prop="technologyPlatform" :class="{ highlight: getHighlight('technologyPlatform', idx) }">
						<el-select-v2 v-model="item.technologyPlatform" placeholder="Please select"
							:options="optionsLevel2.technologyPlatformOptions" />
					</el-form-item>
					
					<el-form-item label="Test strategy" prop="testStrategy" :class="{ highlight: getHighlight('testStrategy', idx) }">
						<el-select-v2 v-model="item.testStrategy" placeholder="Please select" :options="optionsLevel2.testStrategyOptions" />
					</el-form-item>
				
					<el-form-item label="Local IEC Needed" prop="localIecNeeded" :class="{ highlight: getHighlight('localIecNeeded', idx) }">
						<el-select-v2 v-model="item.localIecNeeded" placeholder="Please select"
							:options="optionsLevel2.localIecNeededOptions" />
					</el-form-item>
				
					<el-form-item label="Local IEC Approved date" prop="localIecApprovedDate" :class="{ highlight: getHighlight('localIecApprovedDate', idx) }">
						<el-date-picker v-model="item.localIecApprovedDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>

					<div class="zw" />

					<el-form-item label="Assay selection" prop="assaySelection" :class="{ highlight: getHighlight('assaySelection', idx) }">
						<el-date-picker v-model="item.assaySelection" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="Assay selection Link Name" prop="linkName1" :class="{ highlight: getHighlight('linkName1', idx) }">
						<el-input v-model="item.linkName1" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Assay selection Link To" prop="linkTo1" :class="{ highlight: getHighlight('linkTo1', idx) }">
						<el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Lab selection" prop="labSelection" :class="{ highlight: getHighlight('labSelection', idx) }">
						<el-date-picker v-model="item.labSelection" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="Lab selection Link Name" prop="linkName2" :class="{ highlight: getHighlight('linkName2', idx) }">
						<el-input v-model="item.linkName2" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Lab selection Link To" prop="linkTo2" :class="{ highlight: getHighlight('linkTo2', idx) }">
						<el-input v-model="item.linkTo2" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Lab readiness" prop="labReadiness" :class="{ highlight: getHighlight('labReadiness', idx) }">
						<el-date-picker v-model="item.labReadiness" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="Lab readiness Link Name" prop="linkName3" :class="{ highlight: getHighlight('linkName3', idx) }">
						<el-input v-model="item.linkName3" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Lab readiness Link To" prop="linkTo3" :class="{ highlight: getHighlight('linkTo3', idx) }">
						<el-input v-model="item.linkTo3" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="FST" prop="fst" :class="{ highlight: getHighlight('fst', idx) }">
						<el-date-picker v-model="item.fst" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="FST Link Name" prop="linkName4" :class="{ highlight: getHighlight('linkName4', idx) }">
						<el-input v-model="item.linkName4" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="FST Link To" prop="linkTo4" :class="{ highlight: getHighlight('linkTo4', idx) }">
						<el-input v-model="item.linkTo4" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="LST" prop="lst" :class="{ highlight: getHighlight('lst', idx) }">
						<el-date-picker v-model="item.lst" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="LST Link Name" prop="linkName5" :class="{ highlight: getHighlight('linkName5', idx) }">
						<el-input v-model="item.linkName5" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="LST Link To" prop="linkTo5" :class="{ highlight: getHighlight('linkTo5', idx) }">
						<el-input v-model="item.linkTo5" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Data Recon Completion" prop="dataReconCompletion" :class="{ highlight: getHighlight('dataReconCompletion', idx) }">
						<el-date-picker v-model="item.dataReconCompletion" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="Data Recon Completion Link Name" prop="linkName6" :class="{ highlight: getHighlight('linkName6', idx) }">
						<el-input v-model="item.linkName6" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Data Recon Completion Link To" prop="linkTo6" :class="{ highlight: getHighlight('linkTo6', idx) }">
						<el-input v-model="item.linkTo6" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="DCO" prop="dco" :class="{ highlight: getHighlight('dco', idx) }">
						<el-date-picker v-model="item.dco" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="DCO Link Name" prop="linkName7" :class="{ highlight: getHighlight('linkName7', idx) }">
						<el-input v-model="item.linkName7" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="DCO Link To" prop="linkTo7" :class="{ highlight: getHighlight('linkTo7', idx) }">
						<el-input v-model="item.linkTo7" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="DBL" prop="dbl" :class="{ highlight: getHighlight('dbl', idx) }">
						<el-date-picker v-model="item.dbl" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="DBL Link Name" prop="linkName8" :class="{ highlight: getHighlight('linkName8', idx) }">
						<el-input v-model="item.linkName8" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="DBL Link To" prop="linkTo8" :class="{ highlight: getHighlight('linkTo8', idx) }">
						<el-input v-model="item.linkTo8" placeholder="Please enter" clearable />
					</el-form-item>
        </el-form>
      </template>
    </CollapsePanel>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "StudyLevelThree",
  inheritAttrs: false,
  components: {
    CollapsePanel,
  },
});
import { inject, ref, watchEffect, defineExpose } from "vue";
import CollapsePanel from "@/views/study/components/CollapsePanel.vue";
import StudyAPI from "@/api/study";
import {
	optionsLevel2
} from '@/views/study/common/options'

const props = defineProps({
	activeIndex: {
		type: [Number, String] as any,
		default: ''
	},
	highlight: {
    type: [String, Number] as any,
		default: ''
  },
	disabled: {
		type: Boolean,
		default: false
	},
	formData: {
		type: Array as any,
		default: () => {
			return []
		}
	}
});

const panelForms = ref<any>([]);
const activePanels = ref<String>("0");
const basicInfo: any = inject('basicInfo')
const formKeyConfig: any = {
	'Assay selection': { code: 'assaySelection', linkName: 'linkName1', linkTo: 'linkTo1', isGroup: true },
	'Lab selection': { code: 'labSelection', linkName: 'linkName2', linkTo: 'linkTo2', isGroup: true },
	'Lab readiness': { code: 'labReadiness', linkName: 'linkName3', linkTo: 'linkTo3', isGroup: true },
	'FST': { code: 'fst', linkName: 'linkName4', linkTo: 'linkTo4', isGroup: true },
	'LST': { code: 'lst', linkName: 'linkName5', linkTo: 'linkTo5', isGroup: true },
	'Data Recon Completion': { code: 'dataReconCompletion', linkName: 'linkName6', linkTo: 'linkTo6', isGroup: true },
	'DCO': { code: 'dco', linkName: 'linkName7', linkTo: 'linkTo7', isGroup: true },
	'DBL': { code: 'dbl', linkName: 'linkName8', linkTo: 'linkTo8', isGroup: true }
}

onMounted(() => {
	initFormData()
})
/**
 * 判断是否显示add按钮
 * 同级别只有最后一个显示按钮
 */
const getShowAdd = (panel: any, index: any, panels: any) => {
	return index == panels.length - 1
}

/**
 * 初始化表单数据
 */
const initFormData = () => {
	panelForms.value = []
	const assayList = Array.isArray(props.formData) && props.formData.length ? props.formData : [{}]
	assayList.forEach((item: any) => {
		panelForms.value.push(item)
	})
	activePanels.value = props.activeIndex || '0'
}

/**
 * 添加面板
 */
const addPanelToFirst = () => {
  panelForms.value.push({});
  // 折叠其他面板
	nextTick(() => {
		activePanels.value = `${panelForms.value.length - 1}`;
	})
};

/**
 * 删除面板
 */
const deletePanelToFirst = (e: any) => {
  if (panelForms.value.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  panelForms.value.splice(e, 1)
}

/**
 * 更新wpId
 */
const makeWpId = (e: number) => {
	const studyName = basicInfo.value.studyName ? basicInfo.value.studyName + '_' : ''
	const biomark = panelForms.value[e].biomark ? panelForms.value[e].biomark + '_' : ''
  panelForms.value[e].wpId = 'CTA_' + studyName + biomark + panelForms.value[e].sampleType
}

const onInputChange = (event: any, extraParam: number) => {
	const params = {
		assayId: event.target?.value
	}
  StudyAPI.getAssayById(params).then((data) => {
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
};

/**
 * 获取高亮显示
 */
const getHighlight = (key: string, idx: number) => {
	if (props.activeIndex == idx) {
		const highlight:any = props.highlight
		const config = formKeyConfig[highlight]
		if (config) {
			return config.code == key || config.linkName == key || config.linkTo == key
		}
	}
	return false
}

watchEffect(() => {
	if (props.activeIndex) {
		activePanels.value = (props.activeIndex - 1) + ''
	}
})

const getPanalForm = () => {
  return panelForms.value
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
}
</style>
