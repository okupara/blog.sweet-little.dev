import * as React from "react"
import { createIndexPageData } from "../lib/generate"
import { HomeTemplate } from "../components/home/HomeTemplate"
import type * as ArticleFileInfo from "../models/ArticleFileInfo"

type Props = {
  articlesInfo: readonly ArticleFileInfo.Model[]
}

const Component = (props: Props) => <HomeTemplate articles={props.articlesInfo} />

export function getStaticProps() {
  return { props: { articlesInfo: createIndexPageData() } }
}

export default Component
