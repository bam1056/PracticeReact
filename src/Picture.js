import React, { Component } from 'react'
import './App.css'

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
