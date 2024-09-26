<template>
	<div class="custom-tree-container">
		<!-- <p>Using scoped slot</p> -->
		<el-tree ref="elTreeDom" style="max-width: 600px" :data="treeData" show-checkbox node-key="code" default-expand-all
			:expand-on-click-node="false" @check-change="checkTreeChange">
			<template #default="{ node, data }">
				<span class="custom-tree-node" :title="node.label">{{ node.label }}</span>
			</template>
		</el-tree>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { levelConfig } from '@/components/StoryLineChart/common'
import CompareAPI from "@/api/compare";
const emits = defineEmits(['checkTreeChange']);
const treeData = ref<any>([]);
const elTreeDom = ref<any>(null)
onMounted(() => {
	initTree()
})

/**
 * 初始化树结构
 */
const initTree = () => {
	treeData.value = []
	return CompareAPI.getCompareTreeInfo().then((data)=>{
		const result: any = data || {}
		const { level1Datas, level2Datas, level3Datas } = result
		// level1
		const treeRow1 = getTreeRow(level1Datas, 1)
		const levelConfig1: any = levelConfig.find((fi: any) => fi.type == 'level1')
		treeData.value.push({
			disabled: true,
			...levelConfig1,
			...treeRow1,
		})
		// level2
		const treeRow2 = getTreeRow(level2Datas, 2)
		const levelConfig2: any = levelConfig.find((fi: any) => fi.type == 'level2')
		treeData.value.push({
			disabled: true,
			...levelConfig2,
			...treeRow2,
		})
		// level3
		const treeRow3 = getTreeRow(level3Datas, 3)
		const levelConfig3: any = levelConfig.find((fi: any) => fi.type == 'level3')
		treeData.value.push({
			disabled: true,
			...levelConfig3,
			...treeRow3,
		})
		// level4
		const levelConfig4: any = levelConfig.find((fi: any) => fi.type == 'level4')
		treeData.value.push({
			...levelConfig4
		})
		// level5
		const levelConfi5: any = levelConfig.find((fi: any) => fi.type == 'level5')
		treeData.value.push({
			...levelConfi5
		})
		// level6
		const levelConfi6: any = levelConfig.find((fi: any) => fi.type == 'level6')
		treeData.value.push({
			...levelConfi6
		})
	})
}
/**
 * 获取正常类型数据
 */
 const getTreeRow = (data:Array<any>, level: number) => {
	return {
		treeLevel: level,
		children: (data || []).map((item: any) => {
			return { 
				...item,
				isChild: true,
				treeLevel: level,
				label: item.name,
				code: `${item.name}_${getRandomKey()}`,
			}
		})
	}
}

/**
 * 获取随机id
 */
const getRandomKey = () => {
	return Math.random().toString(36).substring(2, 15);
}

/**
 * 节点选中
 */
const checkTreeChange = (data?: any, flag?: any) => {
	// if (data.isChild || data.only) {
	// 	data.isCheck = flag
	// }
	// 只能选择两个子节点，选择后其余置灰
	const selectData = elTreeDom.value.getCheckedNodes()
	const selectDataCode = selectData.filter((item: any) => item.isChild).map((item: any) => item.code)
	if (selectDataCode.length == 2) {
		disabledSelectData(selectDataCode, true)
	} else {
		disabledSelectData(selectDataCode, false)
	}
	emits('checkTreeChange', selectData)
}
/**
 * 是否置灰其他节点
 * @param selectDataCode 
 * @param flag 
 */
const disabledSelectData = (selectDataCode: any, flag: boolean) => {
	treeData.value.forEach((item: any) => {
		const children = item.children || []
		children.forEach((child: any) => {
			if (flag) {
				if (selectDataCode.includes(child.code)) {
					child.disabled = false
				} else {
					child.disabled = true
				}
			} else {
				child.disabled = false
			}
		})
	})
}
</script>

<style lang="scss" scoped>
.custom-tree-node {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
	padding-right: 8px;
	font-size: 14px;

	.node-btn {
		font-size: 12px;
		color: #20a6fc;
	}
	
}

</style>