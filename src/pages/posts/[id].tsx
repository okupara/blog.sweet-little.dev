import dynamic from "next/dynamic"
import type { GetStaticProps } from "next"
import { MDXProvider } from "@mdx-js/react"
import { components } from "theme-ui"
import { createIndexPageData } from "../../lib/generate"
import { BaseLayout } from "../../components/BaseLayout"

type Props = {
  id: string
}
function Component(props: Props) {
  const MDXContent = dynamic(() => import(`../../../posts/${props.id}.mdx`))
  return (
    <BaseLayout>
      <MDXProvider components={components}>
        <MDXContent />
      </MDXProvider>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  }
}

export async function getStaticPaths() {
  const data = createIndexPageData()
  console.log("data", data)
  const params = data.map((item) => ({
    params: {
      id: item.id,
    },
  }))
  return {
    paths: params,
    fallback: false,
  }
}

export default Component
