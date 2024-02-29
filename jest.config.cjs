// jest.config.cjs
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },   
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
