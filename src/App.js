import React from 'react'

// import axios from 'axios';

import NavBar from './components/NavBar'
import Articles from './components/Articles'

export default class App extends React.Component {
  state = {
    articles: []
  }


  // componentDidMount() {
    
  // }

  render () {
    return (
      <div>
        <NavBar />
        <Articles />
        
      </div>
    )
  }
}
