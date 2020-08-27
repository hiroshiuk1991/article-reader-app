import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class EditArticle extends Component {
  state = {
    updatedTitle: '',
    updatedBody: ''
  }

  updateChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // submitHandler = e => {
  //     e.preventDefault()
  //     axios.post(articlesUrl, this.state)

  // }

  sendUpdatedArticle = e => {
    e.preventDefault()
    const { articleObj } = this.props
    const { updatedTitle, updatedBody } = this.state

    let formData = { id: articleObj.id, title: updatedTitle, body: updatedBody }
    let configObj = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    }
      fetch(`http://localhost:3000/articles/${articleObj.id}`, configObj)
  }

  render () {
    return (
      <div>
        <div>
          <h2>
            Click on the Article you would like to Edit, when you've finished
            editing, click submit.
          </h2>
        </div>
        <form onSubmit={this.sendUpdatedArticle}>
          <label>
            Title:
            <input
              type='text'
              name='updatedTitletitle'
              value={this.state.updatedTitletitle}
              onChange={this.updateChangeHandler}
            ></input>
          </label>
          <label>
            Article Info:
            <textarea
              type='text'
              name='updatedBodybody'
              value={this.state.updatedBodybody}
              onChange={this.updateChangeHandler}
            ></textarea>
          </label>
          <Button type='submit' variant='outlined' color='secondary'>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
