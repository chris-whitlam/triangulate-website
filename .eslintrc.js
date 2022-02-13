module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  
};
