module.exports = {
    'presets': [
        [
            '@babel/preset-env', {
            'modules': false,
            'useBuiltIns': 'usage',
            'corejs': 3
        }
        ],
        '@babel/preset-react'
    ],
    'comments': false,
    'plugins': [
        '@babel/plugin-transform-runtime'
    ]
};
