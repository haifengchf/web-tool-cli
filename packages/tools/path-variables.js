const path = require('path');
// 定义路径
module.exports = {
    PROJECT_PATH: path.resolve('./'), // 根目录
    ROOT_PATH: path.resolve(__dirname, '../../'), // 根目录
    CONFIG_PATH: path.resolve(__dirname, '../config/'), // 配置文件目录
    NODE_MODULES: path.resolve(__dirname, '../../node_modules'), // node目录
    // CONFIG_PATH: path.join(__dirname, '.eslintrc'),
    // CONFIG_JS_PATH: path.join(__dirname, 'react.manifest.json'),
    // CONFIG_JSON_PATH: path.join(__dirname, 'react.manifest.json')
};
