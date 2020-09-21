import * as React from "react"
import { BlogThemeProvider } from "../components/BlogThemeProvider"
import { ArticleTemplate } from "../components/article/ArticleTemplate"
import { components } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import Page from "../../contents/test.mdx"

const Component = () => (
  <BlogThemeProvider>
    <ArticleTemplate>
      <MDXProvider components={components}>
        <Page />
      </MDXProvider>
    </ArticleTemplate>
  </BlogThemeProvider>
)
export default Component
