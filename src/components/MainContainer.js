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
    searchTerm: ""
  }

  componentDidMount () {
    fetch("http://localhost:3000/articles") 
      .then((resp) => resp.json())
      .then(allArticles => {
        this.setState({articles: allArticles})
      })
    }

  // updateSearchTerm = event => {
  //   this.setState({
  //     searchTerm: event.target.value
  //   });
  // };



  render () {
    // let filteredArticles = this.props.articles.filter(
    //   (article) => {
    //     return article.title.indexOf(this.state.search) !== -1
    //   }
    // ) 

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
