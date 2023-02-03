module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  //"testEnvironment": "jsdom",
  testEnvironment: "node",
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-linear-gradient|react-native-iphone-x-helper)/)"
  ]
};