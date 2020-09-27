/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Link from "next/link"

export const Article: React.FC = ({ children }) => <article>{children}</article>

export type TitleProps = {
  id: string
}
export const Title: React.FC<TitleProps> = ({ children, id }) => (
  <h2 sx={{ m: 0, color: "text" }}>
    <Link as={`/posts/${id}`} href="/posts/[id]">
      <a
        sx={{
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {children}
      </a>
    </Link>
  </h2>
)

export const Created: React.FC = ({ children }) => <time>{children}</time>
