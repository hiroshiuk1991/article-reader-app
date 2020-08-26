import React, { useState } from 'react'
import Button from '@material-ui/core/Button'


const articlesUrl = 'http://localhost:3000/articles'

const Article = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [curTime, setCurTime] = useState(new Date().toLocaleString())


    const createArticle = () => {
        fetch(articlesUrl, {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                title: title,
                body: body,
                date: curTime
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });
    }



    return (
        <div>
            <form onSubmit={() => createArticle()}>
                <label>
                    Title:
          <input
                        placeholder='Write here..'
                        onChange={event => setTitle(event.target.value)}
                    ></input>
                </label>
            </form>
            <form>
                <label>
                    Article Info:
          <textarea
                        placeholder='Write here...'
                        onChange={event => setBody(event.target.value)}
                    ></textarea>
                </label>
                <Button variant='contained' color='secondary' >
                    Submit
        </Button>
            </form>
        </div>
    )
}

export default Article
