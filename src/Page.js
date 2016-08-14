import React, { Component } from 'react'
import './App.css'
import Picture from './Picture'

// simple component that demonstrates a component with a nested component that
// takes props passed from the App.js and then continues to pass them down to
// the nested component as props in order to allow access to pass information
// from a component back to the App in order to update/influence the state
class Page extends Component {
  // function takes a click event , prevents the default action of a click from occuring
  // and passes the argument 'home' back to the App.js function navigateToPage
  // which then calls setState() to give the value 'home' to the currentScreen state
  // key. This causes the page to re-render with <Home /> view displayed due to
  // the switch statement executing on the updated state
  navigateToHome = (e) => {
    e.preventDefault()
    this.props.navigate('home')
  }
  // <Picture /> component is introduced and the function passed from App.js
  // is passed as props to the Picture component via the 
  // "navigate={this.props.navigate}"
  render () {
    return <div className='Page'>
      <h1>THIS IS A NEWPAGE</h1>
      <button onClick={this.navigateToHome}>CHANGE PAGE</button>
      <p>This is where your HTML can go</p>
      <Picture navigate={this.props.navigate}/>
    </div>
  }
}
export default Page
