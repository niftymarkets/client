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
        <NavLink to='static_page'>FAQs</NavLink>
        {
          this.props.isAuthed
          ? <span>
            <NavLink to='/user/123'>Profile</NavLink>
            <NavLink to='static_page'><button onClick={this.props.logoutUser}>Log out</button></NavLink>
          </span>
          : <span>
            <NavLink to='/signup'>Sign up</NavLink>
            <NavLink to='/login'>Log in</NavLink>
          </span>
        }
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return ({
    isAuthed: state.isAuthed,
  })
}

export default connect(mapStateToProps, { logoutUser })(Navigation);
