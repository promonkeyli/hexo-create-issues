'use strict';
/**
 * @desc 构建hexo gitalk 生成path_md5参数的path路径
 * @param {string} fileName
 * @return string
 **/
 function formatPath(fileName) {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');
    return `/${year}/${month}/${day}/${fileName}/`;
}
module.exports = formatPath;
