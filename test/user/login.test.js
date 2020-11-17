/*
 * @Description: user api test
 * @Author: xiaoer
 * @Date: 2020-11-16 17:15:56
 * @LastEditTime: 2020-11-16 19:18:42
 */

const server = require('../server');

// 用户信息
const userName = `u_${Date.now()}`;
const password = `p_${Date.now()}`;
const testUser = {
    userName,
    password,
    nickName: userName,
    gender: 1
};

let COOKIE = '';

// 注册
test('注册一个用户, 应该成功', async () => {
    const res = await server
        .post('/api/user/register')
        .send(testUser);
    expect(res.body.code).toBe(1);
});

// 重复注册
test('重复注册用户，应该失败', async () => {
    const res = await server
        .post('/api/user/register')
        .send(testUser);
    expect(res.body.code).not.toBe(1);
});

// 查询用户是否存在
test('查询注册用户名,应该存在', async () => {
    const res = await server
        .post('/api/user/isExist')
        .send({ userName });
    expect(res.body.code).toBe(1);
});

// json schema 检测
test('json schema 检测, 非法的格式,注册应该失败', async () => {
    const res = await server
        .post('/api/user/register')
        .send({
            userName: '111',
            password: 'a',
            gender: 'mail'
        });
    expect(res.body.code).not.toBe(1);
});

// 登录应该成功
test('登录应该成功', async () => {
    const res = await server
        .post('/api/user/login')
        .send(testUser);
    expect(res.body.code).toBe(1);
    // 获取cookie
    COOKIE = res.headers['set-cookie'].join(';');
});

// 删除
test('删除用户应该成功', async () => {
    const res = await server
        .post('/api/user/delete')
        .set('cookie', COOKIE);
    expect(res.body.code).toBe(1);
});

// 删除后再次查询用户是否存在
test('查询注册用户名,应该存在', async () => {
    const res = await server
        .post('/api/user/isExist')
        .send({ userName });
    expect(res.body.code).not.toBe(1);
});


