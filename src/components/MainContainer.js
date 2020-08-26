import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AboutUs from './AboutUs'
import NavBar from './NavBar'
import MainPageImage from './MainPageImage'
import References from './References'

const articlesUrl = 'http://localhost:3000/articles'

export default class MainContainer extends Component {
  state = {
    articles: [],
    searchTerm: '',
    title: '',
    body: '',
    curTime: new Date().toLocaleString()
  }

  componentDidMount () {
    fetch(articlesUrl)
      .then(resp => resp.json())
      .then(allArticles => {
        this.setState({ articles: allArticles })
      })
  }

  // createArticle = article => {
  //   API.post(articlesUrl, {
  //     article: {
  //       title: article.title,
  //       body: article.body,
  //       date: this.state.curTime
  //     }
  //   })
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
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
