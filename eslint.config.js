const browserGlobals = {
  window: "readonly",
  document: "readonly",
  navigator: "readonly",
  location: "readonly",
  localStorage: "readonly",
  Intl: "readonly",
  fetch: "readonly",
  caches: "readonly",
  self: "readonly",
  URL: "readonly",
  URLSearchParams: "readonly",
  AbortController: "readonly",
  performance: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  setInterval: "readonly",
  addEventListener: "readonly",
  prompt: "readonly",
  module: "readonly",
  history: "readonly",
};
const sharedAppGlobals = {
  $: "readonly",
  P: "readonly",
  FA_NAMES: "readonly",
  lang: "writable",
  now: "readonly",
  setCalSys: "readonly",
  toFa: "readonly",
  num: "readonly",
  calSys: "readonly",
  render: "readonly",
  translate: "readonly",
};

export default [
  {
    files: ["**/*.{js,mjs}"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: browserGlobals,
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", caughtErrors: "none" },
      ],
      "no-constant-binary-expression": "error",
    },
  },
  { files: ["features.js"], languageOptions: { globals: sharedAppGlobals } },
];
