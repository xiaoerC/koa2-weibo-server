/*
 * @Description: 存储配置
 * @Author: xiaoer
 * @Date: 2020-11-12 10:36:56
 * @LastEditTime: 2020-11-12 10:47:43
 */
const { isprod, isProd } = require('../util/env');

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
};

let MYSQL_CONF = {
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: '19941006zzj',
    database: 'koa2_weibo'
};

if(isProd) {
    let REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    };

    let MYSQL_CONF = {
        port: '3306',
        host: 'localhost',
        user: 'root',
        password: '19941006zzj',
        database: 'koa2_weibo'
    };
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
};
