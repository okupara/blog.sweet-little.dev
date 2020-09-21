import * as React from "react"
import { ThemeProvider } from "theme-ui"
import { funk } from "@theme-ui/presets"

export const BlogThemeProvider: React.FC = (props) => (
  <ThemeProvider theme={funk}>{props.children}</ThemeProvider>
)
