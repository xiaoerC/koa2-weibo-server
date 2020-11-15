/*
 * @Description: user api 路由
 * @Author: xiaoer
 * @Date: 2020-11-13 16:09:23
 * @LastEditTime: 2020-11-13 16:18:36
 */

const router = require('koa-router')();
const { isExist } = require('../../controller/user')
// 前缀
router.prefix('/api/user');

router.post('/register', async (ctx, next) => {

});

router.post('/isExist', async (ctx, next) => {
    const { userName } = ctx.request.body;
    ctx.body = await isExist(userName);
});

module.exports = router;