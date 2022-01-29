#!/usr/bin/env node

const figlet = require('figlet');
const initEslint = require('../packages/commands/initEslint');
const initBabel = require('../packages/commands/initBabel');
const question = require('../packages/commands/question');
const {
    logInfo,
    logSuccess,
    logWarning,
    logError,
    logColor
} = require('../packages/tools/beauty-log');
const path = require('../packages/tools/path-variables');

// node.js命令行界面的完整解决方案
const { Command } = require('commander');
const program = new Command();

const consoleCommand = process.env.NODE_ENV;

logColor('#ff0000', figlet.textSync('hello WRTC!', { horizontalLayout: 'full' }));

program
    .version('1.0.0','-v, --version')
    .command('eslint-init')
    .description('初始化安装eslint！！！')
    .action(() => initEslint());

program
    .command('babel-init')
    .description('初始化安装babel！！！')
    .action(() => initBabel());

// program
//     .command('webpack-init')
//     .description('初始化安装webpack！！！')
//     .action(function(){
//         question()
//     });

program.parse(process.argv);

// let config = {};
// // 配置文件如果存在则读取
// if(fs.existsSync(path.resolve('gale.config.js'))){
//     config = require(path.resolve('gale.config.js'));
// }


// chalk: 让我们的输出变得有色彩；
// clear: 清空终端屏幕；
// clui: 绘制命令行中的表格、仪表盘、加载指示器等；
// figlet: 生成基于ASCII的艺术字；
// inquirer: 创建交互式的命令行界面；
// minimist: 解析命令行参数；
// configstore: 轻松的加载和保存配置信息；



































