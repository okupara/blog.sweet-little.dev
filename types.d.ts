declare module "@theme-ui/presets" {
  import { Theme } from "theme-ui"

  const presets: Record<"base" | "funk" | "system", Theme>

  export = presets
}

// declare module "theme-ui" {
//   export * from "theme-ui"
//   const components: Record<string, string>
//   export const components
// }
