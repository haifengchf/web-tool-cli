/* eslint-disable no-eval */
const prettier = require('prettier-eslint');
const { readFile } = require('fs-extra');


async function setConfigCode(configFile) {
    const code = await readFile(
        configFile,
        'utf-8'
    );

}

module.exports = setConfigCode;

// copy(src, dest, [option],callback)
// option:
//     clobber (boolean): 覆盖现有的文件或目录,默认true
//     dereference (boolean): dereference symlinks, default is false
//     preserveTimestamps (boolean): 最后修改和访问时间和原始的源文件一致，默认为false
//     filter: 函数或正则表达式过滤复制文件,返回true包含，否则排除


