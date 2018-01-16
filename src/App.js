import React, { Component } from 'react'
import './App.css'
import Routes from './routes'
import Loading from './components/Loading'
import LoadError from './components/LoadError'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Loading />
        <LoadError />
        <Routes />
      </div>
    )
  }
}

export default App
