import request from "@/utils/request";

// 搜索-热搜关键词
export const hotKey = () => request({
	url: '/search/hot',
})

// 搜索结果列表
export const searchList = params => request({
	url: "/cloudsearch",
	params
})