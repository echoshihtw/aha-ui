module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'object-curly-newline': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    indent: 0,
    '@typescript-eslint/indent': 0,
    quotes: [0, 'double'],
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};
