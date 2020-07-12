import palette from "./palette"
const { createMuiTheme } = require("@material-ui/core")


//here can be palette, typography, overview,
// spacing, breakpoints, density, z-index, globals styles

const theme = createMuiTheme({
  palette,
})

export default theme
