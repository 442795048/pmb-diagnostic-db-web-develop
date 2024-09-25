import request from "@/utils/request";

const USER_BASE_URL = "/api/v2/study"; // 要改

class CompareAPI {
  /**
   * 获取compare树列表
   */
	static getCompareTreeInfo() {
		return request({
			url: `${USER_BASE_URL}/getCompareTreeInfo`,
			method: "get"
		});
	}
	/**
   * 获取compare图列表
   */
	static getCompareInfo(data: any) {
		console.log(data)
		return request({
			url: `${USER_BASE_URL}/getCompareInfo`,
			method: "get",
			params: data
		});
	}
}
export default CompareAPI;
