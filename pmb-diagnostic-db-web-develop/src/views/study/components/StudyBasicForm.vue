<template>
  <div class="w-full">
    <div class="w-full">Basic Information:</div>
    <el-form
      :model="formData"
      label-position="top"
      class="filter-form-inline w-full"
      ref="queryFormRef"
    >
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item
            label="Study Dcode"
            prop="code"
            :rules="[
              {
                required: true,
                message: 'Please input',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              v-model="formData.code"
              placeholder="Study Name"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="Study Name"
            prop="code"
            :rules="[
              {
                required: true,
                message: 'Please input',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              v-model="formData.code"
              placeholder="Study Name"
              clearable
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="Franchise Name">
            <el-input v-model="formData.code" placeholder="" clearable />
          </el-form-item>
        </el-col>
        <!-- <el-col :span="12">
          <el-form-item label="Testing Lab">
            <el-input v-model="formData.code" placeholder="" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Assay Name">
            <el-input v-model="formData.code" placeholder="" clearable />
          </el-form-item>
        </el-col> -->
        <!-- <el-col :span="12">
          <el-form-item label="" class="">
            <el-date-picker
              v-model="formData.code"
              class="date-form-label"
              width="100%"
              type="date"
              placeholder="Pick a date"
              clearable
              />          
            </el-form-item>
        </el-col> -->
        <!-- <el-col :span="12">
          <el-form-item label="Test strategy">
            <el-select-v2
              v-model="formData.code"
              placeholder=""
              :options="[]"
            />
          </el-form-item>
        </el-col> -->
        <el-col :span="12">
          <el-form-item label="Study Management Type">
            <el-select-v2
              v-model="formData.code"
              placeholder=""
              :options="[]"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Study Status">
            <el-select-v2
              v-model="formData.code"
              placeholder=""
              :options="[]"
            />
          </el-form-item>
        </el-col>

        <!-- <el-col :span="12">
          <el-form-item label="Technology Group">
            <el-select-v2
              v-model="formData.code"
              placeholder=""
              :options="[]"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Technology Platform">
            <el-select-v2
              v-model="formData.code"
              placeholder=""
              :options="[]"
            />
          </el-form-item>
        </el-col> -->
      </el-row>
      <el-row>
        <!-- <el-form-item class="flex">
          <el-button type="primary" @click="handleQuery">
            Search
          </el-button>
          <el-button @click="handleResetQuery"><i-ep-refresh />重置</el-button>
        </el-form-item> -->
      </el-row>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { StudyBasicForm } from "@/api/study";
defineOptions({
  name: "CreateBasicForm",
  inheritAttrs: false,
});
const formData = reactive<StudyBasicForm>({
  // 定义表单接口类型
  //   pageNum: 1,
  //   pageSize: 10,
  //   code: '',
});
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
