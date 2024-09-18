<template>
	<div ref="storyLineChart" class="story-line-chart">
		<div class="story-line-header">
			<div class="menu">
				<el-button :class="{ isActive: isActive == 'Switch' }" @click="handleClickMenu('Switch')">One Year
				</el-button>
				<el-button :class="{ isActive: isActive == 'ALL' }" @click="handleClickMenu('ALL')">All Year</el-button>
			</div>
			<span class="title">{{ title }} Story Line</span>
			<div class="right-box">
				<div class="legend-box">
					<div class="legend" v-for="item in statusColorArr">
						<span class="label">{{ item.label }}</span>
						<span class="color" :style="{ background: item.color }" />
					</div>
				</div>
				<!--全屏 -->
				<div v-if="!hideFullScreen" class="nav-action-item">
					<ScreenLayout :domId="domId" @handleScreenFull="handleScreenFull" />
				</div>
			</div>
		</div>
		<div class="unit">unit: 1 unit = 1 month</div>
		<div class="chart-layout">
			<el-icon v-if="isActive == 'Switch'" class="leftbtn" @click="handleScrollLeft">
				<ArrowLeftBold />
			</el-icon>
			<el-icon v-if="isActive == 'Switch'" class="rightbtn" @click="handleScrollRight">
				<ArrowRightBold />
			</el-icon>
			<div ref="storyLineScroll" class="story-line-scroll" :class="{ isAll: isActive == 'ALL' }">
				<div class="story-line-content" :style="{ width: stepConfig.boxWidth ? `${stepConfig.boxWidth}px` : '' }">
					<div class="time-axis-menu">

						<TimeAxis :yearType="isActive" :stepConfig="stepConfig" :yearList="currentYearList" />

					</div>
					<div v-if="showChart" class="story-chart-box">
						<template v-for="(config, index) in chartConfig">
							<StroryChart v-if="Array.isArray(config.chartData) && config.chartData.length" class="story-chart-item" 
								:stepConfig="stepConfig" :yearType="isActive" :config="config" />
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TimeAxis from './TimeAxis.vue'
import StroryChart from './StroryChart.vue'
import ScreenLayout from '@/components/ScreenLayout.vue'
import { ref, onMounted, onUnmounted } from "vue";
import { statusColorArr } from './common'
interface Years {
	year: string | number;
	month: string | number;
}
const props = defineProps({
	title: {
		type: String,
		default: ""
	},
	chartConfig: {
		type: Array,
		default: () => {
			return []
		}
	},
	domId: {
		type: String,
		default: ""
	},
	hideFullScreen: {
		type: Boolean,
		default: false
	}
});
const emits = defineEmits(['handleScreenFull', 'handleClickMenu'])
import { defineExpose } from 'vue'
const stepConfig = reactive<any>({
	boxWidth: '',
	groupWidth: '',
	dateList: []
})
const storyLineScroll = ref<any>(null)
const storyLineChart = ref<any>(null)
const isFullscreen = ref<boolean>(false)
const showChart = ref(false)
const yearCount = 3
const scrollCount = ref(yearCount)
const thisYear = new Date().getFullYear()
const allYear = ref<Array<number>>([])
const allYearList = ref<Array<Array<Years>>>([]);
const currentYearList = ref<Array<Array<Years>>>([]);
const isActive = ref<string>('ALL') // Switch | ALL

onMounted(() => {
	// 查询所有年份
	for (let index = yearCount - 1; index >= 0; index--) {
		allYear.value.push(thisYear - index)
	}
	getMonthsAndYearAll()
	handleResize()
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	window.removeEventListener('resize', handleResize);
})
/**
 * 尺寸变化更新图表
 */
const handleResize = () => {
	init()
}
/**
 * 切换时间轴类型
 */
const handleClickMenu = (val: string) => {
	if (isActive.value !== val) {
		isActive.value = val
		emits('handleClickMenu', val)
		init()
	}
}
/**
 * 初始化
 */
const init = () => {
	showChart.value = false
	switchTimeAxis()
	nextTick(() => {
		calculationStepWidth()
		showChart.value = true
	})
	setTimeout(() => {
		handleScrollRight(true)
	}, 0);
}

/**
 * 选择当前时间轴
 */
const switchTimeAxis = () => {
	currentYearList.value = []
	if (isActive.value == 'Switch') {
		allYearList.value.forEach(arr => {
			const resultArr = groupByArray(arr)
			currentYearList.value.push(...resultArr)
		})
	} else {
		const result: any = []
		allYearList.value.forEach((arr: Array<any>) => {
			result.push(...arr)
		})
		currentYearList.value = [result]
	}
}

/**
 * 将现有时间轴拆成12个为一组
 */
const groupByArray = (arr: Array<Years>) => {
	const groupSize = 12
	const groupedArray = [];
	for (let i = 0; i < arr.length; i += groupSize) {
		groupedArray.push(arr.slice(i, i + groupSize));
	}
	return groupedArray;
}

/**
 * 获取全部年份的时间轴
 */
const getMonthsAndYearAll = () => {
	allYear.value.forEach(item => {
		const yearArr: Array<Years> = []
		for (let i = 0; i < 12; i++) {
			const date = new Date(item, i, 1);
			yearArr.push({
				year: date.getFullYear(),
				month: formatMonthDay(date.getMonth() + 1),
			})
		}
		allYearList.value.push(yearArr)
	})
}

/**
 * 格式化月份/天数显示
 */
const formatMonthDay = (val: any) => {
	return val >= 10 ? val : '0' + val
}
/**
 * 计算步长宽度
 */
const calculationStepWidth = () => {
	// 获取所有年份日期
	stepConfig.dateList = []
	allYear.value.forEach(year => {
		const dateList = getAllDatesInYear(year)
		stepConfig.dateList.push(...dateList)
	})
	if (storyLineChart.value) {
		const width = storyLineChart.value.getBoundingClientRect().width
		const padding = isFullscreen.value ? 40 : 20
		if (isActive.value == 'Switch') {
			stepConfig.boxWidth = ((width - padding) * yearCount)
			stepConfig.groupWidth = `${width - padding}`
			stepConfig.stepWidth = stepConfig.boxWidth / stepConfig.dateList.length
		} else {
			stepConfig.boxWidth = ''
			stepConfig.groupWidth = `${width - padding}`
			stepConfig.stepWidth = (width - padding) / stepConfig.dateList.length
		}
	}
}

/**
 * 获取指定年份所有日期
 */
const getAllDatesInYear = (year: any) => {
	let dates = [];
	for (let month = 0; month < 12; month++) {
		let numDays = new Date(year, month + 1, 0).getDate()
		for (let day = 1; day <= numDays; day++) {
			dates.push(`${year}-${formatMonthDay(month + 1)}-${formatMonthDay(day)}`)
		}
	}
	return dates
}

/**
 * 全屏展示
 */
const handleScreenFull = (val: any) => {
	isFullscreen.value = val
	emits('handleScreenFull', val)
	nextTick(() => {
		handleResize()
	})
}

const handleWheel = (event) => {
	console.log(event)
  // 阻止滚动事件
  event.preventDefault();
};

const handleScrollLeft = (isLeft, moveVal) => {
	let width = -(storyLineScroll.value.scrollWidth / yearCount)
	const isMax = typeof isRight == 'boolean' && isRight
	// 解决多余留白问题
	scrollCount.value = (scrollCount.value - 1) > 0 ? scrollCount.value - 1 : 1
	if (scrollCount.value == 1) {
		width = -99999
	}
	emits('handleScrollLeft', width)
	storyLineScroll.value.scrollBy({
		left: moveVal || width, // 滚动的距离，根据需要调整
		behavior: 'smooth' // 平滑滚动
	});
}

const handleScrollRight = (isRight, moveVal) => {
	const left = storyLineScroll.value.scrollLeft
	const width = storyLineScroll.value.scrollWidth / yearCount
	let move = Number(left) + Number(width)
	const isMax = typeof isRight == 'boolean' && isRight
	if (isMax) {
		move = 9999
		scrollCount.value = yearCount
	} else {
		// 解决多余留白问题
		scrollCount.value = (scrollCount.value + 1) < yearCount ? scrollCount.value + 1 : yearCount
		if (scrollCount.value == yearCount) {
			move = 99999
		}
	}
	emits('handleScrollRight', move)
	storyLineScroll.value.scrollBy({
		left: moveVal || move, // 滚动的距离，根据需要调整
		behavior: isMax ? 'auto' : 'smooth' // 平滑滚动
	});
}
const handleLink = (link) => {
	window.open(link)
}
defineExpose({
	handleClickMenu,
	handleScrollRight,
	handleScrollLeft
})
</script>
<style lang="scss" scoped>
.story-line-chart {
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	.story-line-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;

		.menu {
			flex: 1;
			font-size: 12px;
			display: flex;
			align-items: center;

			.el-button {
				border: 1px solid #dcdfe6;
				border-radius: 0;
				margin: 0;
				height: 28px;
				font-size: 12px;

				&.isActive {
					background: #20a6fc;
					color: #fff;
				}

				&:first-child {
					border-right: none;
				}
			}

			span {
				cursor: pointer;
			}

		}

		.title {
			font-size: 16px;
			font-weight: bold;
			text-align: center;
			flex: 1;
		}

		.right-box {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.legend-box {
				display: flex;
				align-items: center;
				margin-right: 20px;
			}

			.legend {
				display: flex;
				align-items: center;
				font-size: 12px;
				gap: 5px;
				margin-right: 5px;
				white-space: nowrap;
				.color {
					width: 30px;
					height: 12px;
				}
			}
		}
	}

	.unit {
		margin: 5px 0;
		font-size: 12px;
		color: red;
	}

	.time-axis-menu {
		position: relative;

	}

	.chart-layout {
		position: relative;
		flex: 1;
		border: 1px solid #000;
		.leftbtn,
		.rightbtn {
			cursor: pointer;
			height: 42px;
			width: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			background: rgba(0, 0, 0, 0.5);
			position: absolute;
			top: 0;
			z-index: 1;
		}

		.leftbtn {
			left: 0;
		}

		.rightbtn {
			right: 0;
		}
	}

	.story-line-scroll {
		padding-bottom: 20px;
		overflow: auto;
		position: relative;

		&.isAll {
			overflow: initial;
		}

		&::-webkit-scrollbar {
			width: 0;
			/* 设置滚动条的宽度 */
			height: 0;
		}
	}

	.story-chart-box {
		display: flex;
		flex-direction: column;
	}
}
</style>
