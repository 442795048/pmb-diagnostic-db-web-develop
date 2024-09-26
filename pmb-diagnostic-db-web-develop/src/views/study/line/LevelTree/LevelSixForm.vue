<template>
  <div class="w-full">
    <CollapseComponent title="Study Level 6" :showTitleBtn="false" style="font-size: 14px;color: #4a4a4a;" :showAdd="getShowAdd" :panels="panelForms"
      :showDelete="!disabled" :active-panels="activePanels" @add-panel-child="addPanelToFirst" @delete-panel="deletePanelToFirst"
      @update-panel="updatePanel">
      <template #panel-widget="{ item, idx }">

        <el-form :model="item" :disabled="disabled" label-position="top" label-width="150" class="filter-form-inline common-form"
          style="margin-top: 10px;" ref="queryFormRef">

					<el-form-item label="Event Name" prop="eventName">
						<el-input v-model="item.eventName" placeholder="Please enter" clearable />
					</el-form-item>

					<el-form-item label="Event Type">
						<el-select-v2 v-model="item.eventType" placeholder="Please select" :options="optionsLevel6.eventTypeOptions"
							clearable />
					</el-form-item>
				
					<el-form-item label="Event Level">
						<el-select-v2 v-model="item.eventLevel" placeholder="Please select" :options="optionsLevel6.eventLevelOptions"
							clearable />
					</el-form-item>

					<el-form-item v-if="getShowSublevel2(item)" label="Sub Event Level">
						<el-select-v2 v-model="item.subEventLevel" placeholder="Please select" :options="eventSubOptions"
							clearable />
					</el-form-item>
				
					<el-form-item v-if="getShowSublevel3(item)" label="Sub Event Level">
						<el-select-v2 v-model="item.subEventLevel" placeholder="Please select" :options="eventSubLevel3Options"
							clearable />
					</el-form-item>
				
					<el-form-item label="Event Brief">
						<el-input v-model="item.eventBrief" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event Detail">
						<el-input v-model="item.eventDetail" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event start date" prop="code">
						<el-date-picker v-model="item.eventStartDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD" />
					</el-form-item>
				
					<el-form-item label="Event completion date" prop="code">
						<el-date-picker v-model="item.eventCompletionDate" class="date-form-label" width="100%" type="date"
							placeholder="Pick a date" clearable value-format="YYYY-MM-DD"/>
					</el-form-item>
				
					<el-form-item label="Event completion Link Name" prop="linkName1">
						<el-input v-model="item.linkName1" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event completion Link To" prop="linkTo1">
						<el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
					</el-form-item>
				
					<el-form-item label="Event status">
						<el-select-v2 v-model="item.eventStatus" placeholder="Please select" :options="optionsLevel6.eventStatusOptions"
							clearable />
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
import { ref, watchEffect, onMounted, defineExpose } from "vue";
import CollapseComponent from "@/views/study/components/CollapsePanel.vue";
import {
	optionsLevel6
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
	allFormData: {
		type: Object as any,
		default: () => {
			return {}
		}
	},
	formData: {
		type: Array as any,
		default: () => {
			return {}
		}
	}
});

const panelForms = ref<any>([]);
const activePanels = ref<String>("0");
const eventSubOptions = ref<Array<any>>([]);
const eventSubLevel3Options = ref<Array<any>>([]);

onMounted(() => {
	initFormData()
})

const disabledStartDate = (item: any) => {
	if (item.eventStartDate && item.eventCompletionDate) {
		return new Date(item.eventStartDate + ' 00:00:00').getTime() < new Date(item.eventCompletionDate + ' 23:59:59').getTime();
	}
	return false;
}
const disabledEndDate = (item: any) => {
	if (item.eventStartDate && item.eventCompletionDate) {
		return new Date(item.eventStartDate + ' 00:00:00').getTime() < new Date(item.eventCompletionDate + ' 23:59:59').getTime();
	}
	return false;
}
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
	const assayList = props.formData || []
	assayList.forEach((item: any) => {
		panelForms.value.push(item)
	})
	if (panelForms.value.length == 0) {
		panelForms.value.push({})
	}
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

const getShowSublevel2 = (item: any) => {
	return item.eventLevel == '2'
}

const getShowSublevel3 = (item: any) => {
	return item.eventLevel == '3'
}

const updatePanel = (e: String) => {
  console.log("切换了", e);
}

watchEffect(() => {
  if (props.allFormData) {
		// 获取wpid下拉列表
		const studyLevel2 = props.allFormData.studyLevel2 || []
		const wpsArr: any = []
		studyLevel2.forEach((item: any) => {
			if (item.wpId) {
				wpsArr.push({ label: item.wpId, value: item.wpId })
			}
		})
    eventSubOptions.value = wpsArr
		// 获取cdx下拉列表
		const studyLevel3 = props.allFormData.studyLevel3 || []
		const cdxArr: any = []
		studyLevel3.forEach((item: any) => {
			if (item.cdxId) {
				cdxArr.push({ label: item.cdxId, value: item.cdxId })
			}
		})
    eventSubLevel3Options.value = cdxArr
  }
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
