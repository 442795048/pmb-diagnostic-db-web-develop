<template>
	<div class="custom-tree-container">
		<!-- <p>Using scoped slot</p> -->
		<el-tree ref="elTreeDom" style="max-width: 600px" :data="dataSource" show-checkbox node-key="code" default-expand-all
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
		<!-- level1弹窗 -->
		<LevelOne v-model="visible.level1" :title="currentData.title" :disabled="currentData.disabled" :node="currentData.node" :formData="currentData.formData" />
		<LevelTwo v-model="visible.level2" :title="currentData.title" :disabled="currentData.disabled" :node="currentData.node" :formData="currentData.formData" />
		<LevelThree v-model="visible.level3" :title="currentData.title" :disabled="currentData.disabled" :node="currentData.node" :formData="currentData.formData" />
		<LevelFour v-model="visible.level4" :title="currentData.title" :disabled="currentData.disabled" :node="currentData.node" :formData="currentData.formData" />
		<LevelSix v-model="visible.level6" :title="currentData.title" :disabled="currentData.disabled" :node="currentData.node" :formData="currentData.formData" />
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import { MOCK_TREE } from '../../mock/line'
import LevelOne from './LevelOne.vue'
import LevelTwo from './LevelTwo.vue'
import LevelThree from './LevelThree.vue'
import LevelFour from './LevelFour.vue'
import LevelSix from './LevelSix.vue'
import type Node from "element-plus/es/components/tree/src/model/node";
// 定义树形结构
interface Tree {
	code: string;
	label: string;
	date?: string;
	type?: string;
	color?: string;
	isActive?: boolean;
	assayName?: string;
	isAssay?: boolean,
	startDate?: string,
	endDate?: string,
	children?: Tree[];
}

const defaultCheckedKeys = computed(() => {
	// 默认选中level1的所有节点
	const list = dataSource.value || []
	const level1Data = list.find(fi => fi.type == 'level1')
	if (level1Data) {
		level1Data.children.forEach(item => {
			item.isCheck = true
		})
		return [level1Data.code]
	}
	return []
})

const emits = defineEmits(['checkTreeChange']);
const dataSource = ref<Tree[]>(MOCK_TREE);
const elTreeDom = ref(null)
const visible = reactive({
	level1: false,
	level2: false,
	level3: false,
	level4: false,
	level6: false
})
const currentData = reactive({
	title: '',
	disabled: false,
	node: {},
	formData: {}	
})

/**
 * 控制btn编辑显示逻辑
 * 1.有编辑权限显示edit，没有显示view
 * 2.Study leve 1，首层不显示按钮
 * 3.泳道层级不显示
 */
const getEditButton = (node: Node, data: Tree): boolean => {
	// 泳道只显示view
	if (data.isAssay || data.type == 'level1' || data.type == 'level5') {
		return false
	}
	return true
}

/**
 * 控制btn编辑显示逻辑
 * 1.有编辑权限显示edit，没有显示view
 * 2.Study leve 1，首层不显示按钮
 * 3.泳道层级不显示
 */
const getViewButton = (node: Node, data: Tree): boolean => {
	// 泳道只显示view
	if (data.isAssay) {
		return true
	} else {
		return false
	}
}

/**
 * 点击编辑打开编辑弹窗
 */
const handleClickEdit = (node, data, disabled) => {
	// 查找根节点
	const parentNode = searchParentNode(node)
	currentData.title = parentNode.data.label
	currentData.disabled = !!disabled
	Object.assign(currentData.node, node)
	Object.assign(currentData.formData, parentNode.data)
	visible[parentNode.data.type] = true
}

/**
 * 查找根节点
 */
const searchParentNode = (node) => {
	if (node.level == 1) {
		return node 
	} else {
		return searchParentNode(node.parent)
	}
}

/**
 * 节点选中
 */
const checkTreeChange = (data, flag) => {
	if (data) {
		data.isCheck = flag
		// TODO
		const arr = ['activity1', 'activity2', 'activity3', 'activity4']
		if (arr.includes(data.code)) {
			console.log(dataSource.value[data.gl.i])
			dataSource.value[data.gl.i].children[data.gl.j].children[data.gl.k].isCheck = flag
		}
	}
	emits('checkTreeChange', dataSource)
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

</style>
<style lang="scss">
.custom-tree-container{
	.el-tree-node[aria-disabled=true]{
		display: none;
	}
}
</style>