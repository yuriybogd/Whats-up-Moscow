import React from 'react'
import { Route, Switch } from "react-router"
import Main from "./containers/Main"
import About from './containers/About';
import Account from './containers/Account';
import Contact from './containers/Contact';
import Search from './containers/Search';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/about" component={About} />
    <Route path="/account" component={Account} />
    <Route path="/contact" component={Contact} />
    <Route path="/search" component={Search} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
  </Switch>
)

export default Routes