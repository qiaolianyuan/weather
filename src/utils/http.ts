const base = process.env.NODE_ENV === 'development' ? '/api' : 'http://v.juhe.cn/weather';

/**
 * @author  qiao
 * @time    2019-08-29 12:57
 * @title   http请求封装
 * @desc
 *
 */

import { Interceptors } from './interceptors';

export class HttpService {
    public axios: any;
    public modal: any;

    constructor() {
        // 获取axios实例
        this.axios = new Interceptors().getInterceptors();
    }


    /**
     * get请求
     * @param params  参数
     * @param jwt   是否token校验
     * @param path    地址
     */
    public getData(params: object, jwt: boolean, path: string) {

        const url = base + '/' + path;

        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                headers: {isJwt: jwt},
            }).then((res: any) => {
                this.resultHandle(res, resolve);
            }).catch((err: any) => {
                reject(err.message);
            });
        });

    }


    /**
     * post请求
     * @param params  参数
     * @param jwt   是否token校验
     * @param path    地址
     */
    public postData(params: object, jwt: boolean, path: string) {
        const url = base + '/' + path;
        const body = {
            data: params,
        };
        return new Promise((resolve, reject) => {
            this.axios.post(url, body, {
                headers: {isJwt: jwt},
            }).then((res: any) => {
                this.resultHandle(res, resolve);
            }).catch((err: any) => {
                reject(err.message);
            });
        });

    }


    /**
     * post请求formData
     * @param params  参数
     * @param jwt   是否token校验
     * @param path    地址
     */
    public postFormData(params: object, jwt: boolean, path: string) {
        const url = base + '/' + path;
        
        return new Promise((resolve, reject) => {
            this.axios.post(url, params, {
                headers: {
                    isJwt: jwt,
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" 
                },
            }).then((res: any) => {
                this.resultHandle(res, resolve);
            }).catch((err: any) => {
                reject(err.message);
            });
        });

    }


    /**
     *
     * @param res
     * @param resolve
     */
    public resultHandle(res: any, resolve: any) {
        if (res.resultcode > 0) {
            resolve(res.result);
        } else {
            this.errorHandle(res);
        }
    }


    /**
     * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
     * @param res
     */
    public errorHandle(res: any) {
        console.log(res.msg);  // 统一谈服务端提示,我们提示统一由服务端提供
        // 状态码判断
        switch (res.status) {
            case -102: 
                 break;
            case -152:
                break;
            default:
            // console.log(other);
        }
    }

}
