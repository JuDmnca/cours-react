import { Component } from 'react'
import Denomination from './components/Denomination'

import './App.css'

class App extends Component {
  render() {
    const TOKENS = [1, 5, 10, 20, 50, 100, 200].sort((a, b) => b - a)
    return(
      <div className="container">
        <Denomination denominations={TOKENS}/>
      </div>
    )
  }
}

export default App
