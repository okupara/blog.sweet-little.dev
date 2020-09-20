import * as Date from "./Date"

export type Model = Readonly<{
  title: string
  content: string
  created: Date.Model
}>
