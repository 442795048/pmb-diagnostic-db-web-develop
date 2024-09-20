import request from "@/utils/request";

const USER_BASE_URL = "/api/v2/study"; // 要改

class StudyAPI {
  /**
   * 获取Study分页列表
   *
   * @param queryParams 查询参数
   */
    static getPage(queryParams: StudyTableQuery) {
      return request<any, PageResult<StudyList[]>>({
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
    static getStudyAll() {
      return request<any, any>({
        url: `${USER_BASE_URL}/getStudyNumber`,
        method: "get"
      });
    }
    /**
   * 获取全部options
   *
   */
    static getAllOptions() {
      return request<any, any>({
        url: `${USER_BASE_URL}/getAllOptions`,
        method: "get"
      });
    }

    /**
   * 获取全部options
   *
   */
    static getPageByStatus(queryParams: StudyTableQuery) {
      return request<any, PageResult<StudyList[]>>({
        url: `${USER_BASE_URL}/pageByStatus`,
        method: "get",
        params: queryParams,
      });
    }

    /**
   * 获取全部options
   *
   */
    static getAllTeams(studyName: string) {
      return request<any, any>({
        url: `${USER_BASE_URL}/getTeamsInfo`,
        method: "get",
        params: {studyName}
      });
    }

    /**
   * 获取全部options
   *
   */
    static getAssayInfo(studyName: string) {
      return request<any, any>({
        url: `${USER_BASE_URL}/getTeamsInfo`,
        method: "get",
        params: {studyName}
      });
    }

    /**
   * 获取全部options
   *
   */
    static getAssayById(queryParams : any) {
      return request<any, any>({
        url: `${USER_BASE_URL}/getAssayById`,
        method: "get",
        params: queryParams,
      });
    }

  /**
   * create study submit api
   *
   * @param data create study 表单数据
   */
  static add(data: any) {
    return request({
      url: `${USER_BASE_URL}/createStudy`,
      method: "post",
      data: data,
    });
  }

	/**
   * 获取view study
   */
	static viewStudy(studyName: string) {
		return request({
			url: `${USER_BASE_URL}/getTreeInfo`,
			method: "get",
			params: { studyName }
		});
	}

	/**
   * 获取树的列表详情
   */
	static getTreeDetailInfo(params: any) {
		return request({
			url: `${USER_BASE_URL}/getTreeDetailInfo`,
			method: "get",
			params
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
	static getStudyByName(params: any) {
		return request({
			url: `${USER_BASE_URL}/getStudyByName`,
			method: "get",
			params
		});
	}
	/**
   * 修改view页面表单
   */
	static updateStudyByName(data: any) {
		return request({
			url: `${USER_BASE_URL}/updateStudyByName`,
			method: "post",
			data: data,
		});
	}
	static getTestingPerformance(params: any) {
		return request({
			url: `${USER_BASE_URL}/getTestingPerformance`,
			method: "get",
			params
		});
	}
}
export default StudyAPI;

  /**
 * 用户分页查询对象
 */
  export interface StudyTableQuery extends PageQuery {
    studyManagmentType: string;
    franchiseName: string;
    studyName: string;
    type: string;
    studyPhase: string;
    studyTumorType: string;
    studyLine: string;
    studyStatus: string;
    mainStudyDesign: string;
    testingManagmentType: string;
    biomarkerName: string;
    testingLab: string;
    assayName: string;
    sampleType: string;
    technologyGroup: string;
    cdxManagedBy: string;
    dateType: string;
    startDate: string;
    endDate: string;
  }
  
  /** Study 列表列 */
  export interface StudyList {
    // /** 创建时间 */
    // createTime?: Date;
    // /** 部门ID */
    // id?: number;
    // /** 部门名称 */
    // name?: string;
    // /** 部门编号 */
    // code?: string;
    // /** 父部门ID */
    // parentId?: number;
    // /** 排序 */
    // sort?: number;
    // /** 状态(1:启用；0:禁用) */
    // status?: number;
    // /** 修改时间 */
    // updateTime?: Date;
  }



  export interface CreateStudyData {
    
  }


  export interface StudyBasicForm {
    
  }

  // level 1 接口类型

  export interface StudyLevelOneForm {
    
  }
  // level 2 接口类型 数组

  export interface StudyLevelTwoForm {
    
  }





