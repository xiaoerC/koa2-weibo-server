/*
 * @Description:登录验证
 * @Author: xiaoer
 * @Date: 2020-11-16 15:51:00
 * @LastEditTime: 2020-11-17 17:51:43
 */
const { ErrorMessage } = require('../model/Message');

/**
 * @description: api 登录验证
 * @param {*} ctx
 * @param {*} next
 * @return {*}
 */
async function loginCheck(ctx, next) {
    if(ctx.session && ctx.session.userInfo) {
        await next();
        return;
    }
    return new ErrorMessage();
}

/**
 * @description: 页面登录验证
 * @param {*} ctx
 * @param {*} next
 * @return {*}
 */
async function loginRedirect(ctx, next) {
    if(ctx.session && ctx.session.userInfo) {
        await next();
        return;
    }
    const cururl = ctx.url;
    return ctx.redirect('/login?url=' + encodeURIComponent(cururl));
}

module.exports = {
    loginCheck,
    loginRedirect
};