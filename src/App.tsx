import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from "./styles/global"

import {light} from "./styles/themes/lightTheme"
import { Router } from './routers'

function App() {
  return (
   <ThemeProvider theme={light}>
      <Router />
      <GlobalStyles />
   </ThemeProvider>
  )
}

export default App
