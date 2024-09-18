<template>
  <div class="w-full" style="margin-top: 15px;">
    <!-- <el-button type="primary" @click="addPanelToFirst">
      新增第一个折叠组件面板
    </el-button> -->
    <CollapseComponent title="Study Level 3" style="font-size: 14px;color: #4a4a4a;" :panels="panelForms"
      :active-panels="activePanels" @add-panel="addPanelToFirst" @delete-panel="deletePanelToFirst"
      @update-panel="updatePanel">

      <template #panel-widget="{ item, idx }">
        <el-form :model="item" label-position="top" label-width="150" class="filter-form-inline"
          style="margin-top: 10px;" ref="queryFormRef">
          <el-row :gutter="10">
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="CDx ID" prop="cdxId">
                <el-input v-model="item.cdxId" disabled />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="CDx Managed by" prop="cdxManagedBy">
                <el-select-v2 v-model="item.cdxManagedBy" placeholder="Please select" :options="cdxManagedByOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Dx activity stage" prop="dxActivityStage">
                <el-select-v2 v-model="item.dxActivityStage" placeholder="Please select"
                  :options="dxActivityStageOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="CDx category" prop="cdxCategory">
                <el-select-v2 v-model="item.cdxCategory" placeholder="Please select" :options="cdxCategoryOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Biomark" prop="biomarker">
                <el-input v-model="item.biomark" placeholder="Please enter" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Dx partner" prop="dxPartner">
                <el-input v-model="item.dxPartner" disabled />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Assay Name" prop="assayName">
                <el-input v-model="item.assayName" disabled />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Assay ID" prop="assayId">
                <el-input v-model="item.assayId" placeholder="Please enter" clearable
                  @blur="onInputChange($event, idx)" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Sample type" prop="sampleType">
                <el-select-v2 v-model="item.sampleType" placeholder="Please select" :options="sampleTypeOptions"
                  @change="makeWpId(idx)" />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Technology Platform" prop="technologyPlatform">
                <el-select-v2 v-model="item.technologyPlatform" placeholder="Please select"
                  :options="technologyPlatformOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="CDx strategy" prop="cdxStrategy">
                <el-input v-model="item.cdxStrategy" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
              <el-form-item label="Tumor type" prop="tumorType">
                <el-select-v2 v-model="item.tumorType" placeholder="Please select" :options="tumorTypeOptions" />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Assay selection date" prop="cdxAssaySelectionDate">
                <el-date-picker v-model="item.cdxAssaySelectionDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Assay selection Link Name" prop="studyTitle">
                <el-input v-model="item.linkName1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Assay selection Link To" prop="studyTitle">
                <el-input v-model="item.linkTo1" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Contract date" prop="cdxContractDate">
                <el-date-picker v-model="item.cdxContractDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Contract Link Name" prop="studyTitle">
                <el-input v-model="item.linkName2" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Contract Link To" prop="studyTitle">
                <el-input v-model="item.linkTo2" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="AV completion date" prop="avCompletionDate">
                <el-date-picker v-model="item.avCompletionDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="AV completion Link Name" prop="studyTitle">
                <el-input v-model="item.linkName3" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="AV completion Link To" prop="studyTitle">
                <el-input v-model="item.linkTo3" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Type testing completion date" prop="typeTestingCompletionDate">
                <el-date-picker v-model="item.typeTestingCompletionDate" class="date-form-label" width="100%"
                  type="date" placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Type testing completion Link Name" prop="studyTitle">
                <el-input v-model="item.linkName4" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Type testing completion Link To" prop="studyTitle">
                <el-input v-model="item.linkTo4" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx HGR Approval Date" prop="cdxHgrApprovalDate">
                <el-date-picker v-model="item.cdxHgrApprovalDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx HGR Approval Link Name" prop="studyTitle">
                <el-input v-model="item.linkName5" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx HGR Approval Link To" prop="studyTitle">
                <el-input v-model="item.linkTo5" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Ring study & Reader precision date" prop="ringStudyReaderPrecisionDate">
                <el-date-picker v-model="item.ringStudyReaderPrecisionDate" class="date-form-label" width="100%"
                  type="date" placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CRing study & Reader precision Link Name" prop="studyTitle">
                <el-input v-model="item.linkName6" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Ring study & Reader precision Link To" prop="studyTitle">
                <el-input v-model="item.linkTo6" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Clinical IVD trial completion date" prop="clinicalIvdTrialCompletionDate">
                <el-date-picker v-model="item.clinicalIvdTrialCompletionDate" class="date-form-label" width="100%"
                  type="date" placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Clinical IVD trial completion Link Name" prop="studyTitle">
                <el-input v-model="item.linkName7" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Clinical IVD trial completion Link To" prop="studyTitle">
                <el-input v-model="item.linkTo7" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Lab readiness date" prop="cdxLabReadinessDate">
                <el-date-picker v-model="item.cdxLabReadinessDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Lab readiness Link Name" prop="studyTitle">
                <el-input v-model="item.linkName8" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx Lab readiness Link To" prop="studyTitle">
                <el-input v-model="item.linkTo8" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Bridging study initiation date" prop="bridgingStudyInitiationDate">
                <el-date-picker v-model="item.bridgingStudyInitiationDate" class="date-form-label" width="100%"
                  type="date" placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Bridging study initiation Link Name" prop="studyTitle">
                <el-input v-model="item.linkName9" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Bridging study initiation Link To" prop="studyTitle">
                <el-input v-model="item.linkTo9" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Bridging study completion date" prop="bridgingStudyCompletionDate">
                <el-date-picker v-model="item.bridgingStudyCompletionDate" class="date-form-label" width="100%"
                  type="date" placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Bridging study completion Link Name" prop="studyTitle">
                <el-input v-model="item.linkName10" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="Bridging study completion Link To" prop="studyTitle">
                <el-input v-model="item.linkTo10" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx submission date" prop="cdxSubmissionDate">
                <el-date-picker v-model="item.cdxSubmissionDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx submission Link Name" prop="studyTitle">
                <el-input v-model="item.linkName11" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx submission Link To" prop="studyTitle">
                <el-input v-model="item.linkTo11" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx approval date" prop="cdxApprovalDate">
                <el-date-picker v-model="item.cdxApprovalDate" class="date-form-label" width="100%" type="date"
                  placeholder="Pick a date" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx approval Link Name" prop="studyTitle">
                <el-input v-model="item.linkName12" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>

            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx approval Link To" prop="studyTitle">
                <el-input v-model="item.linkTo12" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx certificate number" prop="cdxCertificateNumber">
                <el-input v-model="item.cdxCertificateNumber" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="CDx contract" prop="cdxContract">
                <el-input v-model="item.cdxContract" placeholder="Please enter" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row></el-row>
        </el-form>
      </template>
    </CollapseComponent>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "StudyLevelFour",
  inheritAttrs: false,
  components: {
    CollapseComponent,
  },
});
import { ref, defineExpose } from "vue";
import CollapseComponent from "../components/CollapseComponent.vue";
import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";

interface StudyLevelThreeForm { // level 3 表单对象
  cdxId: string;
  testingPurpose: string;
  testingManagmentType: string;
  wpStatus: string;
  biomark: string;
  testingLab: string;
  assayName: string;
  assayId: string;
  sampleType: string;
  technologyGroup: string;
  technologyPlatform: string;
  testStrategy: string;
  localIecNeeded: string;
  localIecApprovedDate: string;
  assaySelection: string;
  labSelection: string;
  labReadiness: string;
  fst: string;
  lst: string;
  dataReconCompletion: string;
  dco: string;
  dbl: string;
}
const props = defineProps({
  studyName: {
    type: [String, Number],
    default: ''
  }
})


const panelForms = ref<StudyLevelThreeForm[]>([{}]);
const activePanels = ref<String>("0");

const cdxManagedByOptions = ref<OptionType[]>([
  { "value": "PMB global", "label": "PMB global" },
  { "value": "PMB China", "label": "PMB China" },
  { "value": "China Commercial", "label": "China Commercial" },
  { "value": "Other", "label": "Other" }
]);
const dxActivityStageOptions = ref<OptionType[]>([
  { "value": "Setup", "label": "Setup" },
  { "value": "Vendor selection", "label": "Vendor selection" },
  { "value": "other", "label": "other" }
]);
const cdxCategoryOptions = ref<OptionType[]>([
  { "value": "Co-Dx", "label": "Co-Dx" },
  { "value": "Primary CDx", "label": "Primary CDx" },
  { "value": "Follow on CDx", "label": "Follow on CDx" }
]);
const sampleTypeOptions = ref<OptionType[]>([
  { "value": "Tissue", "label": "Tissue" },
  { "value": "Plasma (ctDNA)", "label": "Plasma (ctDNA)" },
  { "value": "Blood", "label": "Blood" },
  { "value": "Other", "label": "Other" }
]);
const tumorTypeOptions = ref<OptionType[]>([
  { "value": "NGS", "label": "NGS" },
  { "value": "PCR", "label": "PCR" },
  { "value": "IHC", "label": "IHC" },
  { "value": "FISH", "label": "FISH" },
  { "value": "ISH", "label": "ISH" },
  { "value": "QCS", "label": "QCS" },
  { "value": "other", "label": "other" }
]);
const technologyPlatformOptions = ref<OptionType[]>([
  { "value": "PC", "label": "PC" },
  { "value": "BC", "label": "BC" },
  { "value": "OC", "label": "OC" }
]);

const emits = defineEmits(['handleCount', 'handleCdx'])
const addPanelToFirst = () => {
  panelForms.value.unshift({});
  // 折叠其他面板
  activePanels.value = "0";
  emits('handleCount', panelForms.value.length)
  const wpValues: any[] = [];
  for (const key in panelForms.value) {

    const form = panelForms.value[key];
    if (typeof form.cdxId === 'string' && form.cdxId != '' && form.cdxId != null && form.cdxId != undefined) {
      wpValues.push({ label: form.cdxId, value: form.cdxId });
    }

  }
  emits('handleCdx', wpValues)
};
const deletePanelToFirst = (e: any) => {
  if (panelForms.value.length < 2) {
    ElMessage.error('至少保留一个面板');
    return
  }
  panelForms.value.splice(e, 1)
  emits('handleCount', panelForms.value.length)
  const wpValues: any[] = [];
  for (const key in panelForms.value) {

    const form = panelForms.value[key];
    if (typeof form.cdxId === 'string' && form.cdxId != '' && form.cdxId != null && form.cdxId != undefined) {
      wpValues.push({ label: form.cdxId, value: form.cdxId });
    }

  }
  emits('handleCdx', wpValues)
}

const onInputChange = (event: Event, extraParam: number) => {
  console.log('输入值改变了:', event.target?.value);
  console.log('额外参数:', extraParam);
  StudyAPI.getAssayById({ assayId: event.target?.value })
    .then((data) => {
      if (data != null && data.assayName != null && data.assayName != '') {
        panelForms.value[extraParam].assayName = data.assayName
      } else {
        panelForms.value[extraParam].assayName = ''
      }
      if (data != null && data.partner != null && data.partner != '') {
        panelForms.value[extraParam].dxPartner = data.partner
      } else {
        panelForms.value[extraParam].dxPartner = ''
      }


    })
    .finally(() => {

    });
};

const makeWpId = (e: number) => {
  panelForms.value[e].cdxId = 'CDx_' + props.studyName + '_' + panelForms.value[e].biomark + '_' + panelForms.value[e].sampleType
  const wpValues: any[] = [];
  for (const key in panelForms.value) {

    const form = panelForms.value[key];
    if (typeof form.cdxId === 'string' && form.cdxId != '' && form.cdxId != null && form.cdxId != undefined) {
      wpValues.push({ label: form.cdxId, value: form.cdxId });
    }

  }
  emits('handleCdx', wpValues)
}
const updatePanel = (e: String) => {
  console.log("切换了", e);
}
const getPanalForm = () => {
  return panelForms.value
}
defineExpose({
  getPanalForm
})
</script>
<style lang="scss" scoped>
:deep(.date-form-label) {
  width: 100%;
}

:deep(.el-form-item__label) {
  color: #516a83;
  font-size: 11px;
}
</style>
