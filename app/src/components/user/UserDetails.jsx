import React, { Component } from 'react'

class UserDetails extends Component {
  render() {
    return (
      <div>
        <h2>I have user details</h2>
        <div>
          <img src={this.props.img_url} alt='User avatar' />
        </div>
        <p>
          Welcome <span>{this.props.name}</span>
        </p>
        {/* Capitalize the first letter of name using CSS text-transform, could do it with JS but it's too complex */}
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
