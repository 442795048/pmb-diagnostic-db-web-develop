<template>
	<el-dialog
    v-model="visible"
   	:title="title"
    width="1000"
    :before-close="handleClose"
  >
		<el-form :model="basicFormData" label-position="top" label-width="150" class="filter-form-inline common-form"
      style="margin-top: 10px;" ref="queryFormRef">

			<el-form-item label="Pre-PH3ID" prop="prePh3id" :class="{ highlight: getHighlight('prePh3id') }">
				<el-date-picker v-model="basicFormData.prePh3id" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable value-format="YYYY-MM-DD" />
			</el-form-item>
			<el-form-item label="Pre-PH3ID Link Name" prop="linkName1" :class="{ highlight: getHighlight('linkName1') }">
				<el-input v-model="basicFormData.linkName1" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="Pre-PH3ID Link To" prop="linkTo1" :class="{ highlight: getHighlight('linkTo1') }">
				<el-input v-model="basicFormData.linkTo1" placeholder="Please enter" clearable />
			</el-form-item>
			
			<el-form-item label="LSPC" prop="lspc" :class="{ highlight: getHighlight('lspc') }">
				<el-date-picker v-model="basicFormData.lspc" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
			</el-form-item>
			<el-form-item label="LSPC Link Name" prop="linkName2" :class="{ highlight: getHighlight('linkName2') }">
				<el-input v-model="basicFormData.linkName2" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="LSPC Link To" prop="linkTo2" :class="{ highlight: getHighlight('linkTo2') }">
				<el-input v-model="basicFormData.linkTo2" placeholder="Please enter" clearable />
			</el-form-item>
			
			<el-form-item label="CSP Available" prop="cspAvailable" :class="{ highlight: getHighlight('cspAvailable') }">
				<el-date-picker v-model="basicFormData.cspAvailable" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="CSP Available Link Name" prop="linkName3" :class="{ highlight: getHighlight('linkName3') }">
				<el-input v-model="basicFormData.linkName3" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="CSP Available Link To" prop="linkTo3" :class="{ highlight: getHighlight('linkTo3') }">
				<el-input v-model="basicFormData.linkTo3" placeholder="Please enter" clearable />
			</el-form-item>
			
			<el-form-item label="HGR initial submission" prop="hgrInitialSubmission" :class="{ highlight: getHighlight('hgrInitialSubmission') }">
				<el-date-picker v-model="basicFormData.hgrInitialSubmission" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable value-format="YYYY-MM-DD" disabled/>
			</el-form-item>
			<el-form-item label="HGR initial submission Link Name" prop="linkName4" :class="{ highlight: getHighlight('linkName4') }">
				<el-input v-model="basicFormData.linkName4" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="HGR initial submission Link To" prop="linkTo4" :class="{ highlight: getHighlight('linkTo4') }">
				<el-input v-model="basicFormData.linkTo4" placeholder="Please enter" clearable />
			</el-form-item> 
			
			<el-form-item label="HGR initial approval" prop="hgrInitialApproval" :class="{ highlight: getHighlight('hgrInitialApproval') }">
				<el-date-picker v-model="basicFormData.hgrInitialApproval" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable disabled />
			</el-form-item>
			<el-form-item label="HGR initial approval Link Name" prop="linkName5" :class="{ highlight: getHighlight('linkName5') }">
				<el-input v-model="basicFormData.linkName5" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="HGR initial approval Link To" prop="linkTo5" :class="{ highlight: getHighlight('linkTo5') }">
				<el-input v-model="basicFormData.linkTo5" placeholder="Please enter" clearable />
			</el-form-item>
			
			<el-form-item label="FSI" prop="fsi" :class="{ highlight: getHighlight('fsi') }">
				<el-date-picker v-model="basicFormData.fsi" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
			</el-form-item>
			<el-form-item label="FSI Link Name" prop="linkName6" :class="{ highlight: getHighlight('linkName6') }">
				<el-input v-model="basicFormData.linkName6" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="FSI Link To" prop="linkTo6" :class="{ highlight: getHighlight('linkTo6') }">
				<el-input v-model="basicFormData.linkTo6" placeholder="Please enter" clearable />
			</el-form-item>
			
			<el-form-item label="LSI" prop="lsi" :class="{ highlight: getHighlight('lsi') }">
				<el-date-picker v-model="basicFormData.lsi" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
			</el-form-item>
			<el-form-item label="LSI Link Name" prop="linkName7" :class="{ highlight: getHighlight('linkName7') }">
				<el-input v-model="basicFormData.linkName7" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="LSI Link To" prop="linkTo7" :class="{ highlight: getHighlight('linkTo7') }">
				<el-input v-model="basicFormData.linkTo7" placeholder="Please enter" clearable />
			</el-form-item>
			
			<el-form-item label="NDA-S" prop="ndaS" :class="{ highlight: getHighlight('ndaS') }">
				<el-date-picker v-model="basicFormData.ndaS" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
			</el-form-item>
			<el-form-item label="NDA-S Link Name" prop="linkName8" :class="{ highlight: getHighlight('linkName8') }">
				<el-input v-model="basicFormData.linkName8" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="NDA-S Link To" prop="linkTo8" :class="{ highlight: getHighlight('linkTo8') }">
				<el-input v-model="basicFormData.linkTo8" placeholder="Please enter" clearable />
			</el-form-item>
			
			<el-form-item label="NDA-A" prop="ndaA" :class="{ highlight: getHighlight('ndaA') }">
				<el-date-picker v-model="basicFormData.ndaA" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
			</el-form-item>
			<el-form-item label="NDA-A Link Name" prop="linkName9" :class="{ highlight: getHighlight('linkName9') }">
				<el-input v-model="basicFormData.linkName9" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="NDA-A Link To" prop="linkTo9" :class="{ highlight: getHighlight('linkTo9') }">
				<el-input v-model="basicFormData.linkTo9" placeholder="Please enter" clearable />
			</el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" :loading="loading" @click="handleSave">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, inject } from "vue";
import StudyAPI from "@/api/study";
const props = defineProps({
	modelValue: {
    type: Boolean,
  },
	title: {
    type: [String, Number] as any,
		default: ''
  },
	highlight: {
    type: [String, Number] as any,
		default: ''
  },
	allFormData: {
		type: Object as any,
		default: () => {
			return {}
		}
	},
	formData: {
		type: Object as any,
		default: () => {
			return {}
		}
	}
});
const emits = defineEmits(["update:modelValue", "handleClose", "handleAfterSave"]);
const basicFormData = reactive<any>({})
const loading = ref<boolean>(false)
const formKeyConfig: any = {
	'Pre-PH3ID': { code: 'prePh3id', linkName: 'linkName1', linkTo: 'linkTo1' },
	'LSPC': { code: 'lspc', linkName: 'linkName2', linkTo: 'linkTo2'},
	'CSP Available': { code: 'cspAvailable', linkName: 'linkName3', linkTo: 'linkTo3' },
	'HGR initial submission': { code: 'hgrInitialSubmission', linkName: 'linkName4', linkTo: 'linkTo4' },
	'HGR initial approval': { code: 'hgrInitialApproval', linkName: 'linkName5', linkTo: 'linkTo5' },
	'FSI': { code: 'fsi', linkName: 'linkName6', linkTo: 'linkTo6'},
	'LSI': { code: 'lsi', linkName: 'linkName7', linkTo: 'linkTo7'},
	'NDA-S': { code: 'ndaS', linkName: 'linkName8', linkTo: 'linkTo8' },
	'NDA-A': { code: 'ndaA', linkName: 'linkName9', linkTo: 'linkTo9' }
}
const studyName: any = inject('studyName')
const visible = computed(() => {
	return props.modelValue
})

onMounted(() => {
	initFormData()
})

/**
 * 初始化表单数据
 */
const initFormData = () => {
	Object.assign(basicFormData, props.formData)
	getSubmissionAppDate()
}

/**
 * 获取高亮显示
 */
const getHighlight = (key: string) => {
	const highlight = props.highlight
	const config = formKeyConfig[highlight]
	if (config) {
		return config.code == key || config.linkName == key || config.linkTo == key
	}
	return false
}

const handleSave = () => {
	loading.value = true;
  let insertParams = {
    studyLevel1Unique: basicFormData,
		studyName: studyName.value
  }
	StudyAPI.addTreeData(insertParams).then((data) => {
		ElMessage.success('save success');
		emits('handleAfterSave')
		handleClose()
	}).finally(() => {
		loading.value = false;
	});
}

const handleClose = () => {
	emits('update:modelValue', false)
	emits('handleClose')
}

const getMaxDate = (dateArr: any) => {
	if (dateArr.length) {
		let maxDateTime = new Date(dateArr[0]).getTime()
		let maxDate = dateArr[0]
		for (let i = 0; i < dateArr.length; i++) {
			const currentDateTime = new Date(dateArr[i]).getTime()
			if (currentDateTime >= maxDateTime) {
				maxDateTime = currentDateTime
				maxDate = dateArr[i]
			}
		}
		return maxDate
	}
	return ''
}
const getSubmissionAppDate = () => {
	const studyLevel4 = props.allFormData.studyLevel4 || []
	const hgrInitialSubmission: any = []
	const hgrInitialApproval: any  = []
	studyLevel4.forEach((item: any) => {
		if(item.hgrType == 'HGR initial submission') {
			if(item.hgrSubmissionDate) {
				hgrInitialSubmission.push(item.hgrSubmissionDate)
			}
			if(item.hgrApprovalDate) {
				hgrInitialApproval.push(item.hgrApprovalDate)
			}
		}
	})
	const maxSubmissionDate = getMaxDate(hgrInitialSubmission)
	const maxApprovalDate = getMaxDate(hgrInitialApproval)
	basicFormData.hgrInitialSubmission = maxSubmissionDate
	basicFormData.hgrInitialApproval = maxApprovalDate
}

watchEffect(() => {
  if (props.allFormData) {
		getSubmissionAppDate()
  }
})

</script>

<style lang="scss" scoped>
.custom-tree-node {
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	padding-right: 8px;
	font-size: 14px;

	.node-btn {
		font-size: 12px;
		color: #20a6fc;
	}
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
