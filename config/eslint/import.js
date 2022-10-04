const getPathInternal = pattern => ({ pattern, group: 'internal' });

const order = {
  pathGroups: [getPathInternal('~**'), getPathInternal('~**/**')],
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
  alphabetize: { order: 'asc' },
  'newlines-between': 'always',
};

module.exports = {
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': ['error', order],
        'import/no-duplicates': 'error',
      },
    },
  ],
};
