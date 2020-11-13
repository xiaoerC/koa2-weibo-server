/*
 * @Description: test demo
 * @Author: xiaoer
 * @Date: 2020-11-12 19:36:05
 * @LastEditTime: 2020-11-12 19:44:18
 */

function sum(a, b) {
    return a + b;
}

test('10 + 30 equal to 40', () => {
    const res = sum(10, 20);
    expect(res).toBe(30);
    // expect(res).not.toBe(40);
});
