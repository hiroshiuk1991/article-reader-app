import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Article from './Article'

const MainPageImage = () => {
  const [articleButton, setArticleButton] = useState(false)

  const onClick = () => setArticleButton(true)

  return (
    <div className='app-intro'>
      <p>
        This is web application allows Company Director William Jones to post
        articles to this board for all in the company to read.
      </p>
      <Button variant='contained' color='default' onClick={onClick}>
        {articleButton ? <Article /> : 'Create New Article'}
      </Button>
      <TextField label='Search an Article...' variant='outlined' />
      <div>
        <h3>article cards component</h3>
      </div>
    </div>
  )
}

export default MainPageImage
