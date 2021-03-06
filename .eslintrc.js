module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    ymaps: true,
  },
  plugins: ['eslint-plugin-import', 'jest', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['styles', './src/styles'],
          ['components', './src/components'],
        ],
        extensions: ['.js', '.scss'],
      },
    },
  },
};
