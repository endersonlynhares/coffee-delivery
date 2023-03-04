import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from "./styles/global"

import {light} from "./styles/themes/lightTheme"
import { Router } from './routers'
import { OrderContextProvider } from './contexts/OrderContext'

function App() {
  return (
   <ThemeProvider theme={light}>
    <OrderContextProvider>
      <Router />
    </OrderContextProvider>
      <GlobalStyles />
   </ThemeProvider>
  )
}

export default App
