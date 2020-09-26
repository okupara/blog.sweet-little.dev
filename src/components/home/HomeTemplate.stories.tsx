import * as React from "react"
import { HomeTemplate } from "./HomeTemplate"
import { Decorators } from "../BlogDecorator"
import { Articles as Mock } from "../../../mock/ArticleInfo"
import type { Model } from "../../models/ArticleFileInfo"

export const homeArticles = () => (
  <HomeTemplate articles={Mock as readonly Model[]} />
)

export default {
  title: "Blog/Home",
  decorators: Decorators,
}
