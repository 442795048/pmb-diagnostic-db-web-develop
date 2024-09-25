<template>
  <div class="study-page-container">
    <el-card body-class="study-page-container-card">
      <el-row justify="space-between">
        <el-col style="padding-bottom: 30px;">
          <div class="bar">
            {{ $t("summary") }}
          </div>
          <div class="image-parent" style="border-top: 1.2px solid #ccd7e0;">
            <StaticsImages title="Total study number" :type="'total'" :count-num="totalStudyNumber" style="flex:1" />
            <StaticsImages @handleList="handleList" @handleTotal="handleTotal" title="Total study in progress" :type="'inProgress'" :isLink="true" :count-num="totalStudyInProgress"
              style="flex:1" @click="" />
            <StaticsImages @handleList="handleList" @handleTotal="handleTotal" title="Total study approved" :type="'approved'" :isLink="true" :count-num="totalStudyApproved" style="flex:1" />
            <StaticsImages @handleList="handleList" @handleTotal="handleTotal" :title="'Number of New Study in ' + new Date().getFullYear()" :isLink="true" :type="'numberOfNewStudy'"
              :count-num="numberOfNewStudyThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" @handleTotal="handleTotal" :title="'Number of Study Starts in ' + new Date().getFullYear()" :isLink="true" :type="'numberOfStudyStarts'"
              :count-num="numberOfStudyStartsThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" @handleTotal="handleTotal" :title="'Number of Study Close in ' + new Date().getFullYear()" :isLink="true" :type="'numberOfStudyClose'"
              :count-num="numberOfStudyCloseThisYear" style="flex:1" />
          </div>
         
          <!-- <div class="image-parent11">
            <StaticsImages @handleList="handleList" :title="'Planned Dx strategy number in ' + new Date().getFullYear()" :isLink="true" :type="'plannedDxStrategy'"
              :count-num="plannedDxStrategyNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Planned Lab Readiness number in ' + new Date().getFullYear()" :isLink="true" :type="'plannedLabReadiness'"
              :count-num="plannedLabReadinessNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Planned FST number in ' + new Date().getFullYear()" :isLink="true" :type="'plannedFstNumber'"
              :count-num="plannedFstNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Planned LST number in ' + new Date().getFullYear()" :isLink="true" :type="'plannedLstNumber'"
              :count-num="plannedLstNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Planned CDx strategy number in ' + new Date().getFullYear()" :isLink="true" :type="'plannedCdxStrategyNumber'"
              :count-num="plannedCdxStrategyNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Planned CDx collaboration number in ' + new Date().getFullYear()" :isLink="true" :type="'plannedCdxCollaborationNumber'"
              :count-num="plannedCdxCollaborationNumberThisYear" style="flex:1" />
          </div>
          <div class="image-parent">
            <StaticsImages @handleList="handleList" :title="'Achieved Dx strategy number in ' + new Date().getFullYear()" :isLink="true" :type="'achievedDxStrategyNumber'"
              :count-num="achievedDxStrategyNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Achieved Lab Readiness number in ' + new Date().getFullYear()" :isLink="true" :type="'achievedLabReadinessNumber'"
              :count-num="achievedLabReadinessNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Achieved FST number in ' + new Date().getFullYear()" :isLink="true" :type="'achievedFstNumber'"
              :count-num="achievedFstNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Achieved LST number in ' + new Date().getFullYear()" :isLink="true" :type="'achievedLstNumber'"
              :count-num="achievedLstNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Achieved CDx strategy number in ' + new Date().getFullYear()" :isLink="true" :type="'achievedCdxStrategyNumber'"
              :count-num="achievedCdxStrategyNumberThisYear" style="flex:1" />
            <StaticsImages @handleList="handleList" :title="'Achieved CDx collaboration number in ' + new Date().getFullYear()" :isLink="true" :type="'achievedCdxCollaborationNumber'"
              :count-num="achievedCdxCollaborationNumberThisYear" style="flex:1" />
          </div> -->

          <div class="image-parent">
            <StaticsImages2Number @handleList="handleList" @handleTotal="handleTotal" :title="'Planned/Achieved Dx strategy number in ' + new Date().getFullYear()" :isLink="true" :planType="'plannedDxStrategy'" :achieveType="'achievedDxStrategyNumber'"
              :plan-count-num="plannedDxStrategyNumberThisYear" :achieve-count-num="achievedDxStrategyNumberThisYear" style="flex:1" />
            <StaticsImages2Number @handleList="handleList" @handleTotal="handleTotal"  :title="'Planned/Achieved Lab Readiness number in ' + new Date().getFullYear()" :isLink="true" :planType="'plannedLabReadiness'" :achieveType="'achievedLabReadinessNumber'"
              :plan-count-num="plannedLabReadinessNumberThisYear" :achieve-count-num="achievedLabReadinessNumberThisYear" style="flex:1" />
            <StaticsImages2Number @handleList="handleList" @handleTotal="handleTotal" :title="'Planned/Achieved FST number in ' + new Date().getFullYear()" :isLink="true" :planType="'plannedFstNumber'" :achieveType="'achievedFstNumber'"
              :plan-count-num="plannedFstNumberThisYear" :achieve-count-num="achievedFstNumberThisYear" style="flex:1" />
            <StaticsImages2Number @handleList="handleList" @handleTotal="handleTotal" :title="'Planned/Achieved LST number in ' + new Date().getFullYear()" :isLink="true" :planType="'plannedLstNumber'" :achieveType="'achievedLstNumber'"
              :plan-count-num="plannedLstNumberThisYear" :achieve-count-num="achievedLstNumberThisYear" style="flex:1" />
            <StaticsImages2Number @handleList="handleList" @handleTotal="handleTotal" :title="'Planned/Achieved CDx strategy number in ' + new Date().getFullYear()" :isLink="true" :planType="'plannedCdxStrategyNumber'" :achieveType="'achievedCdxStrategyNumber'"
              :plan-count-num="plannedCdxStrategyNumberThisYear" :achieve-count-num="achievedCdxStrategyNumberThisYear" style="flex:1" />
            <StaticsImages2Number @handleList="handleList" @handleTotal="handleTotal" :title="'Planned/Achieved CDx collaboration number in ' + new Date().getFullYear()" :isLink="true" :planType="'plannedCdxCollaborationNumber'" :achieveType="'achievedCdxCollaborationNumber'"
              :plan-count-num="plannedCdxCollaborationNumberThisYear" :achieve-count-num="achievedCdxCollaborationNumberThisYear" style="flex:1" />
          </div>
        </el-col>

        <el-col :span="6" :xs="24" />
      </el-row>
    </el-card>
    <StudyTable :studys="studys":total="total"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import StudyTable from "../components/StudyTable.vue";
import StaticsImages from "../components/StaticsImages.vue";
import StaticsImages2Number from "../components/StaticsImages2Number.vue";
import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";
defineOptions({
  name: "Study",
  components: {
    StudyTable,
    StaticsImages,
  },
  inheritAttrs: false,
});

/** 加载访问统计数据 */

const totalStudyNumber = ref(0);
const totalStudyInProgress = ref(0);
const totalStudyApproved = ref(0);
const numberOfNewStudyThisYear = ref(0);
const numberOfStudyStartsThisYear = ref(0);
const numberOfStudyCloseThisYear = ref(0);
const plannedDxStrategyNumberThisYear = ref(0);
const plannedLabReadinessNumberThisYear = ref(0);
const plannedFstNumberThisYear = ref(0);
const plannedLstNumberThisYear = ref(0);
const plannedCdxStrategyNumberThisYear = ref(0);
const plannedCdxCollaborationNumberThisYear = ref(0);
const achievedDxStrategyNumberThisYear = ref(0);
const achievedLabReadinessNumberThisYear = ref(0);
const achievedFstNumberThisYear = ref(0);
const achievedLstNumberThisYear = ref(0);
const achievedCdxStrategyNumberThisYear = ref(0);
const achievedCdxCollaborationNumberThisYear = ref(0);


const studys = ref<StudyList[]>();
const total = ref<number>();
onMounted(() => {
  loadStudyStatsData();
  // loadOptionsData();
});

const loadStudyStatsData = async () => {
  StudyAPI.getStudyAll()
    .then((data) => {
      totalStudyNumber.value = data.total;
      totalStudyInProgress.value = data.inProgress
      totalStudyApproved.value = data.approved
      numberOfNewStudyThisYear.value = data.newStudy
      numberOfStudyStartsThisYear.value = data.studyStarts
      numberOfStudyCloseThisYear.value = data.studyClose
      plannedDxStrategyNumberThisYear.value = data.plannedDxStrategy
      plannedLabReadinessNumberThisYear.value = data.plannedLabReadiness
      plannedFstNumberThisYear.value = data.plannedFst
      plannedLstNumberThisYear.value = data.plannedLst
      plannedCdxStrategyNumberThisYear.value = data.plannedCdxStrategy
      plannedCdxCollaborationNumberThisYear.value = data.plannedCdxCollaboration

      achievedDxStrategyNumberThisYear.value = data.achievedDxStrategy
      achievedLabReadinessNumberThisYear.value = data.achievedLabReadiness
      achievedFstNumberThisYear.value = data.achievedFst
      achievedLstNumberThisYear.value = data.achievedLst
      achievedCdxStrategyNumberThisYear.value = data.achievedCdxStrategy
      achievedCdxCollaborationNumberThisYear.value = data.achievedCdxCollaboration

    })
    .finally(() => {

    });

    
};

const handleList = (val) => {
  studys.value = val
}
const handleTotal = (val) => {
  total.value = val
}

</script>

<style lang="scss" scoped>
.study-page-container {
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
  background-color: white;
}

.bar {
  color: #4a4a4a;
  font-size: 14px;
  margin-bottom: 6px;
}

.image-parent {
  display: flex;
  justify-content: space-between;
  // padding-bottom: 30px;

}

:deep(.study-page-container-card) {
  padding-top: 6px;
  padding-bottom: 0;
}

// .statics-image {
//   width: 80px;
//   height: 80px;
// }</style>
