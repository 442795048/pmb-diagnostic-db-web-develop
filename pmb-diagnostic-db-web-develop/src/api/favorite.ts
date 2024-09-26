import request from "@/utils/request";

const FAVORITE_BASE_URL = "/api/v2/favorite";

class FavoriteAPI {

    /**
     * 获取收藏列表
     *
     * @returns 获取收藏列表
     */
    static getFavoriteList() {
        return request<any, FavoriteVO[]>({
            url: `${FAVORITE_BASE_URL}/getFavoriteList`,
            method: "get",
        });
    }

    /**
     * 添加收藏
     *
     * @param data 表单数据
     */
    static add(data: FavoriteForm) {
        return request({
            url: `${FAVORITE_BASE_URL}/add`,
            method: "post",
            data: data,
        });
    }

    /**
     * 删除收藏
     *
     * @param id ID
     */
    static deleteById(id: number) {
        return request({
            url: `${FAVORITE_BASE_URL}/delete/${id}`,
            method: "delete",
        });
    }

    /** 获取菜单下拉数据源 */
    static getMenuOptions() {
    return request<any, OptionType[]>({
        url: `${FAVORITE_BASE_URL}/options/menu`,
        method: "get",
    });
  }
}

export default FavoriteAPI;

/**
 * FavoriteForm
 */
export interface FavoriteForm {
    menuName?: string;
}

/**
 * FavoriteVO
 */
export interface FavoriteVO {
    id?: number;
    userId?: number;
    menuName?: string;
    routerLink?: string;
    routerName?: string;
}

/**
 * MenuForm
 */
export interface FavoriteVO {
    id?: number;
    userId?: number;
    routerLink?: string;
    routerName?: string;
}