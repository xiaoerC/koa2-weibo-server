/*
 * @Description:sequelize 数据类型
 * @Author: xiaoer
 * @Date: 2020-11-13 14:49:58
 * @LastEditTime: 2020-11-13 15:19:50
 */

const Sequelize = require('sequelize');

module.exports = {
    STRING: Sequelize.STRING,
    DECIMAL: Sequelize.DECIMAL,
    INTEGER: Sequelize.INTEGER,
    TEXT: Sequelize.TEXT,
    BOOLEAN: Sequelize.BOOLEAN
};
