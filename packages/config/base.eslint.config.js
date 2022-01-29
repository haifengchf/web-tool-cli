module.exports = {
    root: true,
    // 指定要使用的解析器（parser和parserOptions要同时使用）
    // vue-eslint-parser、babel-eslint、@typescript-eslint/parser
    parser: '',
    // 解析器选项
    // ·parser：和外面的不知道有啥区别和联系
    // ·ecmaVersion：按照 ecma 哪个版本语法做检查
    // ·sourceType：默认是script。模块化的代码要写：module（当前最常见做法）
    // ·ecmaFeatures：一个配置对象，可配置项如下（value 均为 true/false）
    //      globalReturn：允许在全局作用域下使用return语句
    //      impliedStrict：启用全局strict mode(如果ecmaVersion是 5 或更高)
    //      jsx：启用JSX
    //      experimentalObjectRestSpread（尽量别用，含义就不给了。想知道为啥，查官网去吧~哈哈）
    parserOptions: {},
    // env:
    //  browser: true,
    //  node: true,
    //  es6: true
    env: {},
    // rules没有的规则可以在这里继承 'plugin:vue/recommended', 'eslint:recommended'
    extends: [],
    // 全局变量的声明
    globals: {},
    settings: {
        // 使用webpack中配置的resolve路径
        "import/resolver": "webpack"
    },
    // 指定插件的处理器。（需要和 plugins 字段配合使用）gale-rules/diy
    processor: '',
    // 'gale-rules'
    plugins: [],
    rules: {}
};
