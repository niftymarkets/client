import React, { Component } from 'react'
import styled from 'styled-components'
import EditUserForm from './EditUserForm'

class UserDetails extends Component {
  state = {
    isEditing: false
  }

  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    return (
      <div>
        <ImageWrapper>
          <img src={this.props.img_url} alt='User avatar' />
        </ImageWrapper>
        <h2>
          Welcome <span>{this.props.name}</span>
        </h2>

        {/* Capitalize the first letter of name using CSS text-transform, could do it with JS but it's too complex */}
        <h3>Balance: {this.props.balance}$</h3>
        <div>
          <button>Add funds</button>
          {/* <button>Send funds</button> */}

          {this.state.isEditing ? null : (
            <button onClick={() => this.toggleEditing()}>Edit Profile</button>
          )}
        </div>
        {this.state.isEditing && (
          <EditUserForm toggleEditing={this.toggleEditing} />
        )}
      </div>
    )
  }
}

export default UserDetails

const ImageWrapper = styled.div`
  max-width: 250px;
  img {
    max-width: 100%;
  }
`
