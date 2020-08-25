import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainContainer from './components/MainContainer'


export default class App extends React.Component {

  render () {
    return (
      <Router>
        <Route
          exact
          path='/'
          component={props => <MainContainer {...props} />}
        />

      </Router>
    )
  }
}
