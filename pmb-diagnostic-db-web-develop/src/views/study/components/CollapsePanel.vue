<template>
  <div class="w-full">
    <div v-if="showTitle" class="py-1">
      {{ title }}
      <el-button class="add-icon" icon="Plus" circle @click="addPanelToLevel" />
    </div>

		<!-- +新增校验 -->
    <el-collapse v-if="panels && panels.length" v-model="localActivePanel" accordion>
      <el-collapse-item
        v-for="(panel, index) in panels"
        :key="index"
        :name="index.toString()"
      >
        <template #title>
					{{ title }}-{{ index.toString() }}
					<div v-if="showAdd" class="add-icon-box" @click.stop="addPanelChild(panel)">
						<el-icon><Plus /></el-icon>
					</div>
					<div v-if="showDelete" class="delete-icon-box" @click.stop="handleDelete(index)">
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
import { defineProps, ref, watch, defineEmits, computed } from "vue";
defineOptions({
  name: "CollapseComponent",
  inheritAttrs: false,
});

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  panels: <any>[],
	
  activePanels: {
    type: String,
    default: "",
  },
	// +新增参数
	showTitle: {
		type: Boolean,
		default: true
	},
	showDelete: {
		type: Boolean,
		default: false
	},
	showAdd: {
		type: Boolean,
		default: false
	}
});

const emits = defineEmits<{
	(e: "add-panel-child"): void;
	(e: "delete-panel"): void;
  (e: "add-panel"): void;
  (e: "update-panel", panel: String): void;
}>();

// const localActivePanel = computed({
//   get: () => props.activePanels,
//   set: () => {}
// });
// 监听 localActivePanel

// interface FirstPanelForm {
//   input1: string;
//   select1: string;
// }
const handleDelete = (index) => {
	emits('delete-panel', index, props.panels)
}
// const props = defineProps<{ panels: FirstPanelForm[] }>();
const localActivePanel = ref(props.activePanels);
watch(localActivePanel, (newVal) => {
  emits("update-panel", newVal);
})
const addPanelToLevel = () => {
  // 暴露给外部 emit 调用
  emits("add-panel", props.panels);
};
const addPanelChild = (panel) => {
	emits("add-panel-child", props.panels, panel);
}
</script>

<style scoped>
.el-form-item {
  margin-bottom: 20px;
}
.delete-icon-box,.add-icon-box{
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
