/*
 * @Description: 错误信息集合
 * @Author: xiaoer
 * @Date: 2020-11-13 17:49:50
 * @LastEditTime: 2020-11-17 15:57:54
 */

module.exports = {
    userNameNotExist: {
        code: -1001,
        message: '用户名不存在'
    },
    userNameExist: {
        code: -1002,
        message: '用户名已存在'
    },
    registerError: {
        code: -1003,
        message: '注册失败,请重试'
    },
    jsonSchemaFileInfo: {
        code: -1004,
        message: '数据格式错误'
    },
    loginError: {
        code: -1005,
        message: '用户名或密码错误'
    },
    deleteUserError: {
        code: -1006,
        message: '删除用户失败'
    },
    updateUserError: {
        code: -1007,
        message: '修改用户失败'
    },
    uploadFilesSizeError: {
        code: -1008,
        message: '上传文件过大'
    }
};
