module.exports = {
  extends: [
    "../../.eslintrc.js",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
