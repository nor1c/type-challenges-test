// https://github.com/nor1c/ts/blob/main/Infer/example.ts

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never