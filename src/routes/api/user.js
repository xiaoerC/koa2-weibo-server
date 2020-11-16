/*
 * @Description: user api 路由
 * @Author: xiaoer
 * @Date: 2020-11-13 16:09:23
 * @LastEditTime: 2020-11-16 15:14:36
 */

const router = require('koa-router')();
const { isExist,register, login } = require('../../controller/user');
const { validator } = require('../../middlewares/validator');

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


module.exports = router;