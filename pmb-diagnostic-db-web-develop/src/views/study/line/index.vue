<template>
	<div class="study-line-container" :class="{ showSubmit: showSubmit }">
		<el-card shadow="never">
			<!-- 基础信息 -->
			<BasicInformation
				@handleShowSubmit="(val: any) => { showSubmit = val }"
				@updateFormData="updateFormData"
				@handleRefresh="handleRefreshPage"
			/>
			<!-- 按钮 -->
			<div class="template-btn">
				<h3 class="common-title">Study Story Line:</h3>
				<el-row>
					<el-button class="activeBtn">Template: Lab Set-up</el-button>
					<el-button>Template: QC & M</el-button>
					<el-button>Template: Close out</el-button>
				</el-row>
			</div>
			<!-- 图 -->
			<div id="storyLineDomId" class="story-line" :class="{ isFullscreen, isShowTree }">
				<StoryLineChart
					ref="storyLineChartRef"
					:title="studyName"
					domId="storyLineDomId"
					:chartList="chartList"
					@handleScreenFull="(val) => isFullscreen = val"
				/>
				<div class="story-line-tree" :class="{ 'common-card': isShowTree }">
					<div class="common-expand-icon">
						<el-icon v-if="isShowTree" @click="isShowTree = false"><DArrowRight /></el-icon>
						<el-icon v-else @click="isShowTree = true"><DArrowLeft /></el-icon>
					</div>
					<div class="story-line-tree-scroll">
						<LevelTree v-show="isShowTree" @checkTreeChange="checkTreeChange" />
					</div>
				</div>
			</div>
			<div class="bottom">
				<TeamBoard />
				<AssayTable />
			</div>
		</el-card>

	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: "StudyLine",
	inheritAttrs: false,
});
import BasicInformation from './BasicInformation.vue'
import StoryLineChart from '@/components/StoryLineChart/index.vue'
import TeamBoard from './TeamBoard.vue'
import AssayTable from './AssayTable.vue'
import LevelTree from './LevelTree/index.vue'
import { getSpecifyMonths } from '@/utils/date'
// import { MOCK_TREE } from '../mock/line'
import { ref, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();
const showSubmit = ref<Boolean>(false);
const chartList = ref<any>([]);
const isFullscreen = ref<Boolean>(false);
const basicInfo = ref({})
const storyLineChartRef:any = ref(null)
const isShowTree = ref<any>(true)
const studyName = computed(() => {
	return route.query.studyName
})
provide('basicInfo', basicInfo)
provide('studyName', studyName)
onMounted(() => {
});

const selectChartData = (data: any) => {
	const treeData = data || []
	getChartList(treeData)
	treeData.forEach((item: any) => {
		const children: any[] = item.children || []
		if (item.treeLevel == 1) {
			const filterChildren = children.filter(f => f.isCheck)
			const config = { labelName: item.label, horizontal: true, treeLevel: item.treeLevel, chartData: filterChildren }
			chartList.value[0].list.push(config)
		} else if (item.treeLevel == 2 || item.treeLevel == 3) {
			// 泳道
			children.forEach(child => {
				const assayChildren: any[] = child.children || []
				const filterChildren = assayChildren.filter(f => f.isCheck)
				if (filterChildren.length) {
					const config = { labelName: `${item.label}<br/>(${child.label})`, treeLevel: item.treeLevel, chartData: filterChildren }
					chartList.value[0].list.push(config)
				}
			})
		} else {
			const filterChildren = children.filter(f => f.isCheck)
			const config = { labelName: item.label, treeLevel: item.treeLevel, chartData: filterChildren }
			chartList.value[0].list.push(config)
		}
	})
	console.log(chartList.value)
	nextTick(() => {
		storyLineChartRef.value.handleResize()
	})
}

const getChartList = (treeData: any) => {
	chartList.value = []
	// 更新chart数据最大时间最小时间
	const obj = { date: <any>[], list: [] }
	const level1Datas = treeData.find((fi: any) => fi.treeLevel == 1)
	const PH3ID = level1Datas.children.find((item: any) => item.name == 'Pre-PH3ID')
	const NDAA = level1Datas.children.find((item: any) => item.name == 'NDA-A')
	const startDate = PH3ID?.startDate
	const endDate = NDAA?.startDate
	const createDate = level1Datas.createDate
	if (startDate && endDate) {
		obj.date = [startDate, endDate]
	} else {
		if (startDate) {
		  const date = getSpecifyMonths(startDate, 12).after()
			obj.date = [startDate, date]
		} else if (endDate) {
			const date = getSpecifyMonths(endDate, 12).before()
			obj.date = [date, endDate]
		} else {
			const date = getSpecifyMonths(createDate, 12).before()
			obj.date = [date, createDate]
		}
	}
	chartList.value.push(obj)
}

/**
 * 刷新整个页面
 */
const handleRefreshPage = () => {
}

const updateFormData = (data: any) => {
	basicInfo.value = data
}

const checkTreeChange = (data: any) => {
	selectChartData(data)
}
</script>

<style lang="scss" scoped>
.study-line-container {
	&.showSubmit {
		padding-bottom: 58px;
	}

	.story-line {
		display: flex;
		margin-top: 18px;
		margin-bottom: 18px;
		gap: 20px;
		max-height: 1500px;
		padding-right: 5px;
    overflow: auto;
		&.isFullscreen {
			background: #fff;
			max-height: max-content;
		}
		&:not(.isShowTree){
			.story-line-tree{
				width: 20px;
			}
		}
		::v-deep(.story-line-chart.common-card) {
			flex: 1;
			height: auto;
			overflow-y: auto;
		}

		.story-line-tree {
			width: 320px;
			overflow: hidden;
			position: relative;
			padding: 0;
			.story-line-tree-scroll{
				height: 100%;
				padding: 15px 10px;
				overflow: auto;
			}
		}
	}

	.bottom {
		display: grid;
		grid-template-columns: 40% calc(60% - 20px);
		height: 320px;
		gap: 20px;
	}
	.activeBtn{
		background: rgb(255, 99, 71);
		color: #fff;
	}

}
</style>
