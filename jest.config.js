module.exports = {
  coveragePathIgnorePatterns: [
    'src/index.js',
    'src/reducers.js',
    'src/configureStore.js',
    'src/global-styles.js',
    'src/constants/*',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/containers/**/!(modules)/*.js',
    '!src/**/*.test.js',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  setupFiles: ['jest-localstorage-mock'],
  testRegex: 'tests/.*\\.test\\.js$',
};
