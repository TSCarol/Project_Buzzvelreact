import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import prettierConfig from 'eslint-config-prettier'; // Importa as configurações para desativar regras conflitantes com Prettier.
import pluginPrettier from 'eslint-plugin-prettier'; // Importa o plugin do Prettier para ESLint.

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  prettierConfig, // Adiciona as configurações do Prettier
  {
    plugins: {
      prettier: pluginPrettier, // Adiciona o plugin do Prettier
    },
    rules: {
      'prettier/prettier': 'error', // Aplica a regra de erros para formatação incorreta do Prettier
    },
  },
];
