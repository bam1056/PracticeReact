import React, { Component } from 'react'
import './App.css'

// Component only has an image, but the img has an onClick prop that takes the
// reference to the function passed from App -> Page -> Picture via props and
// causes 'home' to be passed as an argument to the App.js function which
// re-renders the page based on the setState() which sets the currentScreen to
// 'home'
class Picture extends Component {
  navigateToHome = (e) => {
    e.preventDefault()
    this.props.navigate('home')
  }

  render () {
    return <img onClick={this.navigateToHome} src='https://unsplash.it/600' />
  }
}
export default Picture
