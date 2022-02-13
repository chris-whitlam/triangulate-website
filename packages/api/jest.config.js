module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
      compilerHost: true,
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ["ts", "js"],
  testPathIgnorePatterns: ["packages/ui"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/.*"],
  testMatch: ["**/*.test.(ts)"],
  testEnvironment: "node",
  reporters: ["default"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/packages/ui"],
  maxWorkers: parseInt(process.env.JEST_MAX_WORKERS) || 2,
  setupFilesAfterEnv: ["./jest.setup.js"],
};
