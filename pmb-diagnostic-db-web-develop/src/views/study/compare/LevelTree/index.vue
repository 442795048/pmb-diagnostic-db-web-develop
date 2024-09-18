<template>
	<div class="custom-tree-container">
		<!-- <p>Using scoped slot</p> -->
		<el-tree ref="elTreeDom" style="max-width: 600px" :data="dataSource" show-checkbox node-key="code" default-expand-all
			:expand-on-click-node="false" :default-checked-keys="defaultCheckedKeys" @check-change="checkTreeChange">
			<template #default="{ node, data }">
				<span class="custom-tree-node">
					<span>{{ node.label }}</span>
				</span>
			</template>
		</el-tree>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import { MOCK_TREE1 } from '../../mock/line'
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
	return []
})

const emits = defineEmits(['checkTreeChange']);
const dataSource = ref<Tree[]>(MOCK_TREE1);
const elTreeDom = ref(null)
const currentData = reactive({
	title: '',
	disabled: false,
	node: {},
	formData: {}	
})

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
	emits('checkTreeChange', elTreeDom.value.getCheckedNodes())
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