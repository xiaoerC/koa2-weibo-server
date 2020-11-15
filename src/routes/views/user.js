/*
 * @Description:user view 路由
 * @Author: xiaoer
 * @Date: 2020-11-13 14:33:52
 * @LastEditTime: 2020-11-13 14:40:20
 */

const router = require('koa-router')();

router.get('/login', async (ctx, next) => {
    await ctx.render('login', {});
});

router.get('/register', async (ctx, next) => {
    await ctx.render('register', {});
});

module.exports = router;