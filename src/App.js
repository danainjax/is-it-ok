import './App.css'
import React, { Component } from 'react'
import User from './components/User'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Phineas',
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => this.setState({ name: data[0].name }))
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: 'green',
          color: 'white',
          fontFamily: 'Indie Flower',
          textAlign: 'left',
        }}
      >
        <h1>is-it-ok </h1>
        User: <User name={this.state.name} />
      </div>
    )
  }
}

export default App
