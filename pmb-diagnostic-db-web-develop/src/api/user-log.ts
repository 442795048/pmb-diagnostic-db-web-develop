import request from "@/utils/request";

const Log_BASE_URL = "/api/v2/userLog";

class UserLogAPI {

  /**
   * 获取日志分页列表
   *
   * @param queryParams 查询参数
   * @returns 日志分页结果
   */
  static getPage(queryParams: UserLogPageQuery) {
    return request<any, PageResult<UserLogPageVO[]>>({
      url: `${Log_BASE_URL}/page`,
      method: "get",
      params: queryParams,
    });
  }

  /**
   * 获取日志明细列表
   *
   * @param queryParams 查询参数
   * @returns 日志明细列表
   */
  static listUserLogItems(queryParams: UserLogItemQuery) {
    return request<any, UserLogItemVO[]>({
      url: `${Log_BASE_URL}/listUserLogItems`,
      method: "get",
      params: queryParams,
    });
  }

  /**
   * 时间轴查询
   *
   * @param queryParams 查询参数
   * @returns 日志明细列表
   */
    static listTimeline(queryParams: TimelineQuery) {
      return request<any, UserLogItemVO[]>({
        url: `${Log_BASE_URL}/listTimeline`,
        method: "get",
        params: queryParams,
      });
    }
}

export default UserLogAPI;

/**
 * 日志查询参数
 */
export interface UserLogPageQuery extends PageQuery {
  /** 搜索关键字 */
  keywords?: string;

  /** 主键 */
  primaryKey?: string;

  /** 用户名 */
  username?: string;

  /** 开始时间 */
  startDate?: string;

  /** 结束时间 */
  endDate?: string;
}

/**
 * 日志明细查询对象
 */
export interface UserLogItemQuery {
  /**
   * 表名称
   */
  tableName?: string;

  /** 开始时间 */
  startDate?: string;

  /** 结束时间 */
  endDate?: string;
}

/**
 * 时间轴查询对象
 */
export interface TimelineQuery {
  /** 表名称 */
  tableName?: string;

  /** 主键 */
  primaryKey?: string;

  /** 字段名称 */
  fieldName?: string;
}

/**
 * 日志分页对象
 */
export interface UserLogPageVO {
  /**
   * 表名称
   */
  tableName: string;
  /**
   * 匹配次数
   */
  count: number;
  /**
   * 修改日期
   */
  timeSpan: string;
  /**
   * 业务日志项列表
   */
  userLogItems: UserLogItemVO[];
}

/**
 * 日志项
 */
export interface UserLogItemVO {
  /**
   * 业务日志的唯一标识
   */
  userLogId?: number;
  /**
   * 日志类型（1、INSERT，2、UPDATE）
   */
  operateType?: string;
  /**
   * 主键
   */
  primaryKey?: string;
  /**
   * 字段名称
   */
  fieldName?: string;
  /**
   * 修改后的值
   */
  valueAfter?: string;
  /**
   * 修改前的值
   */
  valueBefore?: string;
  /**
   * 修改原因
   */
  modifyReason?: string;
  /**
   * 修改时间
   */
  createTime?: string;
    /**
   * 修改人
   */
  createBy?: string;
}
