import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AboutUs from './AboutUs'
import NavBar from './NavBar'
import MainPageImage from './MainPageImage'
import References from './References'
import EditArticle from './EditArticle'

const articlesUrl = 'http://localhost:3000/articles'

export default class MainContainer extends Component {
  state = {
    articles: [],
    searchTerm: '',
    title: '',
    body: '',
    curTime: new Date().toLocaleString(),
    // selectedArticle: {}
  }

  componentDidMount () {
    fetch(articlesUrl)
      .then(resp => resp.json())
      .then(allArticles => {
        this.setState({ articles: allArticles })
      })
  }

  // selectedArticle = articleObj => {
  //   this.setState({ selectedArticle: articleObj })
  //   console.log(this.state.selectedArticle)
  // }


  render () {
    const { articles, title, body } = this.state

    return (
      <BrowserRouter>
        <NavBar />
        <h1 className='article-title'>ABC Company Articles</h1>
        <div>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <MainPageImage
                  article={articles}
                  title={title}
                  body={body}
                  selectedArticle={this.selectedArticle}
                  {...props}
                />
              )}
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
            <Route
              exact
              path=''
              render={props => <EditArticle {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
