# Vue3 Initial

An initial Vue 3 (TypeScript) project with auto-generated routes, auto-imported components, and automatic package imports.

## Table of Content

- [Vue3 Initial](#vue3-initial)
   - [Table of Content](#table-of-content)
   - [Features](#features)
   - [Recommended IDE Setup](#recommended-ide-setup)
   - [Type Support for `.vue` Imports in TS](#type-support-for-vue-imports-in-ts)
   - [Customize configuration](#customize-configuration)
   - [Project Setup](#project-setup)
      - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
      - [Type-Check, Compile and Minify for Production](#type-check-compile-and-minify-for-production)
      - [Lint with ESLint](#lint-with-eslint)
      - [Format with Prettier](#format-with-prettier)

## Features

- **Auto Routing**: Routes are automatically generated from files in the `src/pages` directory.
- **Auto Component Import**: Components placed in the `src/components` directory are automatically imported.
- **Auto Package Import**: Packages can be auto-imported by configuring them in `vite.config.ts`.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Format with [Prettier](https://prettier.io/)

```sh
yarn format
```
