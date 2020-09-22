import type * as BlogDate from "./Date"

export type Model = Readonly<{
  id: string
  fileName: string
  title: string
  slug: string
  date: BlogDate.Model
}>
