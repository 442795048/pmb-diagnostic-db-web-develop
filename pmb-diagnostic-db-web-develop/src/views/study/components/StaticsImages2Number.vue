<template>
  <div class="statics-image flex items-center align-center">
    <div class="statics-info-widget">
      <div style="font-size:11px;color: #a5a5a5;">{{ title }}</div>
      <div class="number-combination">
        <div class="number-container" @click="handlePlanClick">
          <span class="large-number">{{ planCountNum }}</span>
        </div>
        <div class="number-container" @click="handlePlanClick">
          <span class="large-number">/</span>
        </div>
        <div class="number-container" @click="handleAchievedClick">
          <span class="large-number">{{ achieveCountNum }}</span>
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
  planCountNum: {
    type: String,
    default: "",
  },
  achieveCountNum: {
    type: String,
    default: "",
  },
  isLink: {
    type: Boolean,
    default: null,
  },
  planType: {
    type: String,
    default: "",
  },
  achieveType: {
    type: String,
    default: "",
  }
});

const handlePlanClick = () => {
  queryParams.type = props.planType
  StudyAPI.getPageByStatus(queryParams)
  .then((data) => {
      emits('handleList', data.list)
      emits('handleTotal', data.total)
    })
    .finally(() => {
    });
}
const handleAchievedClick = () => {
  queryParams.type = props.achieveType
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
  flex: 1;
}
.number-combination {
  display: flex;

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
