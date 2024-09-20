import request from "@/utils/request";

const STAFF_BASE_URL = "/api/v2/staff";

class FteMgtAPI {
    /**
   * 获取FteMgt Report
   *
   * @param queryParams 查询参数
   * @returns FteMgt明细列表
   */
    static listFteMgts(queryParams: FteMgtQuery) {
      return request<any, FteMgtReportVO>({
        url: `${STAFF_BASE_URL}/listFteMgts`,
        method: "get",
        params: queryParams,
      });
    }

  /**
   * 修改表单数据
   *
   * @param spcrmId FteMgtID
   * @param data 表单数据
   */
  static updateMain(data: FteMgtForm) {
    return request({
      url: `${STAFF_BASE_URL}/updateMain`,
      method: "put",
      data: data,
    });
  }

  /**
   * 添加表单数据
   *
   * @param data 表单数据
   */
    static add(data: FteMgtForm) {
      return request({
        url: `${STAFF_BASE_URL}/addMain`,
        method: "post",
        data: data,
    });
  }

    /**
   * 获取角色表单数据
   *
   * @param id 角色ID
   * @returns 角色表单数据
   */
    static getFormData(id: number) {
      return request<any, FteMgtForm>({
        url: `${STAFF_BASE_URL}/${id}/form`,
        method: "get",
      });
    }

  /**
   * 修改fteTime值
   *
   * @param index fteTime的序号
   * @param data 表单数据
   */
  static updateFte(index: string, data: FteMgtVO) {
    return request({
      url: `${STAFF_BASE_URL}/updateFte/${index}`,
      method: "put",
      data: data,
    });
  }

  /** 获取staffName下拉数据源 */
  static getStaffNameOptions(query:any) {
    console.log(query);
    return request<any, OptionType[]>({
      url: `${STAFF_BASE_URL}/options/staffName`,
      method: "get",
      params: query,
    });
  }

  /** 获取franchise下拉数据源 */
  static getFranchiseNameOptions(query:any) {
    console.log(query);
    return request<any, OptionType[]>({
      url: `${STAFF_BASE_URL}/options/franchise`,
      method: "get",
      params: query,
    });
  }

  /** 获取studyName下拉数据源 */
  static getStudyNameOptions(query:any) {
    console.log(query);
    return request<any, OptionType[]>({
      url: `${STAFF_BASE_URL}/options/studyName`,
      method: "get",
      params: query,
    });
  }

  /** 获取studyDcode下拉数据源 */
  static getStudyDcodeOptions(query:any) {
    console.log(query);
    return request<any, OptionType[]>({
      url: `${STAFF_BASE_URL}/options/studyDcode`,
      method: "get",
      params: query,
    });
  }

  /** 获取activityId下拉数据源 */
  static getActivityIdOptions(query:any) {
    console.log(query);
    return request<any, OptionType[]>({
      url: `${STAFF_BASE_URL}/options/activityId`,
      method: "get",
      params: query,
    });
  }

}

export default FteMgtAPI;

/**
 * FteMgt表单数据
 */
export interface FteMgtForm {
  spcrmId?: number;
  pmClassification?: string;
  gptLedBy?: string;
  projectType?: string;
  comment?: string;
  staffName?: string;
  role?: string;
  franchise?: string;
  studyDcode?: string;
  studyName?: string;
  activityType?: string;
  activityId?: string;
}

/**
 * FteMgt查询参数
 */
export interface FteMgtQuery {
  pmClassification?: string;
  gptLedBy?: string;
  projectType?: string;
  staffName?: string;
  role?: string;
  franchise?: string;
  studyDcode?: string;
  studyName?: string;
  activityType?: string;
  activityId?: string;
  startMonth?: Date;
  endMonth?: Date;
}

/**
 * FteMgt Report
 */
export interface FteMgtReportVO {
  fteMgtList?: FteMgtVO[];
  fteTimeHeaderList?: string[];
  totalRowId?:number;
}

/**
 * FteMgt Info
 */
export interface FteMgtVO {
  spcrmId?: number;
  pmClassification?: string;
  gptLedBy?: string;
  projectType?: string;
  comment?: string;
  staffName?: string;
  role?: string;
  franchise?: string;
  studyDcode?: string;
  studyName?: string;
  activityType?: string;
  activityId?: string;
  fteTimeType?: string;
  fteTime1?: string;
  fteTime2?: string;
  fteTime3?: string;
  fteTime4?: string;
  fteTime5?: string;
  fteTime6?: string;
  fteTime7?: string;
  fteTime8?: string;
  fteTime9?: string;
  fteTime10?: string;
  fteTime11?: string;
  fteTime12?: string;
  fteTime13?: string;
  fteTimeName?: string;
  originalValue?: string;
  status?: string;
  //isEdit?:number;
  isCheck?:number;
  serialNumber?:number;
  id?:number;
}

/**  折线图视图对象 */
export interface LineChartVO {
  /** Demand FTE */
  demandList: number[];
  /** Supply FTE */
  supplyList: number[];
  /** 月份 */
  fteTimeList: string[];
}

/**  柱状图视图对象 */
export interface BarChartVO {
  seriesList: Series[];
  /** 月份 */
  fteTimeList: string[];
}

export interface Series {
  name:string;
  type:string;
  stack:string;
  emphasis:Emphasis;
  data:number[];
};

export interface Emphasis {
  focus:string;
};
  
