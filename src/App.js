import React from "react"
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme"
import Routes from "./Routes"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

          <Routes />

      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
