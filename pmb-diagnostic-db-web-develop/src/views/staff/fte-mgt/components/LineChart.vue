<!--  线 + 柱混合图 -->
<template>
  <el-card>
    <template #header>
      <div class="flex-x-between">
        <div class="flex-y-center">
          折线图
          <el-tooltip effect="dark" content="点击试试下载" placement="bottom">
            <i-ep-download
              class="cursor-pointer hover:color-#409eff ml-1"
              @click="handleDownloadChart"
            />
          </el-tooltip>
        </div>
      </div>
    </template>

    <div :id="id" :class="className" :style="{ height, width }"></div>
  </el-card>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import FteMgtAPI, { LineChartVO } from "@/api/staff";

const chart: Ref<echarts.ECharts | null> = ref(null);

const props = defineProps({
  id: {
    type: String,
    default: "LineChart",
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
    type: Object as () => LineChartVO,
    default: () => ({'fteTimeList': ['2024-01','2024-02','2024-03','2024-04','2024-05','2024-06','2024-07','2024-08'],
                      'demandList': [1,1,1,1,1,1,1,1],
                      'supplyList': [2,1,2,2,2,2,1,1]}),
  },
});

/** 设置图表  */
const setChartOptions = () => {
  if (!chart.value) {
    return;
  }

  const options = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Demand FTE", "Supply FTE"],
      bottom: 0,
    },
    grid: {
      left: "1%",
      right: "5%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: props.data.fteTimeList,
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "Demand FTE",
        type: "line",
        //data: data.pvList,
        data: props.data.demandList,
        areaStyle: {
          color: "rgba(64, 158, 255, 0.1)",
        },
        smooth: true,
        itemStyle: {
          color: "#409EFF",
        },
        lineStyle: {
          color: "#409EFF",
        },
      },
      {
        name: "Supply FTE",
        type: "line",
        data: props.data.supplyList,
        areaStyle: {
          color: "rgba(103, 194, 58, 0.1)",
        },
        smooth: true,
        itemStyle: {
          color: "#67C23A",
        },
        lineStyle: {
          color: "#67C23A",
        },
      },
    ],
  };

  chart.value.setOption(options);
};


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
