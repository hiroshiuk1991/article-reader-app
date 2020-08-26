import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Article from './Article'

const MainPageImage = ({ article }) => {
  const [articleButton, setArticleButton] = useState(false)

  const onClick = () => setArticleButton(true)

  return (
    <div className='app-intro'>
      <p>
        This is web application allows Company Director William Jones to post
        articles to this board for all in the company to read.
      </p>

      {!articleButton ? (
        <Button variant='contained' color='default' onClick={onClick}>
          Create New Article
        </Button>
      ) : (
        <Article />
      )}

      <TextField label='Search an Article...' variant='outlined' />
      <div>
        <ul>{article.map((eachArticle) =>  (
            <li key={eachArticle.id}>{eachArticle.title}</li>
        ))}</ul>
      </div>
    </div>
  )
}

export default MainPageImage
