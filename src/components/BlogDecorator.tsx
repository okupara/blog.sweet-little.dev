import * as React from "react"
import { BlogThemeProvider } from "../contexts/BlogThemeProvider"
import { Global } from "@emotion/core"

const BlogThemeDecrator = (Story: () => JSX.Element) => {
  return (
    <BlogThemeProvider>
      <Story />
    </BlogThemeProvider>
  )
}

const ResetSBPadding = (Story: () => JSX.Element) => {
  return (
    <>
      <Global
        styles={() => ({
          body: {
            padding: "0 !important",
          },
        })}
      />
      <Story />
    </>
  )
}

export const Decorators = [BlogThemeDecrator, ResetSBPadding]
