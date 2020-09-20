declare module "@theme-ui/presets" {
  import { Theme } from "theme-ui"

  const presets: Record<"base" | "funk" | "system", Theme>

  export = presets
}
