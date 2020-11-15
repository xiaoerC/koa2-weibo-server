/*
 * @Description: user services
 * @Author: xiaoer
 * @Date: 2020-11-13 16:26:05
 * @LastEditTime: 2020-11-13 17:30:00
 */

const { User } = require('../db/model/index');
const { formatUser } = require('./_format');

/**
 * @description: 获取用户信息
 * @param {*} userName 用户名
 * @param {*} password 密码
 * @return {*} 用户信息
 */
async function getUserInfo(userName, password) {
    let whereOpt = { userName };
    if(password) Object.assign(whereOpt, password);
    // 查询数据
    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
        where: whereOpt
    });
    // 数据处理
    if(result == null) return result;
    // 格式化数据
    const formatRes = formatUser(result.dataValues);
    return formatRes;
}

module.exports = {
    getUserInfo
};