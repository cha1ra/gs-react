// App.jsx
import React from 'react'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import Header from './components/Header'
import HeaderOffset from './components/HeaderOffset'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Toolbar } from '@material-ui/core'
import axios from 'axios'	// 追加

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`)
  return result
}

const App = () => {
  const languages = ['React', 'Vue', 'Angular']
  return (
    <BrowserRouter>
      <div>
        <Header position="fixed" />
        <HeaderOffset />
        <BookSearch />
        <hr/>
        <Route
          exact
          path='/'
          render={
            props =>
              <BookList
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          path='/vue'
          render={
            props =>
              <BookList
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          path='/angular'
          render={
            props =>
              <BookList
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
      </div>
    </BrowserRouter>

  )
}
export default App
