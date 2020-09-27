import * as React from "react"
import { Box, Flex, IconButton, Image } from "theme-ui"
import { Twitter } from "./icons/Twitter"
import { Github } from "./icons/Github"
import Link from "next/link"

function Component() {
  return (
    <Flex
      sx={{
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ lineHeight: "0.8rem" }}>
        <Link href="/">
          <a>
            <Image src="/logo.png" sx={{ height: "48px" }} />
          </a>
        </Link>
      </Box>
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ height: "32px", width: "32px" }}>
          <IconButton>
            <Twitter />
          </IconButton>
        </Box>
        <Box ml={3} sx={{ height: "32px", width: "32px" }}>
          <IconButton>
            <Github />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  )
}

export const Header = Component
