// App.jsx
import React from 'react'
import Search from './pages/Search'
import BookList from './components/BookList'
import Header from './components/base/Header'
import HeaderOffset from './components/base/HeaderOffset'
import Container from '@material-ui/core/Container'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import { Theme } from './utils/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`)
  return result
}

const App = () => {
  return (
    <MuiThemeProvider theme={Theme} >
      <BrowserRouter>
        <Header position="fixed" />
        <HeaderOffset />
        <Container>
          <Route
            exact
            path='/'
            render={(props) => <Search getData={keyword => getDataFromAPI(keyword)} />}
          />
          <Route
            path='/search/:keyword'
            render={(props) => <Search getData={keyword => getDataFromAPI(keyword)} />}
          />
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>

  )
}
export default App
