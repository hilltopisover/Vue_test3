//创建新的axios对象
import axios from 'axios'
const _axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL
})
//请求拦截器
_axios.interceptors.request.use(
    (config)=>{
        config.headers = {
            Authorization: 'aaa.bbb.ccc'
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

_axios.interceptors.response.use(
    //相应成功的条件是：状态码为2XX  eg：200、201
    ()=>{},
    //相应失败的条件是：状态码>2XX eg：400
    ()=>{}
)

export default _axios