/*
 * @Description: 数据格式化
 * @Author: xiaoer
 * @Date: 2020-11-13 17:02:56
 * @LastEditTime: 2020-11-13 17:19:14
 */
const { DEFAULT_PICTURE } = require('../conf/constant');

/**
 * @description: 用户默认头像
 * @param {Object} obj 用户对象
 * @return {*} obj
 */
function _formatUserPictrue(obj) {
    if(obj.pictrue == null) obj.pictrue = DEFAULT_PICTURE;
    return obj;
}

/**
 * @description: 格式化user
 * @param {Array | Object} list
 * @return {*}
 */
function formatUser(list) {
    if(list == null) return;
    if(list instanceof Array) {
        return list.map(_formatUserPictrue);
    }
    // 单个对象
    return _formatUserPictrue(list);
}

module.exports = {
    formatUser
};