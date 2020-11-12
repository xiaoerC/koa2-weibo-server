/*
 * @Description: 环境变量
 * @Author: xiaoer
 * @Date: 2020-11-12 10:14:54
 * @LastEditTime: 2020-11-12 10:32:30
 */

const ENV = process.env.NODE_ENV;

module.exports = {
    isDev: ENV === 'dev',
    notDev: ENV !== 'dev',
    isProd: ENV === 'production',
    notProd: ENV !== 'production',
    isTest: ENV === 'test',
    notTest: ENV !== 'test'
};