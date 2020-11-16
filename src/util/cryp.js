/*
 * @Description: 密码加密
 * @Author: xiaoer
 * @Date: 2020-11-15 15:30:06
 * @LastEditTime: 2020-11-15 15:47:39
 */

const crypto = require('crypto');
const { PASSWORD_SECRET_KEY } = require('../conf/secretKeys');

/**
 * @description: md5 加密
 * @param {*} content 内容
 * @return {*}
 */
function _md5(content) {
    const md5 = crypto.createHash('md5');
    return md5.update(content).digest('hex');
}

/**
 * @description: 加密方法
 * @param {*} content
 * @return {*}
 */
function doCrypto(content) {
    const str = `password=${content}&key=${PASSWORD_SECRET_KEY}`;
    return _md5(str);
}

module.exports = doCrypto;
