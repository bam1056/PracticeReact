import React, { Component } from 'react'
import './App.css'

class Home extends Component {
  navigateTo = (e) => {
    e.preventDefault()
    this.props.navigate('page')
  }

  render () {
    console.log(this.props)
    return <div className='Home'>
      <h1>THIS IS THE HOME PAGE</h1>
      <p>This is where your HTML can go</p>
      <img src='https://unsplash.it/500' />
      <button onClick={this.navigateTo}>CHANGE PAGE</button>
    </div>
  }
}
export default Home
