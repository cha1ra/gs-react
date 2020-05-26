import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header>
      <AppBar position={props.position}>
        <Toolbar>
          <Typography variant="h5">
              React App
          </Typography>
          <ul>
            <li><Link to='/'>React</Link></li>
            <li><Link to='/vue'>Vue</Link></li>
            <li><Link to='/angular'>Angular</Link></li>
          </ul>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  position: PropTypes.string
}

export default Header
