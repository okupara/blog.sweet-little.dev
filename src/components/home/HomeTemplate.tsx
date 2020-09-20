/** @jsx jsx */
import { jsx, Grid, Text } from "theme-ui"
import * as React from "react"
import * as Article from "../../models/Article"
import * as HomeArticle from "./HomeArticle"
import { BaseLayout } from "../BaseLayout"

type Props = {
  articles: readonly Article.Model[]
}

const Component = ({ articles }: Props) => {
  return (
    <BaseLayout>
      <Grid gap={3} as="article">
        {articles.map((article) => {
          const created = article.created
          return (
            <HomeArticle.Article>
              <HomeArticle.Title>{article.title}</HomeArticle.Title>
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
