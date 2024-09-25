<template>
	<div ref="storyLineChart" class="story-line-chart common-card" :class="{ isFullscreen: isFullscreen }">
		<div v-if="showHeader" class="story-line-header">
			<div class="title">{{ title }}</div>
			<div class="operation">
				<div class="left-box">
					<div class="color-box" v-for="item in statusColorArr">
						<span class="color" :style="{ background: item.color }" />
						<span class="label">{{ item.label }}</span>
					</div>
					<div class="color-box" v-for="item in levelConfig">
						<span class="color" :style="{ background: item.color }" />
						<span class="label">{{ item.type }}</span>
					</div>
				</div>
				<div class="right-box">
					<div class="flex-center">
						<div class="swtich-text">{{ isActive == 'ALL' ? 'All year' : 'One Year' }}</div>
						<el-switch v-model="isActive" active-value="ALL" inactive-value="Switch" @change="handleClickMenu(isActive)" />
					</div>
					<!--全屏 -->
					<ScreenLayout v-if="!hideFullScreen" :domId="domId" @handleScreenFull="handleScreenFull" />
				</div>
			</div>
		</div>
		<div class="chart-layout">
			<el-icon v-if="isActive == 'Switch' && showCarouselButton" class="leftbtn" @click="handleScrollLeft">
				<ArrowLeftBold />
			</el-icon>
			<el-icon v-if="isActive == 'Switch' && showCarouselButton" class="rightbtn" @click="handleScrollRight">
				<ArrowRightBold />
			</el-icon>
			<div ref="storyLineScroll" class="story-line-scroll" :class="{ isAll: isActive == 'ALL' }">
				<div class="story-line-content" :style="{ width: stepConfig.boxWidth ? `${stepConfig.boxWidth}px` : '' }">
					<div class="time-axis-menu">
						<TimeAxis :yearType="isActive" :stepConfig="stepConfig" :yearList="currentYearList" />
					</div>
					<div v-if="showChart" class="story-chart-box">
						<template v-if="chartConfig.length">
							<div v-for="(config, index) in chartConfig" class="story-chart-item">
								<div	
									v-if="Array.isArray(config.chartData) && config.chartData.length"
									class="labelName"
									v-html="config.labelName"
								/>
								<StroryChart
									v-if="Array.isArray(config.chartData) && config.chartData.length"
									:stepConfig="stepConfig"
									:yearType="isActive"
									:config="config"
									:domId="domId"
									:isZoomActive="isZoomActive"
									:isDisabled="isDisabled"
								/>
							</div>
						</template>
						<div class="no-chart-data" v-else>
							no data
						</div>
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
import { statusColorArr, levelConfig } from './common'
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
		type: Array as any,
		default: () => {
			return []
		}
	},
	domId: {
		type: String,
		default: ""
	},
	// disabled高亮时是否置灰其他点
	activeType: {
		type: String,
		default: ""
	},
	isDisabled: {
		type: Boolean,
		default: false
	},
	hideFullScreen: {
		type: Boolean,
		default: false
	},
	// 是否放大active的点
	isZoomActive: {
		type: Boolean,
		default: true
	},
	showHeader: {
		type: Boolean,
		default: true
	},
	showCarouselButton: {
		type: Boolean,
		default: true
	}
});
const emits = defineEmits(['handleScreenFull', 'handleResize', 'handleClickMenu', 'handleScrollRight', 'handleScrollLeft'])
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
let observer: any;

onMounted(() => {
	// 查询所有年份
	for (let index = yearCount - 1; index >= 0; index--) {
		allYear.value.push(thisYear - index)
	}
	getMonthsAndYearAll()
	createObserver()
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	if (observer) {
    observer.disconnect();
  }
	window.removeEventListener('resize', handleResize);
})

const createObserver = () => {
  observer = new ResizeObserver((entries) => {
		for (const entry of entries) {
			handleResize()
		}
  });
 
  observer.observe(storyLineChart.value);
}
/**
 * 尺寸变化更新图表
 */
const handleResize = () => {
	init()
}
/**
 * 切换时间轴类型
 */
const handleClickMenu: any = (val: string) => {
	isActive.value = val
	emits('handleClickMenu', val)
	init()
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
		const padding = 0 // isFullscreen.value ? 42 : 22
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

const handleScrollLeft: any = () => {
	const width = storyLineScroll.value.scrollWidth / yearCount
	const scrollLeft = storyLineScroll.value.scrollLeft
	let move = scrollLeft - width
	// 解决多余留白问题
	scrollCount.value = (scrollCount.value - 1) > 0 ? scrollCount.value - 1 : 1
	if (scrollCount.value == 1) {
		move = 0
	}
	storyLineScroll.value.scrollTo({
		left: move, // 滚动的距离，根据需要调整
		behavior: 'smooth' // 平滑滚动
	});
	emits('handleScrollLeft', move)
}

const handleScrollRight:any = (isRight: any) => {
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
	storyLineScroll.value.scrollTo({
		left: move, // 滚动的距离，根据需要调整
		behavior: isMax ? 'auto' : 'smooth' // 平滑滚动
	});
	emits('handleScrollRight', move)
}

const handleDateScroll = (time: any) => {
	// const year
	// storyLineScroll.value.scrollTo({
	// 	left: move,
	// 	behavior: 'smooth' // 平滑滚动
	// });
}

const handleScroll = (move: any, isInit?: boolean) => {
	if (isInit) {
		storyLineScroll.value.scrollTo({
			left: 0,
			behavior: 'auto' // 平滑滚动
		});
	}
	nextTick(() => {
		storyLineScroll.value.scrollTo({
			left: move,
			behavior: 'smooth' // 平滑滚动
		});
	})
}
const handleLink = (link: any) => {
	window.open(link)
}
defineExpose({
	handleResize,
	handleScroll,
	handleDateScroll,
	handleClickMenu,
	handleScrollRight,
	handleScrollLeft
})
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
