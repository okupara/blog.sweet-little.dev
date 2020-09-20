import * as React from "react"
import { ThemeProvider, Heading, Text } from "theme-ui"
import { funk } from "@theme-ui/presets"

const ParentProvider: React.FC = (props) => {
  return <ThemeProvider theme={funk}>{props.children}</ThemeProvider>
}

const Component = () => {
  return (
    <ParentProvider>
      <Heading py={3}>こんにちは世界</Heading>
      <Text>
        上記のBadge用に用意しているthemeのファイルはpackages/theme/src/components/badge.tsにある。同ディレクトリ内には全コンポーネントごとにthemeのファイルが存在する。
      </Text>
    </ParentProvider>
  )
}

export const TestPage = Component
