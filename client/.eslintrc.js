module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': 0,
    'no-console': 0,
    'no-restricted-syntax': 0,
    newIsCap: false,
  },
};
