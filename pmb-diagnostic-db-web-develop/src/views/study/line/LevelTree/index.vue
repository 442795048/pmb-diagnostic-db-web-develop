<template>
	<div class="custom-tree-container" :style="{ width: isShowTree ? '360px' : 'auto' }">
		<div class="tree-icon">
			<img v-if="isShowTree" :src="getImageUrl('icons/tree-display.svg')" @click="isShowTree = false">
			<img v-else :src="getImageUrl('icons/tree-show.svg')"  @click="isShowTree = true">
		</div>
		<!-- <p>Using scoped slot</p> -->
		<el-tree v-show="isShowTree" ref="elTreeDom" style="max-width: 600px" :data="treeData" show-checkbox node-key="code" default-expand-all
			:expand-on-click-node="false" :default-checked-keys="defaultCheckedKeys" @check-change="checkTreeChange">
			<template #default="{ node, data }">
				<span class="custom-tree-node">
					<span>{{ node.label }}</span>
					<span class="node-btn" v-if="getEditButton(node, data)" @click="handleClickEdit(node, data)">
						Edit
					</span>
					<span class="node-btn" v-if="getViewButton(node, data)" @click="handleClickEdit(node, data, true)">
						View
					</span>
				</span>
			</template>
		</el-tree>
		<template v-if="showLevelDialog">
			<LevelOne
				v-model="visible.level1"
				:title="currentData.title"
				:disabled="currentData.disabled"
				:highlight="currentData.highlight"
				:formData="currentData.formData"
				:allFormData="currentData.allFormData"
				@handleClose="showLevelDialog = false"
				@handleAfterSave="handleAfterSave"
			/>
			<LevelTwo 
				v-model="visible.level2"
				:title="currentData.title"
				:disabled="currentData.disabled"
				:activeIndex="currentData.activeIndex"
				:highlight="currentData.highlight"
				:formData="currentData.formData"
				@handleClose="showLevelDialog = false"
				@handleAfterSave="handleAfterSave"
			/>
			<LevelThree 
				v-model="visible.level3"
				:title="currentData.title"
				:disabled="currentData.disabled"
				:activeIndex="currentData.activeIndex"
				:highlight="currentData.highlight"
				:formData="currentData.formData"
				@handleClose="showLevelDialog = false"
				@handleAfterSave="handleAfterSave"
			/>
			<LevelFour
				v-model="visible.level4"
				:title="currentData.title"
				:disabled="currentData.disabled"
				:highlight="currentData.highlight"
				:formData="currentData.formData"
				@handleClose="showLevelDialog = false"
				@handleAfterSave="handleAfterSave"
			/>
			<LevelSix 
				v-model="visible.level6"
				:title="currentData.title"
				:disabled="currentData.disabled"
				:activeIndex="currentData.activeIndex"
				:highlight="currentData.highlight"
				:allFormData="currentData.allFormData"
				:formData="currentData.formData"
				@handleClose="showLevelDialog = false"
				@handleAfterSave="handleAfterSave"
			/>
		</template>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, inject } from "vue";
import { getImageUrl } from '@/utils/index'
import LevelOne from './LevelOne.vue'
import LevelTwo from './LevelTwo.vue'
import LevelThree from './LevelThree.vue'
import LevelFour from './LevelFour.vue'
import LevelSix from './LevelSix.vue'
import type Node from "element-plus/es/components/tree/src/model/node";
import StudyAPI from "@/api/study";
import { treeLevelConfig, sortNameConfig } from '@/views/study/common/line'

const emits = defineEmits(['checkTreeChange']);
const studyName: any = inject('studyName')
const treeData = ref<any>([]);
const elTreeDom = ref(null)
const isShowTree = ref<boolean>(true)
const visible = reactive<any>({
	level1: false,
	level2: false,
	level3: false,
	level4: false,
	level6: false
})
const showLevelDialog = ref(false)
const currentData = reactive<any>({
	title: '',
	activeIndex: 0,
	disabled: false,
	node: {},
	highlight: '',
	allFormData: null,
	formData: null
})

onMounted(() => {
	initTree()
})

/**
 * 初始化树结构
 */
const initTree = () => {
	treeData.value = []
	return StudyAPI.viewStudy(studyName.value).then((data)=>{
		const result: any = data || {}
		const { level1Datas, level2Datas, level3Datas, level4Datas, level5Datas, level6Datas  } = result
		if (level1Datas) {
			const treeRow = getTreeRow(level1Datas, 1, '#a30014')
			treeData.value.push({
				...treeLevelConfig['level1'],
				...treeRow,
				btns: ['edit']
			})
		}
		if (level2Datas) {
			const treeRow = getAssayTreeRow(level2Datas, 2, '#f59a23')
			treeData.value.push({
				...treeLevelConfig['level2'],
				...treeRow,
				btns: ['edit']
			})
		}
		if (level3Datas) {
			const treeRow = getAssayTreeRow(level3Datas, 3, '#000080')
			treeData.value.push({
				...treeLevelConfig['level3'],
				...treeRow,
				btns: ['edit']
			})
		}
		if (level4Datas) {
			const treeRow = getTreeRow(level4Datas, 4, '#830051')
			treeData.value.push({
				...treeLevelConfig['level4'],
				...treeRow,
				btns: ['edit']
			})
		}
		if (level5Datas) {
			const treeRow = getTreeRow(level5Datas, 5, '#cccccc', true)
			treeData.value.push({
				...treeLevelConfig['level5'],
				...treeRow
			})
		}
		if (level6Datas) {
			const treeRow = getTreeRow(level6Datas, 6, '#f59a23')
			treeData.value.push({
				...treeLevelConfig['level6'],
				...treeRow,
				btns: ['edit']
			})
			// 是否关联泳道 并在对应level2或level3的泳道中添加
			const treeRowChildren = treeRow.children || []
			treeRowChildren.forEach(item => {
				if (item.isGl) {
					const treeRow = treeData.value.find((fi: any) => fi.treeLevel == item.eventLevel)
					if (treeRow) {
						const treeRowChildren = treeRow.children || []
						const assay = treeRowChildren.find((fi: any) => fi.label == item.subEventLevel)
						if (assay) {
							assay.children.push({ ...item, disabled: true })
						}
					}
				}
			})
		}
		console.log(treeData.value)
	})
}

/**
 * 获取正常类型数据
 */
const getTreeRow = (data:Array<any>, level: number, color: string, disabled?: any) => {
	return {
		treeLevel: level,
		children: (data || []).map((item: any, index: number) => {
			return { 
				...item,
				activeIndex: index,
				label: item.name,
				sortName: sortNameConfig[item.name] || item.name,
				code: `${item.name}_${getRandomKey()}`,
				isCheck: false,
				treeLevel: level,
				isBar: item.startDate && item.endDate, // item.startDate && item.endDate,
				isTBD: !item.startDate,
				date: item.startDate,
				disabled,
				color,
				options: getTipsOptions(item.sampleList),
				isGl: item.eventLevel == '2' || item.eventLevel == '3' && item.subEventLevel, // 是否关联其他level
				status: item.eventStatus,
				btns: level == 5 ? [] : ['edit'] // leve5不显示
			}
		})
	}
}
/**
 * 获取泳道类型数据
 */
const getAssayTreeRow = (data:Array<any>, level: number, color: string) => {
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
					isCheck: false,
					treeLevel: level,
					isBar: child.startDate && child.endDate,
					isTBD: !child.startDate,
					date: child.startDate,
					color,
					options: getTipsOptions(child.sampleList),
					activeIndex: index,
					status: child.eventStatus,
					btns: ['edit']
				}
			})
			// 泳道层级
			return {
				label: item.assayName,
        code: `${item.assayName}_${getRandomKey()}`,
				treeLevel: level,
				isAssay: true,
				children: children || [],
				btns: ['view']
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
 * 默认选中level1
 */
const defaultCheckedKeys = computed(() => {
	const list = treeData.value || []
	const level1Data: any = list.find((fi: any) => fi.treeLevel == 1)
	if (level1Data) {
		level1Data.children.forEach((item: any) => {
			item.isCheck = true
		})
		return [level1Data.code]
	}
	return []
})

/**
 * 控制btn编辑显示逻辑
 */
const getEditButton = (node: Node, data: any): boolean => {
	const btns = data.btns || []
	return btns.includes('edit')
}

/**
 * 控制btn查看显示逻辑
 */
const getViewButton = (node: Node, data: any): boolean => {
	const btns = data.btns || []
	return btns.includes('view')
}

/**
 * 点击编辑打开编辑弹窗
 */
const handleClickEdit = (node: any, data: any, disabled?: any) => {
	const params = {
		studyName: studyName.value
	}
	StudyAPI.getTreeDetailInfo(params).then((resData: any) => {
		// 查找根节点
		const parentNode = searchParentNode(node)
		currentData.title = parentNode.data.label
		currentData.disabled = !!disabled
		currentData.highlight = data.label
		currentData.activeIndex = `${data.activeIndex || 0}`
		Object.assign(currentData.node, node)
		// 更新level的详情表单数据
		const level = parentNode.data.treeLevel
		const treeRow = resData[`studyLevel${level}`]
		currentData.allFormData = resData
		currentData.formData = treeRow
		visible[`level${level}`] = true
		showLevelDialog.value = true
	})
}

/**
 * 查找根节点
 */
const searchParentNode = (node: any) => {
	if (node.level == 1) {
		return node 
	} else {
		return searchParentNode(node.parent)
	}
}

/**
 * 节点选中
 */
const checkTreeChange = (data?: any, flag?: any) => {
	if (data) {
		data.isCheck = flag
		// 是否是点击关联数据
		if (data.isGl) {
			data.isCheck = false
			const treeRow = treeData.value.find((fi: any) => fi.treeLevel == data.eventLevel)
			if (treeRow) {
				const treeRowChildren = treeRow.children || []
				const assay = treeRowChildren.find((fi: any) => fi.label == data.subEventLevel)
				if (assay) {
					const glData = assay.children.find((fi: any) => fi.code == data.code)
					glData.isCheck = flag
				}
			}
		}
	}
	emits('checkTreeChange', treeData.value)
}

/**
 * 保存之后更新树节点
 */
const handleAfterSave = async() => {
	await initTree()
	emits('checkTreeChange', treeData.value)
}

watch(defaultCheckedKeys, (val) => {
	if (val.length) {
		checkTreeChange()
	}
}, { deep: true, immediate: true })
</script>

<style lang="scss" scoped>
.custom-tree-node {
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	padding-right: 8px;
	font-size: 14px;

	.node-btn {
		font-size: 12px;
		color: #20a6fc;
	}
}
.custom-tree-container {
	width: 360px;
	.tree-icon{
		width: 30px;
		cursor: pointer;
		img {
			width: 30px;
			height: 30px;
		}
	}
}

</style>
<style lang="scss">
.custom-tree-container{
	.el-tree-node[aria-disabled=true]{
		display: none;
	}
}
</style>