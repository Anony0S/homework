import request from "@/utils/request"

// 根据id获取url
export const getSongById = ids => request({
	url: "/song/detail",
	params: {
		ids,
	}
})

// 根据 id 获取歌词
export const getLyricById = id => request({
	url: "/lyric",
	params: {
		id,
	}
})
