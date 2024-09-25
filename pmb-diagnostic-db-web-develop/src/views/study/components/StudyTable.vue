<template>
  <div class="study-list-table">
    <el-form :model="queryParams" label-position="top" label-width="150" class="filter-form-inline" ref="queryFormRef">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Franchise Name" prop="franchiseName">
            <el-input v-model="queryParams.franchiseName" placeholder="Please enter" @input="filterOptions"
              @blur="hideDropdown" clearable>
            </el-input>
            <ul v-show="showDropdown" class="dropdown-list">
              <li v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option)">
                {{ option }}
              </li>
            </ul>
          </el-form-item>
        </el-col>
        <!-- <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Name">
            <el-input v-model="queryParams.studyName" placeholder="Please enter" clearable />
          </el-form-item>
        </el-col> -->
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Name" prop="franchiseName">
            <!-- <el-input v-model="queryParams.franchiseName" placeholder="Please enter" clearable /> -->
            <!-- <el-autocomplete v-model="queryParams.franchiseName" :fetch-suggestions="querySearch"
              placeholder="Please select" @select="handleSelect" /> -->

            <el-input v-model="queryParams.studyName" placeholder="Please enter" @input="filterStudyOptions"
              @blur="hideStudyDropdown" clearable>
            </el-input>
            <ul v-show="showStudyDropdown" class="dropdown-list">
              <li v-for="(option, index) in filteredStudyOptions" :key="index" @click="selectStudyOption(option)">
                {{ option }}
              </li>
            </ul>
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study phase">
            <el-select-v2 v-model="queryParams.studyPhase" placeholder="Please select" :options="studyPhaseOptions"
              clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study tumor type">
            <el-select-v2 v-model="queryParams.studyTumorType" placeholder="Please select"
              :options="studyTumorTypeOptions" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Indication">
            <el-select-v2 v-model="queryParams.studyIndication" placeholder="Please select"
              :options="studyIndicationOptions" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study line">
            <el-select-v2 v-model="queryParams.studyLine" placeholder="Please select" :options="studyLineOptions"
              clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Status">
            <el-select-v2 v-model="queryParams.studyStatus" placeholder="Please select" :options="studyStatusOptions"
              clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Main study design">
            <el-select-v2 v-model="queryParams.mainStudyDesign" placeholder="Please select"
              :options="mainStudyDesignOptions" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Testing Managment Type">
            <el-select-v2 v-model="queryParams.testingManagmentType" placeholder="Please select"
              :options="testingManagmentTypeOptions" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Biomarker">
            <!-- <el-input v-model="queryParams.biomarkerName" placeholder="Please enter" clearable /> -->
            <el-input v-model="queryParams.biomarkerName" placeholder="Please enter" @input="filterBiomarkOptions"
              @blur="hideBiomarkDropdown" clearable>
            </el-input>
            <ul v-show="showBiomarkDropdown" class="dropdown-list">
              <li v-for="(option, index) in filteredBiomarkOptions" :key="index" @click="selectBiomarkOption(option)">
                {{ option }}
              </li>
            </ul>
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Testing Lab">
            <!-- <el-input v-model="queryParams.testingLab" placeholder="Please enter" clearable /> -->
            <el-input v-model="queryParams.testingLab" placeholder="Please enter" @input="filterTestingLabOptions"
              @blur="hideTestingLabDropdown" clearable>
            </el-input>
            <ul v-show="showTestingLabDropdown" class="dropdown-list">
              <li v-for="(option, index) in filteredTestingLabOptions" :key="index" @click="selectTestingLabOption(option)">
                {{ option }}
              </li>
            </ul>
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Assay Name">
            <!-- <el-input v-model="queryParams.assayName" placeholder="Please enter" clearable /> -->
            <el-input v-model="queryParams.assayName" placeholder="Please enter" @input="filterAssayNameOptions"
              @blur="hideAssayNameDropdown" clearable>
            </el-input>
            <ul v-show="showAssayNameDropdown" class="dropdown-list">
              <li v-for="(option, index) in filteredAssayNameOptions" :key="index" @click="selectAssayNameOption(option)">
                {{ option }}
              </li>
            </ul>
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Sample type">
            <el-select-v2 v-model="queryParams.sampleType" placeholder="Please select" :options="sampleTypeOptions"
              clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Technology Group">
            <el-select-v2 v-model="queryParams.technologyGroup" placeholder="Please select"
              :options="technologyGroupOptions" clearable />
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Technology Platform">
            <el-select-v2 v-model="queryParams.technologyPlatform" placeholder="Please select"
              :options="technologyPlatformOptions" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CDx Managed by">
            <el-select-v2 v-model="queryParams.cdxManagedBy" placeholder="Please select" :options="cdxManagedByOptions"
              clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Milestone">
            <el-select-v2 v-model="queryParams.startDateType" placeholder="Please select" :options="dateTypeOptions"
              clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="StartDate">
            <el-date-picker v-model="queryParams.startDate" class="date-form-label" type="date"
              placeholder="Pick a date" width="100%" clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Milestone">
            <el-select-v2 v-model="queryParams.endDateType" placeholder="Please select" :options="dateTypeOptions"
              clearable />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="EndDate">
            <el-date-picker v-model="queryParams.endDate" class="date-form-label" type="date" placeholder="Pick a date"
              width="100%" clearable />
          </el-form-item>
        </el-col>

      </el-row>
      <el-row class="flex-x-end">
        <el-form-item style="margin-bottom: 10px;">
          <el-button round class="common-button" type="primary"
            style="width: 100px;height: 22px;background-color: #003865;" @click="handleQuery">
            Search
          </el-button>
          <el-button round class="common-button" style="width: 100px;height: 22px;" @click="handleResetQuery">
            Clear
          </el-button>
        </el-form-item>
      </el-row>
    </el-form>

    <el-card class="table-container">
      <template #header>
        <div>
          <el-button round type="primary" class="common-button"
            style="width: 100px;height: 22px;background-color: #003865;" @click="handleNew">
            New
          </el-button>
          <el-button round class="common-button" style="width: 100px;height: 22px;" :disabled="multipleSelection.length < 2" @click="handleCompare">
            Compare
          </el-button>
        </div>

        <div class="selected-row-line text-#fff px-2">
          selected {{ multipleSelection?.length }} study
        </div>
      </template>

      <el-table ref="dataTableRef" v-loading="loading" :data="studyList" highlight-current-row stripe
        type="color: #a5a5a5" header-row-class-name="custom-header-class" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="Study Dcode" prop="studyCode" min-width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Study Name" prop="studyName" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Franchise Name" prop="franchiseName" width="150"
          style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Drug Name" prop="drugName" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Study phase" prop="studyPhase" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Study Indication" prop="studyIndication" width="150"
          style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Study line" prop="studyLine" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Main study design" prop="mainStudyDesign" width="150"
          style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="WP #" prop="wp" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="CDx #" prop="cdx" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Study Status" prop="studyStatus" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="Pre-PH3ID" prop="prePh3id" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="LSPC" prop="lspc" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="FSI" prop="fsi" width="150" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column label="NDA-S" prop="ndaS" width="100" style="color: #4a4a4a;font-size: 12px;" />
        <el-table-column fixed="right" label="操作" align="center" width="70">
          <template #default="scope">
            <el-button type="primary" link size="small" @click.stop="handleEditClick(scope.row.studyName)"
              style="font-size: 12px;">
              view
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-if="total > 0" v-model:total="total" v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize" @pagination="handleQuery" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "StudyTable",
  inheritAttrs: false,
});
import { ref, reactive } from "vue";
import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";
import DictAPI, { DictItem } from "@/api/dict";
import { dataTool, number } from "echarts";
const router = useRouter();
const queryFormRef = ref(ElForm);

const loading = ref(false);
const total = ref(0);
const dateRange = ref([]);
const multipleSelection = ref<StudyList[]>([]);
const props = defineProps({
  studys: {
    type: Array<StudyList>,
    default: []
  },
  total: {
    type: number,
    default: 0
  }
})
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

// Study 表格数据
const studyList = ref<StudyList[]>();

const studyManagmentTypeOptions = ref<OptionType[]>([]);
const studyPhaseOptions = ref<OptionType[]>([
  { value: "Phase I", label: "Phase I" },
  { value: "PhaseII a", label: "PhaseII a" },
  { value: "Phase Iib", label: "Phase Iib" },
  { value: "Phase II", label: "Phase II" },
  { value: "Phase I", label: "PhaseIII/PhaseIV" }
]);
const studyTumorTypeOptions = ref<OptionType[]>([
  { "value": "BC", "label": "BC" },
  { "value": "PC", "label": "PC" },
  { "value": "OC", "label": "OC" },
  { "value": "PanC", "label": "PanC" }
]);

const studyIndicationOptions = ref<OptionType[]>([
  { "value": "mCSPC", "label": "mCSPC" },
  { "value": "TNBC", "label": "TNBC" }
]);
const studyLineOptions = ref<OptionType[]>([
  { "value": "1L", "label": "1L" },
  { "value": "2L", "label": "2L" },
  { "value": "3L", "label": "3L" }
]);
const studyStatusOptions = ref<OptionType[]>([
  { "value": "Planned", "label": "Planned" },
  { "value": "Setup", "label": "Setup" },
  { "value": "Ongoing", "label": "Ongoing" },
  { "value": "On hold", "label": "On hold" },
  { "value": "close out", "label": "close out" },
  { "value": "Approved", "label": "Approved" }]);
const mainStudyDesignOptions = ref<OptionType[]>([
  { "value": "ITT", "label": "ITT" },
  { "value": "Patient selected", "label": "Patient selected" }
]);
const testingManagmentTypeOptions = ref<OptionType[]>([
  { "value": "In house", "label": "In house" },
  { "value": "Clinical Outsourced", "label": "Clinical Outsourced" },
  { "value": "DDS Outsourced", "label": "DDS Outsourced" },
  { "value": "QC Outsourced", "label": "QC Outsourced" },
  { "value": "Other", "label": "Other" }
]);
const sampleTypeOptions = ref<OptionType[]>([
  { "value": "Tissue", "label": "Tissue" },
  { "value": "Plasma (ctDNA)", "label": "Plasma (ctDNA)" },
  { "value": "Blood", "label": "Blood" },
  { "value": "Other", "label": "Other" }
]);
const technologyGroupOptions = ref<OptionType[]>([
  { "value": "MDx", "label": "MDx" },
  { "value": "TDx", "label": "TDx" },
  { "value": "Other", "label": "Other" }]);
const technologyPlatformOptions = ref<OptionType[]>([
  { "value": "NGS", "label": "NGS" },
  { "value": "PCR", "label": "PCR" },
  { "value": "IHC", "label": "IHC" },
  { "value": "FISH", "label": "FISH" },
  { "value": "ISH", "label": "ISH" },
  { "value": "QCS", "label": "QCS" },
  { "value": "other", "label": "other" }]);
const cdxManagedByOptions = ref<OptionType[]>([
  { "value": "PMB global", "label": "PMB global" },
  { "value": "PMB China", "label": "PMB China" },
  { "value": "China Commercial", "label": "China Commercial" },
  { "value": "Other", "label": "Other" }
]);
const dateTypeOptions = ref<OptionType[]>([
  { "value": "pre_ph3id", "label": "pre_ph3id" },
  { "value": "lspc", "label": "lspc" },
  { "value": "csp_available", "label": "csp_available" },
  { "value": "hgr_initial_sub", "label": "hgr_initial_sub" },
  { "value": "hgr_initial_approval", "label": "hgr_initial_approval" },
  { "value": "fsi", "label": "fsi" },
  { "value": "lsi", "label": "lsi" },
  { "value": "nda_s", "label": "nda_s" },
  { "value": "nda_a", "label": "nda_a" },

  { "value": "assay_selection", "label": "assay_selection" },
  { "value": "lab_selection", "label": "lab_selection" },
  { "value": "lab_readiness", "label": "lab_readiness" },
  { "value": "fst", "label": "fst" },
  { "value": "lst", "label": "lst" },
  { "value": "data_clean_completion", "label": "data_clean_completion" },
  { "value": "dco", "label": "dco" },
  { "value": "dbl", "label": "dbl" },

  { "value": "cdx_assay_selection_date", "label": "cdx_assay_selection_date" },
  { "value": "cdx_contract_date", "label": "cdx_contract_date" },
  { "value": "av_completion_date", "label": "av_completion_date" },
  { "value": "type_testing_comp_date", "label": "type_testing_comp_date" },
  { "value": "hgr_approval_date", "label": "hgr_approval_date" },
  { "value": "ring_study_reader_prec_date", "label": "ring_study_reader_prec_date" },
  { "value": "clinical_ivd_trial_comp_date", "label": "clinical_ivd_trial_comp_date" },
  { "value": "lab_readiness_date", "label": "lab_readiness_date" },
  { "value": "bridging_study_init_date", "label": "bridging_study_init_date" },
  { "value": "bridging_study_comp_date", "label": "bridging_study_comp_date" },
  { "value": "cdx_submission_date", "label": "cdx_submission_date" },
  { "value": "cdx_approval_date", "label": "cdx_approval_date" }

]);

const franchiseNameOptions = ref([]);
const studyNameOptions = ref([]);
const biomarkerOptions = ref([]);
const testingLabOptions = ref([]);
const assayNameOptions = ref([]);

const showDropdown = ref(false);
const showStudyDropdown = ref(false);
const showBiomarkDropdown = ref(false);
const showTestingLabDropdown = ref(false);
const showAssayNameDropdown = ref(false);

const filteredOptions = ref<string[]>([]);
const filteredStudyOptions = ref<string[]>([]);
const filteredBiomarkOptions = ref<string[]>([]);
const filteredTestingLabOptions = ref<string[]>([]);
const filteredAssayNameOptions = ref<string[]>([]);
const filterOptions = (event: string) => {
  if (franchiseNameOptions.value.length > 0) {
    const value = event
    queryParams.franchiseName = value;
    if (!value) {
      showDropdown.value = false;
      return;
    }
    filteredOptions.value = franchiseNameOptions.value.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    showDropdown.value = true;
  }

};

const selectOption = (option: string) => {
  queryParams.franchiseName = option;
  showDropdown.value = false;
};

const filterStudyOptions = (event: string) => {
  if (studyNameOptions.value.length > 0) {
    const value = event
    queryParams.studyName = value;
    if (!value) {
      showStudyDropdown.value = false;
      return;
    }
    filteredStudyOptions.value = studyNameOptions.value.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    showStudyDropdown.value = true;
  }

};

const selectStudyOption = (option: string) => {
  queryParams.studyName = option;
  showStudyDropdown.value = false;
};

const filterBiomarkOptions = (event: string) => {
  if (biomarkerOptions.value.length > 0) {
    const value = event
    queryParams.biomarkerName = value;
    if (!value) {
      showBiomarkDropdown.value = false;
      return;
    }
    filteredBiomarkOptions.value = biomarkerOptions.value.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    showBiomarkDropdown.value = true;
  }

};

const selectBiomarkOption = (option: string) => {
  queryParams.biomarkerName = option;
  showBiomarkDropdown.value = false;
};

const hideBiomarkDropdown = () => {
  setTimeout(() => {
    showBiomarkDropdown.value = false;
  }, 200); // 延迟200毫秒隐藏下拉列表

};

const filterTestingLabOptions = (event: string) => {
  if (testingLabOptions.value.length > 0) {
    const value = event
    queryParams.testingLab = value;
    if (!value) {
      showTestingLabDropdown.value = false;
      return;
    }
    filteredTestingLabOptions.value = testingLabOptions.value.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    showTestingLabDropdown.value = true;
  }

};

const selectTestingLabOption = (option: string) => {
  queryParams.testingLab = option;
  showTestingLabDropdown.value = false;
};

const hideTestingLabDropdown = () => {
  setTimeout(() => {
    showTestingLabDropdown.value = false;
  }, 200); // 延迟200毫秒隐藏下拉列表

};

const filterAssayNameOptions = (event: string) => {
  if (assayNameOptions.value.length > 0) {
    const value = event
    queryParams.assayName = value;
    if (!value) {
      showAssayNameDropdown.value = false;
      return;
    }
    filteredAssayNameOptions.value = assayNameOptions.value.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    showAssayNameDropdown.value = true;
  }

};

const selectAssayNameOption = (option: string) => {
  queryParams.assayName = option;
  showAssayNameDropdown.value = false;
};

const hideAssayNameDropdown = () => {
  setTimeout(() => {
    showAssayNameDropdown.value = false;
  }, 200); // 延迟200毫秒隐藏下拉列表

};

const handleCompare = () => {
  // console.log("submit!");
	console.log(multipleSelection.value)
	const studyNames = multipleSelection.value.map((item: any) => item.studyName)
  router.push({
		path: "/study/compare",
		query: {
			studyNames: studyNames.join(',')
		}
	});
};
const handleNew = () => {
  router.push("/study/new");
};
const handleSelectionChange = (val: StudyList[]) => {
  multipleSelection.value = val;
};

/** 查询 */
function handleQuery() {
  loading.value = true;
  StudyAPI.getPage(queryParams)
    .then((data) => {
      studyList.value = data.list;
      total.value = data.total;
    })
    .finally(() => {
      loading.value = false;
    });
}
/** 重置查询 */
function handleResetQuery() {
  queryParams.pageNum = 1,
    queryParams.pageSize = 10,
    queryParams.studyManagmentType = '',
    queryParams.franchiseName = '',
    queryParams.studyName = '',
    queryParams.studyPhase = '',
    queryParams.studyTumorType = '',
    queryParams.studyLine = '',
    queryParams.studyStatus = '',
    queryParams.mainStudyDesign = '',
    queryParams.testingManagmentType = '',
    queryParams.biomarkerName = '',
    queryParams.testingLab = '',
    queryParams.assayName = '',
    queryParams.sampleType = '',
    queryParams.technologyGroup = '',
    queryParams.cdxManagedBy = '',
    queryParams.dateType = '',
    queryParams.startDate = '',
    queryParams.endDate = ''

}

const hideDropdown = () => {
  setTimeout(() => {
    showDropdown.value = false;
  }, 200); // 延迟200毫秒隐藏下拉列表

};
const hideStudyDropdown = () => {
  setTimeout(() => {
    showStudyDropdown.value = false;
  }, 200); // 延迟200毫秒隐藏下拉列表

};

function handleEditClick(studyName: string) {

  router.push({
    path: '/study/line',
    query: {
      studyName
    }
  });
}
function getStudyManagementTypeOptions() {

  DictAPI.getOptions("studyManagmentType")
    .then((data) => {
      studyManagmentTypeOptions.value = data
    })
}

function getStudyStatusOptions() {

  DictAPI.getOptions("studyStatus")
    .then((data) => {
      studyStatusOptions.value = data
    })
}

const loadOptionsData = async () => {
  StudyAPI.getAllOptions().then((data) => {
    franchiseNameOptions.value = data.franchiseOptions;
    studyNameOptions.value = data.studyNameOptions;
    biomarkerOptions.value = data.biomarkerOptions;
    testingLabOptions.value = data.testingLabOptions;
    assayNameOptions.value = data.assayNameOptions;

  })
};

onMounted(() => {
  // handleQuery();
});
const handleSelect = (item: string) => {
  console.log(item);
};

onBeforeMount(() => {
  getStudyManagementTypeOptions();
  getStudyStatusOptions();
  loadOptionsData();
})

watchEffect(() => {
  if (props.studys) {
    studyList.value = props.studys

  }
  if (props.total) {

    total.value = props.total;
  }

})
</script>
<style lang="scss" scoped>
.study-list-table {
  padding: 10px;
  margin-top: 30px;
}

:deep(.date-form-label) {
  width: 100%;
}

:deep(.table-container) {
  .el-card__header {
    padding-bottom: 0;
    border-bottom: unset;
  }
}

.selected-row-line {
  margin-top: 16px;
  margin-bottom: -8px;
  background-color: #ccd7e0;
  font-size: 11px;
}

/* 表头样式，无效 */
.custom-header-class {
  color: #333;
  /* 更改表头文字颜色，如果需要的话 */
  background-color: #2b12b9;
  /* 更改表头背景色 */
}

:deep(.el-form-item__label) {
  color: #516a83;
  font-size: 11px;
}

:deep(.el-table--enable-row-transition .el-table__body td.el-table__cell) {
  font-size: 12px;
}

:deep(.el-table th.el-table__cell.is-leaf) {
  font-size: 11px;
}

.autocomplete-input {
  position: relative;
  display: inline-block;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-list li {
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}
</style>
