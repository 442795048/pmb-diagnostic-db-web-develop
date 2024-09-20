<template>
  <div class="w-full">
    <CollapsePanel title="Study Level 3" :showTitleBtn="false" style="font-size: 14px;color: #4a4a4a;" :showAdd="getShowAdd" :panels="panelForms"
      :showDelete="!disabled" :active-panels="activePanels" @add-panel-child="addPanelToFirst" @delete-panel="deletePanelToFirst"
      @update-panel="updatePanel">
      <template #panel-widget="{ item, idx }">

        <el-form :model="item" :disabled="disabled" label-position="top" label-width="150" class="filter-form-inline common-form"
          style="margin-top: 10px;" ref="queryFormRef">

					<el-form-item label="CDx ID" prop="cdxId" :class="{ highlight: getHighlight('cdxId', idx) }">
						<el-input v-model="item.cdxId" disabled />
					</el-form-item>
					<el-form-item label="CDx Managed by" prop="cdxManagedBy" :class="{ highlight: getHighlight('cdxManagedBy', idx) }">
						<el-select-v2 v-model="item.cdxManagedBy" placeholder="Please select" :options="optionsLevel3.cdxManagedByOptions" />
					</el-form-item>
					<el-form-item label="Dx activity stage" prop="dxActivityStage" :class="{ highlight: getHighlight('dxActivityStage', idx) }">
						<el-select-v2 v-model="item.dxActivityStage" placeholder="Please select"
							:options="optionsLevel3.dxActivityStageOptions" />
					</el-form-item>
				
					<el-form-item label="CDx category" prop="cdxCategory" :class="{ highlight: getHighlight('cdxCategory', idx) }">
						<el-select-v2 v-model="item.cdxCategory" placeholder="Please select" :options="optionsLevel3.cdxCategoryOptions" />
					</el-form-item>
					<el-form-item label="Biomark" prop="biomarker" :class="{ highlight: getHighlight('biomark', idx) }">
						<el-input v-model="item.biomark" placeholder="Please enter" />
					</el-form-item>
					<el-form-item label="Dx partner" prop="dxPartner" :class="{ highlight: getHighlight('dxPartner', idx) }">
						<el-input v-model="item.dxPartner" disabled />
					</el-form-item>
				
					<el-form-item label="Assay Name" prop="assayName" :class="{ highlight: getHighlight('assayName', idx) }">
						<el-input v-model="item.assayName" disabled />
					</el-form-item>
					<el-form-item label="Assay ID" prop="assayId" :class="{ highlight: getHighlight('assayId', idx) }">
						<el-input v-model="item.assayId" placeholder="Please enter" clearable
							@blur="onInputChange($event, idx)" />
					</el-form-item>
					<el-form-item label="Sample type" prop="sampleType" :class="{ highlight: getHighlight('sampleType', idx) }">
						<el-select-v2 v-model="item.sampleType" placeholder="Please select" :options="optionsLevel3.sampleTypeOptions"
							@change="makeWpId(idx)" />
					</el-form-item>
				
					<el-form-item label="Technology Platform" prop="technologyPlatform" :class="{ highlight: getHighlight('technologyPlatform', idx) }">
						<el-select-v2 v-model="item.technologyPlatform" placeholder="Please select"
							:options="optionsLevel3.technologyPlatformOptions" />
					</el-form-item>
					<el-form-item label="CDx strategy" prop="cdxStrategy" :class="{ highlight: getHighlight('cdxStrategy', idx) }">
						<el-input v-model="item.cdxStrategy" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Tumor type" prop="tumorType" :class="{ highlight: getHighlight('tumorType', idx) }">
						<el-select-v2 v-model="item.tumorType" placeholder="Please select" :options="optionsLevel3.tumorTypeOptions" />
					</el-form-item>
					
					<!-- 分割 -->
					<el-form-item label="CDx Assay selection date" prop="cdxAssaySelectionDate" :class="{ highlight: getHighlight('cdxAssaySelectionDate', idx) }">
						<el-date-picker v-model="item.cdxAssaySelectionDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="CDx Assay selection Link Name" prop="linkName1" :class="{ highlight: getHighlight('linkName1', idx) }">
						<el-input v-model="item.linkName1" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="CDx Assay selection Link To" prop="linkTo1" :class="{ highlight: getHighlight('linkTo1', idx) }">
						<el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
					</el-form-item>
					
					<el-form-item label="CDx Contract date" prop="cdxContractDate" :class="{ highlight: getHighlight('cdxContractDate', idx) }">
						<el-date-picker v-model="item.cdxContractDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="CDx Contract Link Name" prop="linkName2" :class="{ highlight: getHighlight('linkName2', idx) }">
						<el-input v-model="item.linkName2" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="CDx Contract Link To" prop="linkTo2" :class="{ highlight: getHighlight('linkTo2', idx) }">
						<el-input v-model="item.linkTo2" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="AV completion date" prop="avCompletionDate" :class="{ highlight: getHighlight('avCompletionDate', idx) }">
						<el-date-picker v-model="item.avCompletionDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="AV completion Link Name" prop="linkName3" :class="{ highlight: getHighlight('linkName3', idx) }">
						<el-input v-model="item.linkName3" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="AV completion Link To" prop="linkTo3" :class="{ highlight: getHighlight('linkTo3', idx) }">
						<el-input v-model="item.linkTo3" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item
						label="Type testing completion date"
						prop="typeTestingCompletionDate"
						:class="{ highlight: getHighlight('typeTestingCompletionDate', idx) }"
					>
						<el-date-picker
							v-model="item.typeTestingCompletionDate"
							class="date-form-label"
							width="100%"
							type="date"
							placeholder="Pick a date"
							clearable
							value-format="YYYY-MM-DD"
						/>
					</el-form-item>
					<el-form-item label="Type testing completion Link Name" prop="linkName4" :class="{ highlight: getHighlight('linkName4', idx) }">
						<el-input v-model="item.linkName4" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Type testing completion Link To" prop="linkTo4" :class="{ highlight: getHighlight('linkTo4', idx) }">
						<el-input v-model="item.linkTo4" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item
						label="CDx HGR Approval Date"
						prop="cdxHgrApprovalDate"
						:class="{ highlight: getHighlight('cdxHgrApprovalDate', idx) }"
					>
						<el-date-picker
							v-model="item.cdxHgrApprovalDate"
							class="date-form-label"
							width="100%"
							type="date"
							placeholder="Pick a date"
							clearable
							value-format="YYYY-MM-DD"
						/>
					</el-form-item>
					<el-form-item label="CDx HGR Approval Link Name" prop="linkName5" :class="{ highlight: getHighlight('linkName5', idx) }">
						<el-input v-model="item.linkName5" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="CDx HGR Approval Link To" prop="linkTo5" :class="{ highlight: getHighlight('linkTo5', idx) }">
						<el-input v-model="item.linkTo5" placeholder="Please enter" clearable />
					</el-form-item>

					<el-form-item
						label="Ring study & Reader precision date"
						prop="ringStudyReaderPrecisionDate"
						:class="{ highlight: getHighlight('ringStudyReaderPrecisionDate', idx) }"
					>
						<el-date-picker
							v-model="item.ringStudyReaderPrecisionDate"
							class="date-form-label"
							width="100%"
							type="date"
							placeholder="Pick a date"
							clearable
							value-format="YYYY-MM-DD"
						/>
					</el-form-item>
					<el-form-item label="CRing study & Reader precision Link Name" prop="linkName6" :class="{ highlight: getHighlight('linkName6', idx) }">
						<el-input v-model="item.linkName6" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Ring study & Reader precision Link To" prop="linkTo6" :class="{ highlight: getHighlight('linkTo6', idx) }">
						<el-input v-model="item.linkTo6" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item
						label="Clinical IVD trial completion date"
						prop="clinicalIvdTrialCompletionDate"
						:class="{ highlight: getHighlight('clinicalIvdTrialCompletionDate', idx) }"
					>
						<el-date-picker
							v-model="item.clinicalIvdTrialCompletionDate"
							class="date-form-label"
							width="100%"
							type="date"
							placeholder="Pick a date"
							clearable
							value-format="YYYY-MM-DD"
						/>
					</el-form-item>
					<el-form-item label="Clinical IVD trial completion Link Name" prop="linkName7" :class="{ highlight: getHighlight('linkName7', idx) }">
						<el-input v-model="item.linkName7" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Clinical IVD trial completion Link To" prop="linkTo7" :class="{ highlight: getHighlight('linkTo7', idx) }">
						<el-input v-model="item.linkTo7" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="CDx Lab readiness date" prop="cdxLabReadinessDate" :class="{ highlight: getHighlight('cdxLabReadinessDate', idx) }">
						<el-date-picker v-model="item.cdxLabReadinessDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="CDx Lab readiness Link Name" prop="linkName8" :class="{ highlight: getHighlight('linkName8', idx) }">
						<el-input v-model="item.linkName8" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="CDx Lab readiness Link To" prop="linkTo8" :class="{ highlight: getHighlight('linkTo8', idx) }">
						<el-input v-model="item.linkTo8" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item
						label="Bridging study initiation date"
						prop="bridgingStudyInitiationDate"
						:class="{ highlight: getHighlight('bridgingStudyInitiationDate', idx) }"
					>
						<el-date-picker
							v-model="item.bridgingStudyInitiationDate"
							class="date-form-label"
							width="100%"
							type="date"
							placeholder="Pick a date"
							clearable
							value-format="YYYY-MM-DD"
						/>
					</el-form-item>
					<el-form-item label="Bridging study initiation Link Name" prop="linkName9" :class="{ highlight: getHighlight('linkName9', idx) }">
						<el-input v-model="item.linkName9" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Bridging study initiation Link To" prop="linkTo9" :class="{ highlight: getHighlight('linkTo9', idx) }">
						<el-input v-model="item.linkTo9" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item
						label="Bridging study completion date"
						prop="bridgingStudyCompletionDate"
						:class="{ highlight: getHighlight('bridgingStudyCompletionDate', idx) }"
					>
						<el-date-picker
							v-model="item.bridgingStudyCompletionDate"
							class="date-form-label"
							width="100%"
							type="date"
							placeholder="Pick a date"
							clearable
							value-format="YYYY-MM-DD"
						/>
					</el-form-item>
					<el-form-item label="Bridging study completion Link Name" prop="linkName10" :class="{ highlight: getHighlight('linkName10', idx) }">
						<el-input v-model="item.linkName10" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="Bridging study completion Link To" prop="linkTo10" :class="{ highlight: getHighlight('linkTo10', idx) }">
						<el-input v-model="item.linkTo10" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item
						label="CDx submission date"
						prop="cdxSubmissionDate"
						:class="{ highlight: getHighlight('cdxSubmissionDate', idx) }"
					>
						<el-date-picker
							v-model="item.cdxSubmissionDate"
							class="date-form-label"
							width="100%"
							type="date"
							placeholder="Pick a date"
							clearable
							value-format="YYYY-MM-DD"
						/>
					</el-form-item>
					<el-form-item label="CDx submission Link Name" prop="linkName11" :class="{ highlight: getHighlight('linkName11', idx) }">
						<el-input v-model="item.linkName11" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="CDx submission Link To" prop="linkTo11" :class="{ highlight: getHighlight('linkTo11', idx) }">
						<el-input v-model="item.linkTo11" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="CDx approval date" prop="cdxApprovalDate" :class="{ highlight: getHighlight('cdxApprovalDate', idx) }">
						<el-date-picker v-model="item.cdxApprovalDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
					<el-form-item label="CDx approval Link Name" prop="linkName12" :class="{ highlight: getHighlight('linkName12', idx) }">
						<el-input v-model="item.linkName12" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="CDx approval Link To" prop="linkTo12" :class="{ highlight: getHighlight('linkTo12', idx) }">
						<el-input v-model="item.linkTo12" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="CDx certificate number" prop="cdxCertificateNumber" :class="{ highlight: getHighlight('cdxCertificateNumber', idx) }">
						<el-input v-model="item.cdxCertificateNumber" placeholder="Please enter" clearable />
					</el-form-item>
					<el-form-item label="CDx contract" prop="cdxContract" :class="{ highlight: getHighlight('cdxContract', idx) }">
						<el-input v-model="item.cdxContract" placeholder="Please enter" clearable />
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
import { inject, ref, defineExpose, watchEffect } from "vue";
import CollapsePanel from "@/views/study/components/CollapsePanel.vue";
import StudyAPI from "@/api/study";
import {
	optionsLevel3
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
		type: Object as any,
		default: () => {
			return {}
		}
	}
});

const panelForms = ref<any>([]);
const activePanels = ref<String>("0");
const basicInfo: any = inject('basicInfo')
const formKeyConfig: any = {
	'CDx Assay selection date': { code: 'cdxAssaySelectionDate', linkName: 'linkName1', linkTo: 'linkTo1', isGroup: true },
	'CDx Contract date': { code: 'cdxContractDate', linkName: 'linkName2', linkTo: 'linkTo2', isGroup: true },
	'AV completion date': { code: 'avCompletionDate', linkName: 'linkName3', linkTo: 'linkTo3', isGroup: true },
	'Type testing completion date': { code: 'typeTestingCompletionDate', linkName: 'linkName4', linkTo: 'linkTo4', isGroup: true },
	'CDx HGR Approval Date': { code: 'cdxHgrApprovalDate', linkName: 'linkName5', linkTo: 'linkTo5', isGroup: true },
	'Ring study & Reader precision date': { code: 'ringStudyReaderPrecisionDate', linkName: 'linkName6', linkTo: 'linkTo6', isGroup: true },
	'Clinical IVD trial completion date': { code: 'clinicalIvdTrialCompletionDate', linkName: 'linkName7', linkTo: 'linkTo7', isGroup: true },
	'CDx Lab readiness date': { code: 'cdxLabReadinessDate', linkName: 'linkName8', linkTo: 'linkTo8', isGroup: true },
	'Bridging study initiation date': { code: 'bridgingStudyInitiationDate', linkName: 'linkName8', linkTo: 'linkTo8', isGroup: true },
	'Bridging study completion date': { code: 'bridgingStudyCompletionDate', linkName: 'linkName8', linkTo: 'linkTo8', isGroup: true },
	'CDx submission date': { code: 'cdxSubmissionDate', linkName: 'linkName8', linkTo: 'linkTo8', isGroup: true },
	'CDx approval date': { code: 'cdxApprovalDate', linkName: 'linkName8', linkTo: 'linkTo8', isGroup: true }
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
	panelForms.value[e].cdxId = 'CDx_' + studyName + biomark + panelForms.value[e].sampleType
}

const onInputChange = (event: any, extraParam: number) => {
	const params = {
		assayId: event.target?.value
	}
	StudyAPI.getAssayById(params).then((data) => {
		if (data != null && data.assayName != null && data.assayName != '') {
			panelForms.value[extraParam].assayName = data.assayName
		} else {
			panelForms.value[extraParam].assayName = ''
		}
		if (data != null && data.partner != null && data.partner != '') {
			panelForms.value[extraParam].dxPartner = data.partner
		} else {
			panelForms.value[extraParam].dxPartner = ''
		}
	})
};

const updatePanel = (e: String) => {
  console.log("切换了", e);
}

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


watchEffect((data) => {
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
