# spraygun-react-ts

[![CircleCI](https://circleci.com/gh/carbonfive/spraygun-react-ts/tree/main.svg?style=shield)](https://circleci.com/gh/carbonfive/spraygun-react-ts/tree/main)

This is a Carbon Five-flavored convenience skeleton project for React. It is based on create-react-app (not ejected) with the following additions:

- Styling via .scss with BEM conventions
- Stylelint
- ESLint/Prettier
- Husky with lint-staged
- CI testing via Circle CI
- Deployable to Heroku out of the box
- Or deploy via docker using the included Dockerfile

To get started, make sure you have Node 10+ and Yarn installed, and then generate your project like this:

```
$ npx spraygun -t react-ts <project-directory>
```

If you'd like to use spraygun-react-ts with a Rails API backend, follow this guide:

> [Using spraygun-react with a Rails backend](https://github.com/carbonfive/spraygun-react/blob/main/docs/how-to-use-with-rails-backend.md)

If you'd like to use spraygun-react-ts with Redux, here are potential file structures:

> [Redux file structures](https://github.com/carbonfive/spraygun-react/blob/main/docs/example-redux-file-structure.md)

_Below this line is the README that will accompany your generated project._

---

<!-- END SPRAYGUN BANNER -->

# app-prototype

This is a React app written in TypeScript.

## Prerequisites

- Node 14 (most recent minor version)
- Yarn 1.12.1 or higher

## Quick start

Install dependencies:

```
yarn install
```

Start the server:

```
yarn start
```

This will launch the app at:

<http://localhost:3000/>

## Task reference

- **`yarn start`** starts the development server listing on port 3000. Changes to .js or .scss files automatically refresh in the browser.
- **`yarn test`** runs tests in "watch" mode, automatically focusing on tests or code that were modified since the last commit. Press the `a` key after the test runner has started to watch all tests in the project.
- **`yarn test:coverage`** runs all tests, prints coverage stats, and then exits.
- **`yarn lint`** runs all ESLint checks and then exits.
- **`yarn build`** generates an optimized bundle of the app into the `build` directory, suitable for deployment.

---

_Generated by [spraygun-react-ts](https://github.com/carbonfive/spraygun-react-ts)_
