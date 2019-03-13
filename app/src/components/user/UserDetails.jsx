import React, { Component } from 'react'

class UserDetails extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>I have user details</h2>
        <div>
          <img src={this.props.img_url} alt='User avatar' />
        </div>
        <p> My name is {this.props.name}</p>
        <h3>Balance: {this.props.balance}$</h3>
        <div>
          <button>Add funds</button>
          <button>Send funds</button>
        </div>
      </div>
    )
  }
}

export default UserDetails
