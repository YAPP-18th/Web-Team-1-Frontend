module.exports = {
  setupFilesAfterEnv: ['given2/setup', 'jest-plugin-context/setup', './jest.setup'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assets/__mocks__/index.js',
    '^#(.*)$': '<rootDir>/src/$1',
  },
};
