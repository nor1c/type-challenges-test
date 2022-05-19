// https://stackoverflow.com/a/59188070/3300826

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}