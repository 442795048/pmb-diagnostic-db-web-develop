<template>
  <div class="vendor-view-container" :class="{ showSubmit: showSubmit }">
    <el-card shadow="never">
      <!-- 基础信息 -->
      <BasicInformation
        @handleShowSubmit="
          (val: any) => {
            showSubmit = val;
          }
        "
        @updateFormData="updateFormData"
        @handleRefresh="handleRefreshPage"
      />
      <!-- Assay Short List-->
      <div class="template-btn">
        <h3 class="common-title">Study Story Line:</h3>
        <AssayShortList />
      </div>
      <!--Vendor Operation Evaluation -->
      <div class="template-btn">
        <h3 class="common-title">Vendor Operation Evaluation:</h3>
        <VendorOperationEvaluation />
      </div>
      <!-- Lab Visit  Issue -->
      <div class="bottom">
        <!-- <TeamBoard /> -->
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VendorView",
  components: {},
  inheritAttrs: false,
});
import { onMounted, onBeforeMount, cumputed } from "vue";
import VendorAPI, { VendorForm, VendorList } from "@/api/vendor";
import DictAPI, { DictItem } from "@/api/dict";
import BasicInformation from "./BasicInformation.vue";
import AssayShortList from "./AssayShortList.vue";
import VendorOperationEvaluation from "./VendorOperationEvaluation.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const vendorId = computed(() => {
  return route.query.vendorId;
});
provide("vendorId", vendorId);
const showSubmit = ref<Boolean>(false);

onBeforeMount(() => {});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.vendor-view-container {
  &.showSubmit {
    padding-bottom: 58px;
  }
  
}
</style>
