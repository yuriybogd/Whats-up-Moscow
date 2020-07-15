import palette from "./palette"
import typography from "./typography"
const { createMuiTheme } = require("@material-ui/core")


//here can be palette, typography, overview,
// spacing, breakpoints, density, z-index, globals styles

const theme = createMuiTheme({
  palette,
  typography
})

export default theme
