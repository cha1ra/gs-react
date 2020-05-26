import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography, Divider } from '@material-ui/core'

const BookListCard = props => {
  return (
    <Paper width={400} style={{ width: '100%' }} elevation={0}>
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
  imgUrl: PropTypes.string
}

export default BookListCard
