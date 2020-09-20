import * as React from "react"
import { HomeTemplate } from "./HomeTemplate"
import { Decorators } from "../BlogDecorator"
import { Articles as Mock } from "../../../mock/Articles"

export const homeArticles = () => <HomeTemplate articles={Mock} />

export default {
  title: "Blog/Home",
  decorators: Decorators,
}
