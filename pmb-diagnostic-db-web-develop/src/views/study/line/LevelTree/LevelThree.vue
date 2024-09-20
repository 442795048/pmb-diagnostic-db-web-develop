<template>
	<el-dialog
    v-model="visible"
   	:title="title"
    width="1000"
    :before-close="handleClose"
  >
		<LevelThreeForm ref="levelFormRef" :activeIndex="activeIndex" :highlight="highlight" :disabled="disabled" :formData="formData" />
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" :loading="loading" @click="handleSave">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, inject } from "vue";
import LevelThreeForm from "./LevelThreeForm.vue";
import StudyAPI from "@/api/study";
const props = defineProps({
	modelValue: {
    type: Boolean,
  },
	title: {
    type: [String, Number] as any,
		default: ''
  },
	disabled: {
		type: Boolean,
		default: false
	},
	activeIndex: {
		type: [Number, String] as any,
		default: ''
	},
	highlight: {
    type: [String, Number] as any,
		default: ''
  },
	formData: {
		type: Object as any,
		default: () => {
			return {}
		}
	}
});
const emits = defineEmits(["update:modelValue", "handleClose", "handleAfterSave"]);
const loading = ref<boolean>(false)
const levelFormRef = ref<any>(null)
const studyName: any = inject('studyName')
const visible = computed(() => {
	return props.modelValue
})

const handleSave = () => {
	loading.value = true;
  let insertParams = {
    studyLevel3HgrList: levelFormRef.value.getPanalForm(),
		studyName: studyName.value
  }
	StudyAPI.addTreeData(insertParams).then((data) => {
		ElMessage.success('save success');
		emits('handleAfterSave')
		handleClose()
	}).finally(() => {
		loading.value = false;
	});
}

const handleClose = () => {
	emits('update:modelValue', false)
	emits('handleClose')
}
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
