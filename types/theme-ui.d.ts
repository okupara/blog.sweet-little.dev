import * as ThemeUI from "theme-ui"

declare module "theme-ui" {
  export const components: Record<string, () => JSX.Element>
}
