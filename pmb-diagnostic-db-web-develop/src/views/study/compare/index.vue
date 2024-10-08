<template>
	<div class="study-line-compare" >
		<el-card shadow="never">
			<div class="compare-layout" :class="{ isShowTree }" id="compareStoryLineDomId">
				<div class="compare-layout-chart">
					<!-- 图表 -->
					<StoryLineChart
						ref="storyLineChartRef"
						:title="compareTitle"
						domId="compareStoryLineDomId"
						:showMarkLine="showMarkLine"
						:markLineId="markLineId"
						:chartList="chartList"
						:durationType="durationType"
						:isDisabled="disabledStoryLine"
						:isZoomActive="false"
					/>
					<!-- <div v-if="showLine" class="marking-line" :style="{ left: `${lineStyle.left}px`, height: `${lineStyle.height}px`}" /> -->
				</div>
				<div class="story-line-tree" :class="{ 'common-card': isShowTree }">
					<div class="common-expand-icon">
						<el-icon v-if="isShowTree" @click="isShowTree = false"><DArrowRight /></el-icon>
						<el-icon v-else @click="isShowTree = true"><DArrowLeft /></el-icon>
					</div>
					<div v-show="isShowTree" class="select-list">
						<div class="select-item">
							<div class="label">Leve2</div>
							<MySelect v-model="assaySelect2" multiple collapse-tags :options="assaySelectList2" @change="changeTreeSelect"/>
						</div>
						<div class="select-item">
							<div class="label">Leve3</div>
							<MySelect v-model="assaySelect3" multiple collapse-tags :options="assaySelectList3" @change="changeTreeSelect"/>
						</div>
					</div>
					<div v-show="isShowTree" class="story-line-tree-scroll">
						<LevelTree @checkTreeChange="checkTreeChange" />
					</div>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import LevelTree from './LevelTree/index.vue'
import { ref, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
import CompareAPI from "@/api/compare";
import { levelConfig } from '@/components/StoryLineChart/common'
import { sortNameConfig } from '@/views/study/common/line'
import { getSpecifyMonths } from '@/utils/date'
const route = useRoute();

const defaultChartList = ref<any>([])
const chartList = ref<any>([])
const compareTitle = ref('')
const storyLineChartRef: any = ref(null)
const durationType = ref('')
const markLineId = ref('')
const showMarkLine = ref(false)
const isShowTree = ref<any>(true)
const selectTreeData = ref<any>([])
const assaySelectList2 = ref<any>([])
const assaySelect2 = ref<any>([])
const assaySelectList3 = ref<any>([])
const assaySelect3 = ref<any>([])

onMounted(() => {
	initChartData()
});

const disabledStoryLine = computed(() => {
	const selectChild = selectTreeData.value.filter((fi: any) => fi.isChild)
	return selectChild.length
})

/**
 * 初始化图表数据
 */
const initChartData = () => {
	const studyNames: any = route.query.studyNames || ''
	const params = { studyNames: studyNames }
	compareTitle.value = studyNames.replace(/\,/g, '<span style="color:#9DB0AC;font-size: 14px;margin:0 5px;">VS</span>')
	CompareAPI.getCompareInfo(params).then((res)=> {
		getCharAllData(res)
		// 默认展示leve1的数据
		checkTreeChange()
	})
}
/**
 * 更新chart图的显示默认数组
 */
const initChartList = (level1Datas: any, createDate: any) => {
	// 更新chart数据最大时间最小时间
	const obj = { date: <any>[], list: [] }
	const PH3ID = level1Datas.find((item: any) => item.name == 'Pre-PH3ID')
	const NDAA = level1Datas.find((item: any) => item.name == 'NDA-A')
	const startDate = PH3ID?.startDate
	const endDate = NDAA?.startDate
	if (startDate && endDate) {
		obj.date = [startDate, endDate]
	} else {
		if (startDate) {
		  const date = getSpecifyMonths(startDate, 12).after()
			obj.date = [startDate, date]
		} else if (endDate) {
			const date = getSpecifyMonths(startDate, 12).before()
			obj.date = [date, startDate]
		} else {
			const date = getSpecifyMonths(createDate, 12).before()
			obj.date = [date, createDate]
		}
	}
	chartList.value.push(obj)
}

/**
 * 获取全部图的展示数据
 */
const getCharAllData = (res: any) => {
	defaultChartList.value = []
	const list: any = res || []
	list.forEach((item: any, index: number) => {
		const { level1Datas, level2Datas, level3Datas, level4Datas, level5Datas, level6Datas, createDate} = item

		// 更新chart图的显示默认数组
		initChartList(level1Datas, createDate)

		const chartData: any = []
		const chartIndex: number = index
		// level1
		const levelConfig1: any = levelConfig.find((fi: any) => fi.type == 'level1')
		const row1 = getTreeRow(level1Datas, 1, levelConfig1.color, chartIndex)
		chartData.push({
			...levelConfig1,
			...row1,
		})
		// level2
		const levelConfig2: any = levelConfig.find((fi: any) => fi.type == 'level2')
		const row2 = getAssayTreeRow(level2Datas, 2, levelConfig2.color, chartIndex)
		chartData.push({
			...levelConfig2,
			...row2,
		})
		// level2-更新leve2的下拉列表
		updateAssaySelectList(assaySelectList2.value, level2Datas)

		// level3
		const levelConfig3: any = levelConfig.find((fi: any) => fi.type == 'level3')
		const row3 = getAssayTreeRow(level3Datas, 3, levelConfig3.color, chartIndex)
		chartData.push({
			...levelConfig3,
			...row3,
		})
		// level3-更新leve3的下拉列表
		updateAssaySelectList(assaySelectList3.value, level3Datas)

		// level4
		const levelConfig4: any = levelConfig.find((fi: any) => fi.type == 'level4')
		const row4 = getTreeRow(level4Datas, 4, levelConfig4.color, chartIndex)
		chartData.push({
			...levelConfig4,
			...row4,
		})
		// level5
		const levelConfig5: any = levelConfig.find((fi: any) => fi.type == 'level5')
		const row5 = getTreeRow(level5Datas, 5, levelConfig5.color, chartIndex)
		chartData.push({
			...levelConfig5,
			...row5,
		})
		// level6-是否关联泳道 并在对应level2或level3的泳道中添加
		const levelConfig6: any = levelConfig.find((fi: any) => fi.type == 'level6')
		const row6 = getTreeRow(level6Datas, 6, levelConfig6.color, chartIndex)
		chartData.push({
			...levelConfig6,
			...row6,
		})
		const treeRowChildren = row6.children || []
		treeRowChildren.forEach(item => {
			if (item.isGl) {
				const treeRow = chartData.find((fi: any) => fi.treeLevel == item.eventLevel)
				if (treeRow) {
					const treeRowChildren = treeRow.children || []
					const assay = treeRowChildren.find((fi: any) => fi.label == item.subEventLevel)
					if (assay) {
						assay.children.push({ ...item })
					}
				}
			}
		})
		// 更新视图
		defaultChartList.value.push(chartData)
	})
}
/**
 * 获取正常类型数据
 */
const getTreeRow = (data:Array<any>, level: number, color: string, chartIndex: number) => {
	return {
		treeLevel: level,
		children: (data || []).map((item: any, index: number) => {
			return { 
				...item,
				label: item.name,
				sortName: sortNameConfig[item.name] || item.name,
				code: `${item.name}_${getRandomKey()}`,
				treeLevel: level,
				isBar: item.startDate && item.endDate, // item.startDate && item.endDate,
				isTBD: !item.startDate,
				date: item.startDate,
				color,
				options: getTipsOptions(item.sampleList),
				isGl: item.eventLevel == '2' || item.eventLevel == '3' && item.subEventLevel, // 是否关联其他level
				status: item.eventStatus,
				chartIndex
			}
		})
	}
}
/**
 * 获取泳道类型数据
 */
const getAssayTreeRow = (data:Array<any>, level: number, color: string, chartIndex: number) => {
	return {
		treeLevel: level,
		btns: ['edit'],
		children: (data || []).map((item: any, index: number) => {
			const children = (item.datas || []).map((child: any) => {
				return {
					...child,
					label: child.name,
					sortName: sortNameConfig[child.name] || child.name,
					code: `${child.name}_${getRandomKey()}`,
					treeLevel: level,
					isBar: child.startDate && child.endDate,
					isTBD: !child.startDate,
					date: child.startDate,
					color,
					options: getTipsOptions(child.sampleList),
					status: child.eventStatus,
					chartIndex
				}
			})
			// 泳道层级
			return {
				label: item.assayName,
        code: `${item.assayName}_${getRandomKey()}`,
				treeLevel: level,
				isAssay: true,
				children: children || []
			}
		})
	}
}
/**
 * 获取提示列表
 */
const getTipsOptions = (list: any) => {
	const options = list || []
	const tipsArr: any = []
	options.forEach((obj: any, index: number) => {
		const arr: any = []
		Object.keys(obj).forEach(key => {
			tipsArr.push({
				label: key, value: obj[key] || ''
			})
		})
		if (index !== options.length - 1) {
			tipsArr.push({ isSplit: true, })
		}
	})
	return tipsArr
}

/**
 * 获取随机id
 */
const getRandomKey = () => {
	return Math.random().toString(36).substring(2, 15);
}

/**
 * 更新下拉列表
 */
const updateAssaySelectList = (options: any, data: any) => {
	data.forEach((item: any) => {
		options.push({
			label: item.assayName,
			value: item.assayName
		})
	})
}
/**
 * 获取展示数据
 * 默认展示level1
 */
const selectChartData = () => {
	defaultChartList.value.forEach((list: any, chartIndex: number) => {
		chartList.value[chartIndex].list = []
		list.forEach((item: any) => {
			const children: any[] = item.children || []
			if (item.treeLevel == 1) {
				const filterChildren = children.filter(f => f.isCheck)
				const config = { labelName: item.label, horizontal: true, treeLevel: item.treeLevel, chartData: filterChildren }
				chartList.value[chartIndex].list.push(config)
			} else if (item.treeLevel == 2 || item.treeLevel == 3) {
				// 泳道
				children.forEach(child => {
					const assayChildren: any[] = child.children || []
					const filterChildren = assayChildren.filter(f => f.isCheck)
					if (filterChildren.length) {
						const config = { labelName: `${item.label}<br/>(${child.label})`, treeLevel: item.treeLevel, chartData: filterChildren }
						chartList.value[chartIndex].list.push(config)
					}
				})
			} else {
				const filterChildren = children.filter(f => f.isCheck)
				const config = { labelName: item.label, treeLevel: item.treeLevel, chartData: filterChildren }
				chartList.value[chartIndex].list.push(config)
			}
		})
	})
}
/**
 * 筛选框更新
 */
const changeTreeSelect = () => {
	checkTreeChange(selectTreeData.value)
}

/**
 * 更新选中数据的逻辑
 */
const checkTreeChange = (data?: any) => {
	selectTreeData.value = data || []
	defaultChartList.value.forEach((chartArr: any ) => {
		// level1永久展示
		chartArr.forEach((chart: any) => {
			if (chart.treeLevel == 1) {
				chart.children.forEach((item: any) => {
					item.isCheck = true
					item.isActive = selectTreeData.value.some((si: any) => si.label == item.label)
				})
			}

			// 根据选择的泳道展示对应的数据
			if (chart.treeLevel == 2) {
				const isCheckLevel = selectTreeData.value.some((si: any) => si.treeLevel == 2)
				const assayArr = assaySelect2.value || []
				chart.children.forEach((assay: any) => {
					const isAssay = assayArr.includes(assay.label)
					assay.children.forEach((child: any) => {
						child.isCheck = isAssay
						child.isActive = selectTreeData.value.some((si: any) => si.label == child.label) && child.isCheck && isCheckLevel
					})
				})
			}

			if (chart.treeLevel == 3) {
				const isCheckLevel = selectTreeData.value.some((si: any) => si.treeLevel == 3)
				const assayArr = assaySelect3.value || []
				chart.children.forEach((assay: any) => {
					const isAssay = assayArr.includes(assay.label)
					assay.children.forEach((child: any) => {
						child.isCheck = isAssay
						child.isActive = selectTreeData.value.some((si: any) => si.label == child.label) && child.isCheck && isCheckLevel
					})
				})
			}

			if (chart.treeLevel == 4 || chart.treeLevel == 5) {
				const isCheck = selectTreeData.value.some((si: any) => si.label == chart.label)
				chart.children.forEach((item: any) => {
					item.isCheck = isCheck
				})
			}
			// 需要查看是否有关联数据
			if (chart.treeLevel == 6) {
				const isCheck = selectTreeData.value.some((si: any) => si.label == chart.label)
				chart.children.forEach((item: any) => {
					// 选中状态判断关联数据-查找与之关联的数据
					if (item.isGl) {
						item.isCheck = false
						const chartRow = chartArr.find((fi: any) => fi.treeLevel == item.eventLevel)
						if (chartRow) {
							const chartRowChildren = chartRow.children || []
							const assay = chartRowChildren.find((fi: any) => fi.label == item.subEventLevel)
							if (assay) {
								const glData = assay.children.find((fi: any) => fi.code == item.code)
								glData.isCheck = isCheck
							}
						}
					} else {
						item.isCheck = isCheck
					}
				})
			}
		})
	})
	selectChartData()
	// 控制是否显示告警线
	getWarningLine()
}

/**
 * 获取告警线
 */
const getWarningLine = () => {
	showMarkLine.value = false
	markLineId.value = ''
	setTimeout(() => {
		const selectChild = selectTreeData.value.filter((fi: any) => fi.isChild)
		if (selectChild.length > 1) {
			// 判断选中点是否跨轴选中
			const levelArr = selectChild.map((item: any) => item.treeLevel)
			const isRepeat = Array.from(new Set(levelArr)).length == 1
			durationType.value = isRepeat ? '' : 'every'
			nextTick(() => {
				// 查找第一个高亮的code
				const flattenData = getFlattenData()
				// let firstActive = flattenData.find((fi: any) => fi.isActive && !fi.isTBD)
				let firstActive = flattenData.find((fi: any) => fi.isActive)
				// 控制告警线的位置
				markLineId.value = firstActive?.label
				if (markLineId.value) {
					showMarkLine.value = true
				}
			})
		}
	})
	
	// 每次点击都更新告警线的高度
	// const height = compareStoryLinList.value.scrollHeight
	// lineStyle.height = height

	// if (selectChild.length > 1) {
	// 	// 查找第一个高亮的code
	// 	const flattenData = getFlattenData()
	// 	let firstActive = flattenData.find((fi: any) => fi.isActive)
	// 	// 控制告警线的位置
	// 	markLineId.value = firstActive?.label
	// 	if (markLineId.value) {
	// 		showMarkLine.value = true
	// 	}
		// if (firstActive) {
		// 	const elements: any = document.querySelector(`[dot-code="${firstActive.code}"]`)
		// 	if (elements) {
		// 		// const elementLeft = elements.getBoundingClientRect().left
		// 		const elementLeft = elements.offsetLeft
		// 		lineStyle.left = elementLeft
		// 		showLine.value = true
		// 	}
		// }

		// 查找每个study的fristActive
		// chartList.value.forEach((item: any, index: number) => {
		// 	const domRow = flattenData.find((fi: any) => fi.isActive && fi.chartIndex == index && fi.label == firstActive.label)
		// 	if (domRow) {
		// 		const dom: any = document.querySelector(`[dot-code="${domRow.code}"]`)
		// 		if (dom) {
		// 			// const move = dom.offsetLeft - lineStyle.left
		// 			// storyLineChartRef.value[index].handleScroll(domRow.date)
		// 		}
		// 	}
		// })
	// }
}

/**
 * 滚动每个图表的时间轴
 */
// const handleScroll = (move: any) => {
// 	showLine.value = false
// 	storyLineChartRef.value.forEach((dom: any) => {
// 		console.log(dom)
// 		dom.handleScroll(move)
// 	})
// }

/**
 * 平铺图表显示数据
 */
const getFlattenData = () => {
	const result: any = []
	chartList.value.forEach((chat: any) => {
		const list = chat.list || []
		list.forEach((item: any) => {
			const chartData = item.chartData || []
			chartData.forEach((row: any) => {
				result.push(row)
			})
		})
	})
	return result
}
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
	z-index: 9999;
}
</style>
