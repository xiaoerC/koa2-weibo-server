/*
 * @Description:sequelize 实例
 * @Author: xiaoer
 * @Date: 2020-11-12 10:48:21
 * @LastEditTime: 2020-11-13 15:20:00
 */

const Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../conf/db');
const { isTest, isProd } = require('../util/env');

const { database, user, password, host } = MYSQL_CONF;
const conf = {
    host,
    dialect: 'mysql'
};

// 测试环境不打印sql日志
if(isTest) {
    conf.logging = () => {};
}

if(isProd) {
    // 连接池
    conf.pool = {
        max: 5,     // 最大连接数
        min: 0,     // 最小
        idle: 10000 // 一个连接池10s 没人进入 就释放
    };
}

const seq = new Sequelize(database, user, password, conf);

module.exports = seq;

