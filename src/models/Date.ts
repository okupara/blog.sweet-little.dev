export type Model = Readonly<{
  year: number
  month: number
  date: number
}>

// The parameter should be like 2020-09-20.
export function Model(param: string): Model {
  const params = param.split("-")
  return {
    year: Number(params[0]),
    month: Number(params[1]),
    date: Number(params[2]),
  }
}
