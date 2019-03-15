import React, { Component } from 'react'
import styled from 'styled-components'
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
      <ReactModal
        isOpen={this.props.handlingModal}
        ariaHideApp={false}
        style={{ overlay, content }}
      >

        <form autoComplete='off'>
          <Heading>Edit user details</Heading>

          <InputField type='text' ref={this.usernameRef} placeholder='Name' />
          <InputField
            type='password'
            ref={this.passwordRef}
            placeholder='Password'
          />
          <InputField type='email' ref={this.emailRef} placeholder='Email' />
          <Button onClick={e => this.editUser(e)}>Save</Button>
          <Button onClick={() => this.props.toggleEditing()}>Cancel</Button>
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


// USE THESE OBJECTS TO STYLE THE MODAL
const overlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}
  
const content = {
  position: 'absolute',
  maxWidth: '500px',
  margin: '6rem auto 0 auto',
  padding: '2rem 3rem',
  borderRadius: '0.5rem',
  border: '1px solid #161c24',
  background: '#161c24',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  outline: 'none',

}

const Heading = styled.h3`
  color: #29f3db;
`

const InputField = styled.input`
  width: 100%;
  padding: 2rem 0;
  background: #161c24;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  outline: none;
  color: #fcfcfc;
  font-family: 'Ubuntu', sans-serif;
`
const Button = styled.button`
  margin-top: 1.5rem;
  background: #212b38;
  border: 0;
  width: 100%;
  height: 4rem;
  border-radius: 0.3rem;
  color: #29f3db;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background: #85bdbf;
  }
`
