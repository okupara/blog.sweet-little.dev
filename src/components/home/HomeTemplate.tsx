/** @jsx jsx */
import { jsx, Grid, Text } from "theme-ui"
import * as React from "react"
import * as ArticleFileInfo from "../../models/ArticleFileInfo"
import * as HomeArticle from "./HomeArticle"
import { BaseLayout } from "../BaseLayout"

type Props = {
  articles: readonly ArticleFileInfo.Model[]
}

const Component = ({ articles }: Props) => {
  return (
    <BaseLayout>
      <Grid gap={2} as="article">
        {articles.map((article) => {
          const created = article.date
          return (
            <HomeArticle.Article key={article.id}>
              <HomeArticle.Title id={article.id}>{article.title}</HomeArticle.Title>
              <HomeArticle.Created>
                <Text>{`${created.date}/${created.month}/${created.year}`}</Text>
              </HomeArticle.Created>
            </HomeArticle.Article>
          )
        })}
      </Grid>
    </BaseLayout>
  )
}

export const HomeTemplate = React.memo(Component)
