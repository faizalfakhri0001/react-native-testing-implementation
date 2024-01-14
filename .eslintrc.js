module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['detox'],
  overrides: [
    {
      files: ['e2e/*.test.js'],
      env: {
        'detox/detox': true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles':0,
        'prettier/prettier': [
          'error',
          {
            'endOfLine': 'auto',
          },
        ],
      },
    },
  ],
};
