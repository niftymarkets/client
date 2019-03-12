import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink to='static_page'>Home</NavLink>
        <NavLink to='/market'>Market</NavLink>
        <NavLink to='/user/123'>Profile</NavLink>
        <NavLink to='static_page?'>FAQs</NavLink>
        <NavLink to='static_page'>Sign out</NavLink>
        <NavLink to='/login'>Log in</NavLink>
      </nav>
    )
  }
}

export default Navigation
