# WTL(web-tool-cli)



## 什么是WTL

WTL是一款前端工程化的一款工具，目的是为了简化搭建前端项目的一些琐碎的配置问题。目前包含eslint配置和依赖的安装、babel配置和依赖的安装；1.1版本会推出webpack配置和依赖的安装等功能。



## 开始使用

**依赖:**

```javascript
nodejs -v 14.x
npm -v 6.x
```



**安装npm包:**

```
npm i web-tool-cli
```



**执行命令:**

```javascript
// 进入/创建工程目录

mkdir demo
cd demo/
npm init
	......(package.json选项)
npm i web-tool-cli
wtc eslint-cli // 初始化eslint配置及依赖安装
wtc babel-cli // 初始化babel配置及依赖安装
```



**运行效果（babel为例）:**

```
 > wtc babel-init
  _              _   _            __        __         _               _____                   _            ____   _   _   _
 | |__     ___  | | | |   ___     \ \      / /   ___  | |__           |_   _|   ___     ___   | |          / ___| | | (_) | |
 | '_ \   / _ \ | | | |  / _ \     \ \ /\ / /   / _ \ | '_ \   _____    | |    / _ \   / _ \  | |  _____  | |     | | | | | |
 | | | | |  __/ | | | | | (_) |     \ V  V /   |  __/ | |_) | |_____|   | |   | (_) | | (_) | | | |_____| | |___  | | | | |_|
 |_| |_|  \___| |_| |_|  \___/       \_/\_/     \___| |_.__/            |_|    \___/   \___/  |_|          \____| |_| |_| (_)

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











# web-tool-cli
