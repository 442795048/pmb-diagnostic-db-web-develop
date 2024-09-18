<template>
	<div class="study-line-container" >
		<el-card shadow="never">
			<!-- 图 -->
			<div id="storyLineDomId" class="story-line">
				<div ref="storyLineList" class="story-line-list">
					<StoryLineChart id="StudyA1" title="StudyA" :hideFullScreen="true" :chartConfig="chartConfig"
						class="story-line-chart common-card"  ref="oneLine" @handleClickMenu="handleClickMenu"
						@handleScrollLeft="handleScrollLeft1" @handleScrollRight="handleScrollRight1" />
					<StoryLineChart id="StudyB1" title="StudyB" :hideFullScreen="true" :chartConfig="chartConfig1"
						class="story-line-chart common-card" ref="twoLine" @handleClickMenu="handleClickMenu"
						@handleScrollLeft="handleScrollLeft2" @handleScrollRight="handleScrollRight2"/>
				</div>
				<LevelTree class="story-line-tree common-card" @checkTreeChange="checkTreeChange" />
			</div>
			<div v-if="showLine" class="marking-line" :style="lineStyle" />
		</el-card>
	</div>
</template>

<script setup lang="ts">
import LevelTree from './LevelTree/index.vue'
import StoryLineChart from '@/components/StoryLineChart/index.vue'
import { MOCK_TREE1, MOCK_TREE2 } from '../mock/line'
import { ref, onMounted } from "vue";
onMounted(() => {
	selectChartData(MOCK_TREE1)
	selectChartData1(MOCK_TREE2)
});
const chartConfig = ref<Array<any>>([]);
const chartConfig1 = ref<Array<any>>([]);
const showLine = ref(false)
const storyLineList = ref(null)
const lineStyle = reactive({
	height: 0,
	left: 0,
	top: 0
})
const selectChartData = (data) => {
	chartConfig.value = []
	data.forEach(item => {
		const children: any[] = item.children || []
		// 泳道校验
		if (item.type == 'level2' || item.type == 'level3') {
			const config = { assayName: 'Assay A', chartData: children }
			chartConfig.value.push(config)
		} else {
			if (item.type == 'level1') {
				const config = { horizontal: true, chartData: children }
				chartConfig.value.push(config)
			} else {
				const config = { chartData: children }
				chartConfig.value.push(config)
			}
		}
	})
}
const selectChartData1 = (data) => {
	chartConfig1.value = []
	data.forEach(item => {
		const children: any[] = item.children || []
		// 泳道校验
		if (item.type == 'level2' || item.type == 'level3') {
			const config = { assayName: 'Assay A', chartData: children }
			chartConfig1.value.push(config)
		} else {
			if (item.type == 'level1') {
				const config = { horizontal: true, chartData: children }
				chartConfig1.value.push(config)
			} else {
				const config = { chartData: children }
				chartConfig1.value.push(config)
			}
		}
	})
}
const oneLine = ref(null)
const twoLine = ref(null)
const storyLineChart1 = ref(null)
const storyLineChart2 = ref(null)
const checkTreeChange = (data) => {
	if (data.length > 1) {
		selectLine()
	} else {
		showLine.value = false
	}
}
const handleClickMenu = (val) => {
	oneLine.value.handleClickMenu(val)
	twoLine.value.handleClickMenu(val)
}
const handleScrollLeft1 = (val) => {
	// twoLine.value.handleScrollLeft('', val)
}
const handleScrollLeft2 = (val) => {
	// oneLine.value.handleScrollLeft('', val)
}
const handleScrollRight1 = (val) => {
	// twoLine.value.handleScrollRight('', val)
}
const handleScrollRight2 = (val) => {
	// oneLine.value.handleScrollRight('', val)
}
const selectLine = () => {
	const height = storyLineList.value.getBoundingClientRect().height
	const top = storyLineList.value.getBoundingClientRect().top
	const elements = document.querySelector('[dot-code="level1-7"]')
	const elementLeft = elements.getBoundingClientRect().left
	// const StudyA1Top = document.querySelector('#StudyA1').querySelector('.time-axis').getBoundingClientRect().top
	// const StudyB1Bottom = document.querySelector('#StudyB1').getBoundingClientRect().bottom
	// const height = StudyB1Bottom - StudyA1Top
	lineStyle.height = height + 'px'
	lineStyle.left = elementLeft + 9 + 'px'
	lineStyle.top = top + 'px'
	showLine.value = true
}
</script>

<style lang="scss" scoped>
.marking-line{
	position: fixed;
	left: 0;
	top: 0;
	height: 0;
	width: 0;
	border-left: 1px dashed red;
	z-index: 9999;
}
.study-line-container {
	height: 100%;
	overflow: hidden;
	:deep(.el-card) {
		overflow: hidden;
    height: 100%;
	}
	:deep(.el-card__body) {
		overflow: hidden;
    height: 100%;
	}
	.story-line {
		display: flex;
		margin-top: 18px;
		margin-bottom: 18px;
		gap: 20px;
		max-height: 1500px;
		padding-right: 5px;
		width: 100%;
		height: 100%;
    overflow: hidden;
		.story-line-list{
			display: flex;
			flex-direction: column;
			flex: 1;
			width: calc(100% - 380px);
			gap: 50px;
			height: 100%;
    	overflow: hidden;
			.story-line-chart {
				flex: 1;
				padding: 15px 10px;
				overflow-y: auto;
			}
	
		}
		
		.story-line-tree.common-card {
			width: 360px;
			padding: 15px 10px;
			overflow: auto;
		}
	}

}
</style>
