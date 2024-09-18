<template>
  <div class="w-full">
    <div class="py-1">
      {{ title }}
      <el-button style="width: 15px;height: 15px;" icon="Plus" circle @click="addPanelToLevel" />
    </div>

    <el-collapse v-model="localActivePanel" accordion>
      <el-collapse-item v-for="(panel, index) in panels" :key="index" :name="index.toString()">
        <template #title>
          {{ title }}-{{ index.toString() }}
          <div class="add-icon-box" @click.stop="addPanelChild(panel)">
            <el-icon>
              <Plus />
            </el-icon>
          </div>
          <el-button style="width: 15px;height: 15px;right: 30px;position: absolute;" icon="Minus" circle
            @click.stop="deletePanelToLevel(index)" />
        </template>
        <slot name="panel-widget" :item="panel" :idx="index"></slot>
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
});

const emits = defineEmits<{
  (e: "add-panel"): void;
  (e: "delete-panel", panel: String): void;
  (e: "update-panel", panel: String): void;
  (e: "add-panel-child"): void;
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

// const props = defineProps<{ panels: FirstPanelForm[] }>();
const localActivePanel = ref(props.activePanels);
watch(localActivePanel, (newVal) => {
  emits("update-panel", newVal);
})
const addPanelToLevel = () => {
  // 暴露给外部 emit 调用
  emits("add-panel");
};
const deletePanelToLevel = (indax: any) => {
  // 暴露给外部 emit 调用
  emits("delete-panel", indax);
};
const addPanelChild = (panel) => {
  emits("add-panel-child", props.panels, panel);
}
</script>

<style scoped>
.el-form-item {
  margin-bottom: 20px;
}

::v-deep(.py-1) {
  color: #4a4a4a;
  font-size: 14px;
}

::v-deep(.el-collapse-item__header) {
  font-size: 11px;
  color: #516a83;
}
</style>
