import React from 'react'
import Charging from './Charging'
import Transactions from './Transactions'

class App extends React.Component {
  render() {
    return (
      <div>
        <Charging />
        <Transactions />
      </div>
      
    )
  }
}

export default App