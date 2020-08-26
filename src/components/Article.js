import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class Article extends Component {
  render () {
    return (
      <div>
        <form>
          <label>
            Name:
            <input></input>
          </label>
        </form>
        <form>
          <label>
            Article Info:
            <input></input>
          </label>
        </form>
        <Button variant='contained' color='default'>
          Submit
        </Button>
      </div>
    )
  }
}
