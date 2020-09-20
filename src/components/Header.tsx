import * as React from "react"
import { Box, Flex, Heading, IconButton } from "theme-ui"
import { Twitter } from "./icons/Twitter"
import { Github } from "./icons/Github"

function Component() {
  return (
    <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
      <Box>
        <Heading>blog.okupara</Heading>
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
