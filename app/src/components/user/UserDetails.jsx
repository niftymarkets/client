import React, { Component } from 'react'

class UserDetails extends Component {
  render() {
    return (
      <div>
        <h2>I have user details</h2>
        <p> My name is {this.props.name}</p>
        <div>Balance: {this.props.balance}</div>
      </div>
    );
  }
}

export default UserDetails
