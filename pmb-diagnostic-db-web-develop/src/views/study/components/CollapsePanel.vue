<template>
  <div class="w-full">
    <div v-if="showTitle" class="w-full-title py-1">
      {{ title }}
      <!-- <el-button class="add-icon" icon="Plus" circle @click="addPanelToLevel" /> -->
			<div v-if="showTitleBtn" class="add-icon-box" @click="addPanelToLevel">
				<el-icon><Plus /></el-icon>
			</div>
    </div>

		<!-- +新增校验 -->
    <el-collapse v-if="panels && panels.length" v-model="localActivePanel" accordion>
      <el-collapse-item
        v-for="(panel, index) in panels"
        :key="index"
        :name="index.toString()"
      >
        <template #title>
					{{ title }}-{{ (index + 1).toString() }}
					<div v-if="getShowAddBtn(panel, index)" class="add-icon-box" @click.stop="addPanelChild(panel)">
						<el-icon><Plus /></el-icon>
					</div>
					<div v-if="getShowDeleteBtn(panel, index)" class="delete-icon-box" @click.stop="handleDelete(index)">
						<el-icon><Minus /></el-icon>
					</div>
				</template>
        <slot name="panel-widget" :item="panel" :idx="index" :row="panel" :index="index">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="输入框1">
                <el-input v-model="panel.input1" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="下拉框1">
                <el-select v-model="panel.select1">
                  <el-option label="选项1" value="option1" />
                  <el-option label="选项2" value="option2" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </slot>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch, defineEmits, computed, watchEffect } from "vue";
defineOptions({
  name: "CollapseComponent",
  inheritAttrs: false,
});

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  panels: {
    type: Array as any,
    default: "",
  },
  activePanels: {
    type: String as any,
    default: "",
  },
	// +新增参数
	showTitle: {
		type: Boolean,
		default: true
	},
	showTitleBtn: {
		type: Boolean,
		default: true
	},
	showDelete: {
		type: [Boolean, Function],
		default: false
	},
	showAdd: {
		type: [Boolean, Function],
		default: false
	}
});

const emits = defineEmits(['add-panel-child', 'delete-panel', 'add-panel', 'update-panel']);

const getShowAddBtn = (panel: any, index: number) => {
	if(typeof props.showAdd == 'function') {
		return props.showAdd(panel, index, props.panels)
	}
	return props.showAdd
}

const getShowDeleteBtn = (panel: any, index: number) => {
	if(typeof props.showDelete == 'function') {
		return props.showDelete(panel, index, props.panels)
	}
	return props.showDelete
}
// const localActivePanel = computed({
//   get: () => props.activePanels,
//   set: () => {}
// });
// 监听 localActivePanel

// interface FirstPanelForm {
//   input1: string;
//   select1: string;
// }
const handleDelete = (index: number) => {
	emits('delete-panel', index, props.panels)
}
// const props = defineProps<{ panels: FirstPanelForm[] }>();
const localActivePanel = ref(props.activePanels);
watch(localActivePanel, (newVal) => {
  emits("update-panel", newVal);
})
watchEffect(() => {
	if (props.activePanels) {
		localActivePanel.value = props.activePanels
  }
})
const addPanelToLevel = () => {
  // 暴露给外部 emit 调用
  emits("add-panel", props.panels);
};
const addPanelChild = (panel: any) => {
	emits("add-panel-child", props.panels, panel);
}
</script>

<style scoped>
.el-form-item {
  margin-bottom: 20px;
}
.w-full-title{
	display: flex;
	align-items: center;
}
.delete-icon-box,.add-icon-box{
	cursor: pointer;
	color: #409EFF;
	margin-left: 10px;
	border: 1px solid #409EFF;
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
}
</style>
