import React, { Component } from 'react'
import './App.css'
import Picture from './Picture'

class Page extends Component {
  navigateToHome = (e) => {
    e.preventDefault()
    this.props.navigate('home')
  }

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
