import * as React from "react"
import { BaseLayout } from "../BaseLayout"

const Component: React.FC = ({ children }) => {
  return (
    <BaseLayout>
      <article>{children}</article>
    </BaseLayout>
  )
}

export const ArticleTemplate = Component
