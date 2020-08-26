import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Article from './Article'

const MainPageImage = ({ article }) => {
  const [articleButton, setArticleButton] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  const onClick = () => setArticleButton(true)


  //  const updateSearchTerm = event => {
  //   setSearchTerm(
  //      event.target.value
  //   );
  // };

   let filteredArticles = article.filter(
      (article) => {
        return article.title.indexOf(searchTerm) !== -1
      }
    ) 

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

      <TextField label='Search an Article...' variant='outlined' onChange={event => setSearchTerm(event.target.value)} />
      <div>
        {filteredArticles.map((eachArticle) =>  (
            <li key={eachArticle.id}>{eachArticle.title} : {eachArticle.body}</li>
        ))}
      </div>
    </div>
  )
}

export default MainPageImage
