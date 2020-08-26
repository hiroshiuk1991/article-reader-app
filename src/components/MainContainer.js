import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import axios from 'axios';

import AboutUs from './AboutUs'
import NavBar from './NavBar'
import MainPageImage from './MainPageImage'
import References from './References'

export default class MainContainer extends Component {
  state = {
    articles: [],
  }

  componentDidMount () {
    fetch("http://localhost:3000/articles") 
      .then((resp) => resp.json())
      .then(allArticles => {
        this.setState({articles: allArticles})
      })
      
    }

  render () {
    return (
      <BrowserRouter>
        <NavBar />
        <h1 className="article-title">ABC Company Articles</h1>
        <div>
          <Switch>
            <Route
              exact
              path='/'
              render={props => <MainPageImage article={this.state.articles} {...props} />}
            />
            <Route
              exact
              path='/about'
              render={props => <AboutUs {...props} />}
            />
            <Route
              exact
              path='/ref'
              render={props => <References {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
