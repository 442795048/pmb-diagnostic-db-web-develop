<!-- FTE列表 -->
<template>
  <div class="app-container">
    <!-- 查询条件-->
    <el-collapse v-model="collapseActiveNamesOfQuery">
      <el-collapse-item name="1">
        <template #title>
        </template>
        <el-form ref="queryFormRef" :model="queryParams" :inline="true">
          <el-row :gutter="0" >
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="PM Classification" prop="pmClassification">
                <el-select clearable v-model="queryParams.pmClassification" placeholder="请选择" style="width: 250px">
                  <el-option
                      v-for="item in pmClassificationOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    />
                  </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="role" prop="role">
                <el-select multiple v-model="roleSelectedValues" placeholder="请选择" style="width: 250px">
                  <el-option
                      v-for="item in roleOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="study name" prop="studyName" >
                <el-select
                  style="width: 250px"
                  multiple
                  v-model="studyNameSelectedValues"
                  filterable
                  remote
                  reserve-keyword
                  clearable
                  placeholder="请输入关键词"
                  :remote-method="(query:any)=>{remoteMethodForStudyName(query,'query')}"
                  :loading="loading">
                  <el-option
                    v-for="item in studyNameOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="GPT led by" prop="gptLedBy">
                <el-select multiple v-model="gptLedBySelectedValues" placeholder="请选择" style="width: 250px">
                  <el-option
                    v-for="item in gptLedByOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="Franchise" prop="franchise">
                <el-select
                  style="width: 250px"
                  multiple
                  v-model="franchiseSelectedValues"
                  filterable
                  remote
                  reserve-keyword
                  clearable
                  placeholder="请输入关键词"
                  :remote-method="remoteMethodForFranchise"
                  :loading="loading">
                  <el-option
                    v-for="item in franchiseOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="Activity Type" prop="activityType">
                <el-select multiple v-model="activityTypeSelectedValues" placeholder="请选择" style="width: 250px">
                  <el-option
                      v-for="item in activityTypeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>  
          <el-row :gutter="0">
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="Project Type" prop="projectType">
                <el-select multiple v-model="projectTypeSelectedValues" placeholder="请选择" style="width: 250px">
                  <el-option
                      v-for="item in projectTypeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    />
                </el-select>
              </el-form-item>      
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="Study Dcode" prop="studyDcode">
                <el-select
                  multiple
                  style="width: 250px"
                  v-model="studyDcodeSelectedValues"
                  filterable
                  remote
                  reserve-keyword
                  clearable
                  placeholder="请输入关键词"
                  :remote-method="(query:any)=>{remoteMethodForStudyDcode(query,'query')}"
                  :loading="loading">
                  <el-option
                    v-for="item in studyDcodeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="Activity ID" prop="activityId">
                <el-select
                  allow-create
                  multiple
                  style="width: 250px"
                  v-model="activityIdSelectedValues"
                  filterable
                  remote
                  reserve-keyword
                  clearable
                  placeholder="请输入关键词"
                  :remote-method="(query:any)=>{remoteMethodForActivityId(query,'query')}"
                  :loading="loading">
                  <el-option
                    v-for="item in activityIdOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="Staff Name" prop="staffName">
                <el-select
                  style="width: 250px"
                  multiple
                  v-model="staffNameSelectedValues"
                  filterable
                  remote
                  reserve-keyword
                  clearable
                  placeholder="请输入关键词"
                  :remote-method="remoteMethodForStaffName"
                  :loading="loading">
                  <el-option
                    v-for="item in staffNameOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="Start Date" prop="startMonth">
                <el-date-picker
                  v-model="queryParams.startMonth"
                  type="month"
                  format="YYYY-MM"
                  placeholder="Please select a month"
                  style="width: 250px">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8" :style="{justifyContent: 'flex-end'}">
              <el-form-item label="End Date" prop="endMonth">
                <el-date-picker
                  v-model="queryParams.endMonth"
                  type="month"
                  format="YYYY-MM"
                  placeholder="Please select a month"
                  style="width: 250px">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="23" :style="{justifyContent: 'flex-end'}">
              <el-button type="primary" @click="handleQuery()">
                <i-ep-search />
                搜索
                </el-button>
                <el-button @click="handleResetQuery()">
                <i-ep-refresh />
                重置
              </el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-collapse-item>
    </el-collapse> 

    <div style="height: 5px;"></div>

    <!-- 查询结果-->
    <el-card shadow="never" class="table-container">
      <template #header>
        <el-button
          type="success"
          @click="handleOpenDialog()"
          ><i-ep-plus />新增</el-button
        >
      </template>
      <el-row :gutter="0" >
          <div class="centered-text">{{tipMessage}}</div>
      </el-row>

      <el-table
        ref = "queryListRef"
        @selection-change="handleSelectionChange"
        max-height="450"
        v-loading="loading"
        :row-style="getRowClassName"
        show-header
        size="small"
        :data="tableData"
        :header-cell-style="{ background: '#F1F9FA', height: '10px' ,overflow:'hidden', 'text-align': 'center','font-size': '10px'}"
        :cell-style="setBackgroundColor"
        border
        :span-method="objectSpanMethod"
      >
        <el-table-column prop="isCheck" type="selection" min-width="35" align="center" />
        <el-table-column label= "OP" fixed="left" align="left" min-width="37">
          <template #header>
            <div>
              <i-ep-edit />
            </div>
          </template>
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              link
              @click="handleOpenDialog(scope.row.spcrmId)"
            >
              <i-ep-edit />
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="serialNumber" label="SN" min-width="40" fixed/>
        <el-table-column prop="pmClassification" label="PM Classification" min-width="120"/>
        <el-table-column prop="gptLedBy" label="GPT Led By" min-width="88" />
        <el-table-column prop="projectType" label="Project Type" min-width="88" style="white-space:nowrap;"/>
        <el-table-column prop="comment" label="Comment" min-width="88" style="white-space:nowrap;"/>
        <el-table-column prop="staffName" label="Staff Name" min-width="88" style="white-space:nowrap;" fixed/>
        <el-table-column prop="role" label="Role" min-width="60" />
        <el-table-column prop="franchise" label="Franchise" min-width="80" />
        <el-table-column prop="studyDcode" label="Study Dcode" min-width="95" />
        <el-table-column prop="studyName" label="Study Name" min-width="88" />
        <el-table-column prop="activityType" label="Activity Type" min-width="95" />
        <el-table-column prop="activityId" label="Activity ID" min-width="88" fixed/>
        <el-table-column prop="status" label="Status" min-width="60">
          <template #default="scope">
            <el-tag :type="scope.row.status == '1' ? 'success' : 'info'">
              {{ scope.row.status == 1 ? "active" : "inActive" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="fteTimeType" label="FTE/TIme" min-width="88" show-overflow-tooltip/>
        <el-table-column prop="fteTime1" label="fteTime1" min-width="65" v-if="fteTimes[0]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[0] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime1" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime2" label="fteTime2" min-width="65" v-if="fteTimes[1]">
          <template #header>
            <div>
              <span>{{ fteTimes[1] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime2" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime2}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime3" label="fteTime3" min-width="65" v-if="fteTimes[2]">
          <template #header>
            <div>
              <span>{{ fteTimes[2] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime3" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime3}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime4" label="fteTime4" min-width="65" v-if="fteTimes[3]">
          <template #header>
            <div>
              <span>{{ fteTimes[3] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime4" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime4}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime5" label="fteTime5" min-width="65" v-if="fteTimes[4]" >
          <template #header>
            <div>
              <span>{{ fteTimes[4] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime5" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime5}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime6" label="fteTime6" min-width="65" v-if="fteTimes[5]">
          <template #header>
            <div>
              <span>{{ fteTimes[5]}}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime6" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime6}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime7" label="fteTime7" min-width="65" v-if="fteTimes[6]">
          <template #header>
            <div>
              <span>{{ fteTimes[6] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime7" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime7}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime8" label="fteTime8" min-width="65" v-if="fteTimes[7]">
          <template #header>
            <div>
              <span>{{ fteTimes[7] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime8" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime8}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime9" label="fteTime9" min-width="65" v-if="fteTimes[8]">
          <template #header>
            <div>
              <span>{{ fteTimes[8] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime9" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime9}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime10" label="fteTime10" min-width="65" v-if="fteTimes[9]">
          <template #header>
            <div>
              <span>{{ fteTimes[9] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime10" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime10}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime11" label="fteTime11" min-width="65" v-if="fteTimes[10]">
          <template #header>
            <div>
              <span>{{ fteTimes[10] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime11" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime11}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime12" label="fteTime12" min-width="65" v-if="fteTimes[11]">
          <template #header>
            <div>
              <span>{{ fteTimes[11] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime12" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime12}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime13" label="fteTime13" min-width="65" v-if="fteTimes[12]">
          <template #header>
            <div>
              <span>{{ fteTimes[12] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime13"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime13}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime14" label="fteTime14" min-width="65" v-if="fteTimes[13]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[13] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime14" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime14}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime15" label="fteTime15" min-width="65" v-if="fteTimes[14]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[14] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime15" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime15}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime16" label="fteTime16" min-width="65" v-if="fteTimes[15]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[15] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime16" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime16}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime17" label="fteTime17" min-width="65" v-if="fteTimes[16]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[16] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime17" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime17}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime18" label="fteTime18" min-width="65" v-if="fteTimes[17]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[17] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime18" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime18}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime19" label="fteTime19" min-width="65" v-if="fteTimes[18]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[18] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime19" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime19}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime20" label="fteTime20" min-width="65" v-if="fteTimes[19]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[19] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime20" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime20}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime21" label="fteTime21" min-width="65" v-if="fteTimes[20]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[20] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime21" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime21}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime22" label="fteTime22" min-width="65" v-if="fteTimes[21]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[21] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime22" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime22}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime23" label="fteTime23" min-width="65" v-if="fteTimes[22]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[22] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime23" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime23}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime24" label="fteTime24" min-width="65" v-if="fteTimes[23]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[23] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime24" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime24}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime25" label="fteTime25" min-width="65" v-if="fteTimes[24]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[24] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime25" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime25}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fteTime26" label="fteTime26" min-width="65" v-if="fteTimes[25]">
          <template #header>
            <div>
              <span class="no-wrap">{{ fteTimes[25] }}</span>
            </div>
          </template>
          <template #default="scope">
            <span v-if="scope.row.isEdit && parseInt(scope.column.property.substring(7)) >= currentfield">
              <el-input size="small" v-model="scope.row.fteTime26" @blur="onInputTableBlur(scope)" @focus="onInputTableFocus(scope)"></el-input>
            </span>
            <span v-else>{{scope.row.fteTime26}}</span>
          </template>
        </el-table-column>
         <el-table-column label="操作" fixed="right" align="left" width="60">
          <template #header>
            <div>
              <!--<span><el-button v-if="isSubmit>0" type="primary" size="small" circle></el-button></span>-->
            </div>
          </template>
          <template #default="scope">
            <el-switch v-if="scope.row.fteTimeType !== 'Resource Gap' && scope.row.fteTimeType !== 'Total Demand FTE' && scope.row.fteTimeType !== 'Total Supply FTE' && scope.row.fteTimeType !== 'Total Resource Gap'"
              v-model="scope.row.isEdit"
              @change="changeSwitch(scope.row)"
              :disabled ="scope.row.fteTimeType === 'Resource Gap' ? true : false"
             
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    
    <div style="height: 5px;"></div>

    <!-- 折线图 + 柱状图-->
    <el-collapse v-model="collapseActiveNamesOfChart">
      <el-collapse-item name="1">
        <el-row :gutter="0">
          <el-col :span="12">
            <div style="width: 10px;"></div>
            <LineChart id="LineChart1" width="100%" height="300px" :data =lineChartData />  
          </el-col>
          <el-col :span="12" >
            <div style="width: 10px;"></div>
            <BarChart id="BarChart1" width="100%" height="300px" :data = barChartData />
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>

    <!-- 用户表单弹窗 -->
    <el-drawer
      v-model="dialog.visible"
      :title="dialog.title"
      append-to-body
    >
      <el-form
        ref="fteMgtFormRef"
        :model="formData"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="PM Classification" prop="pmClassification">
          <el-select v-model="formData.pmClassification" placeholder="请选择" maxlength="11">
            <el-option
                v-for="item in pmClassificationOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
           </el-select>
        </el-form-item>
        <el-form-item label="GPT Led By" prop="gptLedBy">
          <el-select v-model="formData.gptLedBy" placeholder="请选择" maxlength="11">
            <el-option
                v-for="item in gptLedByOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
           </el-select>
        </el-form-item>
        <el-form-item label="Project Type" prop="projectType">
          <el-select v-model="formData.projectType" placeholder="请选择" maxlength="11">
            <el-option
                v-for="item in projectTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
          </el-select>
        </el-form-item>
        <el-form-item label="Staff Name" prop="staffName">
          <el-select
            allow-create
            v-model="formData.staffName"
            filterable
            remote
            reserve-keyword
            clearable
            placeholder="请输入关键词"
            :remote-method="remoteMethodForStaffName"
            :loading="loading">
            <el-option
              v-for="item in staffNameOptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Role" prop="role">
          <el-select v-model="formData.role" placeholder="请选择" maxlength="11">
            <el-option
                v-for="item in roleOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
           </el-select>
        </el-form-item>
        <el-form-item label="Franchise" prop="franchise">
          <el-select
            v-model="formData.franchise"
            filterable
            remote
            reserve-keyword
            clearable
            placeholder="请输入关键词"
            :remote-method="remoteMethodForFranchise"
            :loading="loading">
            <el-option
              v-for="item in franchiseOptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Study DCode" prop="studyDcode">
          <el-select
            v-model="formData.studyDcode"
            filterable
            remote
            reserve-keyword
            clearable
            placeholder="请输入关键词"
            :remote-method="(query:any)=>{remoteMethodForStudyDcode(query,'edit',formData.franchise)}"
            :loading="loading">
            <el-option
              v-for="item in studyDcodeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Study Name" prop="studyName">
          <el-select
            v-model="formData.studyName"
            filterable
            remote
            reserve-keyword
            clearable
            placeholder="请输入关键词"
            :remote-method="(query:any)=>{remoteMethodForStudyName(query,'edit',formData.franchise)}"
            :loading="loading">
            <el-option
              v-for="item in studyNameOptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Activity Type" prop="activityType">
          <el-select v-model="formData.activityType" placeholder="请选择" maxlength="11">
            <el-option
                v-for="item in activityTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
           </el-select>
        </el-form-item>
        <el-form-item label="Activity lD" prop="activityId">
          <el-select
            v-model="formData.activityId"
            filterable
            remote
            reserve-keyword
            clearable
            placeholder="请输入关键词"
            :remote-method="(query:any)=>{remoteMethodForActivityId(query,'edit',formData.activityType)}"
            :loading="loading">
            <el-option
              v-for="item in activityIdOptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Comment" prop="comment">
          <el-input
            v-model="formData.comment"
            placeholder=""
            maxlength="11"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="mainSubmit">确 定</el-button>
          <el-button @click="handleCloseDialog">取 消</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "FteMgt",
  inherititems: false,
});

import FteMgtAPI, { FteMonthTipVO, FteMgtForm, FteMgtQuery, FteMgtVO, LineChartVO, BarChartVO, Series, Emphasis} from "@/api/staff";
import DictAPI from "@/api/dict";

const queryFormRef = ref(ElForm); // 查询面板
const queryListRef = ref<InstanceType<typeof ElTable>>(); // 查询结果面板
const fteMgtFormRef = ref(ElForm); // 新增、编辑面板

const loading = ref(false);

const isSubmit = ref(0); // 控制右边提交按钮是否展示

let originalValue:any  = undefined; //fte单元格被编辑前的值

let totalRowId  = 0; // fte排除汇总行的行数

let selectionKeys = []; // 缓存勾选的行ID

let collapseActiveNamesOfQuery = ['1'];
let collapseActiveNamesOfChart = ['1'];

const queryParams = reactive<FteMgtQuery>({});
const tableData = ref<FteMgtVO[]>();
const fteTimes = ref<string[]>([]);

let tipMessage = ref("");
let currentfield = ref();
let endfield = ref();

const barChartData = ref<BarChartVO>(); // 柱状图
const lineChartData = ref<LineChartVO>(); // 折线图

const tableRowInputRef: any = ref(null) // 控制双击编辑
const state = reactive({
  // 编辑的表格行
  tableRowEditIndex: undefined,
  // 编辑的表格列
  tableColumnEditIndex: undefined
})

/** GPT_Led_By下拉选项 */
const gptLedByOptions = ref<OptionType[]>();
const gptLedBySelectedValues= ref<string[]>();
/** PM Classification下拉选项 */
const pmClassificationOptions = ref<OptionType[]>();
const pmClassificationSelectedValues= ref<string[]>();
/** Project Type下拉选项 */
const projectTypeOptions = ref<OptionType[]>();
const projectTypeSelectedValues= ref<string[]>();
/** Role下拉选项 */
const roleOptions = ref<OptionType[]>();
const roleSelectedValues= ref<string[]>();
/** Activity Type下拉选项 */
const activityTypeOptions = ref<OptionType[]>();
const activityTypeSelectedValues= ref<string[]>();

/**----------------------------------------- */

/** Staff Name下拉选项 */
const staffNameOptions = ref<OptionType[]>();
const staffNameSelectedValues= ref<string[]>();
/** Franchise下拉选项 */
const franchiseOptions = ref<OptionType[]>();
const franchiseSelectedValues= ref<string[]>();
/** Study Name下拉选项 */
const studyNameOptions = ref<OptionType[]>();
const studyNameSelectedValues= ref<string[]>();
/** Study Name下拉选项 */
const studyDcodeOptions = ref<OptionType[]>();
const studyDcodeSelectedValues= ref<string[]>();
/** Activity ID下拉选项 */
const activityIdOptions = ref<OptionType[]>();
const activityIdSelectedValues= ref<string[]>();

/**  FteMgt弹窗对象  */
const dialog = reactive({
  visible: false,
  title: "",
});

// FteMgt表单数据
const formData = reactive<FteMgtForm>({});

/** 用户表单校验规则  */
const rules = reactive({
  pmClassification: [{ required: true, message: "This field is required", trigger: "blur" }],
  gptLedBy: [{ required: true, message: "This field is required", trigger: "blur" }],
  projectType: [{ required: true, message: "This field is required", trigger: "blur" }],
  staffName: [{ required: true, message: "This field is required", trigger: "blur" }],
  role: [{ required: true, message: "This field is required", trigger: "blur" }],
  franchise: [{ required: true, message: "This field is required", trigger: "blur" }],
  studyDcode: [{ required: true, message: "This field is required", trigger: "blur" }],
  studyName: [{ required: true, message: "This field is required", trigger: "blur" }],
  activityType: [{ required: true, message: "This field is required", trigger: "blur" }],
  activityId: [{ required: true, message: "This field is required", trigger: "blur" }],
});

/** 动态列清单 */
type Properties = keyof FteMgtVO
const key1:Properties = 'fteTime1';
const key2:Properties = 'fteTime2';
const key3:Properties = 'fteTime3';
const key4:Properties = 'fteTime4';
const key5:Properties = 'fteTime5';
const key6:Properties = 'fteTime6';
const key7:Properties = 'fteTime7';
const key8:Properties = 'fteTime8';
const key9:Properties = 'fteTime9';
const key10:Properties = 'fteTime10';
const key11:Properties = 'fteTime11';
const key12:Properties = 'fteTime12';
const key13:Properties = 'fteTime13';
const key14:Properties = 'fteTime14';
const key15:Properties = 'fteTime15';
const key16:Properties = 'fteTime16';
const key17:Properties = 'fteTime17';
const key18:Properties = 'fteTime18';
const key19:Properties = 'fteTime19';
const key20:Properties = 'fteTime20';
const key21:Properties = 'fteTime21';
const key22:Properties = 'fteTime22';
const key23:Properties = 'fteTime23';
const key24:Properties = 'fteTime24';
const key25:Properties = 'fteTime25';
const key26:Properties = 'fteTime26';
let fieldList = [key1,key2,key3,key4,key5,key6,key7,key8,key9,key10,key11,key12,key13,
                 key14,key15,key16,key17,key18,key19,key20,key21,key22,key23,key24,key25,key26
                ]

/** 查询 */
function handleQuery() {
  if(queryParams.startMonth===undefined){
    ElMessage.success("请选择开始月份");
    return;
  }
  if(queryParams.endMonth===undefined){
    ElMessage.success("请选择结束月份");
    return;
  }

  if (monthDifference(queryParams.startMonth,queryParams.endMonth) > 25){
    ElMessage.success("月份跨度大于25，请重新选择");
    return;
  }
  loading.value = true;

  if (gptLedBySelectedValues.value) {
    queryParams.gptLedBy = gptLedBySelectedValues.value.join(",");
  }
  if (projectTypeSelectedValues.value) {
    queryParams.projectType = projectTypeSelectedValues.value.join(",");
  }
  if (roleSelectedValues.value) {
    queryParams.role = roleSelectedValues.value.join(",");
  }
  if (activityTypeSelectedValues.value) {
    queryParams.activityType= activityTypeSelectedValues.value.join(",");
  }
  if (staffNameSelectedValues.value) {
    queryParams.staffName= staffNameSelectedValues.value.join(",");
  }
  if (franchiseSelectedValues.value) {
    queryParams.franchise= franchiseSelectedValues.value.join(",");
  }
  if (studyNameSelectedValues.value) {
    queryParams.studyName= studyNameSelectedValues.value.join(",");
  }
  if (studyDcodeSelectedValues.value) {
    queryParams.studyDcode= studyDcodeSelectedValues.value.join(",");
  }
  if (activityIdSelectedValues.value) {
    queryParams.activityId= activityIdSelectedValues.value.join(",");
  }
  FteMgtAPI.listFteMgts(queryParams)
    .then((data) => {
      tableData.value = data.fteMgtList;
      fteTimes.value =data.fteTimeHeaderList || [];
      totalRowId = data.totalRowId ? data.totalRowId : 0;
      currentfield.value = data.currentfield ? data.currentfield : 0;
      endfield.value = data.endfield ? data.endfield : 0;
    })
    .finally(() => {
      loading.value = false;
  });
  setTimeout(() => {
    updateSelectionState();
  }, 1000);
}

/** 提交按钮是否展示 */
function changeSwitch(row: { [key: string]: any }){
  if (row.isEdit ==1) {
    isSubmit.value=isSubmit.value+1;
  }else{
    isSubmit.value=isSubmit.value-1;
  }
}

/** 双击可编辑的单元格 */
const dbClickCell = (scope: any) => {
  if (scope.row.fteTimeType == 'Resource Gap'){
    return;
  }
  // 找到单个格子独有的属性 - 这里是用所在行跟列id区别显示
  state.tableRowEditIndex = scope.$index
  state.tableColumnEditIndex = scope.column.id
  nextTick(() => { 
  	// 获取焦点
    tableRowInputRef.value.focus()
  })
}

/** 表格中input获取焦点 */
const onInputTableFocus = (scope: any) => {
  const id = scope.row.id
  const key = scope.column.property
  const value = scope.row[key]
  if (typeof tableData.value !== 'undefined' && typeof tableData.value.length !== 'undefined'){
    originalValue = value;
  }
}

/** 表格中input取消焦点 */
const onInputTableBlur = (scope: any) => {
  state.tableRowEditIndex = undefined
  state.tableColumnEditIndex = undefined
  const id = scope.row.id
  const key = scope.column.property
  const value = scope.row[key]
  if (originalValue === value) return; // 数值没有变化，直接返回
  if (typeof tableData.value !== 'undefined' && typeof tableData.value.length !== 'undefined'){
    /** 单行合计 */
    if (scope.row.fteTimeType == 'Demand FTE'){
      const demandFte = (value === null) ? '0': value
      const supplyFte = getValue(tableData.value[scope.$index + 1], key);
      const resourceGap = parseFloat(demandFte) - parseFloat(supplyFte);
      setValue(tableData.value[scope.$index + 2], key, formatToTwoDecimals(resourceGap));
    }
    if (scope.row.fteTimeType == 'Supply FTE'){
      const demandFte = getValue(tableData.value[scope.$index - 1], key);
      const supplyFte = (value === null) ? '0': value
      const resourceGap = parseFloat(demandFte) - parseFloat(supplyFte) 
      setValue(tableData.value[scope.$index + 1], key, formatToTwoDecimals(resourceGap));
    }

    /** 总行合计 */
    const totalDemandFte = tableData.value
        .filter(item => item.fteTimeType === 'Demand FTE' && item.isCheck === 1)
        .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
    const totalSupplyFte =  tableData.value
        .filter(item => item.fteTimeType === 'Supply FTE' && item.isCheck === 1)
        .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
    const totalResourceGap=  tableData.value
        .filter(item => item.fteTimeType === 'Resource Gap' && item.isCheck === 1)
        .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);

    setValue(tableData.value[totalRowId], key, formatToTwoDecimals(totalDemandFte));
    setValue(tableData.value[totalRowId + 1], key, formatToTwoDecimals(totalSupplyFte));
    setValue(tableData.value[totalRowId + 2], key, formatToTwoDecimals(totalResourceGap));

    fteSubmit(scope);

    recalculateBarChart();
    recalculateLineChart();
  }
}

/** 保留两位小数 */
function formatToTwoDecimals(num: number): string {
    //return num.toFixed(2);
    return num + '';
}

/** 反射设置对象值 */
function setValue<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

/** 反射获取对象值 */
function getValue<T, K extends keyof T>(obj: T, key: K) : any {
  return (!!obj[key]) ? obj[key] :'0';
}

/**
 * 打开弹窗
 *
 * @param id 用户ID
 */
 async function handleOpenDialog(id?: number) {
  dialog.visible = true;
  if (id) {
    dialog.title = "修改";
    FteMgtAPI.getFormData(id).then((data) => {
      Object.assign(formData, { ...data });
    });
  } else {
    dialog.title = "新增";
  }
}

/** 合并单元格 */
function objectSpanMethod({ row, column, rowIndex, columnIndex }: any) {
  if ((columnIndex === 0) ||(columnIndex === 1)||(columnIndex === 2)||(columnIndex === 3)||(columnIndex === 4)
  ||(columnIndex === 5)||(columnIndex === 6)||(columnIndex === 7)||(columnIndex === 8)||(columnIndex === 9)
  ||(columnIndex === 10)||(columnIndex === 11)||(columnIndex === 12)||(columnIndex === 13)||(columnIndex === 14)) {
    if ((rowIndex ===totalRowId) || (rowIndex ===totalRowId +1)  || (rowIndex ===totalRowId + 2) ){
      if (rowIndex === totalRowId) {
        if (columnIndex === 5) {
           return [4, 15];
        } else if (columnIndex < 15) {
          return [0, 0];
        }
      }else{
        return [0, 0];
      }
    }else{
      if (rowIndex % 3 === 0)  {
        return {
          rowspan: 3,
          colspan: 1
        };
      } else {
        return {
          rowspan: 0,
          colspan: 0
        };
      }
    }
  }
}

/** 设置合计行背景色 */
function getRowClassName({ row, rowIndex } :any) {
  if (rowIndex === totalRowId || rowIndex === totalRowId + 1 ||rowIndex === totalRowId +2) {
    return {
          backgroundColor: '#F1F9FA', 
        };
  }
  return {};
}

/** 关闭弹窗 */
function handleCloseDialog() {
  dialog.visible = false;
  fteMgtFormRef.value.resetFields();
  fteMgtFormRef.value.clearValidate();
  formData.spcrmId = undefined;
}

/** 重置查询 */
function handleResetQuery() {
  queryFormRef.value.resetFields();
  handleQuery();
}

/** 表单提交 */
const mainSubmit = useThrottleFn(() => {
  fteMgtFormRef.value.validate((valid: any) => {
    if (valid) {
      const spcrmId = formData.spcrmId;
      loading.value = true;
      if (spcrmId) {
        FteMgtAPI.updateMain(formData)
          .then(() => {
            ElMessage.success("修改成功");
            handleCloseDialog();
            //handleResetQuery();
          })
          .finally(() => (loading.value = false));
      } else {
        FteMgtAPI.addMain(formData)
          .then(() => {
            ElMessage.success("新增成功");
            handleCloseDialog();
            //handleResetQuery();
          })
          .finally(() => (loading.value = false));
      }
    }
  });
}, 3000);

/** 表单提交 */
const fteSubmit = useThrottleFn((scope: any) => {
  const fteMgtData : FteMgtVO = {};
  Object.assign(fteMgtData, { ...scope.row });

  fteMgtData.originalValue = originalValue;
  // list转map, 字段名称作为key, 月份作为值
  const map = fteTimes.value.reduce((acc, element, index) => {acc.set('fteTime'+(index+1),element);return acc;}, new Map());
  fteMgtData.fteTimeName = map.get(scope.column.property);

  const index = scope.column.property;
  loading.value = true;
  if (index) {
    FteMgtAPI.updateFte(index, fteMgtData)
            .then(() => {
              ElMessage.success("修改成功");
            })
            .finally(() => (loading.value = false));
  }

}, 3000);

/** 求月份差 */
function monthDifference(date1: Date, date2: Date): number {
    // 获取年份和月份
    let year1 = date1.getFullYear();
    let month1 = date1.getMonth(); // getMonth() 返回的是从0开始的月份，所以这里得到的是实际月份减1
    let year2 = date2.getFullYear();
    let month2 = date2.getMonth();
    // 计算月份差
    let monthDiff = (year2 - year1) * 12 + (month2 - month1);
    return Math.abs(monthDiff); // 使用绝对值，以确保结果总是非负数
}

onMounted(() => {
  //fteTimes.value = [{"fteTime":"2024-01"},{"fteTime":"2024-02"}];
  //handleQuery();
});

onBeforeMount(() => {
  // 根据字典编码获取字典项
  DictAPI.getOptions("pmClassification").then((data) => {
    pmClassificationOptions.value = data;
  });
  DictAPI.getOptions("gptLedBy").then((data) => {
    gptLedByOptions.value = data;
  });
  DictAPI.getOptions("projectType").then((data) => {
    projectTypeOptions.value = data;
  });
  DictAPI.getOptions("role").then((data) => {
    roleOptions.value = data;
  });
  DictAPI.getOptions("activityType").then((data) => {
    activityTypeOptions.value = data;
  });
  FteMgtAPI.getFteMonthTip().then((data) => {
    tipMessage.value = data.tip? data.tip: "";
    if(queryParams.startMonth===undefined && data.currentMonth){
      queryParams.startMonth = createMonthDate(data.currentMonth);
    }
    if(queryParams.endMonth===undefined && data.endMonth){
      queryParams.endMonth = createMonthDate(data.endMonth);
    }
  })
});

/** 将一个形如 "2024-09" 的字符串（只包含年份和月份）转换为一个 Date 对象 */
function createMonthDate(yearMonthStr: string): Date {
    const [year, month] = yearMonthStr.split('-').map(part => parseInt(part, 10));
    if (isNaN(year) || isNaN(month)) {
        throw new Error('Invalid year-month string');
    }
    // 注意：在 Date 构造函数中，月份是从 0 开始的，所以需要减去 1
    return new Date(year, month - 1, 1);
}

function remoteMethodForStaffName(query:any) {
  if (query !== '') {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      FteMgtAPI.getStaffNameOptions({"staffName": query })
      .then((data) => {
        staffNameOptions.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
    }, 200);
  } else {
    staffNameOptions.value = [];
  }
}

function remoteMethodForFranchise(query:any) {
  if (query !== '') {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      FteMgtAPI.getFranchiseNameOptions({"franchise": query })
      .then((data) => {
        franchiseOptions.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
    }, 200);
  } else {
    staffNameOptions.value = [];
  }
}

function remoteMethodForStudyName(query:any, type:string, franchise?:string) {
  if (query !== '') {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      FteMgtAPI.getStudyNameOptions({"franchise": type==='query' ? franchiseSelectedValues.value?.join(","):franchise,"studyName": query })
      .then((data) => {
        studyNameOptions.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
    }, 200);
  } else {
    staffNameOptions.value = [];
  }
}

function remoteMethodForStudyDcode(query:any, type:string, franchise?:string) {
  if (query !== '') {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      FteMgtAPI.getStudyDcodeOptions({"franchise": type==='query' ? franchiseSelectedValues.value?.join(","):franchise,"studyDcode": query })
      .then((data) => {
        studyDcodeOptions.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
    }, 200);
  } else {
    studyDcodeOptions.value = [];
  }
}

function remoteMethodForActivityId(query:any,type:string, activityType?:string) {
  debugger
  if (query !== '') {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      FteMgtAPI.getActivityIdOptions({"activityType": type==='query' ? activityTypeSelectedValues.value?.join(",") : activityType,"activityId": query })
      .then((data) => {
        activityIdOptions.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
    }, 200);
  } else {
    activityIdOptions.value = [];
  }
}

/** 更新表格的选中状态 */
const updateSelectionState = () => {
  const selectedRows = tableData.value?.filter(row => row.isCheck);
  (queryListRef.value as any)?.toggleAllSelection(selectedRows?.map(row => row.id));
  handleSelectionChange(selectedRows? selectedRows:[]);
};

/** 处理表格中行的选择状态改变 */
function handleSelectionChange (rows:any[]) {
  tableData.value?.forEach(row => {
        row.isCheck = 0
  });

  let selectionKeysOfModThree: any[] = rows.filter(row => (row.id % 3 === 1) && (row.fteTimeType !=='Total Demand FTE') && (row.fteTimeType !=='Total Supply FTE') && (row.fteTimeType !=='Total Resource Gap')).map(item => item.id);
  selectionKeys = [];
  for (let item of selectionKeysOfModThree) {
        selectionKeys.push(item);
        selectionKeys.push(item+1);
        selectionKeys.push(item+2);
  }
  selectionKeys.forEach(key => {
    tableData.value?.forEach(row => {
      if (row.id == key) {
        row.isCheck = 1
      }
    });
  });

  recalculate();
  recalculateBarChart();
  recalculateLineChart();
}

/** 设置单元格背景颜色 */
const setBackgroundColor = ({ row, column }: { row:FteMgtVO; column: any}) => {
  const styles1: any = {backgroundColor: '#F5FFFA', textAlign:'right'};
  const styles2: any = {textAlign:'right'};
  const map = fteTimes.value.reduce((acc, element, index) => {acc.set('fteTime'+(index+1),element);return acc;}, new Map());
  if (column.property?.includes("fteTime") && (column.property !=='fteTimeType')){
    if ((row.fteTimeType !=='Total Demand FTE') && (row.fteTimeType !=='Total Supply FTE') && (row.fteTimeType !=='Total Resource Gap')){
      let lastTwoChars: string = map.get(column.property).slice(-2)
      if (["04", "05", "06","10", "11", "12"].includes(lastTwoChars)) {
        return styles1; 
      } else {
        return styles2; // 默认背景
      }
    }else{
      return styles2; // 默认背景
    }
  }
  return {}; // 默认背景
};

/** 查询列表重新计算 */
function recalculate(){
  fieldList.forEach((key, index)  => {
    if (typeof tableData.value !== 'undefined' && typeof tableData.value.length !== 'undefined'){
      const totalDemandFte = tableData.value
          .filter(item => item.fteTimeType === 'Demand FTE' && item.isCheck === 1)
          .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
      const totalSupplyFte =  tableData.value
          .filter(item => item.fteTimeType === 'Supply FTE' && item.isCheck === 1)
          .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
      const totalResourceGap=  tableData.value
          .filter(item => item.fteTimeType === 'Resource Gap' && item.isCheck === 1)
          .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);

      setValue(tableData.value[totalRowId], key, formatToTwoDecimals(totalDemandFte));
      setValue(tableData.value[totalRowId + 1], key, formatToTwoDecimals(totalSupplyFte));
      setValue(tableData.value[totalRowId + 2], key, formatToTwoDecimals(totalResourceGap));
    }   
  });
}

/** 折线图重新计算 */
function recalculateLineChart(){
  lineChartData.value = {"demandList" : [],"supplyList" : [],"fteTimeList" : []};
  if (typeof tableData.value !== 'undefined' && typeof tableData.value.length !== 'undefined'){
    let i = 0;
    for (let key of fieldList) {
      if ( i >= fteTimes.value.length)  break;
      const totalDemandFte = tableData.value
        .filter(item => item.fteTimeType === 'Demand FTE' && item.isCheck === 1)
        .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
      const totalSupplyFte =  tableData.value
        .filter(item => item.fteTimeType === 'Supply FTE' && item.isCheck === 1)
        .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
      lineChartData.value.demandList.push(totalDemandFte);
      lineChartData.value.supplyList.push(totalSupplyFte);
      i = i+1;
    };
    lineChartData.value.fteTimeList = [...fteTimes.value];
  }

}
/** 柱状图重新计算 */
function recalculateBarChart(){
  barChartData.value = {"seriesList" : [],"fteTimeList" : []};
  if (typeof tableData.value !== 'undefined' && typeof tableData.value.length !== 'undefined'){
    // 1、汇总求和
    const totalDemandFteList:number[] = [];
    const totalSupplyFteList:number[] = [];
    let monthSpan = 0;
      for (let key of fieldList) {
        if ( monthSpan >= fteTimes.value.length)  break;
        const totalDemandFte = tableData.value
          .filter(item => item.fteTimeType === 'Demand FTE' && item.isCheck === 1)
          .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
        const totalSupplyFte =  tableData.value
          .filter(item => item.fteTimeType === 'Supply FTE' && item.isCheck === 1)
          .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
        totalDemandFteList.push(totalDemandFte);
        totalSupplyFteList.push(totalSupplyFte);
        monthSpan = monthSpan + 1;
      };

    // 2、by franchise 求和
    const uniqueFranchiseList = uniqueByField(tableData.value, 'franchise');
    let franchiseCount = 1;
    for (let franchiseKey of uniqueFranchiseList) {
      let demandFte: Series;
      let supplyFte: Series;
      if (uniqueFranchiseList.length === franchiseCount){
        demandFte = {
          name: "",
          type: "bar",
          stack:"Demand FTE",
          emphasis:{focus: 'series'},
          label: {show: true, position: 'top',formatter: function(params:any) { return totalDemandFteList[params.dataIndex] === 0 ? '' : totalDemandFteList[params.dataIndex];}},
          data: []
        };
        supplyFte = {
          name: "",
          type: "bar",
          stack:"supplyFte",
          emphasis:{focus: 'series'},
          label: {show: true, position: 'top',formatter: function(params:any) { return totalSupplyFteList[params.dataIndex] === 0 ? '' : totalSupplyFteList[params.dataIndex];}},
          data: []
        };
      } else {
        franchiseCount = franchiseCount + 1;
        demandFte = {
          name: "", 
          type: "bar",
          stack:"Demand FTE",
          emphasis:{focus: 'series'},
          label: {show: false},
          data: []
        };

        supplyFte = {
          name: "",
          type: "bar",
          stack:"supplyFte",
          emphasis:{focus: 'series'},
          label: {show: false},
          data: []
        };
      }
      demandFte.name = (franchiseKey.franchise ? franchiseKey.franchise : franchiseCount+'') ;
      supplyFte.name = (franchiseKey.franchise ? franchiseKey.franchise : franchiseCount+'') ;
      let monthSpan = 0;
      for (let key of fieldList) {
        if ( monthSpan >= fteTimes.value.length)  break;
        const totalDemandFteByFranchise = tableData.value
          .filter(item => item.fteTimeType === 'Demand FTE' && item.isCheck === 1 && item.franchise === franchiseKey.franchise)
          .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
        const totalSupplyFteByFranchise =  tableData.value
          .filter(item => item.fteTimeType === 'Supply FTE' && item.isCheck === 1 && item.franchise === franchiseKey.franchise)
          .reduce((sum, item) => sum + parseFloat(getValue(item, key)), 0);
        demandFte.data.push(totalDemandFteByFranchise);
        supplyFte.data.push(totalSupplyFteByFranchise);
        monthSpan = monthSpan+1;
      };
      barChartData.value?.seriesList.push(demandFte);
      barChartData.value?.seriesList.push(supplyFte);
    }
  } 
  barChartData.value.fteTimeList = fteTimes.value;
}

/** 去重方法 */
function uniqueByField<T, K extends keyof T>(array: T[], field: K): T[] {
  const seen = new Set<string>();
  return array.filter(item => {
    const key = item[field] as string;
    if (key === null) return false;
    if (!seen.has(key)) {
        seen.add(key);
        return true;
    }
    return false;
  });
}

</script>

<style scoped lang="scss">
.el-col {
  display: flex;
  align-items: center; /* 垂直居中 */
}
.centered-text {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 25px;
    font-size: 12px;
    color: rgb(243, 187, 89);
}

.no-wrap {
  white-space: nowrap!important;
}

.table-row-class{
		color: red;
}

.eidt-row-p {
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin: 0;
}

</style>