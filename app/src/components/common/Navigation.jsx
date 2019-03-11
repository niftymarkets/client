import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink to='static page?'>Home</NavLink>
        <NavLink to='/market'>Market</NavLink>
        <NavLink to='/user/123'>Profile</NavLink>
        <NavLink to='static page?'>FAQs</NavLink>
        <NavLink to='static page?'>Sign out</NavLink>
      </nav>
    )
  }
}

export default Navigation
