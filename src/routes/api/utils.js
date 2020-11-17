/*
 * @Description:上传文件 路由
 * @Author: xiaoer
 * @Date: 2020-11-17 15:36:16
 * @LastEditTime: 2020-11-17 17:03:37
 */

const router = require('koa-router')();
const { loginCheck } = require('../../middlewares/loginCheck');
const koaFrom = require('formidable-upload-koa');
const { saveFile } = require('../../controller/utils');

router.prefix('/api/utils');

// 上传图片
router.post('/upload', loginCheck, koaFrom(), async (ctx, next) => {
    const file = ctx.req.files['file'];
    const { size, path, name, type } = file;
    ctx.body = await saveFile({ name, filePath: path, size, type });
});

module.exports = router;
