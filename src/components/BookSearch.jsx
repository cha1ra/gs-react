import React from 'react'
import TextField from '@material-ui/core/TextField'

const BookSearch = props => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="filled-password-input"
        label="検索語句を入力"
        type="text"
        variant="filled"
      />
    </form>
  )
}

export default BookSearch
