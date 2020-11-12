/*
 * @Description: sequelize 同步数据库
 * @Author: xiaoer
 * @Date: 2020-11-12 11:03:49
 * @LastEditTime: 2020-11-12 11:13:56
 */

const seq = require('./seq');

// 测试连接
seq.authenticate().then(() =>  {
    console.log('auth ok');
}).catch(err => {
    console.log(err);
});

// 强制同步
seq.sync({force: true}).then(() => {
    console.log('sync ok');
    // 进程退出
    process.exit();
});
