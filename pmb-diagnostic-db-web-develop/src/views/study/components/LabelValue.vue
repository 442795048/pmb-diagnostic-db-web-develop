<template>
	<div class="label-text-edit-widget">
		<div class="label-text" v-if="label">{{ label }}:</div>
		<div class="content">
			<div v-if="!isEditMode">{{ customValue }}</div>
			<template v-else>
				<el-input ref="inputRef" v-if="formType === 'input'" v-model="customValue" @blur="changeTexts" />
				<el-select ref="inputRef" v-if="formType === 'select'" class="label-text-edit-widget-select"
					v-model="customValue" @blur="changeSelect" @change="changeSelect">
					<el-option v-for="item in props.options" :key="item.value" :value="item.value">
						{{ item.label }}
					</el-option>
				</el-select>
			</template>
			<div v-if="showEdit" class="label-icon">
				<el-icon :size="12" color="blue" @click="editText">
					<Edit />
				</el-icon>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: "LabelValue",
	inheritAttrs: false,
});
import { onMounted, ref, defineProps, defineEmits, watch } from "vue";
const inputRef = ref(null)
const isEditMode = ref<Boolean>(false);
interface Options {
	label: string;
	value: string | number;
}
const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: "",
	},
	label: {
		type: String,
		default: "",
	},
	showEdit: {
		type: Boolean,
		default: true,
	},
	isEdit: {
		type: Boolean,
		default: false
	},
	formType: {
		// 表单类型， input select date
		type: String,
		default: "input",
	},
	options: {
		type: Array as PropType<Options[]>,
		default: () => {
			return []
		}
	}
});
// 自定义事件
const emits = defineEmits(['update:modelValue', 'handleEdit'])

const customValue = ref(props.modelValue);

watch(() => props.isEdit, (newValue) => {
	isEditMode.value = newValue;
});

const editText = () => {
	isEditMode.value = true;
	emits("handleEdit")
	nextTick(() => {
		inputRef.value && inputRef.value.focus()
	})
};

const changeTexts = () => {
	// isEditMode.value = false;
	emits("update:modelValue", customValue.value);
};

const changeSelect = () => {
	// isEditMode.value = false;
	emits("update:modelValue", customValue.value);
};

onMounted(() => { });

</script>

<style lang="scss" scoped>
.label-text-edit-widget {
	display: flex;
	height: 30px;
	column-gap: 8px;
	align-items: center;
	font-size: 12px;

	.content {
		display: flex;
		gap: 8px;
		flex: 1;
	}

	.label-text-edit-widget-select {
		min-width: 100px;
	}
}

.label-icon {
	cursor: pointer;
	display: flex;
	align-items: center;

	svg {
		color: #20a6fc;
	}
}

.el-text {
	font-size: 12px;
}
</style>
