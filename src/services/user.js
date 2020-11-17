/*
 * @Description: user services
 * @Author: xiaoer
 * @Date: 2020-11-13 16:26:05
 * @LastEditTime: 2020-11-16 17:12:57
 */

const { User } = require('../db/model/index');
const { formatUser } = require('./_format');

/**
 * @description: 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @return {*} 用户信息
 */
async function getUserInfo(userName, password) {
    let whereOpt = { userName };
    if(password) Object.assign(whereOpt, {password});
    console.log('whereOpt==>', password);
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

/**
 * @description: 创建用户
 * @param {string} userName
 * @param {string} password
 * @param {number} gender
 * @param {string} nickName
 * @return result
 */
async function createUser({userName, password, gender, nickName}) {
    const result = await User.create({
        userName,
        password,
        gender,
        nickName: nickName ? nickName : userName
    });
    return result.dataValues;
}

async function deleteUser(userName) {
    const result = await User.destroy({
        where: { userName }
    });
    // result 返回行数
    return result > 0;
}

module.exports = {
    getUserInfo,
    createUser,
    deleteUser
};