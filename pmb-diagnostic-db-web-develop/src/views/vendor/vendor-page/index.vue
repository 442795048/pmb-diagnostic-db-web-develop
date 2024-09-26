<template>
  <div class="vendor-page-container">
    <el-card body-class="vendor-page-container-card">
      <el-row justify="space-between">
        <el-col style="padding-bottom: 30px">
          <div class="bar">
            {{ $t("summary") }}
          </div>
          <div class="image-parent" style="border-top: 1.2px solid #ccd7e0">
            <StaticsImages
              @handle-list="handleList"
              @handle-total="handleTotal"
              title="MDx vendor"
              :type="'mdxVendor'"
              :isLink="true"
              :count-num="totalMdxVendor"
              style="flex: 1"
            />
            <StaticsImages
              @handle-list="handleList"
              @handle-total="handleTotal"
              title="TDx vendor"
              :type="'tdxVendor'"
              :isLink="true"
              :count-num="totalTdxVendor"
              style="flex: 1"
            />
            <StaticsImages
              @handle-list="handleList"
              @handle-total="handleTotal"
              title="Vendor"
              :type="'vendor'"
              :isLink="true"
              :count-num="totalVendor"
              style="flex: 1"
            />
            <StaticsImages2Number
              @handleList="handleList"
              @handleTotal="handleTotal"
              :title="'ODD/TDD'"
              :isLink="true"
              :planType="'odd'"
              :achieveType="'tdd'"
              :plan-count-num="totalOdd"
              :achieve-count-num="totalTdd"
              style="flex: 1"
            />
            <StaticsImages2Number
              @handleList="handleList"
              @handleTotal="handleTotal"
              :title="
                'Planned / Completed visits in ' + new Date().getFullYear()
              "
              :isLink="true"
              :planType="'planned'"
              :achieveType="'completed'"
              :plan-count-num="totalPlanned"
              :achieve-count-num="totalCompleted"
              style="flex: 1"
            />
          </div>
        </el-col>

        <!-- <el-col :span="6" :xs="24" /> -->
      </el-row>
    </el-card>
    <VendorTable :vendors="vendors" :total="total" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import VendorTable from "../components/VendorTable.vue";
import StaticsImages from "../components/StaticsImages.vue";
import VendorAPI, { VendorList } from "@/api/vendor";
defineOptions({
  name: "VendorPage",
  components: {
    VendorTable,
    StaticsImages,
  },
  inheritAttrs: false,
});

/** 加载访问统计数据 */

const totalMdxVendor = ref(0);
const totalTdxVendor = ref(0);
const totalVendor = ref(0);
const totalOdd = ref(0);
const totalTdd = ref(0);
const totalPlanned = ref(0);
const totalCompleted = ref(0);

const vendors = ref<VendorList[]>();
const total = ref<number>();
onMounted(() => {
  loadVendorStatsData();
  // loadOptionsData();
});

const loadVendorStatsData = async () => {
  VendorAPI.getVendorAll()
    .then((data) => {
      totalMdxVendor.value = data.mdxVendor;
      totalTdxVendor.value = data.tdxVendor;
      totalVendor.value = data.vendor;
      totalOdd.value = data.odd;
      totalTdd.value = data.tdd;
      totalPlanned.value = data.planned || 0;
      totalCompleted.value = data.completed || 0;
    })
    .finally(() => {});
};

const handleList = (val: VendorList[] | undefined) => {
  vendors.value = val;
};

const handleTotal = (val: number | undefined) => {
  total.value = val;
  console.log(val, "!!!!!!!!");
};
</script>

<style lang="scss" scoped>
.vendor-page-container {
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

:deep(.vendor-page-container-card) {
  padding-top: 6px;
  padding-bottom: 0;
}
</style>
