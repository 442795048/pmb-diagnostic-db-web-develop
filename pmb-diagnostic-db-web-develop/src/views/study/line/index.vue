<template>
	<div class="study-line-container" :class="{ showSubmit: showSubmit }">
		<el-card shadow="never">
			<!-- 基础信息 -->
			<BasicInformation :studyName="studyName" @handleShowSubmit="(val) => { showSubmit = val }" />
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
				<StoryLineChart title="StudyA" domId="storyLineDomId" :chartConfig="chartConfig"
					class="story-line-chart common-card" @handleScreenFull="(val) => isFullscreen = val" />
				<LevelTree class="story-line-tree common-card" @checkTreeChange="checkTreeChange" />
				<!-- <LevelTree1></LevelTree1> -->
			</div>
			<div class="bottom">
				<TeamBoard :studyName="studyName"/>
				<AssayTable :studyName="studyName"/>
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

const studyName = computed(() => {
	return route.query.studyName
})

onMounted(() => {
});

const selectChartData = (data) => {
	chartConfig.value = []
	data.forEach(item => {
		const children: any[] = item.children || []
		// 泳道校验
		if (item.type == 'level2' || item.type == 'level3') {
			children.forEach(child => {
				const assayChildren: any[] = child.children || []
				const filterChildren = assayChildren.filter(f => f.isCheck)
				if (filterChildren.length) {
					const config = { assayName: child.label, chartData: filterChildren }
					chartConfig.value.push(config)
				}
			})
		} else {
			const filterChildren = children.filter(f => f.isCheck)
			if (item.type == 'level1') {
				const config = { horizontal: true, chartData: filterChildren }
				chartConfig.value.push(config)
			} else {
				const config = { chartData: filterChildren }
				chartConfig.value.push(config)
			}
		}
	})
}

const checkTreeChange = (data) => {
	selectChartData(data.value)
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
			width: 360px;
			padding: 15px 10px;
			overflow: auto;
		}
	}

	.bottom {
		display: grid;
		grid-template-columns: 40% 60%;
		height: 320px;
		gap: 20px;
	}
	.activeBtn{
		background: rgb(255, 99, 71);
		color: #fff;
	}

}
</style>
