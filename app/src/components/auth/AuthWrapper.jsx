import React, { Component } from 'react'
import Signup from './Signup'
import Login from './Login'


class AuthWrapper extends Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}

export default AuthWrapper
