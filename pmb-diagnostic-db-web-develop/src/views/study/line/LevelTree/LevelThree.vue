<template>
	<el-dialog
    v-model="visible"
   	:title="title"
    width="1000"
    :before-close="handleClose"
  >
		<LevelThreeForm v-if="visible" :activeIndex="activeIndex" :disabled="disabled" />
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleSave">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import LevelThreeForm from "./LevelThreeForm.vue";
const props = defineProps({
	modelValue: {
    type: Boolean,
  },
	node: {
    type: [String, Number],
		default: ''
  },
	title: {
    type: [String, Number],
		default: ''
  },
	disabled: {
		type: Boolean,
		default: false
	},
	formData: {
		type: Object as any,
		default: () => {
			return {}
		}
	}
});
const emits = defineEmits(["update:modelValue"]);
const activeIndex = ref('')
const Highlight = reactive([])
const visible = computed(() => {
	return props.modelValue
})

watch(props.node, (node) => {
	if (node.data) {
		activeIndex.value = node.data.activeIndex
	}
},{ deep: true, immediate: true })

const handleSave = () => {
	visible.value = false
	emits('update:modelValue', false)
	ElMessage({
    message: 'Save Success',
    type: 'success',
  })
}

const handleClose = () => {
	visible.value = false
	emits('update:modelValue', false)
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
