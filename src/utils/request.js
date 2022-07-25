// 网络请求 - 二次封装
import axios from "axios";
const request = axios.create({
	// 配置项
	baseURL: "http://6.120001.xyz:3000"
	// baseURL: "http://192.168.22.52:3000"
})
export default request

// import axios from 'axios'
// axios.defaults.baseURL = "http://6.120001.xyz:3000"
// export default axios