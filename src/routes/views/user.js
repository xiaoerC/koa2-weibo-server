/*
 * @Description:user view 路由
 * @Author: xiaoer
 * @Date: 2020-11-13 14:33:52
 * @LastEditTime: 2020-11-17 17:51:10
 */

const router = require('koa-router')();
const { loginRedirect } = require('../../middlewares/loginCheck');
/**
 * @description: 获取登陆信息
 * @param {*} ctx
 * @return {*}
 */
function getUserInfo(ctx) {
    let data = { isLogin: false };
    if(!ctx.session.userInfo) return data;
    data.isLogin = true;
    data.userName = ctx.session.userName;
    return data;
}

router.get('/login', async (ctx, next) => {
    await ctx.render('login', getUserInfo(ctx));
});

router.get('/register', async (ctx, next) => {
    await ctx.render('register', getUserInfo(ctx));
});

router.get('/setting', loginRedirect, async (ctx, next) => {
    await ctx.render('setting', ctx.session.userInfo);
});

module.exports = router;