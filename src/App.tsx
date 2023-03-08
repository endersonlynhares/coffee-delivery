import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from "./styles/global"

import {light} from "./styles/themes/lightTheme"
import { dark } from './styles/themes/darkTheme'
import { Router } from './routers'
import { OrderContextProvider } from './contexts/OrderContext'
import { useContext, useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const [theme, setTheme] = useState(light)
  const toggleTheme = () =>{
    setTheme(theme.title === "light"? dark : light)
  }

  return (
   <ThemeProvider theme={theme}>
    <OrderContextProvider>
      <ThemeContext.Provider value={{toggleTheme}}>
        <Router />
      </ThemeContext.Provider>
    </OrderContextProvider>
      <GlobalStyles />
   </ThemeProvider>
  )
}

export default App
