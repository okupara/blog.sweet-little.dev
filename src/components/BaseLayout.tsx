/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const BaseLayout: React.FC = ({ children }) => (
  <Flex
    p={2}
    sx={{
      flexDirection: "column",
      minHeight: "100vh",
      maxWidth: "1024px",
      m: "0 auto",
    }}
  >
    <Header />
    <main sx={{ pt: 5, px: 2 }}>{children}</main>
    <Box sx={{ marginTop: "auto" }}>
      <Footer sx={{ marginTop: "auto" }} />
    </Box>
  </Flex>
)
