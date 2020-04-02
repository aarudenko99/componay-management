module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'plugin:redux-saga/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [
    'react',
    'react-hooks',
    'import',
    'redux-saga',
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: './webpack.prod.js',
      },
    },
  },
  rules: {
    'arrow-body-style': 'off',
    'max-len': ['error', {
      code: 160,
      comments: 240,
    }],
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['webpack.*.js', 'jest.setup.js', '**/*.test.js']
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-filename-extension': 'off',
    'redux-saga/no-unhandled-errors': 'off',
  },
};
