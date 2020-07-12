import React from 'react'
import { Route, Switch } from "react-router"
import Main from "./containers/Main"

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Main} />
  </Switch>
)

export default Routes