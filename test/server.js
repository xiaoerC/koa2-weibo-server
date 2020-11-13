/*
 * @Description:jest server
 * @Author: xiaoer
 * @Date: 2020-11-13 11:05:33
 * @LastEditTime: 2020-11-13 11:27:33
 */

const request = require('supertest');
const server = require('../src/app').callback();

module.exports = request(server);
