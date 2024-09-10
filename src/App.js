import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={20} />
      </div>
    )
  }
}

export default App
