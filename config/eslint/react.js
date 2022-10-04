module.exports = {
  extends: ['plugin:react/recommended', 'react-app'],
  plugins: ['react-hooks'],
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/jsx-curly-brace-presence': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
  settings: {
    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
  },
};
