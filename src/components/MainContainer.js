import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import axios from 'axios';

import AboutUs from './AboutUs'
import NavBar from './NavBar'
import MainPageImage from './MainPageImage'
import References from './References'

export default class MainContainer extends Component {
  state = {
    articles: []
  }

  //componentdidmount with axios
    //axios.get('localhost/rubyproject')
      //.then(res => {
        //const articles = res.data;
        //this.setState({ articles })
      //})

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
              render={props => <MainPageImage {...props} />}
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
