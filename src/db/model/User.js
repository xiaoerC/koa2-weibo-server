/*
 * @Description:User 模型
 * @Author: xiaoer
 * @Date: 2020-11-13 14:53:28
 * @LastEditTime: 2020-11-13 15:20:08
 */

const seq = require('../seq');
const { STRING, DECIMAL } = require('../type');
// users
const User =  seq.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: false,
        comment: '用户名'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: STRING,
        allowNull: false,
        comment: '昵称'
    },
    gender: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 3,
        comment: '性别'
    },
    picture: {
        type: STRING,
        comment: '图片'
    },
    city: {
        type: STRING,
        comment: '城市'
    }
});

module.exports = User;
