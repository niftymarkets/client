import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/actionCreators'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink to='static_page'>Home</NavLink>
        <NavLink to='/market'>Market</NavLink>
        <NavLink to='/user/123'>Profile</NavLink>
        <NavLink to='static_page'>FAQs</NavLink>
        <NavLink to='/signup'>Sign up</NavLink>
        <NavLink to='/login'>Log in</NavLink>
        <NavLink to='static_page'><button onClick={this.props.logoutUser}>Log out</button></NavLink>
      </nav>
    )
  }
}

export default connect(st => st, { logoutUser })(Navigation);
