# React TS starter
This starter contains some boilerplate code, with following directory strucutre :

```
src/
├── assets/
│   ├── fonts/
│   ├── images/
├── components/
├── pages/
├── stores/
├── styles/
│   ├── modules/
│       ├── mixins.ts
│       ├── reset.ts // reset.css
│   ├── global.ts // global styled-component
└── utils/
```

**Git LFS** is already setup for ``*.png``, ``*.jpg`` and ``*.jpeg`` files, so you need `git-lfs`.
You can customize the git lfs behaviour in `.gitattributes` file

I use it mainly for my personal projects, but feel free to test this workflow!

## Installation
### Yarn
```bash
$ yarn install
$ yarn start
```
### NPM
```bash
$ npm install
$ npm run start
```

## Git hooks
This starter is shipped with [husky](https://github.com/typicode/husky) to handle various git hooks.
The `pre-commit` is used to prettify source files thanks to [prettier](https://github.com/prettier/prettier).
