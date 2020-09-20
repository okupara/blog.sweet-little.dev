/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const BaseLayout: React.FC = ({ children }) => (
  <Box p={3}>
    <Header />
    <main sx={{ pt: 5 }}>{children}</main>
    <Footer />
  </Box>
)
