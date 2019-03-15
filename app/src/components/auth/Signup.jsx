import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signupUser, updateSignupForm } from '../../actions/actionCreators'
import axios from 'axios'

import styled from 'styled-components'

const emptySignupForm = {
  username: '',
  email: '',
  password: ''
}

class Signup extends Component {
  onClickHandler = e => {
    const { username, email, password } = this.props.signupForm
    e.preventDefault()

    axios
      .post('https://nifty-markets.herokuapp.com/api/users/register', {
        username,
        email,
        password
      })
      // if we get the JWT here we can login user directly
      .then(() => this.props.history.push('/login'))
      .catch(err => console.error(err))
      .finally(() => this.props.updateSignupForm(emptySignupForm))
  }

  onChangeHandler = e => {
    this.props.updateSignupForm({
      ...this.props.signupForm,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <SignupForm>
        <Heading>Sign up</Heading>
        <form autoComplete='off'>
          <InputField
            required
            value={this.props.signupForm.username}
            onChange={this.onChangeHandler}
            name='username'
            type='text'
            placeholder='Username'
          />

          <InputField
            required
            value={this.props.signupForm.email}
            onChange={this.onChangeHandler}
            name='email'
            type='email'
            placeholder='Email'
          />

          <InputField
            required
            value={this.props.signupForm.password}
            onChange={this.onChangeHandler}
            name='password'
            type='password'
            placeholder='Password'
          />

          <Section>
            <Button onClick={this.onClickHandler}>Sign up</Button>
            <Link to='/app/market'>
              <Button>Cancel</Button>
            </Link>
          </Section>

          <Paragraph>Or register using:</Paragraph>
          <SocialIcons>
            <i className='fab fa-facebook-square' />
            <i className='fab fa-steam-square' />
          </SocialIcons>
        </form>

        <Section>
          <Paragraph>
            Already have an account?
            <Link to='/app/login'> Login with your account!</Link>
          </Paragraph>
        </Section>
      </SignupForm>
    )
  }
}

const mapStateToProps = state => {
  return {
    signupForm: state.signupForm
  }
}

export default connect(
  mapStateToProps,
  { signupUser, updateSignupForm }
)(Signup)

const SignupForm = styled.div`
  max-width: 500px;
  margin: 6rem auto 0 auto;
  background: #161c24;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);

  @media (max-width: 500px) {
    margin: 6rem 1rem 0 1rem;
  }
`

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

const SocialIcons = styled.div`
  text-align: center;
  i {
    text-decoration: none;
    font-size: 2.9rem;
    color: #85bdbf;
    margin: 1rem;
    &:hover {
      color: #c2fcf7;
    }
  }
`

const Paragraph = styled.p`
  margin-top: 1rem;
  display: block;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: #6d7781;
`

const Section = styled.div`
  text-align: center;
  margin-bottom: 5px;
`
