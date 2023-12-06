module.exports = {
 env: {
   browser: false,
   es6: true,
   jest: true,
   node: true,
 },
 parser:  '@typescript-eslint/parser',
 extends: [
   'airbnb-base',
   'plugin:jest/all',
   'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
 ],
 globals: {
   Atomics: 'readonly',
   SharedArrayBuffer: 'readonly',
 },
 parserOptions: {
   ecmaVersion: 2018,
   sourceType: 'module',
 },
 plugins: ['jest'],
 rules: {
   'no-console': 'off',
   'no-shadow': 'off',
   'no-restricted-syntax': [
     'error',
     'LabeledStatement',
     'WithStatement',
   ],
 },
 overrides:[
   {
     files: ['*.js'],
     excludedFiles: 'babel.config.js',
   }
 ]
};
