module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react-hooks/exhaustive-deps": false,
    "@typescript-eslint/explicit-function-return-type": false,
    "@typescript-eslint/explicit-member-accessibility": false,
    "@typescript-eslint/interface-name-prefix": "never",
    "@typescript-eslint/no-use-before-define": false,
    "@typescript-eslint/no-explicit-any": false,
    "require-await": "off"
  }
};
