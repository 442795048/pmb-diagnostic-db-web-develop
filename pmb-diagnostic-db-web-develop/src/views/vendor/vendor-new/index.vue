<template>
  <div class="vendor-page-container">
    <el-card shadow="never">
      <div class="w-full" style="font-size: 14px; color: #4a4a4a">
        Level 1 vendor brief
      </div>
      <div class="pa-3">
        <el-form
          :model="formData"
          label-position="top"
          label-width="150"
          class="filter-form-inline"
          style="margin-top: 10px"
          ref="vendorFormRef"
          :rules="rules"
        >
          <el-row :gutter="10">
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Vendor ID" prop="vendorId">
                <el-input
                  :value="computedVendorId"
                  placeholder="Please enter"
                  disabled
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Vendor Name" prop="vendorName">
                <el-input
                  v-model="formData.vendorName"
                  placeholder="Please enter"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Dx Partne">
                <el-select-v2
                  v-model="formData.dxPartner"
                  placeholder="Please select"
                  :options="dxPartnerOptions"
                  clearable
                  @change="changeDxPartner"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Tier Level">
                <el-select
                  v-model="formData.dxPartnerTierLevel"
                  placeholder="Please select"
                  clearable
                >
                  <el-option
                    v-for="item in tierLevelOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="
                      (item.label === 'N/A' && formData.dxPartner === 'Y') ||
                      (formData.dxPartner === 'N' && item.label !== 'N/A')
                    "
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Testing Lab">
                <el-select-v2
                  v-model="formData.testingLab"
                  placeholder="Please select"
                  :options="testingLabOptions"
                  clearable
                  @change="changeTestingLab"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Tier Level">
                <el-select
                  v-model="formData.testingLabTierLevel"
                  placeholder="Please select"
                  clearable
                >
                  <el-option
                    v-for="item in tierLevelOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="
                      (item.label === 'N/A' && formData.testingLab === 'Y') ||
                      (formData.testingLab === 'N' && item.label !== 'N/A')
                    "
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Assay Provider">
                <el-select-v2
                  v-model="formData.assayProvider"
                  placeholder="Please select"
                  :options="assayProviderOptions"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Brief introduction" prop="briefIntroduction">
                <el-input
                  v-model="formData.briefIntroduction"
                  placeholder="Please enter"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item
                label="Assay/Test capability"
                prop="assayTestCapability"
              >
                <el-select-v2
                  v-model="formData.assayTestCapability"
                  placeholder="Please select"
                  :options="assayTestCapabilityOptions"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Location" prop="location">
                <el-input
                  v-model="formData.location"
                  placeholder="Please enter"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Qualification">
                <el-select-v2
                  v-model="formData.qualification"
                  multiple
                  placeholder="Please select"
                  :options="qualificationOptions"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="Notes" prop="notes">
                <el-input
                  v-model="formData.notes"
                  placeholder="Please enter"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="ODD Status">
                <el-select-v2
                  v-model="formData.oddStatus"
                  placeholder="Please select"
                  :options="oddStatusOptions"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="ODD Expire Date">
                <el-date-picker
                  v-model="formData.oddExpireDate"
                  class="date-form-label"
                  type="date"
                  placeholder="Pick a date"
                  width="100%"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="TDD Status">
                <el-select-v2
                  v-model="formData.tddStatus"
                  placeholder="Please select"
                  :options="tddStatusOptions"
                  clearable
                />
              </el-form-item>
            </el-col>

            <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item label="TDD Expire Date">
                <el-date-picker
                  v-model="formData.tddExpireDate"
                  class="date-form-label"
                  type="date"
                  placeholder="Pick a date"
                  width="100%"
                  clearable
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div :span="24" class="flex-x-center">
          <el-button type="primary" round @click="SubmitVendor">
            Submit
          </el-button>
          <el-button round @click="BackToVendor">Back</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VendorNew",
  components: {},
  inheritAttrs: false,
});
import { onMounted, cumputed } from "vue";
import VendorAPI, { VendorForm, VendorList } from "@/api/vendor";
import DictAPI, { DictItem } from "@/api/dict";
const vendorFormRef = ref(ElForm);
const dxPartnerOptions = ref<OptionType[]>([]);
const tierLevelOptions = ref<OptionType[]>([]);
const testingLabOptions = ref<OptionType[]>([]);
const assayTestCapabilityOptions = ref<OptionType[]>([]);
const assayProviderOptions = ref<OptionType[]>([]);
const qualificationOptions = ref<OptionType[]>([]);
const oddStatusOptions = ref<OptionType[]>([]);
const tddStatusOptions = ref<OptionType[]>([]);

const formData = reactive<VendorForm>({});
const loading = ref(false);
const router = useRouter();
const SubmitVendor = () => {
  console.log("提交", formData);
  vendorFormRef.value.validate((valid: any) => {
    if (valid) {
      // 提交表单接口
      const _formData = {
        ...formData,
        vendorId: computedVendorId.value,
        qualification: formData.qualification?.join(","),
      };
      VendorAPI.add(_formData)
        .then(() => {
          ElMessage.success("save success");
          router.back();
        })
        .finally(() => {
          loading.value = false;
        });
    }
  });
};
//业务逻辑
const computedVendorId = computed(() => {
  return [formData.vendorName, formData.location].filter(Boolean).join("_");
});

// const computedTestingLabTierLevel = computed(() => {
//   const option = testingLabOptions?.value.find(
//     (option) => option.value === formData.testingLab
//   );
//   return option?.label === "Y";
// });

// const getLabelByValue = (arry: any[], keyValue: any) => {
//   const option = arry.find((option) => option.value === keyValue);
//   return option?.label;
// };

const changeDxPartner = (value) => {
  if (value === "N") {
    formData.dxPartnerTierLevel = "N/A";
  } else {
    formData.dxPartnerTierLevel = "";
  }
};
const changeTestingLab = (value) => {
  if (value === "N") {
    formData.testingLabTierLevel = "N/A";
  } else {
    formData.testingLabTierLevel = "";
  }
};
const BackToVendor = () => {
  router.push("/vendor/vendor-page");
};
const rules = ref({
  vendorName: [
    { required: true, message: "please enter Vendor Name", trigger: "change" },
  ],
  location: [
    { required: true, message: "please enter location", trigger: "change" },
  ],
});

onBeforeMount(() => {
  DictAPI.getOptions("dxPartner").then((data) => {
    dxPartnerOptions.value = data;
  });
  DictAPI.getOptions("tierLevel").then((data) => {
    tierLevelOptions.value = data;
  });
  DictAPI.getOptions("testingLab").then((data) => {
    testingLabOptions.value = data;
  });
  DictAPI.getOptions("assayProvider").then((data) => {
    assayProviderOptions.value = data;
  });
  DictAPI.getOptions("assayTestCapability").then((data) => {
    assayTestCapabilityOptions.value = data;
  });
  DictAPI.getOptions("qualification").then((data) => {
    qualificationOptions.value = data;
  });
  DictAPI.getOptions("oddStatus").then((data) => {
    oddStatusOptions.value = data;
  });
  DictAPI.getOptions("tddStatus").then((data) => {
    tddStatusOptions.value = data;
  });
});
onMounted(() => {});
</script>

<style lang="scss" scoped>
.vendor-page-container {
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
  background-color: white;
  min-height: 100%;
}
</style>
