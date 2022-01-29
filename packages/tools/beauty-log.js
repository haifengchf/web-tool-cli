// 给输出带上颜色
const chalk = require('chalk');
const success = chalk.bold.green;
const info = chalk.bold.gray;
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
const beautyLog = console.log;

module.exports = {
    logInfo: (msg) => {
        beautyLog(info(msg, '~~~~~~~~~~~info~~~~~~~~~~~'));
    },
    logSuccess: (msg) => {
        beautyLog(success(msg, '~~~~~~~~~~~success~~~~~~~~~~~'));
    },
    logWarning: (msg) => {
        beautyLog(warning(msg, '~~~~~~~~~~~warning~~~~~~~~~~~'));
    },
    logError: (msg) => {
        beautyLog(error(msg, '~~~~~~~~~~~error~~~~~~~~~~~'));
    },
    logColor: (color, msg) => {
        beautyLog(chalk.hex(color)(msg))
    }
};
