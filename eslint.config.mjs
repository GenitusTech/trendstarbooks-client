// @ts-check
import js from '@eslint/js'
import eslintPrettierConfig from 'eslint-config-prettier/flat'
import eslintPrettierPlugin from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  js.configs.recommended,
  eslintPrettierConfig,
  eslintPrettierPlugin,
)
