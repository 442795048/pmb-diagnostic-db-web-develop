import request from "@/utils/request";

const USER_BASE_URL = "/api/v2/vendor"; // 要改

class VendorAPI {
  /**
   * 获取Vendor分页列表
   *
   * @param queryParams 查询参数
   */
  static getPage(queryParams: VendorTableQuery) {
    return request<any, PageResult<VendorList[]>>({
      url: `${USER_BASE_URL}/page`,
      method: "get",
      params: queryParams,
    });
  }

  /**
   * 获取大屏数据
   *
   * @param queryParams 查询参数
   */
  static getVendorAll() {
    return request<any, any>({
      url: `${USER_BASE_URL}/getVendorNumber`,
      method: "get",
    });
  }
  /**
   * 获取全部options
   *
   */
  static getAllOptions() {
    return request<any, any>({
      url: `${USER_BASE_URL}/getAllOptions`,
      method: "get",
    });
  }

  /**
   * 获取全部options
   *
   */
  static getPageByStatus(queryParams: VendorTableQuery) {
    return request<any, PageResult<VendorList[]>>({
      url: `${USER_BASE_URL}/pageByStatus`,
      method: "get",
      params: queryParams,
    });
  }

  /**
   * 获取全部options
   *
   */
  static getAllTeams(VendorName: string) {
    return request<any, any>({
      url: `${USER_BASE_URL}/getTeamsInfo`,
      method: "get",
      params: { VendorName },
    });
  }

  /**
   * 获取全部options
   *
   */
  static getAssayInfo(VendorName: string) {
    return request<any, any>({
      url: `${USER_BASE_URL}/getTeamsInfo`,
      method: "get",
      params: { VendorName },
    });
  }

  /**
   * 获取全部options
   *
   */
  static getAssayById(queryParams: any) {
    return request<any, any>({
      url: `${USER_BASE_URL}/getAssayById`,
      method: "get",
      params: queryParams,
    });
  }

  /**
   * create vendor submit api
   *
   * @param data create vendor 表单数据
   */
  static add(data: any) {
    return request({
      url: `${USER_BASE_URL}/createVendor`,
      method: "post",
      data: data,
    });
  }

  /**
   * 获取view vendor
   */
  static viewVendor(VendorName: string) {
    return request({
      url: `${USER_BASE_URL}/getTreeInfo`,
      method: "get",
      params: { VendorName },
    });
  }

  /**
   * 获取树的列表详情
   */
  static getTreeDetailInfo(params: any) {
    return request({
      url: `${USER_BASE_URL}/getTreeDetailInfo`,
      method: "get",
      params,
    });
  }
  /**
   * 保存树详情
   */
  static addTreeData(data: any) {
    return request({
      url: `${USER_BASE_URL}/addTreeData`,
      method: "post",
      data: data,
    });
  }
  /**
   * 查看view页面表单
   */
  static getVendorByName(params: any) {
    return request({
      url: `${USER_BASE_URL}/getVendorByName`,
      method: "get",
      params,
    });
  }
  /**
   * 修改view页面表单
   */
  static updateVendorByName(data: any) {
    return request({
      url: `${USER_BASE_URL}/updateVendorByName`,
      method: "post",
      data: data,
    });
  }
  static getTestingPerformance(params: any) {
    return request({
      url: `${USER_BASE_URL}/getTestingPerformance`,
      method: "get",
      params,
    });
  }
}
export default VendorAPI;

/**
 * Vendor查询对象
 */
export interface VendorTableQuery extends PageQuery {
  vendorName: string;
  vendorType: string;
  assayTestCapability: string;
  qualification: string;
  oddStatus: string;
  tddStatus: string;
  studyName: string;
  ctaCdx: string;
  assayName: string;
  issueStartDate: string;
  issueEndDate: string;
  tddStartDate: string;
  tddEndDate: string;
  oddStartDate: string;
  oddEndDate: string;
  labVisitStartDate: string;
  labVisitEndDate: string;
  ctaStartDate: string;
  ctaEndDate: string;
  cdxStartDate: string;
  cdxEndDate: string;
}

/** Vendor 列表列 */
export interface VendorList {
  vendorId?: number;
  vendorName?: string;
  dxPartnerTierLevel?: string;
  testingLabTierLevel?: string;
  assayTestCapability?: string;
  oddStatus?: string;
  tddStatus?: string;
  tddScoring?: string;
  note?: string;
}

export interface CreateVendorData {}

export interface VendorBasicForm {}

// level 1 接口类型

export interface VendorLevelOneForm {}
// level 2 接口类型 数组

export interface VendorLevelTwoForm {}
