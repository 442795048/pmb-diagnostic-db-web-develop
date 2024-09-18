<template>
	<div class="assay-table common-card">
		<div class="title-name">Assay info & testing performance</div>
		<el-table ref="dataTableRef" v-loading="loading" :data="dataList" stripe class="common-table">
			<el-table-column label="order" prop="" min-width="50">
				<template #default="scope">
					{{ scope.$index + 1 }}
				</template>
			</el-table-column>
			<el-table-column label="Biomarker" prop="name" min-width="100" />
			<el-table-column label="Partner" prop="name" min-width="100">
				<template #default="scope">
					<span class="text-btn">{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column label="Assay Name" prop="name" min-width="100" />
			<el-table-column label="Testing Lab" prop="name" min-width="100">
				<template #default="scope">
					<span class="text-btn">{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column label="Assay ID" prop="name" />
			<el-table-column label="Summary Cut-off Date" prop="name" min-width="160" />
			<el-table-column label="QC Report" prop="name" min-width="100">
				<template #default="scope">
					<span class="text-btn">{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column class="fixedSummary" label="Assay Summary" fixed="right" prop="name" width="130">
				<template #default="scope">
					<span class="text-btn">View</span>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: "AssayTable",
	inheritAttrs: false,
});
import { ref, reactive, onMounted } from "vue";
const props = defineProps({
	studyName: {
		type: [String, Number],
		default: ''
	}
});
onMounted(() => {
	console.log('assaytable', props.studyName)
})
const router = useRouter();
const dataList = reactive([
	{ name: '测试1' },
	{ name: '测试2' },
	{ name: '测试2' },
	{ name: '测试2' },
	{ name: '测试2' },
	{ name: '测试2' }
])
const loading = ref(false)

const handleNew = () => {
	router.push("/study/new");
};

</script>
<style lang="scss" scoped>
.assay-table {
	height: 100%;
	overflow: hidden;
	padding: 20px;
	.title-name{
		display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #4a4a4a;
    margin-bottom: 10px;
	}
	:deep(.el-table--fit) {
		height: calc(100% - 30px);
	}

}
</style>
