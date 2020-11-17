/*
 * @Description: user 逻辑层 controller
 * @Author: xiaoer
 * @Date: 2020-11-13 16:18:41
 * @LastEditTime: 2020-11-17 11:38:38
 */

const { getUserInfo, createUser, deleteUser, updateUser } = require('../services/user');
const { SuccessMessage, ErrorMessage } = require('../model/Message');
const { userNameNotExist, userNameExist, registerError, loginError, updateUserError } = require('../model/errorInfo');
const doCrypto = require('../util/cryp');

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

/**
 * @description: 注册
 * @param {string} userName
 * @param {string} password
 * @param {string} gender
 * @return {*}
 */
async function register({userName, password, gender}) {
    const userInfo = await getUserInfo(userName);
    if(userInfo) return new ErrorMessage(userNameExist);
    try {
        const res = await createUser({
            userName,
            password: doCrypto(password),
            gender});
        if(res) return new SuccessMessage();
    } catch(err) {
        console.error(err.message, err.stack);
        return new ErrorMessage(registerError);
    }
}

/**
 * @description: 登录
 * @param {object} ctx
 * @param {string} userName
 * @param {string} password
 * @return {*}
 */
async function login(ctx, userName, password) {
    password = doCrypto(password);
    const userInfo = await getUserInfo(userName, password);
    if(!userInfo) return new ErrorMessage(loginError);
    if(!ctx.session.userInfo) ctx.session.userInfo = userInfo;
    return new SuccessMessage();
}

/**
 * @description: 删除当前用户
 * @param {*} userName
 * @return {*}
 */
async function deleteCurUser(userName) {
    const result = await deleteUser(userName);
    if(result) return new SuccessMessage();
    return new ErrorMessage(deleteUserError);
}

/**
 * @description: 修改用户信息
 * @param {*} userName
 * @return {*}
 */
async function changeInfo(ctx, { nickName, city, picture }) {
    const { userName } = ctx.session.userInfo;
    if(!nickName) nickName = userName;
    const result = await updateUser(
        {
            newNickName:nickName,
            newCity: city,
            newPicture: picture
        },
        { userName }
    );
    if(!result) return new ErrorMessage(updateUserError);
    Object.assign(ctx.session.userInfo, { nickName, city, picture });
    return new SuccessMessage();
}

/**
 * @description:  修改密码
 * @param {*} password
 * @return {*}
 */
async function changePassword(userName, password, newPassword) {
    const result = await updateUser(
        { newPassword: doCrypto(newPassword) },
        { userName, password: doCrypto(password) }
    );
    if(!result) return new ErrorMessage(updateUserError);
    return new SuccessMessage();
}

async function logout(ctx) {
    delete ctx.session.userInfo;
    return new SuccessMessage();
};

module.exports = {
    isExist,
    register,
    login,
    deleteCurUser,
    changeInfo,
    changePassword,
    logout
};