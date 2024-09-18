<template>
  <div class="statics-image flex items-center align-center">
    <div class="statics-info-widget">
      <div style="font-size:11px;color: #a5a5a5;">{{ title }}</div>
      <div v-if="!isLink" class="number" >{{ countNum }}</div>
      <div v-else>
        <!-- <el-button type="text" style="size:18px;">{{ countNum }}</el-button> -->
        <div class="number-container" @click="handleClick">
          <span class="large-number">{{ countNum }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";

const queryParams = reactive<StudyTableQuery>({
  pageNum: 1,
  pageSize: 10,
  studyManagmentType: '',
  franchiseName: '',
  studyName: '',
  type: '',
  studyPhase: '',
  studyTumorType: '',
  studyLine: '',
  studyStatus: '',
  mainStudyDesign: '',
  testingManagmentType: '',
  biomarkerName: '',
  testingLab: '',
  assayName: '',
  sampleType: '',
  technologyGroup: '',
  cdxManagedBy: '',
  dateType: '',
  startDate: '',
  endDate: ''
});
defineOptions({
  name: "StaticsImages",
  inheritAttrs: false,
});

const emits = defineEmits(['handleList','handleTotal'])

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  countNum: {
    type: String,
    default: "",
  },
  isLink: {
    type: Boolean,
    default: null,
  },
  type: {
    type: String,
    default: "",
  }
});

const handleClick = () => {
  queryParams.type = props.type
  StudyAPI.getPageByStatus(queryParams)
  .then((data) => {
      emits('handleList', data.list)
      emits('handleTotal', data.total)
    })
    .finally(() => {
    });
}

onMounted(() => {});
</script>
<style lang="scss" scoped>
.statics-image {
  width: 16%;
  height: 60px;

  .statics-info-widget {
    min-width: 120px;
    // padding-left: 24px;
  }
}
.number-container {
  cursor: pointer;
}

.large-number {
  font-size: 14px;
  color: #516a83;
  font-weight: bold;
}
.number {
  font-size: 14px;
  color: #516a83;
}
</style>
