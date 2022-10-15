import "styled-components";
import { themeApp } from ".";

declare module "styled-components" {
  type ThemeType = typeof themeApp;

  export interface DefaultTheme extends ThemeType {}
}
