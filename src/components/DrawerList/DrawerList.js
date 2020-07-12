import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import InfoIcon from "@material-ui/icons/Info"
import SearchIcon from "@material-ui/icons/Search"
import CallIcon from "@material-ui/icons/Call"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
})

export default function DrawerList() {
  const classes = useStyles()

  return (
    <div className={classes.list} role="presentation">
      {/* Public links */}
      <List>
        <ListItem button component={NavLink} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
        <ListItem button component={NavLink} to="/account">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Account"} />
        </ListItem>
        <ListItem button component={NavLink} to="/search">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary={"Search"} />
        </ListItem>
        <ListItem button component={NavLink} to="/contact">
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
      </List>
      <Divider />
      {/* Private links */}
      <List>
        <ListItem button component={NavLink} to="/signin">
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary={"Signin"} />
        </ListItem>
        <ListItem button component={NavLink} to="/signup">
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary={"Signup"} />
        </ListItem>
      </List>
    </div>
  )
}
