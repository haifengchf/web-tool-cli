// node.js命令行界面的完整解决方案
const inquirer = require('inquirer');
const {logSuccess, logError, logInfo} = require('../tools/beauty-log');
const config = require('../config/babel.config');
const {removeSync, pathExists, writeJsonSync} = require('fs-extra');
const fs = require('fs');
const path = require('../tools/path-variables');
const {exec} = require('child_process');

const proBabelConfigDir = `${path.PROJECT_PATH}/`;
// npm install --save-dev @babel/preset-env @babel/plugin-transform-runtime @babel/preset-react

initBabel = function () {
    inquirer
        .prompt([
            /* Pass your questions in here */
            { // config filename
                name: 'fileType',
                type: 'list',
                message: '请选择babel配置文件的名称',
                choices: [
                    {value: 'babel.config.js'},
                    {value: 'babel.config.json'},
                    {value: 'babel.config.cjs'},
                    {value: 'babel.config.mjs'},
                    new inquirer.Separator('------ 分隔符 ------')
                ]
            },
            {
                type: 'confirm',
                name: 'init',
                message: "是否根据选择创建文件？"
            }
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            if (answers.init) {
                const { fileType } = answers;

                removeSync(`${proBabelConfigDir}babel.config.js`);
                removeSync(`${proBabelConfigDir}babel.config.json`);
                removeSync(`${proBabelConfigDir}babel.config.cjs`);
                removeSync(`${proBabelConfigDir}babel.config.mjs`);

                const proEslintConfigName = `${proBabelConfigDir}${fileType}`;
                // 用户配置完选项，开始创建eslint配置文件
                pathExists(proEslintConfigName).then(res => {
                    if (!res) {
                        writeJsonSync(proEslintConfigName, config, {spaces: 4});
                        if (fileType === 'babel.config.js') {
                            fs.readFile(proEslintConfigName, 'utf8', function (err, data) {
                                fs.writeFile(proEslintConfigName, 'module.exports = ' + data, function (err) {
                                });
                            });
                        }

                        logSuccess('全部文件创建成功！');
                    }
                });

                let execCommand = `cd ${path.PROJECT_PATH} && npm i --save-dev @babel/preset-env @babel/plugin-transform-runtime @babel/preset-react`;

                exec(execCommand, (error, stdout, stderr) => {
                    if (error) {
                        logError(`执行出错: ${error}`);
                        logError(`请手动安装一下内容：${execCommand}`);
                        return;
                    }
                    logSuccess(`stdout: ${stdout}`);
                });
            }
        });
};

module.exports = initBabel;
