import './App.css'
import React, { Component } from 'react'
import User from './components/User'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => this.setState({ name: data[0].name }))
  }
  render() {
    console.log(this.state.name)
    return (
      <div
        style={{
          backgroundColor: '#3a539b',
          color: 'white',
          fontFamily: 'Raleway',
          textAlign: 'left',
        }}
      >
        <h1>movie safe</h1>
        User: <User name={this.state.name} />
      </div>
    )
  }
}

export default App
