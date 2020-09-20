import * as React from "react"
import { BlogThemeProvider } from "./BlogThemeProvider"

export const BlogThemeDecrator = (Story: () => JSX.Element) => {
  return (
    <BlogThemeProvider>
      <Story />
    </BlogThemeProvider>
  )
}
