/*
 * @Description: user 逻辑层 controller
 * @Author: xiaoer
 * @Date: 2020-11-13 16:18:41
 * @LastEditTime: 2020-11-13 17:54:01
 */

const { getUserInfo } = require('../services/user');
const { SuccessMessage, ErrorMessage } = require('../model/Message');
const { userNameNotExist } = require('../model/errorInfo');
/**
 * @description: 用户名是否存在
 * @param {*} userName
 * @return {*} boolean
 */
async function isExist(userName) {
    const userInfo = await getUserInfo(userName);
    if(userInfo) return new SuccessMessage();
    return new ErrorMessage(userNameNotExist);
}

module.exports = {
    isExist
};