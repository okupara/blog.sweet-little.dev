/** @jsx jsx */
import { jsx } from "theme-ui"

function Component() {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        pt: 2,
        variant: "styles.footer",
      }}
    >
      <div sx={{ mx: "auto" }} />
      <div sx={{ p: 2 }}>© 2020 Kensuke Okuhara</div>
    </footer>
  )
}

export const Footer = Component
