const fs = require('fs');
const { exec } = require('child_process');
// node.js命令行界面的完整解决方案
const inquirer = require('inquirer');
const { writeJsonSync, pathExists, removeSync } = require('fs-extra');

const path = require('../tools/path-variables');
const { logInfo, logSuccess, logError, logWarning} = require('../tools/beauty-log');

const proEslintConfigDir = `${path.PROJECT_PATH}/`;
const config = require('../config/base.eslint.config');
const rules = require('../config/rules.config');

initEslint = function () {
    inquirer
        .prompt([
            /* Pass your questions in here */
            { // config filename
                name: 'fileType',
                type: 'list',
                message: '请选择eslint配置文件的名称',
                choices: [
                    {value: '.eslintrc'},
                    {value: '.eslintrc.js'},
                    {value: '.eslintrc.json'},
                    new inquirer.Separator("------ 分隔符 ------")
                ]
            },
            { // parser
                type: "confirm",
                message: "选择已有预设？",
                name: "parserCustom",
                suffix: "（ no 可输入自定义预设内容）"
            },
            {
                name: 'parser',
                type: 'list',
                message: '请选预设类型',
                choices: [
                    {value: 'vue-eslint-parser'},
                    {value: 'babel-eslint'},
                    // {value: '@typescript-eslint/parser'},
                    new inquirer.Separator("------ 分隔符 ------")
                ],
                when: function(answers) {
                    return answers.parserCustom
                }
            },
            {
                name: 'parser',
                type: 'input',
                message: '设置自定parser',
                default: 'vue-eslint-parser', // 默认值
                when: function(answers) {
                    return !answers.parserCustom
                }
            },
            { // plugins
                type: "confirm",
                message: "是否支持typescript？",
                name: "plugins"
            },
            { // extends
                name: 'extendsItems',
                type: "checkbox",
                message: '请选择eslint规范扩展',
                choices: [
                    {
                        name: "plugin:@typescript-eslint/recommended",
                        checked: true
                    },
                    // {
                    //     name: "plugin:@typescript-eslint/eslint-recommended",
                    //     checked: true
                    // },
                    {
                        name: "@vue/typescript/recommended",
                        checked: true
                    },
                    {
                        name: "eslint:recommended",
                        checked: true
                    },
                    {
                        name: "plugin:vue/recommended",
                        checked: true
                    },
                    {
                        name: "plugin:react/recommended",
                        checked: false
                    },
                    {
                        name: "plugin:import/errors",
                        checked: false
                    },
                    {
                        name: "plugin:import/warnings",
                        checked: false
                    },
                    new inquirer.Separator("------ 分隔符 ------")
                ]
            },
            { // globals
                name: 'globals',
                type: "input",
                message: '请输入全局变量名称,多个请用英文逗号分割',
                suffix: "（默认值：）'$utils,$req,$app'",
                default: '$utils,$req,$app', // 默认值
            },
            { // env
                name: 'env',
                type: "checkbox",
                message: '请选择支持的运行环境环境',
                choices: [
                    {
                        name: "browser",
                        checked: true
                    },
                    {
                        name: "node",
                        checked: true
                    },
                    {
                        name: "es6",
                        checked: true
                    },
                    new inquirer.Separator("------ 分隔符 ------")
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
                const { fileType, parser, extendsItems, globals, env, plugins } = answers;
                config.parser = parser;
                config.extends = extendsItems;
                config.rules = rules;

                // 处理plugin 表示是否开启 @typescript-eslint
                if (plugins) {
                    // config.plugins = ['@typescript-eslint'];
                    config.parserOptions = {
                        parser: '@typescript-eslint/parser',
                        // ecmaVersion: 6,
                        sourceType: 'module',
                        // ecmaFeatures: {
                        //     jsx: true
                        // }
                    }
                } else {
                    config.parserOptions = {
                        ecmaVersion: 6,
                        sourceType: 'module',
                        ecmaFeatures: {
                            jsx: true
                        }
                    }
                }

                // react 预设
                if (parser === 'babel-eslint') {
                    config.plugins.push('react');
                }

                if (globals) {
                    globals.split(',').map(item => config.globals[item] = true)
                }

                // 处理env
                if (env) {
                    env.map(item => config.env[item] = true)
                }

                // logSuccess(JSON.stringify(config))
                removeSync(`${proEslintConfigDir}.eslintrc`);
                removeSync(`${proEslintConfigDir}.eslintrc.js`);
                removeSync(`${proEslintConfigDir}.eslintrc.json`);
                removeSync(`${proEslintConfigDir}.eslintignore`);

                const proEslintConfigName = `${proEslintConfigDir}${fileType}`;
                // 用户配置完选项，开始创建eslint配置文件
                pathExists(proEslintConfigName).then(res => {
                    if (!res) {
                        writeJsonSync(proEslintConfigName, config, { spaces: 4 });
                        fs.writeFile(
                            `${proEslintConfigDir}.eslintignore` ,
                            'node_modules\r\ndist\r\n*.md',
                            'utf8',
                            function(error){
                                if(error){
                                    logError(error);
                                    return false;
                                }
                            }
                        )
                        if (fileType === '.eslintrc.js') {
                            fs.readFile(proEslintConfigName,'utf8',function(err,data){
                                fs.writeFile(proEslintConfigName,'module.exports = ' + data,function(err){})
                            })
                        }

                        logSuccess('全部文件创建成功！');
                    } else {

                    }
                });

                let execCommand = `cd ${path.PROJECT_PATH} && npm i --save-dev eslint@7.18.0 @babel/eslint-parser eslint-config-prettier eslint-plugin-html eslint-plugin-prettier eslint-webpack-plugin`;
                if (plugins) {
                    execCommand = `${execCommand} @typescript-eslint/eslint-plugin@5.8.0 @typescript-eslint/experimental-utils@5.8.0 @typescript-eslint/parser@5.8.0 @typescript-eslint/typescript-estree@5.8.0`;
                }
                if (parser === 'vue-eslint-parser') {
                    execCommand = `${execCommand} eslint-plugin-vue`;
                }

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
}

module.exports = initEslint;
