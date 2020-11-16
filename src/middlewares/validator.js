/*
 * @Description: 验证器
 * @Author: xiaoer
 * @Date: 2020-11-15 16:36:06
 * @LastEditTime: 2020-11-15 16:44:53
 */
const { ErrorMessage } = require('../model/Message');
const { jsonSchemaFileInfo } = require('../model/ErrorInfo');
const userValidate = require('../validator/user');

async function validator(ctx, next) {
    const data = ctx.request.body;
    const error = userValidate(data);
    if (error) {
        // 验证失败
        ctx.body = new ErrorMessage(jsonSchemaFileInfo);
        return;
    }
    // 验证成功，继续
    await next();
}

module.exports = {
    validator
};