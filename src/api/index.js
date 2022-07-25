import { recommendMusic, newMusic } from "./Home";
import { hotKey, searchList } from "./Search";
import { getSongById, getLyricById } from "./Play"
// 请求推荐歌单的方法导出
export const recommendMusicAPI = recommendMusic
export const newMusicAPI = newMusic

// 搜索热词
export const hotKeyAPI = hotKey
export const searchListAPI = searchList

// 获取歌曲
export const getSongByIdAPI = getSongById
// 获取歌词
export const getLyricByIdAPI = getLyricById