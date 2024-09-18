<template>
  <div class="custom-tree-container">
    <!-- <p>Using scoped slot</p> -->
    <el-tree
      style="max-width: 600px"
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <el-button
              v-if="data.buttons?.includes('edit')"
              type="primary"
              text
            >
              Edit
            </el-button>
            <el-button v-if="data.buttons?.includes('add')" type="primary" text>
              Add
            </el-button>
            <!-- <a style="margin-left: 8px" @click="remove(node, data)">Delete</a> -->
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type Node from "element-plus/es/components/tree/src/model/node";
// 定义树形结构
interface Tree {
  id: number;
  label: string;
  buttons?: String[]; //每一层按钮
  children?: Tree[];
}
let id = 1000;

const append = (data: Tree) => {
  const newChild = { id: id++, label: "testtest", children: [] };
  if (!data.children) {
    data.children = [];
  }
  data.children.push(newChild);
  dataSource.value = [...dataSource.value];
};

const remove = (node: Node, data: Tree) => {
  const parent = node.parent;
  const children: Tree[] = parent.data.children || parent.data;
  const index = children.findIndex((d) => d.id === data.id);
  children.splice(index, 1);
  dataSource.value = [...dataSource.value];
};

// Pre-PH3ID	LSPC	CSP Available	HGR initial submission	HGR initial approval	FSI	LSI

// NDA-S	NDA-A

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: "Study level 1 (Unique)",
    buttons: [],
    children: [
      {
        id: 1,
        label: "Pre-PH3ID",
        buttons: ["edit"],
      },
      {
        id: 2,
        label: "LSPC",
        buttons: ["edit"],
      },
      {
        id: 3,
        label: "CSP Available",
        buttons: ["edit"],
      },
      {
        id: 4,
        label: "HGR initial submission",
        buttons: ["edit"],
      },
      {
        id: 5,
        label: "HGR initial approval",
        buttons: ["edit"],
      },
      {
        id: 6,
        label: "FSI",
        buttons: ["edit"],
      },
      {
        id: 7,
        label: "LSI",
        buttons: ["edit"],
      },
      {
        id: 8,
        label: "NDA-S",
        buttons: ["edit"],
      },
      {
        id: 9,
        label: "NDA-A",
        buttons: ["edit"],
      },
    ],
  },
  {
    id: 2,
    label: "Study Level 2 (Working package) ",
    buttons: ["add"],
    children: [
      {
        id: 5,
        label: "Level two 2-1",
        children: [
          {
            id: 5,
            label: "Level two 2-1",
            buttons: ["edit"],
          },
        ],
      },
      {
        id: 6,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Study Level 3(CDx)",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },

  {
    id: 4,
    label: "Study Level 4(HGR)",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
  {
    id: 5,
    label: "Study Level5(Issue log)",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
  {
    id: 6,
    label: "Study level 6 (Other activities)",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
]);
</script>

<style>
.custom-tree-node {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  font-size: 14px;
}
</style>
