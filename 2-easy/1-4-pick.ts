// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}