import React from 'react'
import BookList from '../components/BookList'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'

const Search = props => {
  let { keyword } = useParams()
  if (keyword === undefined) {
    keyword = 'React'
  }
  return (
    <div>
      <div style={{ margin: '16px 0' }}>
        <Typography variant="h6" gutterBottom>
          { keyword } の検索結果
        </Typography>
      </div>
      <BookList
        language={keyword}
        getData={props.getData}
      />
    </div>
  )
}

Search.propTypes = {
  getData: PropTypes.func
}

export default Search
