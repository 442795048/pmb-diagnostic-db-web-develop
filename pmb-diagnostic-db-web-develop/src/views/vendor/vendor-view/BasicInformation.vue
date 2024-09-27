<template>
  <el-form class="basic-information">
    <div class="information-title">
      <LabelValue
        v-model="formData.vendorId"
        label="Vendor ID"
        :show-edit="false"
      />
      <LabelValue
        v-model="formData.vendorName"
        label="Vendor Name"
        :isEdit="isEditMode"
        @handleEdit="handleEdit"
      />
      <LabelValue
        v-model="formData.location"
        label="Location"
        :isEdit="isEditMode"
        @handleEdit="handleEdit"
      />
      <LabelValue
        v-model="formData.briefIntroduction"
        label="Brief Introduction"
        :isEdit="isEditMode"
        @handleEdit="handleEdit"
      />
    </div>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Vendor Basic Information:</span>
        </div>
      </template>
      <div class="basic-form" :class="{ isMoreForm: isExpand }">
        <LabelValue
          v-model="formData.dxPartner"
          label="Dx Partne"
          form-type="select"
          :options="dxPartnerOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.dxPartnerTierLevel"
          label="Tier Level"
          form-type="select"
          :options="dxPartnerOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.testingLab"
          label="Testing Lab"
          form-type="select"
          :options="testingLabOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.testingLabTierLevel"
          label="Tier Level"
          form-type="select"
          :options="testingLabOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.assayProvider"
          label="Assay Provider"
          form-type="select"
          :options="assayProviderOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.notes"
          label="Notes"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.assayTestCapability"
          label="Assay/Test capability"
          form-type="select"
          :options="assayTestCapabilityOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.qualification"
          label="Qualification"
          form-type="select"
          :options="qualificationOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.oddStatus"
          label="ODD Status"
          form-type="select"
          :options="oddStatusOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.oddExpireDate"
          label="ODD Expire Date"
          form-type="date"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.tddStatus"
          label="TDD Status"
          form-type="select"
          :options="tddStatusOptions"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />
        <LabelValue
          v-model="formData.tddExpireDate"
          label="TDD Expire Date"
          form-type="date"
          :isEdit="isEditMode"
          @handleEdit="handleEdit"
        />

        <!-- <div class="isMore" @click="handleMore">
          {{ isExpand ? "Less" : "More" }}
        </div> -->
      </div>
      <template #footer>Footer content</template>
    </el-card>
  </el-form>
  <div v-if="showSubmit" class="footer-btn">
    <el-button @click="SubmitStudy">Submit</el-button>
    <el-button @click="BackToStudy">Back</el-button>
  </div>
</template>

<script setup lang="ts">
// import { BasicInformation } from "../types/line";
import { reactive, defineEmits, onMounted, inject } from "vue";
import LabelValue from "../components/LabelValue.vue";
import StudyAPI from "@/api/study";
const router = useRouter();
const vendorId: any = inject("vendorId");
const formData: any = reactive({});

// 自定义事件
const emits = defineEmits([
  "handleShowSubmit",
  "updateFormData",
  "handleRefresh",
]);
const refreshAppMain: any = inject("refreshAppMain");
const showSubmit = ref<Boolean>(false);
const isEditMode = ref<Boolean>(false);
const isExpand = ref<Boolean>(false);
const dxPartnerOptions = ref<OptionType[]>([]);
const tierLevelOptions = ref<OptionType[]>([]);
const testingLabOptions = ref<OptionType[]>([]);
const assayTestCapabilityOptions = ref<OptionType[]>([]);
const assayProviderOptions = ref<OptionType[]>([]);
const qualificationOptions = ref<OptionType[]>([]);
const oddStatusOptions = ref<OptionType[]>([]);
const tddStatusOptions = ref<OptionType[]>([]);
onMounted(() => {
  // console.log("BasicInformation", vendorId.value);
  init();
});

const init = () => {
  const params = {
    vendorId: vendorId.value,
  };
  // StudyAPI.getStudyByName(params).then((data) => {
  //   const result: any = data || {};
  //   Object.assign(formData, { ...result, oldStudyName: result.vendorId });
  //   emits("updateFormData", formData);
  // });
};

const handleEdit: any = () => {
  isEditMode.value = true;
  showSubmit.value = true;
  isExpand.value = true;
  emits("handleShowSubmit", true);
};

const SubmitStudy = () => {
  const params = formData;
  // StudyAPI.updateStudyByName(params).then((data) => {
  //   isEditMode.value = false;
  //   showSubmit.value = false;
  //   ElMessage.success("save success");
  //   emits("handleShowSubmit", false);
  //   emits("updateFormData", formData);
  //   setTimeout(() => {
  //     refreshAppMain();
  //   }, 1000);
  //   router.push({ query: { vendorId: formData.vendorId } });
  // });
};

const BackToStudy = () => {
  router.push("/vendor/vendor-page");
};

const handleMore = () => {
  isExpand.value = !isExpand.value;
  if (!isExpand.value) {
    isEditMode.value = false;
    showSubmit.value = false;
  }
};
</script>

<style lang="scss" scoped>
.basic-information {
  .information-title {
    .name-code {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .label-text-edit-widget,
    .maohao {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .basic-form {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0 30px;
    padding-right: 30px;
    position: relative;
    .label-text-edit-widget {
      margin-bottom: 10px;
    }
    &.isMoreForm {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}

.footer-btn {
  height: 60px;
  border: 1px solid #e4e7ed;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100% - 210px);
  z-index: 999;
}

.card-header {
  font-size: 14px;
}
</style>
