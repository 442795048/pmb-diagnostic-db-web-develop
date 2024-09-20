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
			<div id="storyLineDomId" class="story-line" :class="{ isFullscreen }">
				<StoryLineChart
					ref="storyLineChartRef"
					title="StudyA"
					domId="storyLineDomId"
					:chartConfig="chartConfig"
					class="story-line-chart common-card"
					@handleScreenFull="(val) => isFullscreen = val"
				/>
				<LevelTree class="story-line-tree common-card" @checkTreeChange="checkTreeChange" />
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
// import { MOCK_TREE } from '../mock/line'
import { ref, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();
const showSubmit = ref<Boolean>(false);
const chartConfig = ref<Array<any>>([]);
const isFullscreen = ref<Boolean>(false);
const basicInfo = ref({})
const storyLineChartRef:any = ref(null)
const studyName = computed(() => {
	return route.query.studyName
})
provide('basicInfo', basicInfo)
provide('studyName', studyName)
onMounted(() => {
});

const selectChartData = (data: any) => {
	chartConfig.value = []
	const treeData = data || []
	treeData.forEach((item: any) => {
		const children: any[] = item.children || []
		if (item.treeLevel == 1) {
			const filterChildren = children.filter(f => f.isCheck)
			const config = { horizontal: true, treeLevel: item.treeLevel, chartData: filterChildren }
			chartConfig.value.push(config)
		} else if (item.treeLevel == 2 || item.treeLevel == 3) {
			// 泳道
			children.forEach(child => {
				const assayChildren: any[] = child.children || []
				const filterChildren = assayChildren.filter(f => f.isCheck)
				if (filterChildren.length) {
					const config = { assayName: child.label, treeLevel: item.treeLevel, chartData: filterChildren }
					chartConfig.value.push(config)
				}
			})
		} else {
			const filterChildren = children.filter(f => f.isCheck)
			const config = { treeLevel: item.treeLevel, chartData: filterChildren }
			chartConfig.value.push(config)
		}
	})
	nextTick(() => {
		storyLineChartRef.value.handleResize()
	})
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

		&.isFullscreen {
			background: #fff;
			max-height: max-content;

			.story-line-chart {
				padding: 20px;
			}
		}

		.story-line-chart {
			flex: 1;
			padding: 15px 10px;
			overflow-y: auto;
		}

		.story-line-tree.common-card {
			width: auto;
			padding: 15px 10px;
			overflow: auto;
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
