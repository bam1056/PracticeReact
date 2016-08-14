import React, { Component } from 'react'
import Home from './Home' // import your components
import Page from './Page'
import './App.css'        // import your CSS styling

// begin class definition
class App extends Component {
  // custom constructor to set initial state
  constructor () {
    // call super() to inherit from the super class Component
    super()
    // define initial state of screen
    this.state = {
      currentScreen: 'home'
    }
  }
  // function to be passed as props to components
  // in order to return information used to update
  // the state. Argument passed from components
  // will be set as current screen state
  navigateToPage = (scr) => {
    this.setState({currentScreen: scr})
  }
  render () {
    let screen

    // switch statement allows us to change which screen is displayed
    // based on the current value assigned to the currentScreen key
    switch (this.state.currentScreen) {
      // "navigate" prop is used to pass the function navigateToPage() to Home
      //  and Page components. If the value of currentScreen is not one of the
      // cases, the view will default to the Home component
      case 'home': screen = <Home navigate={this.navigateToPage}/>
        break
      case 'page': screen = <Page navigate={this.navigateToPage}/>
        break
      default: screen = <Home />
    }
    // returns a div that contains the current screen view based on the currentScreen
    // state
    return <div className='App'>
        {screen}
      </div>
  }
}
// allows 'App' component to be accessed via import statements in other .js files
export default App
