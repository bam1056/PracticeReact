import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Page from './Page'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'home'
    }
  }
  navigateToPage = (scr) => {
    this.setState({currentScreen: scr})
  }
  render () {
    let screen

    switch (this.state.currentScreen) {
      case 'home': screen = <Home navigate={this.navigateToPage}/>
        break
      case 'page': screen = <Page navigate={this.navigateToPage}/>
        break
      default: screen = <Home />
    }
    return <div className='App'>
        {screen}
      </div>
  }
}
export default App
