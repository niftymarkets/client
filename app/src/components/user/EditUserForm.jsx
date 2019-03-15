import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../actions/actionCreators'
import ReactModal from 'react-modal'

class EditUserForm extends Component {
  usernameRef = React.createRef()
  passwordRef = React.createRef()
  emailRef = React.createRef()

  editUser = e => {
    e.preventDefault()
    let newUserDetails = {
      username: this.usernameRef.current.value,
      password: this.passwordRef.current.value,
      email: this.emailRef.current.value
    }
    this.props.editUser(this.props.userDetails.userId, newUserDetails)
    this.usernameRef.current.value = ''
    this.passwordRef.current.value = ''
    this.emailRef.current.value = ''
    this.props.toggleEditing()
  }

  render() {
    return (
      <ReactModal isOpen={this.props.handlingModal}>
        <form autoComplete='off'>
          <input type='text' ref={this.usernameRef} placeholder='Name' />
          <input
            type='password'
            ref={this.passwordRef}
            placeholder='Password'
          />
          <input type='email' ref={this.emailRef} placeholder='Email' />
          <button onClick={e => this.editUser(e)}>Save</button>
          <button onClick={() => this.props.toggleEditing()}>Cancel</button>
        </form>
      </ReactModal>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
    handlingModal: state.handlingModal
  }
}

export default connect(
  mapStateToProps,
  {
    editUser
  }
)(EditUserForm)
