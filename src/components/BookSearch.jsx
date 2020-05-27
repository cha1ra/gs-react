import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core/'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const BookSearch = props => {
  const [keyword, setKeyword] = useState('React')

  const handleToSearchResult = (e) => {
    props.history.push(`/search/${keyword}`)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TextField
          id="filled-password-input"
          label="検索キーワード"
          type="text"
          size="small"
          style={{ width: '250px', marginRight: '8px' }}
          variant="filled"
          onChange={ (e) => { setKeyword(e.target.value) }}
        />
        <Button
          size="large"
          variant="outlined"
          onClick={handleToSearchResult}
        >
            検索
        </Button>
      </div>
    </ThemeProvider>
  )
}

BookSearch.propTypes = {
  history: PropTypes.object
}

export default withRouter(BookSearch)
