import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const articlesUrl = 'http://localhost:3000/articles'

export default class Article extends Component {
  state = {
    title: '',
    body: '',
    curTime: new Date().toLocaleString()
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    axios.post(articlesUrl, this.state)
    .then(resp => {
      console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
  }
    

  render () {
    const { title, body } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            Title:
            <input
              type='text'
              name='title'
              value={title}
              placeholder='Write here..'
              onChange={this.changeHandler}
            ></input>
          </label>
          <label>
            Article Info:
            <textarea
              type='text'
              name='body'
              value={body}
              placeholder='Write here...'
              onChange={this.changeHandler}
            ></textarea>
          </label>
          <Button type='submit' variant='contained' color='secondary'>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
