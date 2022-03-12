简体中文 | [English](README.md)

<p align="center">
    <img alt="logo" src="src/assets/logo.png" width="120">
</p>

<p align="center">
  <img src="https://github.com/hefengxian/vue3-ts-vite-vitest-todo/actions/workflows/deploy.yml/badge.svg" alt="CI Status">
</p>

# Todo App

废话不多说，先看东西

在线例子: [https://hefengxian.github.io/vue3-ts-vite-vitest-todo/](https://hefengxian.github.io/vue3-ts-vite-vitest-todo/)

截图

![Todo App Screenshot](docs/assets/Todo_App_Screenshot.png)

## 为什么

Todo App 用来熟练某个新技术、新框架的非常好的上手项目；也是个烂大街的例子，或许大家早就会使用熟悉的语言、框架去实现这个例子了（Vue 官方都有一个）。当我决定学习、使用 Vue3 的时候，我想使用如下新的框架、语言、工具、API 来实现：

- 纯 Composition API 而不使用选项式 API
- Reactive API 在组件、Vue 实例外部实现响应式
- TypeScript
- 纯 TS/TSX 而不使用 Vue SFC `*.vue`
- Vite 作为构建工具
- 学习、练习如何编写测试（使用 Vitest）

翻编了 Google 也没找到一个完整的上手、练习的例子。所以我自己写了一个 Todo App，来练习新的 API、构建工具。希望有和我类似需求的人可以从这个项目快速的学习、使用 Vue3 新的 API 和新构建工具带来的开发体验的改进

## 开发

> 这里使用 yarn

需要对如下的技术有所了解

- Vue3 Composition API、Reactive API、`setup()`
- TypeScript
- Vue Test Util（编写测试需要了解它的 API）
- Less（样式部分使用 Less 编写）
- Vue3 支持的 JSX 语法（与 React.js JSX 是有些不同的）

```bash
# 安装依赖
yarn install

# 开发模式（热重载）
yarn dev

# 运行测试
yarn test

# 构建
yarn build
```

## 推荐开发工具

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## License

MIT
