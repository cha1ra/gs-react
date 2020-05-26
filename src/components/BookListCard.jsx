import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography, Divider } from '@material-ui/core'

const BookListCard = props => {
  return (
    <Paper width={400} style={{ width: '100%', position: 'relative' }} elevation={0}>
      <a href={props.url} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></a>
      <Box display="flex" alignItems="center" >
        <img src={props.imgUrl} alt="" style={{ margin: '16px' }} />
        <Box m={2}>
          <Typography variant="subtitle1" gutterBottom>
            {props.title}
          </Typography>
        </Box>
      </Box>
      <Divider variant="middle" />
    </Paper>
  )
}

BookListCard.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  url: PropTypes.string
}

export default BookListCard
