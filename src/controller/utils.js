/*
 * @Description: utils controller
 * @Author: xiaoer
 * @Date: 2020-11-17 15:44:47
 * @LastEditTime: 2020-11-17 17:14:52
 */
const { ErrorMessage, SuccessMessage } = require('../model/Message');
const { uploadFilesSizeError } = require('../model/errorInfo');
const fse = require('fs-extra');
const path = require('path');

// 存储目录
const DIST_FOLDER_PATH = path.join(__dirname, '..', '..', 'uploadFiles');
// 文件最大体积 1M
const MIX_SIZE = 1024 * 1024 * 1024;

// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then(exist => {
    if(!exist) {
        fse.ensureDir(DIST_FOLDER_PATH);
    }
});
/**
 * @description: 保存文件
 * @param {string} name
 * @param {string} type
 * @param {string} size
 * @param {string} filePath
 * @return {*}
 */
async function saveFile({ name, type, size, filePath }) {
    if(size > MIX_SIZE) {
        await fse.remove(filePath);
        return new ErrorMessage(uploadFilesSizeError);
    }

    // 移动文件
    const fileName = Date.now() + '.' + name;
    const distFilePath = path.join(DIST_FOLDER_PATH, fileName);
    await fse.move(filePath, distFilePath);
    return new SuccessMessage({
        url: '/' + fileName
    });
}

module.exports = {
    saveFile
};
