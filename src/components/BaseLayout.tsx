/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const BaseLayout: React.FC = ({ children }) => (
  <Flex p={2} sx={{ flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <main sx={{ pt: 4, px: 3 }}>{children}</main>
    <Box sx={{ marginTop: "auto" }}>
      <Footer sx={{ marginTop: "auto" }} />
    </Box>
  </Flex>
)
