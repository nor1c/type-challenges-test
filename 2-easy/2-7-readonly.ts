// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}