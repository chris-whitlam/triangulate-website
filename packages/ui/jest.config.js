module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      compilerHost: true,
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  transformIgnorePatterns: ["/node_modules/.*"],
  testMatch: ["**/*.test.(ts|tsx)"],
  testEnvironment: "jsdom",
  reporters: ["default"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/packages/ui"],
  maxWorkers: parseInt(process.env.JEST_MAX_WORKERS) || 2,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
