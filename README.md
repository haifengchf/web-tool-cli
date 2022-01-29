# WRTC(web-raising-tool-cli)



## 什么是WRTC

WRTC是一款前端工程化工具，目的是为了简化搭建前端项目琐碎配置问题。目前包含eslint配置和依赖安装、babel配置和依赖安装；1.1版本会推出webpack配置和依赖安装等功能。



## 开始使用

**依赖:**

```javascript
nodejs -v 14.x
npm -v 6.x
```



**安装npm包:**

```
npm i --save-dev web-raising-tool-cli
```



**使用简介:**

```javascript
// 进入/创建工程目录

mkdir demo
cd demo/
npm init
	......(package.json选项)
npm i --save-dev web-raising-tool-cli
wrtc eslint // 初始化eslint配置及依赖安装
wrtc babel // 初始化babel配置及依赖安装
```



**执行效果（babel为例）:**

```
 > wrtc babel
  _              _   _            __        __  ____    _____    ____   _
 | |__     ___  | | | |   ___     \ \      / / |  _ \  |_   _|  / ___| | |
 | '_ \   / _ \ | | | |  / _ \     \ \ /\ / /  | |_) |   | |   | |     | |
 | | | | |  __/ | | | | | (_) |     \ V  V /   |  _ <    | |   | |___  |_|
 |_| |_|  \___| |_| |_|  \___/       \_/\_/    |_| \_\   |_|    \____| (_)
 
? 请选择babel配置文件的名称 (Use arrow keys)
❯ babel.config.js
  babel.config.json
  babel.config.cjs
  babel.config.mjs
  ------ 分隔符 ------
  
// 第一步选中文件名后  
? 是否根据选择创建文件？ (Y/n)  
  
// 第二步选 yes
全部文件创建成功！ ~~~~~~~~~~~success~~~~~~~~~~~
stdout: + @babel/preset-env@7.16.11
+ @babel/preset-react@7.16.7
+ @babel/plugin-transform-runtime@7.16.10
added 6 packages from 1 contributor, removed 1 package, updated 7 packages and audited 1576 packages in 10.907s

133 packages are looking for funding
  run `npm fund` for details

found 22 vulnerabilities (2 low, 16 moderate, 4 high)
  run `npm audit fix` to fix them, or `npm audit` for details
 ~~~~~~~~~~~success~~~~~~~~~~~
  
```



**获取帮助**

```
wrtc

Usage: index [options] [command]

Options:
  -v, --version   output the version number
  -h, --help      display help for command

Commands:
  eslint     初始化安装eslint！！！
  babel      初始化安装babel！！！
  help [command]  display help for command
```

