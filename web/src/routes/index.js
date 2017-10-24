import React from 'react'
import Home from './Home'
import Donate from './Donate'
import { 
  HashRouter, 
  Switch,
  Route 
} from 'react-router-dom'

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/donate" exact component={Donate} />
    </Switch>
  </HashRouter>
)
