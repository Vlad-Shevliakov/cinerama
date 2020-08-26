module.exports = {
  // parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
    // 'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
