import React, { Component } from 'react'
import './App.css'
import Routes from './routes'
import Loading from './components/Loading'
import LoadErrors from './components/LoadErrors'
import Navigation from './components/Navigation'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Loading />
        <LoadErrors />
        <Routes />
      </div>
    )
  }
}

export default App
