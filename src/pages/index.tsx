import * as React from "react"
import { BlogThemeProvider } from "../components/BlogThemeProvider"
import { createIndexPageData } from "../lib/generate"
import { HomeTemplate } from "../components/home/HomeTemplate"
import type * as ArticleFileInfo from "../models/ArticleFileInfo"

type Props = {
  articlesInfo: readonly ArticleFileInfo.Model[]
}

const Component = (props: Props) => (
  <BlogThemeProvider>
    <HomeTemplate articles={props.articlesInfo} />
  </BlogThemeProvider>
)

export function getStaticProps() {
  return { props: { articlesInfo: createIndexPageData() } }
}

export default Component
