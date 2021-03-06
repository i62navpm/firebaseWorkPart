module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {},
}
