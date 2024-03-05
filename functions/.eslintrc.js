module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Enables ESLint plugin for Prettier
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['*.test.js'],
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  rules: {
    // Additional ESLint rules can go here if needed
  },
};
// module.exports = {
//   root: true,
//   env: {
//     es6: true,
//     node: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:import/errors",
//     "plugin:import/warnings",
//     "plugin:import/typescript",
//     "google",
//     "plugin:@typescript-eslint/recommended",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: ["tsconfig.json", "tsconfig.dev.json"],
//     sourceType: "module",
//   },
//   ignorePatterns: [
//     "/lib/**/*", // Ignore built files.
//   ],
//   plugins: [
//     "@typescript-eslint",
//     "import",
//   ],
//   rules: {
//     "quotes": ["error", "single"],
//     // "import/no-unresolved": 0,
//     "indent": ["error", 2],
//   },
// };
