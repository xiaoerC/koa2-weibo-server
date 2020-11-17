/*
 * @Description: user api 路由
 * @Author: xiaoer
 * @Date: 2020-11-13 16:09:23
 * @LastEditTime: 2020-11-17 17:26:26
 */

const router = require('koa-router')();
const { isExist,register, login, deleteCurUser, changeInfo, changePassword, logout} = require('../../controller/user');
const { validator } = require('../../middlewares/validator');
const { isTest } = require('../../util/env');
const { loginCheck } = require('../../middlewares/loginCheck');
// 前缀
router.prefix('/api/user');

router.post('/isExist', async (ctx, next) => {
    const { userName } = ctx.request.body;
    ctx.body = await isExist(userName);
});

router.post('/register', validator, async (ctx, next) => {
    const { userName, password, gender } = ctx.request.body;
    ctx.body = await register({userName, password, gender});
});

router.post('/login', validator, async(ctx, next) => {
    const { userName, password } = ctx.request.body;
    ctx.body = await login(ctx, userName, password);
});

router.post('/delete', loginCheck, async (ctx, next) => {
    if(isTest) {
        const { userName } = ctx.session.userInfo;
        ctx.body = await deleteCurUser(userName);
    }
});

router.patch('/changeInfo', loginCheck, validator, async (ctx, next) => {
    const { nickName, city, picture } = ctx.request.body;
    ctx.body = await changeInfo(ctx, { nickName, city, picture });
});

router.patch('/changePassword', loginCheck, validator, async (ctx, next) => {
    const { password, newPassword } = ctx.request.body;
    const { userName } = ctx.session.userInfo;
    ctx.body = await changePassword(userName, password, newPassword);

});

router.post('/logout', loginCheck, async (ctx, next) => {
    ctx.body = await logout(ctx);
});

module.exports = router;