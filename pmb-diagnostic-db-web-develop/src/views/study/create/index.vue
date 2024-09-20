<template>
  <div class="study-page-container">
    <el-card shadow="never">
      <el-form class="pa-3">
        <el-row justify="space-between">
          <!-- <StudyBasicForm></StudyBasicForm> -->
          <StudyLevelOne @handleStudyName="handleStudyName" :hgrApproveDate="hgrApproveDate" :hgrSubmissionDate="hgrSubmissionDate" :cdxCount="cdxCount" :wpCount="wpCount" ref="levelOneRef">
          </StudyLevelOne>
          <StudyLevelTwoForm :studyName="studyName" @handleCount="handleCount" @handleWps="handleWps" ref="levelTwoRef">
          </StudyLevelTwoForm>
          <StudyLevelThree :studyName="studyName" @handleCount="handleThreeCount" @handleCdx="handleCdx"
            ref="levelThreeRef"></StudyLevelThree>
          <StudyLevelFour @handleHgrSubmissionDate="handleHgrSubmissionDate" @handleHgrApproveDate="handleHgrApproveDate" ref="levelFourRef"></StudyLevelFour>
          <!-- <LevelFour ref="levelFourRef" v-model="visible.level4" :title="currentData.title"
            :disabled="currentData.disabled" :node="currentData.node" :formData="currentData.formData" /> -->
          <StudyLevelFive :wps="wps" :cdx="cdx" ref="levelFiveRef" style="width: 100%;"></StudyLevelFive>
        </el-row>
        <div :span="24" class="flex-x-center">
          <el-button type="primary" round @click="SubmitStudy">Submit</el-button>
          <el-button round @click="BackToStudy">Back</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "StudyNew",
  inheritAttrs: false,
  components: {
    StudyBasicForm,
    StudyLevelOne,
    StudyLevelTwoForm,
  },
});
import { onMounted } from "vue";
import StudyBasicForm from "@/views/study/components/StudyBasicForm.vue";
import StudyLevelOne from "@/views/study/components/StudyLevelOne.vue";
import StudyLevelTwoForm from "@/views/study/create/StudyLevelTwoForm.vue";
import StudyLevelThree from "@/views/study/create/StudyLevelThree.vue";
import StudyLevelFour from "@/views/study/create/StudyLevelFour.vue";
import StudyLevelFive from "@/views/study/create/StudyLevelFive.vue";
import LevelFour from './LevelFour.vue'
import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";

const loading = ref(false);

const hgrSubmissionDate = ref('')
const hgrApproveDate = ref('')

const wpCount = ref(1)
const wps = ref([])
const cdx = ref([])
const cdxCount = ref(1)
const studyName = ref('')
const handleCount = (val) => {
  wpCount.value = val
}

const handleWps = (val) => {
  wps.value = val
}
const handleThreeCount = (val) => {
  cdxCount.value = val
}

const handleCdx = (val) => {
  cdx.value = val
}
const handleStudyName = (val) => {
  studyName.value = val
}
const handleHgrSubmissionDate = (val) => {
  debugger
  hgrSubmissionDate.value = val
}
const handleHgrApproveDate = (val) => {
  hgrApproveDate.value = val
}

const router = useRouter();
const levelTwoRef = ref()
const levelOneRef = ref()
const levelThreeRef = ref()
const levelFourRef = ref()
const levelFiveRef = ref()
const SubmitStudy = () => {
  // 提交表单接口
  handleInsert()

}
/** 查询 */
function handleInsert() {
  loading.value = true;
  let insertParams = {
    studyLevel1Unique: levelOneRef.value.getPanalForm(),
    studyLevel2WorkingPackageList: levelTwoRef.value.getPanalForm(),
    studyLevel3HgrList: levelThreeRef.value.getPanalForm(),
    // studyLevel5Cdx: levelFourRef.value.getFormData(),
    studyLevel5CdxList: levelFourRef.value.getPanalForm(),
    studyLevel6OtherAct: levelFiveRef.value.getPanalForm(),
  }

  let error = 'Please enter'
  if(levelOneRef.value.getPanalForm().franchiseName == undefined ||levelOneRef.value.getPanalForm().franchiseName == '' || levelOneRef.value.getPanalForm().franchiseName == null ) {
    // ElMessage.error('Please enter franchiseName');
    error = error + ' franchiseName'
  } 
  if(levelOneRef.value.getPanalForm().drugName == undefined ||levelOneRef.value.getPanalForm().drugName == '' || levelOneRef.value.getPanalForm().drugName == null ) {
    // ElMessage.error('Please enter drugName');
     error = error + ' drugName'
  } 
  
  if(levelOneRef.value.getPanalForm().studyName == undefined ||levelOneRef.value.getPanalForm().studyName == '' || levelOneRef.value.getPanalForm().studyName == null ) {
    // ElMessage.error('Please enter studyName');
    error = error + ' studyName'
  }

  if(error != 'Please enter') {
    ElMessage.error(error);
  } else {
    StudyAPI.add(insertParams)
    .then((data) => {
      if(data) {
        ElMessage.success('save success');
      } else {
        ElMessage.error('study name repeat');
      }
      
    })
    .finally(() => {
      loading.value = false;
    });
  }
  
}
const BackToStudy = () => {
  router.push('/study/page');
}

onMounted(() => { });
</script>

<style lang="scss" scoped>
.study-page-container {
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
  background-color: white;
}
</style>
