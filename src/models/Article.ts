import * as Date from "./Date"

export type Model = Readonly<{
  id: string
  title: string
  content: string
  created: Date.Model
}>
