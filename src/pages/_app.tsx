import type { AppProps } from "next/app"
import { BlogThemeProvider } from "../contexts/BlogThemeProvider"

function App({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <Component {...pageProps} />
    </BlogThemeProvider>
  )
}

export default App
