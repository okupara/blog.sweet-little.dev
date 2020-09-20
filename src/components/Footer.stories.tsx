import * as React from "react"
import { Footer } from "./Footer"
import { BlogThemeDecrator } from "./BlogThemeDecorator"

export const footer = () => <Footer />

export default {
  title: "Blog/Footer",
  decorators: [BlogThemeDecrator],
}
