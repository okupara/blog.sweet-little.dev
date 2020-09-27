import * as React from "react"
import { ThemeProvider, merge } from "theme-ui"
import { funk } from "@theme-ui/presets"

const theme = merge(funk, {
  styles: {
    h1: {
      mt: 0,
      mb: 4,
    },
    h2: {
      my: 4,
    },
    p: {
      my: 4,
    },
  },
})

export const BlogThemeProvider: React.FC = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
