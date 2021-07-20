import React from 'react'
import Charging from './Charging'
import Transactions from './Transactions'
import { Route } from 'react-router-dom'
import NavBar from './navbar'
import Estimate from './Estimate'

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
        <Route path="/transactions">
          <Transactions />
        </Route>
        <Route path="/charge" render={function(routerProps) { return <Charging />}}/>
        <Route path="/home">
          <Estimate />
        </Route>
      </>
      
    )
  }
}

export default App