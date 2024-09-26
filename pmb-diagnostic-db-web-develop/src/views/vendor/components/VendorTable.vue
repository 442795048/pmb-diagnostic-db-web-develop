<template>
  <div class="vendor-list-table">
    <el-form
      :model="queryParams"
      label-position="top"
      label-width="150"
      class="filter-form-inline"
      ref="queryFormRef"
    >
      <el-row :gutter="10">
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Vendor Name" prop="vendorName">
            <el-input
              v-model="queryParams.vendorName"
              placeholder="Please enter"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Vendor Type">
            <el-select-v2
              v-model="queryParams.vendorType"
              placeholder="Please select"
              :options="vendorTypeOptions"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item
            label="Assay/Test capability"
            prop="assayTestCapability"
          >
            <el-input
              v-model="queryParams.assayTestCapability"
              placeholder="Please enter"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Qualification">
            <el-input
              v-model="queryParams.qualification"
              placeholder="Please enter"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="ODD status">
            <el-select-v2
              v-model="queryParams.oddStatus"
              placeholder="Please select"
              :options="ddStatusOptions"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="TDD status">
            <el-select-v2
              v-model="queryParams.tddStatus"
              placeholder="Please select"
              :options="ddStatusOptions"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Study Name">
            <el-input
              v-model="queryParams.studyName"
              placeholder="Please enter"
              @input="filterStudyOptions"
              @blur="hideStudyDropdown"
              clearable
            />
            <ul v-show="showStudyDropdown" class="dropdown-list">
              <li
                v-for="(option, index) in filteredStudyOptions"
                :key="index"
                @click="selectStudyOption(option)"
              >
                {{ option }}
              </li>
            </ul>
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CTA">
            <el-select-v2
              v-model="queryParams.cta"
              placeholder="Please select"
              :options="ctaByStudyNameOptions"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CDx" prop="cdx">
            <el-select-v2
              v-model="queryParams.cdx"
              placeholder="Please select"
              :options="cdxByStudyNameOptions"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Assay Name">
            <!-- <el-input v-model="queryParams.assayName" placeholder="Please enter" clearable /> -->
            <el-input
              v-model="queryParams.assayName"
              placeholder="Please enter"
              @input="filterAssayNameOptions"
              @blur="hideAssayNameDropdown"
              clearable
            />
            <ul v-show="showAssayNameDropdown" class="dropdown-list">
              <li
                v-for="(option, index) in filteredAssayNameOptions"
                :key="index"
                @click="selectAssayNameOption(option)"
              >
                {{ option }}
              </li>
            </ul>
          </el-form-item>
        </el-col>

        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Issue StartDate">
            <el-date-picker
              v-model="queryParams.issueStartDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Issue EndDate">
            <el-date-picker
              v-model="queryParams.issueEndDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="TDD StartDate">
            <el-date-picker
              v-model="queryParams.tddStartDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="TDD EndDate">
            <el-date-picker
              v-model="queryParams.tddEndDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="ODD StartDate">
            <el-date-picker
              v-model="queryParams.oddStartDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="ODD EndDate">
            <el-date-picker
              v-model="queryParams.oddEndDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Lab Visit StartDate">
            <el-date-picker
              v-model="queryParams.labVisitStartDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="Lab Visit EndDate">
            <el-date-picker
              v-model="queryParams.labVisitEndDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CTA StartDate">
            <el-date-picker
              v-model="queryParams.ctaStartDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CTA EndDate">
            <el-date-picker
              v-model="queryParams.ctaEndDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CDX StartDate">
            <el-date-picker
              v-model="queryParams.cdxStartDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="CDX EndDate">
            <el-date-picker
              v-model="queryParams.cdxEndDate"
              class="date-form-label"
              type="date"
              placeholder="Pick a date"
              width="100%"
              clearable
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="flex-x-end">
        <el-form-item style="margin-bottom: 10px">
          <el-button
            round
            class="common-button"
            type="primary"
            style="width: 100px; height: 22px; background-color: #003865"
            @click="handleQuery"
          >
            Search
          </el-button>
          <el-button
            round
            class="common-button"
            style="width: 100px; height: 22px"
            @click="handleResetQuery"
          >
            Clear
          </el-button>
        </el-form-item>
      </el-row>
    </el-form>

    <el-card class="table-container">
      <template #header>
        <div>
          <el-button
            round
            type="primary"
            class="common-button"
            style="width: 100px; height: 22px; background-color: #003865"
            @click="handleNew"
          >
            New
          </el-button>
        </div>

        <div class="selected-row-line text-#fff px-2">
          selected {{ multipleSelection?.length }} vendor
        </div>
      </template>

      <el-table
        ref="dataTableRef"
        v-loading="loading"
        :data="vendorList"
        highlight-current-row
        stripe
        type="color: #a5a5a5"
        header-row-class-name="custom-header-class"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column
          label="Vendor Name"
          prop="vendorName"
          width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column
          label="Vendor ID"
          prop="vendorId"
          min-width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column
          label="Dx Partner Tier level"
          prop="dxPartnerTierLevel"
          width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column
          label="Assay/Test capability"
          prop="assayTestCapability"
          width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column
          label="ODD status"
          prop="oddStatus"
          width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column
          label="TDD status"
          prop="tddStatus"
          width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column
          label="TDD scoring"
          prop="tddScoring"
          width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column
          label="Note(basic info table)"
          prop="note"
          width="150"
          style="color: #4a4a4a; font-size: 12px"
        />
        <el-table-column fixed="right" label="操作" align="center" width="70">
          <template #default="scope">
            <el-button
              type="primary"
              link
              size="small"
              @click.stop="handleEditClick(scope.row.vendorName)"
              style="font-size: 12px"
            >
              <el-icon><View /></el-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        v-if="total > 0"
        v-model:total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="handleQuery"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VendorTable",
  inheritAttrs: false,
});
import { ref, reactive } from "vue";
import VendorAPI, { VendorTableQuery, VendorList } from "@/api/vendor";
import DictAPI, { DictItem } from "@/api/dict";
import { dataTool, number } from "echarts";
const router = useRouter();
const queryFormRef = ref(ElForm);

const loading = ref(false);
const total = ref(0);
const dateRange = ref([]);
const multipleSelection = ref<VendorList[]>([]);
const props = defineProps({
  vendors: {
    type: Array<VendorList>,
    default: [],
  },
  total: {
    type: number,
    default: 0,
  },
});
const queryParams = reactive<VendorTableQuery>({
  pageNum: 1,
  pageSize: 10,
  vendorName: "",
  vendorType: "",
  assayTestCapability: "",
  qualification: "",
  oddStatus: "",
  tddStatus: "",
  studyName: "",
  cta: "",
  cdx: "",
  assayName: "",
  issueStartDate: "",
  issueEndDate: "",
  tddStartDate: "",
  tddEndDate: "",
  oddStartDate: "",
  oddEndDate: "",
  labVisitStartDate: "",
  labVisitEndDate: "",
  ctaStartDate: "",
  ctaEndDate: "",
  cdxStartDate: "",
  cdxEndDate: "",
});

// vendor 表格数据
const vendorList = ref<VendorList[]>();

const vendorTypeOptions = ref<OptionType[]>([
  { value: "DxParnter", label: "Dx parnter" },
  { value: "TestingLab", label: "TestingLab" },
  { value: "assayProvider", label: "assayProvider" },
]);
const ddStatusOptions = ref<OptionType[]>([
  { value: "Status1", label: "Status1" },
  { value: "Status2", label: "Status2" },
]);
const ctaByStudyNameOptions = ref<OptionType[]>([
  { value: "cta", label: "Tissue" },
]);
const cdxByStudyNameOptions = ref<OptionType[]>([
  { value: "cdx", label: "Tissue" },
]);

const studyNameOptions = ref([]);
const assayNameOptions = ref([]);

const showStudyDropdown = ref(false);
const showAssayNameDropdown = ref(false);
const filteredStudyOptions = ref<string[]>([]);

const filterStudyOptions = (event: string) => {
  if (studyNameOptions.value.length > 0) {
    const value = event;
    queryParams.studyName = value;
    if (!value) {
      showStudyDropdown.value = false;
      return;
    }
    filteredStudyOptions.value = studyNameOptions.value.filter((option) =>
      option?.toLowerCase().includes(value.toLowerCase())
    );
    showStudyDropdown.value = true;
  }
};
const selectStudyOption = (option: string) => {
  queryParams.studyName = option;
  showStudyDropdown.value = false;
};

const filterAssayNameOptions = (event: string) => {
  if (assayNameOptions.value.length > 0) {
    const value = event;
    queryParams.assayName = value;
    if (!value) {
      showAssayNameDropdown.value = false;
      return;
    }
    filteredAssayNameOptions.value = assayNameOptions.value.filter((option) =>
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

const handleNew = () => {
  router.push("/vendor/vendor-new");
};
const handleSelectionChange = (val: VendorList[]) => {
  multipleSelection.value = val;
};

/** 查询 */
function handleQuery() {
  loading.value = true;
  VendorAPI.getPage(queryParams)
    .then((data) => {
      vendorList.value = data.list;
      total.value = data.total;
    })
    .finally(() => {
      loading.value = false;
    });
}
/** 重置查询 */
function handleResetQuery() {
  (queryParams.pageNum = 1),
    (queryParams.pageSize = 10),
    (queryParams.vendorName = ""),
    (queryParams.vendorType = ""),
    (queryParams.assayTestCapability = ""),
    (queryParams.qualification = ""),
    (queryParams.oddStatus = ""),
    (queryParams.tddStatus = ""),
    (queryParams.studyName = ""),
    (queryParams.cta = ""),
    (queryParams.cdx = ""),
    (queryParams.assayName = ""),
    (queryParams.issueStartDate = ""),
    (queryParams.issueEndDate = ""),
    (queryParams.tddStartDate = ""),
    (queryParams.tddEndDate = ""),
    (queryParams.oddStartDate = ""),
    (queryParams.oddEndDate = ""),
    (queryParams.labVisitStartDate = ""),
    (queryParams.labVisitEndDate = ""),
    (queryParams.ctaStartDate = ""),
    (queryParams.ctaEndDate = ""),
    (queryParams.cdxStartDate = ""),
    (queryParams.cdxEndDate = "");
}

const hideStudyDropdown = () => {
  setTimeout(() => {
    showStudyDropdown.value = false;
  }, 200); // 延迟200毫秒隐藏下拉列表
};

function handleEditClick(vendorName: string) {
  router.push({
    path: "/vendor/vendor-view",
    query: {
      vendorName,
    },
  });
}

onMounted(() => {
  // handleQuery();
});
const handleSelect = (item: string) => {
  console.log(item);
};

onBeforeMount(() => {});

watchEffect(() => {
  if (props.vendors) {
    vendorList.value = props.vendors;
  }
  if (props.total) {
    total.value = props.total;
  }
});
</script>
<style lang="scss" scoped>
.vendor-list-table {
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
