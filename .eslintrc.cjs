module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:astro/recommended",
    "next/core-web-vitals",
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".jsx", ".tsx", ".js"] },
    ],
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    camelcase: 0,
    "no-underscore-dangle": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import/prefer-default-export": "off",
    'import/no-unresolved': ['error', { ignore: ['vite', '@vitejs/plugin-react'] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    // 👇 Add this to fix devDependencies issue
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test.{js,jsx,ts,tsx}",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/*.spec.{js,jsx,ts,tsx}",
          "src/test-setup.ts",
          "vitest.config.ts",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
