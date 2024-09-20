<template>
	<div class="assay-table common-card">
		<div class="title-name">Assay info & testing performance</div>
		<el-table ref="dataTableRef" v-loading="loading" :data="dataList" stripe class="common-table">
			<el-table-column label="order" prop="" min-width="80">
				<template #default="scope">
					{{ scope.$index + 1 }}
				</template>
			</el-table-column>
			<el-table-column label="Biomarker" prop="biomark" min-width="100" />
			<el-table-column label="Partner" prop="partner" min-width="100">
				<template #default="scope">
					<span class="text-btn">{{ scope.row.partner }}</span>
				</template>
			</el-table-column>
			<el-table-column label="Assay Name" prop="assayName" min-width="100" />
			<el-table-column label="Testing Lab" prop="testingLab" min-width="100">
				<template #default="scope">
					<span class="text-btn">{{ scope.row.testingLab }}</span>
				</template>
			</el-table-column>
			<el-table-column label="Assay ID" prop="assayId" />
			<el-table-column label="Summary Cut-off Date" prop="summaryCutoffDate" min-width="160" />
			<el-table-column label="QC Report" prop="qcReport" min-width="100">
				<template #default="scope">
					<span class="text-btn">{{ scope.row.qcReport }}</span>
				</template>
			</el-table-column>
			<el-table-column class="fixedSummary" label="Assay Summary" fixed="right" prop="assaySummary" width="130">
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
import { ref, reactive, onMounted, inject } from "vue";
import StudyAPI from "@/api/study";
const studyName: any = inject('studyName')
const router = useRouter();
const dataList = ref<any>([])
onMounted(() => {
	init()
})
const init = () =>{
	const params = {
		studyName: studyName.value
	}
	StudyAPI.getTestingPerformance(params).then((data)=>{
		dataList.value = data || []
	})
}
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
