import axios  from 'axios';
axios.interceptors.request.use(
    (config)=>{
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加
        // if (token) {
        //     config.headers.Authorization = token;
        // }
        return Promise.resolve(config);
    },(err)=>{
        if(err.response){
            let status = err.response.status;
            let result = '';
            // TODO 根据状态统一处理
            switch (status) {
                case 404:
                    result = '请求的服务器地址不存在，请与管理员联系！';
                    break;
                case 500:
                    result = '服务器发生错误，请与管理员联系！';
                    break;
            }
            console.log(status);
            return Promise.reject(result);
        }else{
            return Promise.reject(err);
        }
    }
);
const post = function(url,params = {}){
    return axios({
        method: 'post',
        url: `${url}`,
        data: params
      });
};
const get = function(url){
    return axios({
        method: 'get',
        url: `${url}`
      });
};
export default {
    install(Vue, name = 'http') {
        //Object.defineProperty(Vue.prototype, name, {value: axios});
        Vue.prototype[name] = {
            get,
            post
        }
    }
}