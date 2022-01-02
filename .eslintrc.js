module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "cypress/globals": true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "cypress"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "func-names": ["off"],
    "react/function-component-definition": ["off"],
  },
};
