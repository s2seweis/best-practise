module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', 'import', 'jsx-a11y', 'react-hooks'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:react-hooks/recommended'],
    rules: {
      // Add your custom ESLint rules here
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  