import axios from 'axios';
import ElementUI from "element-ui";
const ajax = {
    // get方法
    get: function (url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params,
            }, {
                withCredentials: false,
            })
                .then((response) => {
                    if (response.data.code == 200) {
                        resolve(response.data)
                    }
                })
                .catch((error) => {


                    reject(error);
                })
        })
    },
    //验证码 get方法
    imgget: function (url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params,
                responseType: 'arraybuffer'
            })
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {

                    reject(error);
                })
        })
    },
    //post方法
    post: function (url, data,config) {
        return new Promise((resolve, reject) => {
            axios.post(url, data,config)
                .then((response) => {
                    if (response.status == 200) {
                        resolve(response.data)
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    //post方法
    postSave: function (url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(data), {
                'Content-Type': 'application/x-www-form-urlencoded'
            })
                .then((response) => {
                    if (response.data.code == 200) {
                        resolve(response.data)
                    } else if (response.data.code == 4) {
                        ElementUI.Message({
                            message: '上传文件格式不对!',
                            type: 'warning'
                        });
                    } else if (response.data.code == 413) {
                        ElementUI.Message({
                            message: '图片太大请重新上传!',
                            type: 'warning'
                        });
                        reject('error');
                    }
                })
                .catch((error) => {

                    reject(error);
                })
        })
    },
    // 图片
    postImg: function (url, data = {}, config) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, config)
                .then((response) => {
                    if (response.data.code == 200) {
                        resolve(response.data)
                    }
                })
                .catch((error) => {

                    reject(error);
                })
        })
    },
    //put方法
    put: function (url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, data)
                .then((response) => {
                    if (response.data.code == 200) {
                        resolve(response.data)
                    }
                })
                .catch((error) => {

                    reject(error);
                })
        })
    },
    //delete方法
    delete: function (url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, data)
                .then((response) => {
                    if (response.data.code == 200) {
                        resolve(response.data)
                    }
                })
                .catch((error) => {

                    reject(error);
                })
        })
    },
}
export default ajax;