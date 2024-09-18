<template>
	<el-dialog
    v-model="visible"
   	:title="title"
    width="1000"
    :before-close="handleClose"
  >
		<el-form :model="basicFormData" label-position="top" label-width="150" class="filter-form-inline common-form"
      style="margin-top: 10px;" ref="queryFormRef">

			<el-form-item label="Pre-PH3ID" prop="date1" :class="highlight == 1 ? 'highlight' : ''" >
				<el-date-picker v-model="basicFormData.date1" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="Pre-PH3ID Link Name" prop="linkname1" :class="highlight == 1 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname1" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="Pre-PH3ID Link To" prop="linkto1" :class="highlight == 1 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto1" placeholder="Please enter" clearable />
			</el-form-item>
		
			<el-form-item label="LSPC" prop="date1" :class="highlight == 2 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date1" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="LSPC Link Name" prop="linkname2" :class="highlight == 2 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname2" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="LSPC Link To" prop="linkto2" :class="highlight == 2 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto2" placeholder="Please enter" clearable />
			</el-form-item>

			<el-form-item label="CSP Available" prop="date3" :class="highlight == 3 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date3" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="CSP Available Link Name" prop="linkname3" :class="highlight == 3 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname3" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="CSP Available Link To" prop="linkto3" :class="highlight == 3 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto3" placeholder="Please enter" clearable />
			</el-form-item>

			<el-form-item label="HGR initial submission" prop="date4" :class="highlight == 4 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date4" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="HGR initial submission Link Name" prop="linkname4" :class="highlight == 4 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname4" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="HGR initial submission Link To" prop="linkto4" :class="highlight == 4 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto4" placeholder="Please enter" clearable />
			</el-form-item>

			<el-form-item label="HGR initial approval" prop="date5" :class="highlight == 5 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date5" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="HGR initial approval Link Name" prop="linkname5" :class="highlight == 5 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname5" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="HGR initial approval Link To" prop="linkto5" :class="highlight == 5 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto5" placeholder="Please enter" clearable />
			</el-form-item>

			<el-form-item label="FSI" prop="date6" :class="highlight == 6 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date6" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="FSI Link Name" prop="linkname6" :class="highlight == 6 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname6" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="FSI Link To" prop="linkto6" :class="highlight == 6 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto6" placeholder="Please enter" clearable />
			</el-form-item>

			<el-form-item label="LSI" prop="date7" :class="highlight == 7 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date7" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="LSI Link Name" prop="linkname7" :class="highlight == 7 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname7" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="LSI Link To" prop="linkto7" :class="highlight == 7 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto7" placeholder="Please enter" clearable />
			</el-form-item>

			<el-form-item label="NDA-S" prop="date8" :class="highlight == 8 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date8" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="NDA-S Link Name" prop="linkname8" :class="highlight == 8 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname8" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="NDA-S Link To" prop="linkto8" :class="highlight == 8 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto8" placeholder="Please enter" clearable />
			</el-form-item>

			<el-form-item label="NDA-A" prop="date9" :class="highlight == 9 ? 'highlight' : ''">
				<el-date-picker v-model="basicFormData.date9" class="date-form-label" width="100%" type="date"
					placeholder="Pick a date" clearable />
			</el-form-item>
			<el-form-item label="NDA-A Link Name" prop="linkname9" :class="highlight == 9 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkname9" placeholder="Please enter" clearable />
			</el-form-item>
			<el-form-item label="NDA-A Link To" prop="linkto9" :class="highlight == 9 ? 'highlight' : ''">
				<el-input v-model="basicFormData.linkto9" placeholder="Please enter" clearable />
			</el-form-item>
    </el-form>
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
	formData: {
		type: Object as any,
		default: () => {
			return {}
		}
	}
});
const emits = defineEmits(["update:modelValue"]);
const visible = computed(() => {
	return props.modelValue
})
const basicFormData = reactive({
	date1: '',
	linkname1: '',
	linkto1: '',
	date2: '',
	linkname2: '',
	linkto2: '',
	date3: '',
	linkname3: '',
	linkto3: '',
	date4: '',
	linkname4: '',
	linkto4: '',
	date5: '',
	linkname5: '',
	linkto5: '',
	date6: '',
	linkname6: '',
	linkto6: '',
	date7: '',
	linkname7: '',
	linkto7: '',
	date8: '',
	linkname8: '',
	linkto8: '',
	date9: '',
	linkname9: '',
	linkto9: '',
})

const highlight = ref(0)

watch(props.formData, (data) => {
	if (data) {
		const children = data.children || []
		children.forEach((item, index) => {
			basicFormData[`date${index + 1}`] = item.date
			basicFormData[`linkname${index + 1}`] = item.linkName
			basicFormData[`linkto${index + 1}`] = item.linkTo
		})
	}
},{ deep: true, immediate: true })


watch(props.node, (node) => {
	if (node.data) {
		const index = node.data.index
		console.log(index)
		highlight.value = index
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
.highlight{
	:deep(.el-form-item__label){
		color: #20a6fc!important;
	}
	:deep(.el-input__wrapper){
		border: 1.5px solid #20a6fc;
		border-radius: 4px;
	}
	.el-input{

	}
}
</style>
