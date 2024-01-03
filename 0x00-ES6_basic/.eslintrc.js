module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended',
      'plugin:jest/style',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Your custom ESLint rules go here
      // Example:
      'no-console': 'warn',
      'no-unused-vars': 'error',
    },
  };
  