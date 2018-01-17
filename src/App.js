import React, { Component } from 'react'
import './App.css'
import Routes from './routes'
import Loading from './components/Loading'
import LoadErrors from './components/LoadErrors'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Loading />
        <LoadErrors />
        <Routes />
      </div>
    )
  }
}

export default App
