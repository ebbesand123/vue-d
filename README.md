# vue-d

![vue-d](https://media.giphy.com/media/mIPNzL5YoMSlVs4ieI/giphy.gif)

Beta build showcase: [ebbesand123.github.io](https://ebbesand123.github.io/)

## [Vue 3](https://vuejs.org/) + [Three.js](https://threejs.org/) + [Pinia](https://pinia.vuejs.org/) + [Naive UI](https://www.naiveui.com/en-US/os-theme)

`vue-d` is a client application which shows a controllable 3D scene.
It is heavily inspired by ['Discover Three.js'](https://discoverthreejs.com/book/).

The project consists of 3 main parts:

- `src/client`: Vue 3 application
  - Single file component format. (SFC)
  - Script setup with TypeScript `<script setup lang="ts">`
  - State management with Pinia
  - Naive UI for UI components
- `src/world`: World class which implements `Three.js` functionality
- `src/server`: Simple server

## Commands

```sh
> npm run build          # build client
> npm run serve          # serve local build
> npm run dev            # run client dev server
> npm run test:unit      # run unit tests
> npm run test:coverage  # show test coverage
> npm run lint run       # linter with auto fix
> npm run format         # prettier code
> npm run typecheck      # check typing

```

## Local development

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Extend VSCode with ESLint and Prettier

Plugins: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Add following options to your VSCode `settings.json` to enable on save formatting.

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Backlog

- [x] Render scene with platonic shapes
- [x] Basic scene, camera and shape controls
- [x] optimize mobile UX
- [ ] Save and import scene
- [??] Light controls
- [ ] Add shapes UI
- [ ] Add missing tests
- [ ] Internationalization
