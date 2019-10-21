import axios from 'axios';
import ElementUI from "element-ui";
const ajax = {
    // get方法
    get: function(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                    params: params,
                }, {
                    withCredentials: false,
                })
                .then((response) => {
                    if (response.data.code == 200) {
                        resolve(response.data)
                    } else if (response.data.code == 1) {
                        ElementUI.Message({
                            message: '验证码错误',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 2) {
                        ElementUI.Message({
                            message: '账号或密码错误',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 3) {
                        ElementUI.Message({
                            message: '账号禁止登录,请联系管理员!',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 4) {
                        ElementUI.Message({
                            message: '名称重复',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 5) {
                        ElementUI.Message({
                            message: '州下有城市不能删除',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 6) {
                        ElementUI.Message({
                            message: '城市下有房源不能删除',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 7) {
                        ElementUI.Message({
                            message: 'banner最大5个',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 8) {
                        ElementUI.Message({
                            message: '密码错误',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 9) {
                        ElementUI.Message({
                            message: '上传格式错误',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 10) {
                        ElementUI.Message({
                            message: '热门城市最大5个',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 11) {
                        ElementUI.Message({
                            message: '投资城市最大10个',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 12) {
                        ElementUI.Message({
                            message: '标签下有指南文章不能删除',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 14) {
                        ElementUI.Message({
                            message: '关键字重复',
                            type: 'warning'
                        });
                        reject('error');
                    } else if (response.data.code == 15) {
                        resolve(response.data);
                    }

                })
                .catch((error) => {


                    reject(error);
                })
        })
    },
    //验证码 get方法
    imgget: function(url, params = {}) {
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
    post: function(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
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
    postSave: function(url, data = {}) {
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
    postImg: function(url, data = {}, config) {
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
    put: function(url, data = {}) {
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
    delete: function(url, data = {}) {
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