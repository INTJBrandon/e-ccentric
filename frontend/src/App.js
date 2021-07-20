import React from 'react'
import Charging from './Charging'
import Transactions from './Transactions'
import { Route } from 'react-router-dom'
import NavBar from './navbar'

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
        <Route path="/transactions">
          <Transactions />
        </Route>
        <Route path="/home" render={function(routerProps) { return <Charging />}}/>
      </>
      
    )
  }
}

export default App