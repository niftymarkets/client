import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import '../../index.css'

class Navigation extends Component {
  logoutUser = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    // This forces the page to reload, so all the authentication options
    // are removed once the user logs out.
    // Otherwise log out would cause bugs, because changes to localStorage
    // do not re-render anything
    window.location.reload();
  };

  render() {
    return (
      <NavWrapper>

        <NavLeft>
          <a href='http://niftymarkets.herokuapp.com/index.html'>
            <Heading>NiftyMarkets</Heading>
          </a>
          <div className='nav-links'>
            <a href='http://niftymarkets.herokuapp.com/index.html'>Home</a>
            <NavLink to='/app/market'>Market</NavLink>
            <a href='http://niftymarkets.herokuapp.com/about.html'>About us</a>
            <a href='http://niftymarkets.herokuapp.com/contact.html'>Contact</a>
          </div>
        </NavLeft>

        <NavRight>
          <div className='nav-links'>
            {localStorage.getItem('jwt') ? (
              <>
                <NavLink to={`/app/users/${this.props.userId}`}>
                  <i className='fas fa-user' />
                  Profile
                </NavLink>
                <NavLink to='/app/market'>
                  <Button onClick={this.logoutUser}>Log out</Button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to='/app/signup'>Sign up</NavLink>
                <NavLink to='/app/login'>Log in</NavLink>
              </>
            )}
          </div>
        </NavRight>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  background: #212b38;
  z-index: 2;
  top: 0;
  height: 75px;
  color: #29f3db;
  a {
    margin-right: 30px;
  }
  i {
    margin-right: 30px;
    font-size: 2rem;
    cursor: pointer;
  }
  i.fa-user {
    font-size: 1rem;
    margin-right: 5px;
  }
`

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`

const NavRight = styled.div`
  display: flex;
  align-items: baseline;

`

const Heading = styled.h2`
  margin-left: 10px;
  font-size: 3rem;
  display: inline-block;
  color: #29f3db;
`

const Button = styled.button`
  color: white;
  font-family: 'Ubuntu', sans-serif;
  padding: 10px 15px;
  border-radius: 100px;
  background: linear-gradient(
    180deg,
    #01fce1 0,
    #01d6c8 31.87%,
    #0299a0 90.06%
  );
  cursor: pointer;
  border: 0;
  font-size: 1rem;
  outline: none;
  margin-right: 20px;
`

export default Navigation;
