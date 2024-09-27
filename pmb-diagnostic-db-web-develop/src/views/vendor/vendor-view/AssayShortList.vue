<template>
  <el-card>
    <div class="file-wrapped">
      <el-tooltip
        class="item"
        effect="dark"
        placement="top"
        v-for="item in assayList"
        :key="item.name"
        :title="item.name"
      >
        <div class="file tooltip-target">
          <el-icon color="#66cccc" size="50"><Document /></el-icon>
          <el-button type="primary" link>
            {{ item.name }}
          </el-button>
        </div>
        <template #content>
          <div>
            Assay Type：MDx Assay
            <br />
            Brief：This assay is self-developed by XXX/
            <br />
            transferred from XX.
            <br />
            Ever selected by PMB in clinical trial：Y Study
            <br />
            name as CTA：Study AA & BB Ever selected by PMB in CDx
            <br />
            development：N Study name as CDx：NA Ever evaluated by PMB with data
            <br />
            set：N Project
            <br />
            name：NA Assay
            <br />
            Version：3 Assay
            <br />
            ID：VendorXX_AssayY_v3
            <br />
            Assay technical：NGS Vendor
            <br />
            Assay ID：LK295
            <br />
            Biomarker description：Included 300 genes and ability to reprot GIS
          </div>
        </template>
      </el-tooltip>
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
const assayList = ref([]);

onMounted(() => {
  // const param = {
  //   vendorId: "11",
  // };
  let array: any[] = [];
  for (let i = 0; i < 20; i++) {
    const element = {
      url: "",
      name: "assay" + i,
      content:
        "这里是可以换行的文本，<br>它会自动换行并左对齐显示。<br>还可以添加更多行文本。" +
        i,
    };
    array.push(element);
  }
  assayList.value = array;

  // VendorAPI.getAssayByVendorId().then((data) => {});
});
</script>

<style lang="scss" scoped>
.file-wrapped {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 80px;
  .file {
    display: flex;
    flex-direction: column;
    width: 50px;
    cursor: pointer;
  }
}
</style>
