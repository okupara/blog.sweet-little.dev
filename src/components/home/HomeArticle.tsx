/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"

export const Article: React.FC = ({ children }) => <article>{children}</article>

export const Title: React.FC = ({ children }) => <h2>{children}</h2>

export const Created: React.FC = ({ children }) => <time>{children}</time>
