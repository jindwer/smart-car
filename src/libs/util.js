import axios from 'axios';
import env from '../config/env';

/* 修改页面title */
const title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

/* 依据环境设置api的host */
const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

/* 建立axios实例 */
const httpInstance = axios.create({
    baseURL: ajaxUrl,
    timeout: 15000
});    

/**
 * -- 请求拦截器 -- 
 * 1. 为请求添加添加特定header，如token
 * 2. 阻止非法越权的请求
 * 3. 格式化请求参数
*/
httpInstance.interceptors.request.use(function(config){
    if(!/api\/login/.test(config.url)){
        config.headers.common['token'] = 'token';
    }
    return config;
}, function(error){
    console.log('请求时出错');
    return Promise.reject(error);
});
/**
 * -- 响应拦截器 --
 * 1. 对响应码集中处理
*/
httpInstance.interceptors.response.use(function(response){
    return response;
}, function(error){
    console.log('响应时出错');
    return Promise.reject(error);
});

/* 将以插件的方式注入vue实例 */
const $http = {
    install(Vue, options){
        Vue.prototype.$http = httpInstance;
    }
};

export default {
    title,
    $http,
    http: httpInstance
};