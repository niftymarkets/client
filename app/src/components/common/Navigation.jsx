import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Navigation extends Component {

  logoutUser = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');
    // This forces the page to reload, so all the authentication options
    // are removed once the user logs out.
    // Otherwise log out would cause bugs, because changes to localStorage
    // do not re-render anything
    window.location.reload();
  }

  render() {
    return (
      <nav>
        <NavLink to='static_page'>Home</NavLink>
        <NavLink to='/market'>Market</NavLink>
        <NavLink to='/static_page'>FAQs</NavLink>
        {
          localStorage.getItem('jwt')
          ? <span>
            <NavLink to={`/users/${this.props.userId}`}>Profile</NavLink>
            <button onClick={this.logoutUser}>Log out</button>
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

export default Navigation;
