// Apparently, this is needed so Typescript understands that we are using
// VUE files and can import them, although it's webpack's (or vite's) job
// to deal with them
// https://stackoverflow.com/questions/54622621/what-does-the-shims-tsx-d-ts-file-do-in-a-vue-typescript-project

declare module "*.vue";
