import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import CountryDetail from 'pages/CountryDetail'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/countries/:id" component={CountryDetail} />
  </Switch>
)

export default Routes
