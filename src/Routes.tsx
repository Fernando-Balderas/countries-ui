import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from 'pages/Home'
import CountryDetail from 'pages/CountryDetail'
import NotFound from 'components/NotFound'

const Routes = () => {
  let location = useLocation()
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries/:id" component={CountryDetail} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
