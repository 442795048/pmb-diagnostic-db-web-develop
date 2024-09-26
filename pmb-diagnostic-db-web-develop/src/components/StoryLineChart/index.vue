<template>
	<div ref="storyLineChartRef" class="story-line-chart common-card" :class="{ isFullscreen: isFullscreen }">
		<div class="story-line-header">
			<div class="title" v-html="title" />
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
					<el-icon v-show="chartList.length && isActive == 'Switch'" class="chart-refresh-icon" @click="resetScroll()"><Refresh /></el-icon>
					<!--全屏 -->
					<ScreenLayout v-if="!hideFullScreen" :domId="domId" @handleScreenFull="handleScreenFull" />
				</div>
			</div>
		</div>
		<div class="chart-layout-scroll">
			<div class="chart-layout" :class="{ isAllYear: isActive == 'ALL' }" :style="layoutStyle">
				<template v-for="(chart, index) in chartList">
					<el-icon
						v-if="index == 0 && getShowSwitchBtn(chart.stepConfig)"
						class="leftbtn"
						@click="handleScrollLeft()"
						@mousedown="handleMouseDownLeft(chart.stepConfig)"
						@mouseup="handleMouseUp"
					>
						<ArrowLeftBold />
					</el-icon>
					<el-icon
						v-if="index == 0 && getShowSwitchBtn(chart.stepConfig)"
						class="rightbtn"
						@click="handleScrollRight()"
						@mousedown="handleMouseDownRight(chart.stepConfig)"
						@mouseup="handleMouseUp"
					>
						<ArrowRightBold />
					</el-icon>
				</template>
				<div
					ref="chartLayoutContentRef"
					class="chart-layout-content"
					:style="{
						left: `${layoutContentStyle.left}px`
					}"
				>
				<div v-if="showMarkLine" class="marking-line" :style="{ left: `${markLineStyle.left}px`}" />
					<template v-if="showChart">
						<div
							class="chart-layout-box"
							v-for="chart in chartList"
							:style="{
								left: showMarkLine ? `${chart.stepConfig?.left}px` : '0px'
							}"
						>
							<TimeAxis :yearType="isActive" :stepConfig="chart.stepConfig" />
							<div class="story-chart-box">
								<div v-for="(config, index) in chart.list" class="story-chart-item">
									<StroryChart
										v-if="Array.isArray(config.chartData) && config.chartData.length"
										:stepConfig="chart.stepConfig"
										:yearType="isActive"
										:config="config"
										:domId="domId"
										:isZoomActive="isZoomActive"
										:isDisabled="isDisabled"
									/>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TimeAxis from './TimeAxis.vue'
import StroryChart from './StroryChart.vue'
import ScreenLayout from '@/components/ScreenLayout.vue'
import { ref, onMounted, onUnmounted, watch } from "vue";
import { statusColorArr, levelConfig } from './common'
import { getSpecifyMonths } from '@/utils/date'
import moment from 'moment'
interface Years {
	year: string | number;
	month: string | number;
}
const props = defineProps({
	title: {
		type: String as any,
		default: ""
	},
	chartList: {
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
	showMarkLine: {
		type: Boolean,
		default: false
	},
	markLineId: {
		type: String,
		default: ''
	}
});
const emits = defineEmits(['handleScreenFull', 'handleResize', 'handleClickMenu', 'handleScrollRight', 'handleScrollLeft'])
import { defineExpose } from 'vue'
const storyLineChartRef = ref<any>(null)
const chartLayoutContentRef = ref<any>(null)
const isFullscreen = ref<boolean>(false)
const showChart = ref<boolean>(false)
const scrollInterval = ref<any>(null)
const scrollTimeout = ref<any>(null)
const markLineStyle = ref({
	left: 0
})
const moveIndex = ref(0)
const isActive = ref<string>('ALL') // Switch | ALL
const layoutStyle = ref<any>({
	height: 0
})
const layoutContentStyle = ref<any>({
	left: 0
})
let observer: any;
onMounted(() => {
	initChartListConfig()
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
			if (entry.target.className == 'chart-layout-content') {
				layoutStyle.value.height = `${entry.contentRect.height}px`
			}
		}
  });
 
  observer.observe(storyLineChartRef.value);
	observer.observe(chartLayoutContentRef.value);
}


/**
 * 控制显示切换按钮
 */
const getShowSwitchBtn = (stepConfig: any) => {
	// const stepConfig = props.chartList[0]?.stepConfig || {}
	return isActive.value == 'Switch' && stepConfig?.timeAxis.length > 12
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
	init()
}
/**
 * 初始化
 */
const init = () => {
	reset()
	showChart.value = false
	nextTick(() => {
		initChartListConfig()
		resetScroll()
		showChart.value = true
	})
	setTimeout(() => {
		updateMarkLine()
	})
}

/**
 * 初始化滚动条
 */
const resetScroll = (date?: any) => {
	// 如果多轴显示，默认移动到第一个轴的原初始时间
	if (props.chartList.length && props.chartList[0] && isActive.value == 'Switch' ) {
		const buffer = 1
		moveIndex.value = 0
		let targetDate = ''
		const stepConfig = props.chartList[0].stepConfig
		if (date) {
			targetDate = date
		} else {
			const initialTimeAxis = stepConfig.initialTimeAxis
			targetDate = `${initialTimeAxis[0].year}-${initialTimeAxis[0].month}`
		}
		const timeAxis = stepConfig.timeAxis
		// let allStepWidth = 0
		for (let index = 0; index < timeAxis.length; index++) {
			const item = timeAxis[index];
			const cmpDate = `${item.year}-${item.month}`
			if (targetDate == cmpDate) {
				break;
			}
			moveIndex.value = moveIndex.value + 1
			// allStepWidth = allStepWidth + item.allDay.length * stepConfig.stepWidth 
		}
		// 留出1格的buffer
		moveIndex.value = moveIndex.value - buffer
		handleScrollRight()
	}
}

const reset = () => {
	layoutContentStyle.value.left = 0
	moveIndex.value = 0
}

/**
 * 初始化图表配置
 */
const initChartListConfig = () => {
	props.chartList.forEach((config: any, index: number) => {
		// 获取开始和结束时间
		const maxDay = getMinMaxDay().maxDate
		const minDay = getMinMaxDay().minDate
		let firstDay = getFirstDayOfMonth(minDay)
		let lastDay = getLastDayOfMonth(maxDay)
		// 获取显示的月份时间轴
		let timeAxis = getMonthsAndYearAll(firstDay, lastDay)
		// 获取原始轴的月份时间轴
		const initialFristDay = getFirstDayOfMonth(config.date[0])
		const initialLastDay = getLastDayOfMonth(config.date[1])
		let initialTimeAxis = getMonthsAndYearAll(initialFristDay, initialLastDay)
		// 若多轴并且为切换模式，则更新显示轴
		if (props.chartList.length > 1 && isActive.value == 'Switch') {
			let switchTimeAxis = getSwitchTimeAxis(timeAxis)
			timeAxis = switchTimeAxis.dateList
			firstDay = switchTimeAxis.startDate
			lastDay = switchTimeAxis.endDate
		}
		// 获取全部时间
		const dateList =  getAllDatesInYear(firstDay, lastDay)
		// 获取步长
		const stepWidth = getStepWidth(firstDay, lastDay, timeAxis, dateList)

		// 若获多图情况月份轴小于12个月，则补全
		// if (props.chartList.length > 1) {
			// const lastTimeAxis = timeAxis[timeAxis.length - 1]
			// const count = 12 - timeAxis.length
			// const addEndDate = new Date(lastTimeAxis.year, lastTimeAxis.month + count - 1, 1)
			// const addLastDay = moment(addEndDate).endOf('month').format('YYYY-MM-DD');
			// timeAxis = getMonthsAndYearAll(firstDay, addLastDay)
			// switchTimeAxis = getSwitchTimeAxis(timeAxis)
		// }
		
		config.stepConfig = {
			timeAxis,
			stepWidth,
			dateList,
			initialTimeAxis,
			$index: index,
			initialDate: config.date
		}
	})
}

/**
 * 获取switch的加长时间轴
 * 前后各数10年
 */
const getSwitchTimeAxis = (timeAxis: any) => {
	const mouthCount = 5 * 12
	const startDate = timeAxis[0].allDay[0]
	const endDateAxis = timeAxis[timeAxis.length - 1]
	const endDate = endDateAxis.allDay[endDateAxis.allDay.length - 1]
	const beforeStartDate = getSpecifyMonths(startDate, mouthCount).before()
	const afterEndDate = getSpecifyMonths(endDate, mouthCount).after()
	const allYear =  getMonthsAndYearAll(beforeStartDate, afterEndDate)
	return {
		dateList: allYear,
		startDate: beforeStartDate,
		endDate: afterEndDate
	}
}

const getMinMaxDay = () => {
	const dates: any = []
	props.chartList.forEach((item: any) => {
		dates.push(...item.date)
	})
	let maxDate = Math.max(...dates.map((date: any) => moment(date).valueOf()));
	let minDate = Math.min(...dates.map((date: any) => moment(date).valueOf()));
	return {
		maxDate: moment(maxDate).format('YYYY-MM-DD'),
		minDate: moment(minDate).format('YYYY-MM-DD')
	}
}
/**
 * 动态获取时间轴
 */
const getMonthsAndYearAll = (startDate: any, endDate: any) => {
	const timeAxis = []
  let current = new Date(new Date(startDate).getFullYear(), new Date(startDate).getMonth());
  while (current <= new Date(endDate)) {
		const firstDay = getFirstDayOfMonth(current)
		const lastDay = getLastDayOfMonth(current)
		const year = new Date(current).getFullYear()
		const month = formatMonthDay(new Date(current).getMonth() + 1)
		const allDay = getAllDatesInYear(firstDay, lastDay)
    timeAxis.push({
			year: year,
			month: month,
			date: `${year}-${month}`,
			allDay,
			moveIndex: timeAxis.length + 1
		});
    current.setMonth(current.getMonth() + 1);
  }
	return timeAxis
}
/**
 * 获取指定月份第一天
 */
const getFirstDayOfMonth = (time: any) => {
  return moment(time).startOf('month').format('YYYY-MM-DD');
}
/**
 * 获取指定月份最后一天
 */
const getLastDayOfMonth = (time: any) => {
  return moment(time).endOf('month').format('YYYY-MM-DD');
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
const getStepWidth = (startDate: any, endDate: any, timeAxis: any, dateList: any) => {
	// 获取所有年份日期
	let stepWidth = 0 
	if (storyLineChartRef.value) {
		if (isActive.value == 'Switch') {
			const divWidth = storyLineChartRef.value.getBoundingClientRect().width
			// 若总月份大于12则整个轴按12计算一个轴的周期计算步长
			if (timeAxis.length >= 12) {
				// const dateArr = timeAxis.slice(0, 12)
				// const allDate12 = []
				// dateArr.forEach((item: any) => {
				// 	allDate12.push(...item.allDay)
				// })
				stepWidth = divWidth / 366
			} else {
				stepWidth = divWidth / dateList.length
			}
		} else {
			const divWidth = storyLineChartRef.value.getBoundingClientRect().width
		  stepWidth = divWidth / dateList.length
		}
	}
	return stepWidth
}
/**
 * 获取指定年份所有日期
 */
const getAllDatesInYear = (startDate: any, endDate: any) => {
	let dates = [];
	let currentDate = new Date(startDate);
	let currentEndDate = new Date(endDate)
	while (currentDate <= currentEndDate) {
		dates.push(moment(new Date(currentDate)).format("YYYY-MM-DD"));
		currentDate.setDate(currentDate.getDate() + 1);
	}
  return dates;
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

const handleMouseDownLeft = (stepConfig: any) => {
	scrollTimeout.value = setTimeout(() => {
		scrollInterval.value = setInterval(() => {
			handleScrollLeft(stepConfig)
		}, 100);
	}, 1000)
}

const handleMouseDownRight = (stepConfig: any) => {
	scrollTimeout.value = setTimeout(() => {
		scrollInterval.value = setInterval(() => {
			handleScrollRight(stepConfig)
		}, 100);
	}, 1000)
}
const handleMouseUp = () => {
	clearInterval(scrollInterval.value)
	clearTimeout(scrollTimeout.value)
}

const handleScrollLeft: any = (stepConfig: any, move?: any) => {
	if (moveIndex.value <= 0) {
		return
	} else {
		moveIndex.value = moveIndex.value -1 > 0 ? moveIndex.value -1 : 0
		handleScrollAxis()
	}
}

const handleScrollRight:any = (stepConfig: any, move?: any) => {
	const chartRow = props.chartList[0]
	if (moveIndex.value >= chartRow.stepConfig.timeAxis.length - 12) {
		return
	} else {
		moveIndex.value = moveIndex.value + 1
		handleScrollAxis()
	}
}

const handleScrollAxis = () => {
	const chartRow = props.chartList[0]
	if (chartRow) {
		const timeAxis = chartRow.stepConfig?.timeAxis || []
		let moveWidth = 0
		for (let index = 0; index < timeAxis.length; index++) {
			if (moveIndex.value == index) {
				break;
			}
			const item = timeAxis[index];
			const allDay = item.allDay
			const stepWidth = allDay.length * chartRow.stepConfig.stepWidth
			moveWidth = moveWidth + stepWidth
		}
		layoutContentStyle.value.left = -moveWidth
	}
}
/**
 * 更新markLine的显示
 */
const updateMarkLine = () => {
	if (!props.showMarkLine) return
	const elements: any = document.querySelectorAll(`[dot-code="${props.markLineId}"]`)

	if (elements && elements.length) {
		const elementLeft = elements[0].style.left
		markLineStyle.value.left = elementLeft.replace('px', '')
		// const chartRow = props.chartList[elIndex]
		if (isActive.value == 'Switch') {
			// 将高亮点移动到可视位置
			const el0Index = elements[0].getAttribute('dot-index')
			const el0MoveIndex = elements[0].getAttribute('dot-move-index')
			const chart0Row = props.chartList[el0Index]
			if (chart0Row) {
				// 判断轴是否在可视范围内
				const buffer = 10
				const left = -chartLayoutContentRef.value.style.left.replace(/px/, '') - buffer
				const width: any = document.querySelector('.chart-layout')?.getBoundingClientRect().width
				const right = left + width + buffer
				if (markLineStyle.value.left > left && markLineStyle.value.left < right) {
					if (chart0Row.stepConfig.$index == el0Index) {
						const elLeft = Number(elements[0].style.left.replace('px', ''))
						chart0Row.stepConfig.left = markLineStyle.value.left - elLeft
					}
				} else {
					// 增加4个月份的buffer
					const buffer = 4
					moveIndex.value = Number(el0MoveIndex) - buffer
					handleScrollRight()
				}
			}
			// 对其除了首个轴的所有轴
			setTimeout(() => {
				elements.forEach((el: any) => {
					const elIndex = el.getAttribute('dot-index')
					if (elIndex !== 1) {
						const chartRow = props.chartList[elIndex]
						if (chartRow && chartRow.stepConfig.$index == elIndex) {
							const elLeft = Number(el.style.left.replace('px', ''))
							chartRow.stepConfig.left = markLineStyle.value.left - elLeft
						}
					}
				})
			}, 0)
		}
	}
}

watch(() => props.showMarkLine, (val) => {
	if (val) {
		updateMarkLine()
	}
})
defineExpose({
	handleResize,
	handleClickMenu,
	handleScrollRight,
	handleScrollLeft
})
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
.marking-line{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 10px;
	// border-left: 1px solid #000;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
	z-index: 100;
}
.chart-refresh-icon{
	cursor: pointer;
}
</style>
