<template>
	<el-select v-model="selectVal" v-bind="$attrs" placeholder="Select" @change="change">
		<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value"
		/>
	</el-select>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
	modelValue: {
		type: [String, Number, Array] as any,
  },
  options: {
		type: Array as any,
    default: () => {
			return []
		}
  }
})
const emits = defineEmits(['change', 'update:modelValue'])
const selectVal = ref('')

watchEffect(() => {
	if (props.modelValue) {
		selectVal.value = props.modelValue
	}
})

const change = () => {
	emits("update:modelValue", selectVal.value);
	emits('change', selectVal.value)
}
</script>

<style lang="scss" scoped>

</style>
