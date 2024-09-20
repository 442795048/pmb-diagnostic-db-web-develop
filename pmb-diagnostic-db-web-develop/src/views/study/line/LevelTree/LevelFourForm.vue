<template>
  <div class="w-full">
		<!-- 父级折叠面板 -->
		<CollapseComponent
			title="HGR"
			style="font-size: 12px;color: #4a4a4a;"
			:panels="panelForms"
			:showTitleBtn="false"
			:showDelete="!disabled"
			:showAdd="getShowAdd"
			:active-panels="activePanels"
			@add-panel-child="addPanelToFirst"
			@delete-panel="deletePanelToFirst"
		>
			<template #panel-widget="{ item, idx }">
				<el-form :model="item" label-position="top" label-width="150" class="filter-form-inline common-form"
					style="margin-top: 10px;" ref="queryFormRef">
					
						<el-form-item label="Biomark" prop="biomark">
							<el-input v-model="item.biomark" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="Partner">
							<el-input v-model="item.partner" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="Testing Lab">
							<el-input v-model="item.testingLab" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="HGR Type">
							<el-select-v2 v-model="item.hgrType" placeholder="Please select" :options="optionsLevel4.hgrTypeOptions" />
						</el-form-item>
					
						<el-form-item label="HGR Change order (only for change application)">
							<el-input v-model="item.hgrChangeOrder" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="HGR Approved ID">
							<el-input v-model="item.hgrApprovedId" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="HGR Scope">
							<el-select-v2 v-model="item.hgrScope" placeholder="Please select" :options="optionsLevel4.hgrScopeOptions" />
						</el-form-item>
					
						<el-form-item label="HGR purpose" prop="wp">
							<el-input v-model="item.hgrPurpose" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="HGR submission date">
							<el-date-picker v-model="item.hgrSubmissionDate" class="date-form-label" width="100%" type="date"
								placeholder="Pick a date" clearable />
						</el-form-item>
					
						<el-form-item label="HGR approval date">
							<el-date-picker v-model="item.hgrApprovalDate" class="date-form-label" width="100%" type="date"
								placeholder="Pick a date" clearable />
						</el-form-item>
					
						<el-form-item label="HGR approval Link Name" prop="studyTitle">
							<el-input v-model="item.linkName1" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="HGR approval Link To" prop="studyTitle">
							<el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
						</el-form-item>
					
						<el-form-item label="HGR comment">
							<el-input v-model="item.hgrComment" placeholder="Please enter" clearable />
						</el-form-item>
			
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
				>
					<template #panel-widget="{ row, index }">
						<el-form :model="row" label-position="top" label-width="150" class="filter-form-inline common-form"
							style="margin-top: 10px;" ref="queryFormRef">
							<el-form-item label="Sample Type">
								<el-select-v2 v-model="row.sampleType" placeholder="Please select" :options="optionsLevel4.sampleTypeOptions" />
							</el-form-item>
						
							<el-form-item label="Sample Specifiction">
								<el-input v-model="row.sampleSpecifiction" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Sample number before">
								<el-input-number v-model="row.sampleNumberBefore" width="100%" :controls="false" />
							</el-form-item>
						
							<el-form-item label="Sample number after">
								<el-input-number v-model="row.sampleNumberAfter" :controls="false" />
							</el-form-item>
						
							<el-form-item label="Data specification for set 1">
								<el-input v-model="row.dataSpecificationSet1" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Data size before for set 1">
								<el-input-number v-model="row.dataSizeBeforeSet1" :controls="false" />
							</el-form-item>
						
							<el-form-item label="Data size after for set 1">
								<el-input-number v-model="row.dataSizeAfterSet1" :controls="false" />
							</el-form-item>
						
							<el-form-item label="Data specification for set 2">
								<el-input v-model="row.dataSpecificationSet2" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Data size before for set 2">
								<el-input-number v-model="row.dataSizeBeforeSet2" :controls="false" />
							</el-form-item>
						
							<el-form-item label="Data size after for set 2">
								<el-input-number v-model="row.dataSizeAfterSet2" :controls="false" />
							</el-form-item>
						</el-form>
					</template>
				</CollapseComponent>
			</template>
		</CollapseComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, watchEffect } from "vue";
import CollapseComponent from "@/views/study/components/CollapsePanel.vue";
import {
	optionsLevel4
} from '@/views/study/common/options'
const props = defineProps({
	activeIndex: {
		type: [Number, String] as any,
		default: ''
	},
	disabled: {
		type: Boolean,
		default: false
	},
	formData: {
		type: Array as any,
		default: () => {
			return {}
		}
	}
});


const panelForms = ref<any>([]);
const activePanels = ref<any>("0");
onMounted(() => {
	initFormData()
})
/**
 * 初始化表单数据
 */
const initFormData = () => {
	panelForms.value = []
	const assayList = Array.isArray(props.formData) && props.formData.length ? props.formData : [{ sampleInfoList: []}]
	assayList.forEach((item: any) => {
		const sampleInfoList = item.sampleInfoList || []
		if (sampleInfoList.length == 0) {
			sampleInfoList.push({})
		}
		panelForms.value.push({ ...item, sampleInfoList })
	})
	activePanels.value = props.activeIndex || '0'
}
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
 * 父级删除面板
 */
const deletePanelToFirst = (index: any, data:any) => {
  if (data.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  data.splice(index, 1)
}
/**
 * 子级删除面板
 */
const deletePanelChild = (index: any, data:any) => {
	if (data.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  data.splice(index, 1)
}

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
