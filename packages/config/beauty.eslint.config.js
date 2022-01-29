module.exports = {
    root: true,
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: 'vue-eslint-parser',
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    plugins: [
        'gale-rules'
    ],
    processor: 'gale-rules/diy',
    globals: {},
    settings: {
        // 使用webpack中配置的resolve路径
        "import/resolver": "webpack"
    },
    rules: {
        'gale-rules/diy': [
            2,
            {
                'wordKeys': ['fixme', 'xxx']
            }
        ],
    }
};
