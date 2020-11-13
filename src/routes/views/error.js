/*
 * @Description:error 路由
 * @Author: xiaoer
 * @Date: 2020-11-12 14:36:12
 * @LastEditTime: 2020-11-13 11:26:41
 */
const router = require('koa-router')();

router.get('/a', async (ctx, next) => {
    ctx.body = {
        a: 1
    };
});

router.get('/error', async (ctx, next) => {
    await ctx.render('error');
});

router.get('*', async (ctx, next) => {
    await ctx.render('404');
});

module.exports = router;
