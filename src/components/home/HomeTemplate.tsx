/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import * as React from "react"
import * as Article from "../../models/Article"
import * as HomeArticle from "./HomeArticle"
import { Header } from "../Header"
import { Footer } from "../Footer"

type Props = {
  articles: readonly Article.Model[]
}

const Component = ({ articles }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Grid gap={2} as="article">
        {articles.map((article) => (
          <HomeArticle.Article>
            <HomeArticle.Title>{article.title}</HomeArticle.Title>
            <HomeArticle.Created>{article.created}</HomeArticle.Created>
          </HomeArticle.Article>
        ))}
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export const HomeTemplate = React.memo(Component)
