<template>
  <el-button type="primary">Lab Visit Template</el-button>
  <el-card class="vendor-operation-evaluation">
    <template #header>
      <div class="card-header">
        <span>Vendor Visit Detials</span>
      </div>
    </template>
    <div>
      <el-table
        ref="dataTableRef"
        :data="vendorVistList"
        stripe
        class="common-table"
      >
        <el-table-column label="order" prop="" min-width="50">
          <template #default="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="Lab visit identity" prop="staffName" />
        <el-table-column label="Visit method" prop="role" />
        <el-table-column label="Visit Type" prop="activityId" />
        <el-table-column label="Is TDD included" prop="activityId" />
        <el-table-column label="VTL" prop="activityId" />
        <el-table-column label="VTM" prop="activityId" />
        <el-table-column label="Visit start date" prop="activityId" />
        <el-table-column label="Visit complete date" prop="activityId" />
        <el-table-column label="Summary Report Date" prop="activityId" />
        <el-table-column label="Visit Goal" prop="activityId" />
        <el-table-column label="Visit Scope" prop="activityId" />
        <el-table-column label="Notable Excellence" prop="activityId" />
        <el-table-column label="Key Observations" prop="activityId" />
        <el-table-column label="Visit Outcome" prop="activityId" />
        <el-table-column label="Overarching Vision" prop="activityId" />
        <el-table-column label="Total Checklist Item" prop="activityId" />
        <el-table-column label="High Risk" prop="activityId" />
        <el-table-column label="Moderate Risk" prop="activityId" />
        <el-table-column label="Low Risk" prop="activityId" />
        <el-table-column label="Suggestion" prop="activityId" />
        <el-table-column label="Visit agenda link" prop="activityId" />
        <el-table-column label="Visit check list link" prop="activityId" />
        <el-table-column label="Visit summary link" prop="activityId" />
        <el-table-column label="Visit report link" prop="activityId" />
        <el-table-column label="Improvement plan link" prop="activityId" />
      </el-table>
    </div>
  </el-card>
</template>

<script setup lang="ts">
defineOptions({
  name: "AssayShortList",
  components: {},
  inheritAttrs: false,
});
import { onMounted, onBeforeMount, cumputed } from "vue";
import VendorAPI, { VendorForm, VendorList } from "@/api/vendor";
import DictAPI, { DictItem } from "@/api/dict";
import { useRoute } from "vue-router";
const router = useRouter();
const vendorVistList = ref([]);
onMounted(() => {});
</script>

<style lang="scss" scoped>
.vendor-operation-evaluation {
  margin-top: 8px;
  .card-header {
    font-size: 14px;
  }
}
</style>
