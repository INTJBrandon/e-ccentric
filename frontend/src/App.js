import React from 'react'
import Charging from './charging'
import Transactions from './transactions'

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