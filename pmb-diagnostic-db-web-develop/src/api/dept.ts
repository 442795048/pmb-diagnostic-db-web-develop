import request from "@/utils/request";

const DEPT_BASE_URL = "/api/v1/dept";

class DeptAPI {
  /**
   * 获取部门列表
   *
   * @param queryParams 查询参数（可选）
   * @returns 部门树形表格数据
   */
  static getList(queryParams?: DeptQuery) {
    return request<any, DeptVO[]>({
      url: `${DEPT_BASE_URL}`,
      method: "get",
      params: queryParams,
    });
  }

  /** 获取部门下拉列表 */
  static getOptions() {
    return request<any, OptionType[]>({
      url: `${DEPT_BASE_URL}/options`,
      method: "get",
    });
  }

  /**
   * 获取部门表单数据
   *
   * @param id 部门ID
   * @returns 部门表单数据
   */
  static getFormData(id: number) {
    return request<any, DeptForm>({
      url: `${DEPT_BASE_URL}/${id}/form`,
      method: "get",
    });
  }

  /**
   * 新增部门
   *
   * @param data 部门表单数据
   * @returns 请求结果
   */
  static add(data: DeptForm) {
    return request({
      url: `${DEPT_BASE_URL}`,
      method: "post",
      data: data,
    });
  }

  /**
   * 修改部门
   *
   * @param id 部门ID
   * @param data 部门表单数据
   * @returns 请求结果
   */
  static update(id: number, data: DeptForm) {
    return request({
      url: `${DEPT_BASE_URL}/${id}`,
      method: "put",
      data: data,
    });
  }

  /**
   * 删除部门
   *
   * @param ids 部门ID，多个以英文逗号(,)分隔
   * @returns 请求结果
   */
  static deleteByIds(ids: string) {
    return request({
      url: `${DEPT_BASE_URL}/${ids}`,
      method: "delete",
    });
  }
}

export default DeptAPI;

/** 部门查询参数 */
export interface DeptQuery {
  /** 搜索关键字 */
  keywords?: string;
  /** 状态 */
  status?: number;
}

/** 部门类型 */
export interface DeptVO {
  /** 子部门 */
  children?: DeptVO[];
  /** 创建时间 */
  createTime?: Date;
  /** 部门ID */
  id?: number;
  /** 部门名称 */
  name?: string;
  /** 部门编号 */
  code?: string;
  /** 父部门ID */
  parentId?: number;
  /** 排序 */
  sort?: number;
  /** 状态(1:启用；0:禁用) */
  status?: number;
  /** 修改时间 */
  updateTime?: Date;
}

/** 部门表单类型 */
export interface DeptForm {
  /** 部门ID(新增不填) */
  id?: number;
  /** 部门名称 */
  name?: string;
  /** 部门编号 */
  code?: string;
  /** 父部门ID */
  parentId: number;
  /** 排序 */
  sort?: number;
  /** 状态(1:启用；0：禁用) */
  status?: number;
}
