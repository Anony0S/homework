// 统一封装网络请求方法
import request from "@/utils/request.js"

// 首页 - 推荐歌单
export const recommendMusic = params => request({
	url: '/personalized',
	params
	// 将来外面可能传入 params 的值
})

// 首页 - 推荐新音乐
export const newMusic = params => request({
	url: '/personalized/newsong',
	params
})
