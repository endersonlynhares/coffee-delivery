import "styled-components"
import {light} from "../styles/themes/lightTheme"

type ThemeType = typeof light 

declare module "styled-components"{
    export interface DefaultTheme extends ThemeType {}
}