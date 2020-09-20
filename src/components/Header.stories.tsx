import * as React from "react"
import { Header } from "./Header"
import { BlogThemeDecrator } from "./BlogThemeDecorator"

export const header = () => <Header />

export default {
  title: "Blog/Header",
  decorators: [BlogThemeDecrator],
}
