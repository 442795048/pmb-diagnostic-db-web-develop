<template>
	<div ref="storyChartDom" class="strory-chart"
		:class="{ isAssay: assayName, horizontal: horizontal, isAllYear: yearType == 'ALL' }">
		<div v-if="assayName" class="assayName">{{ assayName }}</div>
		<div v-if="dotData.length" class="dot-box">
			<div v-if="horizontal" class="horizontal" />
			<!-- 点图 -->
			<template v-for="row in dotData">
				<el-tooltip popper-class="strory-chart-tips" placement="bottom" effect="light" :append-to="storyChartDom">
					<div class="dot-item" :class="{ isActive: row.isActive, isTBD: row.isTBD }" :dot-code="row.code" :style="getStyle(row)">
						<div class="dot-item-desc">
							<div class="name">{{ row.srotName || row.label }}</div>
							<div v-if="!row.isTBD" class="date">{{ row.date }}<span v-if="row.isTBD">(TBD)</span></div>
						</div>
					</div>
					<template #content>
						<div class="tips-content">
							<div class="name">{{ row.label }}</div>
							<div v-if="!row.isTBD" class="date">{{ row.date }}<span v-if="row.isTBD">(TBD)</span></div>
							<div v-if="row.linkName" class="linkname" @click="handleLink(row.linkTo)">{{ row.linkName }}</div>
							<!-- 提示 -->
							<div v-if="row.options && row.options.length" class="tips-box">
								<div class="tips" v-for="tips in row.options">
									<div v-if="tips.isSplit" class="split-line" />
									<template v-else>
										<span class="tips-dot" />
										<span class="tips-label">{{ tips.label }}</span>
										<span>:</span>
										<span class="tips-value">{{ tips.value }}</span>
									</template>
								</div>
							</div>
						</div>
					</template>
				</el-tooltip>
			</template>
		</div>
		<!-- 柱状图 -->
		<template v-for="group in barData">
			<div class="bar-box">
				<template v-for="row in group">
					<el-tooltip popper-class="strory-chart-tips" placement="bottom" effect="light" :append-to="storyChartDom">
						<div class="bar-item" :class="{ isActive: row.isActive }" :style="getBarStyle(row)">
							<div class="dot-item-desc">
								<div class="name">{{ row.label }}</div>
								<div class="date">{{ row.startDate }} ~ {{ row.endDate }}</div>
							</div>
						</div>
						<template #content>
							<div class="tips-content">
								<div class="name">{{ row.label }}</div>
								<div class="date">{{ row.startDate }} ~ {{ row.endDate }}</div>
								<div v-if="row.linkName" class="linkname" @click="handleLink(row.linkTo)">{{ row.linkName }}</div>
								<!-- 提示 -->
								<div v-if="row.options && row.options.length" class="tips-box">
									<div class="tips" v-for="tips in row.options">
										<div v-if="row.isSplit" class="split-line" />
										<template v-else>
											<span class="tips-dot" />
											<span class="tips-label">{{ tips.label }}</span>
											<span>:</span>
											<span class="tips-value">{{ tips.value }}</span>
										</template>
									</div>
								</div>
							</div>
						</template>
					</el-tooltip>
				</template>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { statusColorArr } from './common'
import { groupBy } from "lodash"
const props = defineProps({
	stepConfig: {
		type: Object as any,
		default: () => {
			return {}
		}
	},
	config: {
		type: Object as any,
		default: () => {
			return {}
		}
	},
	yearType: {
		type: String,
		default: ''
	}
});

// 是否是泳道
const assayName = computed(() => {
	return props.config.assayName
})
// 是否展示横线
const horizontal = computed(() => {
	return props.config.horizontal
})
// 点数据展示
const dotData = computed(() => {
	const data = props.config.chartData.filter((f: any) => !f.startDate && !f.endDate && !f.hide)
	const dotDate: any = []
	const tbdData: any = []
	data.forEach((item: any) => {
		const colorObj = statusColorArr.find((fi: any) => fi.code == item.status)
		if (colorObj) {
			item.color = colorObj.color
		}
		if (item.date && item.date !== 'TBD') {
			dotDate.push(item)
		} else {
			tbdData.push({ ...item, isTBD: true })
		}
	})
	// TBD 用虚线球表示，并且平分剩余的时间位置
	// 获取最大时间
	let maxDateTime = 0
	let maxDate = ''
	for (let i = 1; i < dotDate.length; i++) {
		const currentDateTime = new Date(dotDate[i].date).getTime()
		if (currentDateTime >= maxDateTime) {
			maxDateTime = currentDateTime
			maxDate = dotDate[i].date
		}
	}
	// 截取剩余时间
	if (tbdData.length) {
		const yearList = props.stepConfig.dateList || []
		const startIndex = yearList.findIndex((date: any) => date == maxDate)
		if (startIndex >= 0) {
			const yearSliceList = yearList.slice(startIndex, yearList.length - 1)
			const average = Math.floor(yearSliceList.length / tbdData.length)
			tbdData.forEach((item: any, index: number) => {
				item.date = yearSliceList[index * average + Math.floor(average / 2)]
				item.isTBD = true
			})
		}
	}
	return dotDate.concat(tbdData)
})
// 柱数据展示
const barData = computed(() => {
	const data = props.config.chartData.filter((f: any) => f.startDate && f.endDate && !f.hide)
	// 更新rowNumber判断是否在一行显示
	const barList = data.map((item: any, index: number) => {
		let rowNumber = 1
		if (index != 0) {
			const lastRowNumber = data[index - 1].rowNumber || 1
			rowNumber = getBarRowNumber(data, item, lastRowNumber)
			data[index].rowNumber = rowNumber
		}
		const colorObj = statusColorArr.find((fi: any) => fi.code == item.status)
		return {
			...item,
			color: colorObj ? colorObj.color : item.color,
			rowNumber
		}
	})
	// 根据rowNumber分组
	const barGroup = groupBy(barList, 'rowNumber')
	return Object.keys(barGroup).map(key => {
		return barGroup[key]
	})
})

const emits = defineEmits(['handleShowSubmit'])
const storyChartDom = ref<any>(null)

const getStyle = (row: any) => {
	return {
		background: hexToRgba(row.color, 1),
		left: `${getOffsetAmount(row, row.date)}px`,
		// boxShadow: `0px 0px 1px 2px ${hexToRgba(row.color, 1)};`
	}
}
const getBarStyle = (row: any) => {
	return {
		background: hexToRgba(row.color, 1),
		left: `${getOffsetAmount(row, row.startDate)}px`,
		width: `${getOffsetAmount(row, row.endDate) - getOffsetAmount(row, row.startDate)}px`,
		// boxShadow: `0px 0px 1px 2px ${hexToRgba(row.color, 1)};`
	}
}
/**
 * 查询偏移量
 */
const getOffsetAmount = (row: any, date: any) => {
	if (props.stepConfig) {
		const yearList = props.stepConfig.dateList
		const width = props.stepConfig.stepWidth
		const buffer = props.yearType == 'ALL' ? (row.isActive ? 6 : 9) : (row.isActive ? 11 : 7)
		let yearIndex = 0
		if (date) {
			yearIndex = yearList.findIndex((item: any) => item === date) + 1
		}
		return yearIndex * width - buffer > 0 ? yearIndex * width - buffer : 0
	}
	return 0
}

/**
 * 颜色转换
 */
const hexToRgba = (hex: any, alpha: any) => {
	let r: any = 0, g: any = 0, b: any = 0;
	r = "0x" + hex[1] + hex[2];
	g = "0x" + hex[3] + hex[4];
	b = "0x" + hex[5] + hex[6];
	return "rgba(" + +r + "," + +g + "," + +b + "," + alpha + ")";
}

/**
 * 获取bar时间轴是否重合，判断第几行显示
 */
const getBarRowNumber = (data: any, row: any, lastRowNumber: any) => {
	let rowNumber: number = lastRowNumber
	for (let index = 0; index < data.length; index++) {
		const item = data[index];
		if (isOverlapping(row.startDate, row.endDate, item.startDate, item.endDate) && row.code !== item.code) {
			rowNumber++
			break;
		}
	}
	return rowNumber
}

/**
 * 判断两个时间段是否有重合
 */
const isOverlapping = (startDate1: any, endDate1: any, startDate2: any, endDate2: any) => {
	// 将输入转换为日期对象
	const start1 = new Date(startDate1);
	const end1 = new Date(endDate1);
	const start2 = new Date(startDate2);
	const end2 = new Date(endDate2);
	// 判断时间段是否重合
	return start1 < end2 && end1 > start2;
}

const getDescStyle = (el) => {
}

onMounted(() => {
});
const handleLink = (link) => {
	window.open(link)
}
</script>
<style lang="scss" scoped>
.strory-chart {
	border: 1px solid #fff;
	position: relative;
	border-bottom: 1px dashed #000;
	&:first-child {
		border-bottom: 1px solid #fff;
	}
	&.isAllYear {
		.dot-box .dot-item {
			width: 12px;
			height: 12px;

			&.isActive {
				width: 18px;
				height: 18px;
			}
		}
		.dot-item-desc{
			font-size: 12px;
			transform: scale(0.8) translateX(-50%);
			transform-origin: left top;
		}
		.bar-box .bar-item {
			height: 12px;
		}
	}
	.linkname{
		cursor: pointer;
		color: #20a6fc;
	}
	.dot-box {
		position: relative;
		height: 40px;
		margin-bottom: 30px;
		.horizontal {
			height: 1.5px;
			width: 100%;
			position: absolute;
			left: 0;
			top: 50%;
			background: #000;
			transform: translateY(-50%);
		}

		.dot-item {
			cursor: pointer;
			width: 16px;
			height: 16px;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			border-radius: 50%;
			z-index: 1;
			
			&.isActive {
				width: 24px;
				height: 24px;
			}

			&.isTBD {
				background: #a8abb2 !important;
				border: 1px solid #606266;
			}
		}
	}

	.bar-box {
		position: relative;
		height: 40px;
		margin-bottom: 30px;

		.bar-item {
			cursor: pointer;
			height: 18px;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			z-index: 1;
		}
	}
	.dot-item-desc{
		position: absolute;
		bottom: -28px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		font-size: 12px;
		white-space: nowrap;
		line-height: 1;
		text-align: center;
	}
	&.isAssay {
		background: #f9f9f9;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
		margin-bottom: 20px;
		padding: 20px 0;
	}

	&.horizontal {
		padding: 20px 0;
	}

	.assayName {
		position: absolute;
		left: 10px;
		top: 10px;
		z-index: 0;
	}
}
</style>
<style lang="scss">
.strory-chart-tips {
	z-index: 9999;

	.tips-box {
		margin-top: 8px;
		border-top: 1px dashed #4a4a4a;
		padding-top: 10px;
	}
	.split-line{
		border-top: 1px dashed #4a4a4a;
		height: 0;
		margin: 8px 0;
		width: 100%;
	}
	.tips {
		display: flex;
		align-items: center;
		gap: 3px;
		position: relative;

		.tips-dot {
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background: #4a4a4a;
			margin-right: 3px;
		}
	}
}
</style>