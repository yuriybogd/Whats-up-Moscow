import React from "react"
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme"
import { Router } from "react-router"
import Routes from "./Routes"
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
        </Router>
    </ThemeProvider>
  )
}

export default App
