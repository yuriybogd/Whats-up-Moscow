import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MoscowBg from "./assets/MoscowCity.jpg"
import TopBar from "../../components/TopBar/TopBar"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "100vh",
    backgroundImage: `url(${MoscowBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}))

const Main = () => {
  const classes = useStyles()

  return (
      <div className={classes.root}>
        <TopBar />
      </div>
  )
}

export default Main
