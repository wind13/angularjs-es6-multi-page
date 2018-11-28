module.exports = {
  verbose: true,
  collectCoverageFrom: [
    "src/**/*.js"
  ],
  setupTestFrameworkScriptFile: "<rootDir>/jest/setup.js",
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)$': 'babel-jest',
    "^(?!.*\\.(js|jsx|json)$)": "<rootDir>/jest/fileTransform.js",
    // '^.+\\.ts$': 'ts-jest'
  },
  testPathIgnorePatterns: ["/node_modules/", "/app/"]
};