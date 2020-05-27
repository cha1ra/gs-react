import React from 'react'
import PropTypes from 'prop-types'
import BookSearch from '../BookSearch'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Switch, Link } from 'react-router-dom'

const Header = props => {
  const languages = ['React', 'Vue', 'Angular']
  return (
    <header>
      <AppBar position={props.position} color="primary">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to='/' exact style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h5">
              React App {languages[1]}
            </Typography>
          </Link>
          <Switch>
            <ul>
              {
                languages.map((language, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        display: 'inline',
                        padding: '0 16px'
                      }}
                    >
                      <Link
                        to={`/search/${language}`}
                        style={{
                          textDecoration: 'none',
                          color: 'white'
                        }}
                      >{language}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </Switch>
          <BookSearch />
        </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  position: PropTypes.string
}

export default Header
