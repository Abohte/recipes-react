import React, { Component } from 'react'
import './App.css'
import Routes from './routes'
import Loading from './components/loading'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Loading />
        <Routes />
      </div>
    )
  }
}

export default App
