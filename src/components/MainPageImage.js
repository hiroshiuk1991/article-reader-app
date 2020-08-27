import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Article from './Article'
import EditArticle from './EditArticle'

const MainPageImage = ({ article, title, body }) => {
  const [articleButton, setArticleButton] = useState(false)
  // const [editArticleButton, setEditArticleButton] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [articleObj, setArticleObj] = useState({ })

  const onClick = () => setArticleButton(true)

  let filteredArticles = article.filter(article => {
    return article.title.indexOf(searchTerm) !== -1
  })

  const selectedArticle = article => {
    setArticleObj({ articleObj: article })
    console.log(articleObj)
  }

  return (
    <div className='app-intro'>
      <h2>
        This is web application allows Company Director William Jones to post
        articles to this board for all in the company to read.
      </h2>

      {!articleButton ? (
        <Button variant='outlined' color='secondary' onClick={onClick}>
          <h3>Create New Article</h3>
        </Button>
      ) : (
        <Article title={title} body={body} />
      )}
      <h3>Please search for the Article of your choice</h3>
      <TextField
        label='Search an Article...'
        variant='outlined'
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div>
        <EditArticle title={title} body={body} articleObj={articleObj} />
      </div>
      <br/>
      <div>
        {filteredArticles.map(eachArticle => (
          <li key={eachArticle.id}>
            <strong>Title: {eachArticle.title} </strong> -
            <i>{eachArticle.body}</i>
            <Button
              variant='outlined'
              color='secondary'
              onClick={() => selectedArticle(eachArticle)}
            >
              Edit
            </Button>
          </li>
        ))}
      </div>
    </div>
  )
}

export default MainPageImage
