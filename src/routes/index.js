/*
 * @Description:index 路由
 * @Author: xiaoer
 * @Date: 2020-11-11 16:15:00
 * @LastEditTime: 2020-11-12 14:31:46
 */
const router = require('koa-router')();

router.get('/error', async (ctx, next) => {
    await ctx.render('error');
});

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    };
});

module.exports = router;
