// module.exports = {
//   '*.{js,jsx,ts,tsx,astro}': ['eslint --fix', 'prettier --write', () => 'pnpm type-check'],
//   '*.{json,md,yml,yaml}': ['prettier --write'],
// };

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,css,scss}': ['prettier --write'],
};
