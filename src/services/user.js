/*
 * @Description: user services
 * @Author: xiaoer
 * @Date: 2020-11-13 16:26:05
 * @LastEditTime: 2020-11-17 11:40:26
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

/**
 * @description: 删除user
 * @param {*} userName
 * @return {*}
 */
async function deleteUser(userName) {
    const result = await User.destroy({
        where: { userName }
    });
    // result 返回行数
    return result > 0;
}

/**
 * @description: 更新user
 * @param {string} newNickName
 * @param {string} newPicture
 * @param {string} newCity
 * @param {string} newPassowrd
 * @param {string} userName
 * @param {string} password
 * @return {*}
 */
async function updateUser({ newNickName, newPicture, newCity, newPassword} , { userName, password }) {
    let updateData = {};
    if(newNickName) updateData.nickName = newNickName;
    if(newPicture) updateData.picture = newPicture;
    if(newCity) updateData.city = newCity;
    if(newPassword) updateData.password = newPassword;

    let whereData = { userName };
    if(password) whereData.password = password;

    console.log('result==>', whereData, newPassword);
    const result = await User.update(updateData, {
        where: whereData
    });
    return result[0] > 0;
}
module.exports = {
    getUserInfo,
    createUser,
    deleteUser,
    updateUser
};