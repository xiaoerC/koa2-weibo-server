/*
 * @Description:user model test
 * @Author: xiaoer
 * @Date: 2020-11-16 16:38:26
 * @LastEditTime: 2020-11-16 16:52:53
 */

const { User } = require('../../src/db/model/index');

test('User 模型的各个属性，符合预期', () => {
    // build 会构建一个内存的 User 实例,但不会提交到数据库中
    const user = User.build({
        userName: 'xiaoer_test',
        password: 'p111111',
        nickName: '小二',
        // gender: 1,
        picture: '/xxx.png',
        city: '北京'
    });
    // 验证各个属性
    expect(user.userName).toBe('xiaoer_test');
    expect(user.password).toBe('p111111');
    expect(user.nickName).toBe('小二');
    expect(user.gender).toBe(3);
    expect(user.picture).toBe('/xxx.png');
    expect(user.city).toBe('北京');

});
