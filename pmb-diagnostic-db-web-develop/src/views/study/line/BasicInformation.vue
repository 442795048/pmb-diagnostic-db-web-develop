<template>
	<el-form class="basic-information">
		<div class="information-title ">
			<div class="name-code">
				<LabelValue v-model="formData.studyName" label="Study Name" :isEdit="isEditMode" @handleEdit="handleEdit"/>
				<!-- <span class="maohao">:</span> -->
				<LabelValue v-model="formData.studyCode" label="Study Code" :isEdit="isEditMode" @handleEdit="handleEdit" />
			</div>
			<LabelValue v-model="formData.studyTitle" label="Study title" :isEdit="isEditMode" @handleEdit="handleEdit" />
		</div>
		<div class="basic-form" :class="{ isMoreForm: isExpand }">
			<LabelValue
				v-model="formData.franchiseName" label="Franchise Name" :isEdit="isEditMode" @handleEdit="handleEdit"
			/>
			<LabelValue v-model="formData.drugName" label="Drug Name" :isEdit="isEditMode" @handleEdit="handleEdit" />
			<LabelValue
				v-model="formData.mainStudyDesign" label="Main study design"
				form-type="select" :options="designOptions" :isEdit="isEditMode" @handleEdit="handleEdit"
			/>
			<LabelValue v-model="formData.wp" label="WP #" :show-edit="false" />
			<LabelValue v-model="formData.cdx" label="CDx #" :show-edit="false" />
			<LabelValue
				v-model="formData.studyStatus" label="Study Status"
				form-type="select" :options="statusOptions" :isEdit="isEditMode" @handleEdit="handleEdit"
			/>
			<LabelValue
				v-show="isExpand" v-model="formData.studyPhase" label="Study phase"
				form-type="select" :options="phaseOptions" :isEdit="isEditMode" @handleEdit="handleEdit"
			/>
			<LabelValue
				v-show="isExpand" v-model="formData.studyTumorType" label="Study tumor type"
				form-type="select" :options="tumorTypeOptions" :isEdit="isEditMode" @handleEdit="handleEdit"
			/>
			<LabelValue
				v-show="isExpand" v-model="formData.studyIndication" label="Study Indication"
				form-type="select" :options="indicationOptions" :isEdit="isEditMode" @handleEdit="handleEdit"
			/>
			<LabelValue
				v-show="isExpand" v-model="formData.studyLine" label="Study line"
				form-type="select" :options="lineOptions" :isEdit="isEditMode" @handleEdit="handleEdit"
			/>
			<div class="isMore" @click="handleMore">{{ isExpand ? 'Less' : 'More' }}</div>
		</div>
	</el-form>
	<div v-if="showSubmit" class="footer-btn">
		<el-button @click="SubmitStudy">Submit</el-button>
		<el-button @click="BackToStudy">Back</el-button>
	</div>
</template>

<script setup lang="ts">
// import { BasicInformation } from "../types/line";
import { phaseOptions, tumorTypeOptions, indicationOptions, lineOptions, designOptions, statusOptions } from "../common/line";
import { reactive, defineEmits, onMounted, inject } from "vue";
import LabelValue from "../components/LabelValue.vue";
import StudyAPI from "@/api/study";
const router = useRouter();
const studyName: any = inject('studyName')
const formData: any = reactive({
	oldStudyName: '',
	studyName: '',
	studyCode: '',
	studyTitle: '',
	franchiseName: '',
	drugName: '',
	studyPhase: '',
	studyTumorType: '',
	studyIndication: '',
	studyLine: '',
	mainStudyDesign: '',
	wp: '',
	cdx: '',
	studyStatus: ''
})

// 自定义事件
const emits = defineEmits(["handleShowSubmit", "updateFormData", "handleRefresh"])
const refreshAppMain: any = inject('refreshAppMain')
const showSubmit = ref<Boolean>(false);
const isEditMode = ref<Boolean>(false);
const isExpand = ref<Boolean>(false);

onMounted(() => {
	console.log('BasicInformation', studyName.value)
	init()
})

const init = () => {
	const params = {
		studyName: studyName.value
	}
	StudyAPI.getStudyByName(params).then(data => {
		const result: any = data || {}
		Object.assign(formData, { ...result, oldStudyName: result.studyName })
		emits('updateFormData', formData)
	})
}

const handleEdit:any = () => {
	isEditMode.value = true
	showSubmit.value = true
	isExpand.value = true
	emits('handleShowSubmit', true)
}

const SubmitStudy = () => {
	const params = formData
	StudyAPI.updateStudyByName(params).then(data => {
		isEditMode.value = false
		showSubmit.value = false
		ElMessage.success('save success');
		emits('handleShowSubmit', false)
		emits('updateFormData', formData)
		setTimeout(() => {
			refreshAppMain()
		}, 1000)
		router.push({ query: { studyName: formData.studyName } });
	})
};

const BackToStudy = () => {
	router.push("/study/page");
};

const handleMore = () => {
	isExpand.value = !isExpand.value
	if (!isExpand.value) {
		isEditMode.value = false
		showSubmit.value = false
	}
}

</script>

<style lang="scss" scoped>
.basic-information {
	.information-title {
		.name-code {
			display: flex;
			align-items: center;
			gap: 20px;
		}

		.label-text-edit-widget,
		.maohao {
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 10px;
		}
	}

	.basic-form {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 0 30px;
    padding-right: 30px;
    position: relative;
		.label-text-edit-widget {
			margin-bottom: 10px;
		}
		&.isMoreForm{
			grid-template-columns: repeat(5, 1fr);
		}
	}
}

.footer-btn {
	height: 60px;
	border: 1px solid #e4e7ed;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
	background: #fff;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 0;
	right: 0;
	width: calc(100% - 210px);
	z-index: 999;
}
.isMore{
	cursor: pointer;
	color: #20a6fc;
	font-size: 12px;
	position: absolute;
	right: 0;
	bottom: 15px;
}
</style>
