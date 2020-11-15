/*
 * @Description: 返回消息模型
 * @Author: xiaoer
 * @Date: 2020-11-13 17:38:45
 * @LastEditTime: 2020-11-13 17:38:57
 */
class SuccessMessage {
    constructor(data, code = 1) {
        this.data = data;
        this.code = code;
    }
}

class ErrorMessage {
    constructor(errInfo) {
        this.message = errInfo.message || '未知错误';
        this.code = errInfo.code || 0;
    }
}

module.exports = {
    SuccessMessage,
    ErrorMessage
};
