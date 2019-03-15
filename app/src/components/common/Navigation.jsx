import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

class Navigation extends Component {
  logoutUser = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('userId')
    // This forces the page to reload, so all the authentication options
    // are removed once the user logs out.
    // Otherwise log out would cause bugs, because changes to localStorage
    // do not re-render anything
    window.location.reload()
  }

  render() {
    return (
      <NavWrapper>
        <NavLink to='static_page'>
          <h1>NiftyMarkets</h1>
        </NavLink>
        <NavLink to='static_page'>Home</NavLink>
        <NavLink to='/market'>Market</NavLink>
        <NavLink to='static_page'>About us</NavLink>
        <NavLink to='static_page'>Contact</NavLink>
        {localStorage.getItem('jwt') ? (
          <span>
            <NavLink to={`/users/${this.props.userId}`}>Profile</NavLink>
            <button onClick={this.logoutUser}>Log out</button>
          </span>
        ) : (
          <span>
            <NavLink to='/signup'>Sign up</NavLink>
            <NavLink to='/login'>Log in</NavLink>
          </span>
        )}
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  display: flex;
`

export default Navigation
