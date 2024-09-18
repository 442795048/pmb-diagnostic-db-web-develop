<template>
  <div class="w-full">
		<!-- <el-form :model="formData" label-position="top" label-width="150" class="filter-form-inline common-form"
      style="margin-top: 10px;" ref="queryFormRef">
			
    </el-form> -->
		<!-- 父级折叠面板 -->
		<CollapseComponent
			title="HGR"
			:showAdd="false"
			style="font-size: 12px;color: #4a4a4a;"
			:panels="formData.panelForms"
			:showDelete="!disabled"
			:active-panels="activePanels"
			@add-panel="addPanelToFirst"
			@delete-panel="deletePanelToFirst"
			@update-panel="updatePanel"
			@add-panel-child="addPanelToChild"
		>
			<template #panel-widget="{ item, idx }">
				<el-form :model="item" label-position="top" label-width="150" class="filter-form-inline common-form"
					style="margin-top: 10px;" ref="queryFormRef">
					
					<el-form-item label="Biomark" prop="biomark">
						<el-input v-model="formData.biomark" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Partner">
						<el-input v-model="formData.partner" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Testing Lab">
						<el-input v-model="formData.testingLab" placeholder="Please enter" clearable />
					</el-form-item>

					<el-form-item label="HGR Type">
						<el-select-v2 v-model="item.hgrType" placeholder="Please select" :options="hgrTypeOptions" />
					</el-form-item>
			
					<el-form-item label="HGR Change order (only for change application)">
						<el-input v-model="item.hgrChangeOrder" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="HGR Approved ID">
						<el-input v-model="item.hgrApprovedId" placeholder="Please enter" clearable />
					</el-form-item>
			
					<el-form-item label="HGR Scope">
						<el-select-v2 v-model="item.hgrScope" placeholder="Please select" :options="hgrScopeOptions" />
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
					:showAdd="true"
					:showDelete="!disabled"
					:title="`Sample type-${idx + 1}`"
					style="font-size: 12px;color: #4a4a4a;"
					:panels="item.panelForms"
					:active-panels="activePanelsChild"
					@add-panel="addPanelChild"
					@delete-panel="deletePanelChild"
					@update-panel="updatePanel"
					@add-panel-child="addPanelChild"
				>
					<template #panel-widget="{ row, index }">
						<el-form :model="row" label-position="top" label-width="150" class="filter-form-inline common-form"
							style="margin-top: 10px;" ref="queryFormRef">

							<el-form-item label="Sample Type">
								<el-select-v2 v-model="row.sampleType" placeholder="Please select" :options="sampleTypeOptions" />
							</el-form-item>
						
							<el-form-item label="Sample Specifiction">
								<el-input v-model="row.sampleSpecifiction" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Sample number before">
								<el-input v-model="row.sampleNumberBefore" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Sample number after">
								<el-input v-model="row.sampleNumberAfter" placeholder="Please enter" clearable />
							</el-form-item>
					
							<el-form-item label="Data specification for set 1">
								<el-input v-model="row.dataSpecificationForSet1" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Data size before for set 1">
								<el-input v-model="row.dataSizeBeforeForSet1" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Data size after for set 1">
								<el-input v-model="row.dataSizeAfterForSet1" placeholder="Please enter" clearable />
							</el-form-item>
					
							<el-form-item label="Data specification for set 2">
								<el-input v-model="row.dataSpecificationForSet2" placeholder="Please enter" clearable />
							</el-form-item>
					
							<el-form-item label="Data size before for set 2">
								<el-input v-model="row.dataSizeBeforeForSet2" placeholder="Please enter" clearable />
							</el-form-item>
						
							<el-form-item label="Data size after for set 2">
								<el-input v-model="row.dataSizeAfterForSet2" placeholder="Please enter" clearable />
							</el-form-item>
							
							<el-form-item label="HGR comment">
								<el-input v-model="row.hgrComment" placeholder="Please enter" clearable />
							</el-form-item>
						</el-form>
					</template>
				</CollapseComponent>
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
import { StudyBasicForm } from "@/api/study";
const props = defineProps({
	activeIndex: {
		type: Number,
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


watchEffect((data) => {
	if (props.activeIndex) {
		activePanels.value = (props.activeIndex - 1) + ''
	}
})
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
const activePanels = ref<String>("0");
const activePanelsChild = ref<String>("0");
/**
 * 父级添加面板
 */
const addPanelToFirst = (panelList: any) => {
  panelList.unshift({ panelForms: [{}] });
  activePanels.value = "0";
};
/**
 * 子级添加面板
 */
const addPanelChild = (panelList: any) => {
	panelList.unshift({ panelForms: [] });
  activePanelsChild.value = "0";
}
/**
 * 父级向子集添加caollapse
 */
const addPanelToChild = (panelList:any, panel:any) => {
	console.log(panelList, panel)
	if (panel.panelForms) {
		panel.panelForms.unshift({});
	} else {
		panel.panelForms = []

	}
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
	activePanelsChild.value = "";
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
