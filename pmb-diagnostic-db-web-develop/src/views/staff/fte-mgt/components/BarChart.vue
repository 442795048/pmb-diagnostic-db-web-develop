<!--  线 + 柱混合图 -->
<template>
  <el-card>
    <template #header>
      <div class="flex-x-between">
        <div class="flex-y-center">
          柱状图
          <el-tooltip effect="dark" content="点击试试下载" placement="bottom">
            <i-ep-download
              class="cursor-pointer hover:color-#409eff ml-1"
              @click="handleDownloadChart"
            />
          </el-tooltip>
        </div>
        <el-radio-group
          size="small"
          @change="handleDateRangeChange"
        >
          <el-radio-button label="近7天" :value="1" />
          <el-radio-button label="近30天" :value="2" />
        </el-radio-group>
      </div>
    </template>

    <div :id="id" :class="className" :style="{ height, width }"></div>
  </el-card>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import FteMgtAPI, { BarChartVO } from "@/api/staff";

const chart: Ref<echarts.ECharts | null> = ref(null);

const props = defineProps({
  id: {
    type: String,
    default: "BarChart",
  },
  className: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "200px",
    required: true,
  },
  height: {
    type: String,
    default: "200px",
    required: true,
  },
  data:{
    type: Object as () => BarChartVO,
    default: () => ({})
  },
});

/** 设置图表  */
const setChartOptions = () => {
  if (!chart.value) {
    return;
  }

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
      grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: props.data.fteTimeList,
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: props.data.seriesList,
  };

  chart.value.setOption(options);
};

const handleDateRangeChange = () => {
  console.log("props.data.fteTimeLis",props.data.fteTimeList)
  console.log("props.data.seriesList",props.data.seriesList)
  loadData();
};

watch(() => props.data, (newValue, oldValue)=>{
 
 console.log("newValue",newValue)

 console.log("oldValue",oldValue)

 handleDateRangeChange();

})

/** 加载数据 */
const loadData = () => {
    setChartOptions();
};

/** 下载图表 */
const handleDownloadChart = () => {
  if (!chart.value) {
    return;
  }

  // 获取画布图表地址信息
  const img = new Image();
  img.src = chart.value.getDataURL({
    type: "png",
    pixelRatio: 1,
    backgroundColor: "#fff",
  });
  // 当图片加载完成后，生成 URL 并下载
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const link = document.createElement("a");
      link.download = `访问趋势.png`;
      link.href = canvas.toDataURL("image/png", 0.9);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };
};

/** 窗口大小变化时，重置图表大小 */
const handleResize = () => {
  setTimeout(() => {
    if (chart.value) {
      chart.value.resize();
    }
  }, 100);
};
/** 初始化图表  */
onMounted(() => {
  chart.value = markRaw(
    echarts.init(document.getElementById(props.id) as HTMLDivElement)
  );
  loadData();

  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

onActivated(() => {
  handleResize();
});
</script>
<style lang="scss" scoped></style>
