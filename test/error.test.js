/*
 * @Description:error test
 * @Author: xiaoer
 * @Date: 2020-11-13 11:13:48
 * @LastEditTime: 2020-11-13 11:31:51
 */

const server = require('./server.js');

test('a 接口返回数据是否正确', async () => {
    const res = await server.get('/a');
    // const res = await server.post('/login').send({
    //     userName: '123',
    //     pwd: '123'
    // })
    expect(res.body).toEqual({
        a: 1
    });
});